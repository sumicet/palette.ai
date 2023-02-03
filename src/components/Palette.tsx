import { HStack, Center, Text, AspectRatio } from '@chakra-ui/layout';
import { colord } from 'colord';

interface PaletteProps {
    colors: string[];
}

export function Palette({ colors }: PaletteProps) {
    return (
        <HStack width='100%'>
            {colors.map(color => (
                <AspectRatio key={color} ratio={1} width='100%' height='100%'>
                    <Center
                        bgColor={`#${color}`}
                        color={colord(`#${color}`).isLight() ? 'black' : 'white'}
                        borderRadius='radius5'
                        boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                    >
                        <Text variant={{ base: 'extraSmall', xs: 'small', sm: 'body' }}>
                            #{color}
                        </Text>
                    </Center>
                </AspectRatio>
            ))}
        </HStack>
    );
}
