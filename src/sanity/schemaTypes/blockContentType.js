import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Small text", value: "small" },
        { title: "H1 – Page Title", value: "h1" },
        { title: "H2 – Section", value: "h2" },
        { title: "H3 – Sub section", value: "h3" },
        { title: "H4 – Minor heading", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],

      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          { title: "Highlight", value: "highlight" },
        ],

        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
  {
    title: 'Link',
    name: 'link',
    type: 'object',
    fields: [
      {
        title: 'URL',
        name: 'href',
        type: 'url',
      },
    ],
  },

  {
    title: 'Text Color',
    name: 'textColor',
    type: 'object',
    fields: [
      {
        name: 'color',
        title: 'Color',
        type: 'string',
        options: {
          list: [
            { title: 'Green', value: '#8ec740' },
            { title: 'Blue', value: '#0070f3' },
            { title: 'Red', value: '#e11d48' },
            { title: 'Gray', value: '#6b7280' },
            { title: 'Black', value: '#000000' },
          ],
        },
      },
    ],
  },

  {
    title: 'Highlight Color',
    name: 'bgColor',
    type: 'object',
    fields: [
      {
        name: 'background',
        title: 'Background',
        type: 'string',
        options: {
          list: [
            { title: 'Yellow', value: '#FEF3C7' },
            { title: 'Green', value: '#DCFCE7' },
            { title: 'Blue', value: '#DBEAFE' },
          ],
        },
      },
    ],
  },
],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
