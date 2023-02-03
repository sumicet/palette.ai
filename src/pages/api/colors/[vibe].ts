// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatGPTAPI, ChatMessage } from 'chatgpt';

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<ChatMessage>) {
    const vibe = req.query.vibe;
    const response = await api.sendMessage(
        `Generate a list of 6 html hex colors that give a ${vibe} vibe. Please only output the colors separated by a space and no other text. Omit the # symbol.`
    );
    res.status(200).json(response);
}
