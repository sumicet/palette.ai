import { HStack, VStack, Divider, Text } from '@chakra-ui/layout';

export function Header() {
    return (
        <VStack width='100%'>
            <HStack height='header' width='100%' maxWidth='container' padding='space20'>
                <Text variant='body'>palette.ai</Text>
            </HStack>
            <Divider width='100%' />
        </VStack>
    );
}
