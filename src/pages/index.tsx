import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@/theme';
import { Palette } from '@/components';
import { Layout } from '@/layout';

const test = ['FFC107', 'F0E68C', 'FFD700', 'FF5733', 'FFE4B5', 'FFA07A'];

export default function Home() {
    const [colors, setColors] = useState<string[]>([]);
    useEffect(() => {
        const init = async () => {
            // const response = await fetch(`/api/colors/happy`);
            // const data = await response.json();
            // setColors(data);
            // console.log(data.text.split(' '));
        };
        init();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>palette.ai</title>
                <meta name='description' content='Generate a color palette to match a vibe.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/logo.png' />
            </Head>
            <Layout>
                <Palette colors={test} />
            </Layout>
        </ChakraProvider>
    );
}
