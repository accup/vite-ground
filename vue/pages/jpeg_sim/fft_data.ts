export type Rgba = number[][];
export type ReadonlyRgba = readonly (readonly number[])[];
export type Data = number[];
export type ReadonlyData = readonly number[];
export type Lines = number[][];
export type ReadonlyLines = readonly (readonly number[])[];

export function rgbaFromData(data: ReadonlyData): Rgba {
  const rgba: Rgba = [[], [], [], []];

  for (let index = 0; index + 3 < data.length; index += 4) {
    rgba[0].push(data[index]);
    rgba[1].push(data[index + 1]);
    rgba[2].push(data[index + 2]);
    rgba[3].push(data[index + 3]);
  }

  return rgba;
}

export function dataFromRgba(rgba: ReadonlyRgba): Data {
  const data: Data = [];
  const length = Math.min(
    rgba[0].length,
    rgba[1].length,
    rgba[2].length,
    rgba[3].length
  );

  for (let index = 0; index < length; index++) {
    data.push(...rgba.map((data) => data[index]));
  }

  return data;
}

export function dataFromRows(rows: ReadonlyLines): Data {
  if (rows.length < 1) {
    throw new Error(`At least a row.`);
  }
  const width = rows[0].length;
  if (!rows.every((row) => row.length === width)) {
    throw new Error(`Different widths.`);
  }

  const data: Data = new Array(length);

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    const startIndex = rowIndex * width;
    for (let columnIndex = 0; columnIndex < width; columnIndex++) {
      data[startIndex + columnIndex] = row[columnIndex];
    }
  }

  return data;
}

export function dataFromColumns(columns: ReadonlyLines): Data {
  if (columns.length < 1) {
    throw new Error(`At least a row.`);
  }
  const height = columns[0].length;
  if (!columns.every((row) => row.length === height)) {
    throw new Error(`Different heights.`);
  }

  const data: Data = new Array(length);

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const startIndex = rowIndex * columns.length;
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      data[startIndex + columnIndex] = columns[columnIndex][rowIndex];
    }
  }

  return data;
}

export function rowsFromData(data: ReadonlyData, width: number): Lines {
  width = Math.floor(width);
  if (width < 1) {
    throw new Error(`Width at least a pixel.`);
  }

  const rows: Lines = [];
  const height = Math.floor(data.length / width);
  for (let index = 0; index < height; index++) {
    rows.push(new Array(width));
  }

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    const startIndex = rowIndex * width;
    for (let columnIndex = 0; columnIndex < width; columnIndex++) {
      row[columnIndex] = data[startIndex + columnIndex];
    }
  }

  return rows;
}

export function columnsFromData(data: ReadonlyData, height: number): Lines {
  height = Math.floor(height);
  if (height < 1) {
    throw new Error(`Height at least a pixel.`);
  }

  const columns: Lines = [];
  const width = Math.floor(data.length / height);
  for (let index = 0; index < width; index++) {
    columns.push(new Array(height));
  }

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const startIndex = rowIndex * columns.length;
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      columns[columnIndex][rowIndex] = data[startIndex + columnIndex];
    }
  }

  return columns;
}
