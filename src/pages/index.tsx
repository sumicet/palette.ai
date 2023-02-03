import Head from 'next/head';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@/theme';
import { Palette } from '@/components';
import { Layout } from '@/layout';
import { VStack, HStack, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

const placeholder = ['FFC107', 'F0E68C', 'FFD700', 'FF5733', 'FFE4B5', 'FFA07A'];

async function getColor(vibe: string) {
    const response = await fetch(`/api/colors/${vibe}`);
    const data = await response.json();
    return data.text.split(' ');
}

export default function Home() {
    const [history, setHistory] = useState<{ vibe: string; colors: string[] }[]>([
        { vibe: 'default', colors: placeholder },
    ]);
    const [value, setValue] = useState<string>('forest');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = () => {
        setIsLoading(true);
        getColor(value).then(data => {
            setHistory(prev => [{ vibe: value, colors: data }, ...prev]);
            setIsLoading(false);
        });
    };

    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>palette.ai</title>
                <meta name='description' content='Generate a color palette to match a vibe.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/logo.png' />
            </Head>
            <Layout>
                <VStack spacing='space40'>
                    <HStack>
                        <Input
                            value={value}
                            onChange={event => setValue(event.target.value)}
                            placeholder='forest'
                        />
                        <Button onClick={handleClick} isLoading={isLoading}>
                            Generate
                        </Button>
                    </HStack>
                    <VStack spacing={{ base: 'space24', sm: 'space40' }} width='100%'>
                        {history.map((data, index) => (
                            <VStack
                                key={index + 1}
                                spacing={{ base: 'space12', sm: 'space20' }}
                                width='100%'
                                alignItems='flex-start'
                            >
                                <Text variant={{ base: 'smallBold', sm: 'bodyBold' }}>
                                    {data.vibe}
                                </Text>
                                <Palette colors={data.colors} />
                            </VStack>
                        ))}
                    </VStack>
                </VStack>
            </Layout>
        </ChakraProvider>
    );
}
