<script setup lang="ts">
import { onMounted, ref } from "vue";
import FFT from "fft.js";
import {
  rgbaFromData,
  dataFromRgba,
  rowsFromData,
  columnsFromData,
  dataFromRows,
  dataFromColumns,
} from "./fft_data";

const refInput = ref<HTMLInputElement>();
const refCanvas = ref<HTMLCanvasElement>();

function lowestPot(size: number) {
  return 2 ** Math.ceil(Math.log2(size));
}

function onImageSelected() {
  const canvas = refCanvas.value;
  if (canvas == null) return;
  const context = canvas.getContext("2d");
  if (context == null) return;

  const input = refInput.value;
  if (input == null) return;
  if (input.files == null) return;
  if (input.files.length < 1) return;

  const file = input.files[0];
  const imageUrl = URL.createObjectURL(file);

  const image = new Image();
  image.src = imageUrl;

  image.addEventListener(
    "load",
    () => {
      const width = lowestPot(image.width) / 2;
      const height = lowestPot(image.height) / 2;
      canvas.width = width * 2;
      canvas.height = height * 2;
      const fftRow = new FFT(width);
      const fftRow2 = new FFT(width * 2);
      const fftCol = new FFT(height);
      const fftCol2 = new FFT(height * 2);

      const canvasOff = document.createElement("canvas");
      const contextOff = canvasOff.getContext("2d");
      if (contextOff == null) return;

      canvasOff.width = image.width;
      canvasOff.height = image.height;
      contextOff.drawImage(image, 0, 0, image.width / 2, image.height / 2);
      URL.revokeObjectURL(imageUrl);

      const dataIn = Array.from(
        contextOff.getImageData(0, 0, width, height).data
      );
      const rgbaIn = rgbaFromData(dataIn);
      const rgbaOut = rgbaIn
        .map((data) =>
          rowsFromData(data, width).map((rowIn) =>
            fftRow.toComplexArray(rowIn, fftRow.createComplexArray())
          )
        )
        .map((rowsIn) =>
          rowsIn.map((rowIn) => {
            const rowOut = fftRow.createComplexArray();
            fftRow.transform(rowOut, rowIn);
            return rowOut;
          })
        )
        .map((rowsIn) => columnsFromData(dataFromRows(rowsIn), height * 2))
        .map((colsIn) =>
          colsIn.map((colIn) => {
            const colOut = fftCol.createComplexArray();
            fftCol.transform(colOut, colIn);
            return colOut;
          })
        )
        .map((colsIn) =>
          colsIn.map((colIn) => {
            const col2In = fftCol2.createComplexArray();
            col2In.fill(0);
            for (let index = 0; index < colIn.length / 2; index++) {
              col2In[index] = colIn[index] * 2;
              col2In[col2In.length - 1 - index] =
                colIn[colIn.length - 1 - index] * 2;
            }
            const col2Out = fftCol2.createComplexArray();
            fftCol2.inverseTransform(col2Out, col2In);
            return col2Out;
          })
        )
        .map((cols2In) => rowsFromData(dataFromColumns(cols2In), width * 2))
        .map((rowsIn) =>
          rowsIn.map((rowIn) => {
            const row2In = fftRow2.createComplexArray();
            row2In.fill(0);
            for (let index = 0; index < rowIn.length / 2; index++) {
              row2In[index] = rowIn[index] * 2;
              row2In[row2In.length - 1 - index] =
                rowIn[rowIn.length - 1 - index] * 2;
            }
            const row2Out = fftRow2.createComplexArray();
            fftRow2.inverseTransform(row2Out, row2In);
            return row2Out;
          })
        )
        .map((rows2Out) =>
          dataFromRows(
            rows2Out.map((row2Out) =>
              fftRow2.fromComplexArray(row2Out, new Array(fftRow2.size))
            )
          )
        );
      const dataOut = dataFromRgba(rgbaOut);
      context.putImageData(
        new ImageData(Uint8ClampedArray.from(dataOut), width * 2, height * 2),
        0,
        0
      );
    },
    {
      once: true,
    }
  );
}

onMounted(() => {
  refInput.value?.addEventListener("change", onImageSelected);
});
</script>

<template>
  <div>
    <label>
      Image:
      <input ref="refInput" type="file" accept="image/*" />
    </label>
  </div>
  <div>
    <canvas ref="refCanvas"></canvas>
  </div>
</template>
