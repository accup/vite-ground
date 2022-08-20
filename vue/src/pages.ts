import type { Component } from "vue";

export interface PageRecord {
  name: string;
  link: string;
  componentPromise: () => Promise<Component>;
}

function getPageModules(): Record<string, () => Promise<Component>> {
  return import.meta.glob<Component>("../pages/**/Index.vue");
}

function getPageRecord(
  pages: Record<string, () => Promise<Component>>,
  name: string | string[]
): PageRecord {
  if (typeof name !== "string") {
    name = name.join("/");
  }

  return {
    name: name,
    link: `/${name}`,
    componentPromise: pages[`../pages/${name}/Index.vue`],
  };
}

export function getPages(): PageRecord[] {
  const pages = getPageModules();

  const records: PageRecord[] = [];
  for (const modulePath in pages) {
    const name = /^\.\.\/pages\/(.*)\/Index.vue$/.exec(modulePath)?.[1];
    if (name == null) continue;

    records.push(getPageRecord(pages, name));
  }

  return records;
}

export function getPageFromName(name: string | string[]): PageRecord {
  const pages = getPageModules();
  return getPageRecord(pages, name);
}
