import { codeToHtml } from 'shiki'

export const convertCodeString = async ([code, lang]: [string, string?] | any) =>
  await codeToHtml(code, {
    lang: lang || "typescript",
    theme: "vitesse-dark",
    transformers: [
      {
        pre(node: any) {
          (this as any).addClassToHast(node, "py-2 px-8 rounded-md");
        },
      },
    ],
  });
