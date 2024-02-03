import { codeToHtml } from "shiki/bundle/web";

export const convertCodeString = async ([code, lang]: [string, string?]) =>
  await codeToHtml(code, {
    lang: lang || "typescript",
    theme: "vitesse-dark",
    transformers: [
      {
        pre(node) {
          this.addClassToHast(node, "py-2 px-8 rounded-md");
        },
      },
    ],
  });
