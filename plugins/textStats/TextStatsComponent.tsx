import { InputProps, RenderInputCallback } from "sanity";
import { Stack, Text } from '@sanity/ui'

const isStringOrText = (schemaType) => ["string", "text"].includes(schemaType.name)

const isPortableText = (schemaType) => schemaType.name === "array" && schemaType.of?.some(type => type.name === "block")

function toPlainText(blocks) {
    return blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children, 
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  }

interface TextStatsProps {
    children?: React.ReactNode,
    value?: string,
}

export function TextStats({ children, value }: TextStatsProps) {
    const length = (value && value.length) || 0
    return (
        <Stack space={2}>
            {children}
            <Text size={1} muted>{length} characters</Text>
        </Stack>
    )

}

export function renderTextStats(props: InputProps, next: RenderInputCallback) {
    console.log(props)
    if (
        (isStringOrText(props.schemaType) || isPortableText(props.schemaType))
        && props.schemaType.options?.charCount
    ) {
        const textValue = isPortableText(props.schemaType) ? toPlainText(props.value || []) : props.value as string
        return <TextStats value={textValue}>{next(props)}</TextStats>
    }

    return next(props)
}