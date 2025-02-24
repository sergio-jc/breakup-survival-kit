import OpenAI from 'openai';
import { getJson } from 'serpapi';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export const generateResponse = async (message: string) => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [
      {
        role: 'system',
        content: `Eres un asistente de ayuda psicológica que brinda soporte a personas con un corazón roto, brindas consejos para que cada persona pueda superar su situación.

        Retorna un json con la siguiente estructura:
        {
          "response": "Tu respuesta",
          "query": "Una consulta a ser usada en la búsqueda de información",
        }`,
      },
      { role: 'user', content: message },
    ],
    model: 'gpt-4o',
    response_format: { type: 'json_object' },
  };

  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await client.chat.completions.create(params);

  const content = chatCompletion.choices[0].message.content;
  const { query, response } = JSON.parse(content ?? '{}') as {
    response: string;
    query: string;
  };

  const { organic_results, related_questions, inline_videos } = await getJson({
    q: query,
    hl: 'en',
    google_domain: 'google.com',
    api_key: process.env['SERPAPI_API_KEY'],
  });

  const formattedResponse: {
    response: string;
    articles?: any[];
    questions?: any[];
    videos?: any[];
  } = { response };

  if (organic_results) formattedResponse.articles = organic_results as any[];
  if (related_questions)
    formattedResponse.questions = related_questions as any[];
  if (inline_videos) formattedResponse.videos = inline_videos as any[];

  return JSON.stringify(formattedResponse);
};
