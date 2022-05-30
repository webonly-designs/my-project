export default {
    name: 'works',
    title: 'Worksss',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'tag',
        title: 'Tag',
        type:'string',
      },
      {
        name: 'techImages',
        title: 'TechImages',
        type: 'array',
        of: [
            {
                name: 'techImage',
                title: 'TechImage',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },
        ],
      }, 
    ],
};