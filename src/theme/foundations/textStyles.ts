import { Source_Code_Pro } from '@next/font/google';
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const textStyles = {
    extraLarge: {
        fontFamily: 'sourceCodePro',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '38.4px',
    },
    body: {
        fontFamily: 'sourceCodePro',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
    },
    small: {
        fontFamily: 'sourceCodePro',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16.8px',
    },
};
