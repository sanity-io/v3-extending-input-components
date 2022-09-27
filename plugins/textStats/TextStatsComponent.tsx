import { InputProps, RenderInputCallback } from "sanity";
import { Stack, Text } from '@sanity/ui'

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
    if (["string", "text"].includes(props.schemaType.name)) {
        return <TextStats value={props.value as string}>{next(props)}</TextStats>
    }

    return next(props)
}