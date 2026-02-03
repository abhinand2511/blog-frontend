import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Admin",
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),

    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),

    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "robots",
      title: "Robots Meta",
      type: "object",
      fields: [
        { name: "index", type: "boolean", initialValue: true },
        { name: "follow", type: "boolean", initialValue: true },
      ],
    }),

    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "faq",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});