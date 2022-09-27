import { InputProps, RenderInputCallback } from "sanity";
import { Stack, Text, Card } from '@sanity/ui'

interface TextStatsProps {
    children?: React.ReactNode,
    id: string,
}

export function TextStats({ children, id }: TextStatsProps) {
    return (
        <Card shadow={1} padding={1}>
            <Stack space={2}>
                <Text>Wrapper ({id})</Text>
                {children}
            </Stack>
        </Card>
    )

}

export function renderTextStats(props: InputProps, next: RenderInputCallback) {
    return <TextStats id={props.id}>{next(props)}</TextStats>
}