import { defineField, defineType } from "sanity";

export default defineType({
    type: 'document',
    name: 'pet',
    title: 'Pet',
    fields: [
        defineField({
            type: 'string',
            name: 'name',
            title: 'Name',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'breed',
            title: 'Breed',
            options: {
                list: ['chihuahua']
            }
        }),
        defineField({
            type: 'string',
            name: 'slogan',
            title: 'Slogan',
            validation: (rule) => rule.required()
        }),
        defineField({
            type: 'text',
            name: 'introduction',
            title: 'Introduction',
        }),
        defineField({
            type: 'array',
            name: 'biography',
            title: 'Biography',
            of: [
                {type: 'block'}
            ]
        })
    ]
})