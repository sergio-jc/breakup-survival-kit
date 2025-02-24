import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export const generateResponse = async (message: string) => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [
      {
        role: 'system',
        content:
          'Eres un asistente de ayuda psicológica que brinda soporte a personas con un corazón roto, brindas consejos para que cada persona pueda superar su situación.',
      },
      { role: 'user', content: message },
    ],
    model: 'gpt-4o',
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await client.chat.completions.create(params);

  return chatCompletion.choices[0].message.content;
};
