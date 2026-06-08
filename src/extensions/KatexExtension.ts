import { Node, mergeAttributes } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import KatexNode from "../components/KatexNode.vue";

export interface KatexOptions {
  HTMLAttributes: Record<string, unknown>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    katexBlock: {
      insertKatexBlock: (formula?: string) => ReturnType;
    };
    katexInline: {
      insertKatexInline: (formula?: string) => ReturnType;
    };
  }
}

export const KatexBlockExtension = Node.create<KatexOptions>({
  name: "katexBlock",

  group: "block",

  atom: true,

  addOptions() {
    return { HTMLAttributes: {} };
  },

  addAttributes() {
    return {
      formula: {
        default: "E = mc^2",
        parseHTML: (element) => {
          const f = element.getAttribute("data-formula");
          return f ? decodeURIComponent(f) : element.textContent || undefined;
        },
        renderHTML: (attributes) => {
          if (!attributes.formula) return {};
          return { "data-formula": encodeURIComponent(attributes.formula) };
        },
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="katex-block"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": "katex-block",
      }),
    ];
  },

  addNodeView() {
    return VueNodeViewRenderer(KatexNode as any);
  },

  addCommands() {
    return {
      insertKatexBlock:
        (formula?: string) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { formula: formula || "E = mc^2" },
          });
        },
    };
  },
});

export const KatexInlineExtension = Node.create<KatexOptions>({
  name: "katexInline",

  group: "inline",

  inline: true,

  atom: true,

  addOptions() {
    return { HTMLAttributes: {} };
  },

  addAttributes() {
    return {
      formula: {
        default: "x",
        parseHTML: (element) => {
          const f = element.getAttribute("data-formula");
          return f ? decodeURIComponent(f) : element.textContent || undefined;
        },
        renderHTML: (attributes) => {
          if (!attributes.formula) return {};
          return { "data-formula": encodeURIComponent(attributes.formula) };
        },
      },
    };
  },

  parseHTML() {
    return [{ tag: 'span[data-type="katex-inline"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": "katex-inline",
      }),
    ];
  },

  addNodeView() {
    return VueNodeViewRenderer(KatexNode as any);
  },

  addCommands() {
    return {
      insertKatexInline:
        (formula?: string) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { formula: formula || "x" },
          });
        },
    };
  },
});
