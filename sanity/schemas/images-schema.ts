const images = {
  name: "images",
  title: "images",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
        // Automatically get dimensions from metadata
        {
          name: "dimensions",
          title: "Dimensions",
          type: "object",
          options: { storeOriginalFilename: false },
          fields: [
            { name: "width", title: "Width", type: "number" },
            { name: "height", title: "Height", type: "number" },
            { name: "aspectRatio", title: "Aspect Ratio", type: "number" },
          ],
        },
      ],
    },
  ],
};

export default images;
