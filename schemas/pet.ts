import { defineField, defineType } from "sanity";
import { PetBreedInput } from "../components/PetBreedInput";

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
            components: {
                input: PetBreedInput
            },
            options: {
                charCount: true,
            }
        }),
        defineField({
            type: 'string',
            name: 'slogan',
            title: 'Slogan',
            validation: (rule) => rule.required(),
            options: {
                charCount: true,
            }
        }),
        defineField({
            type: 'text',
            name: 'introduction',
            title: 'Introduction',
            options: {
                charCount: true,
            }
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