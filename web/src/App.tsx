import { useFetchMessages } from "./use-fetch-messages";

function App() {
  const { messages, generateResponse, response, setMessage } =
    useFetchMessages();

  return (
    <div className="bg-[#210109] h-screen min-h-fit max-w-screen">
      <div className="flex flex-col grow container mx-auto px-2 md:px-0 gap-6 py-10">
        <main className="flex gap-12 w-full">
          {/* Text Area*/}
          <section className="grow flex flex-col gap-6">
            <form className="flex flex-col gap-4 bg-white/5 rounded-lg p-6">
              <label
                htmlFor="message"
                className="font-medium text-white w-full"
              >
                Do you need help to cope with a breakup?
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm rounded-lg border bg-white/5  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className={`flex items-center py-2 px-3 rounded transition-colors cursor-pointer focus:outline-offset-2 gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-white bg-white/30 hover:bg-white/40 text-center justify-center`}
                onClick={generateResponse}
              >
                Send Message
              </button>
            </form>
            <div className="text-white flex flex-col gap-2">
              <p className="text-white/40 text-3xl font-bold brightness-75">
                Messages
              </p>
              {messages.map(({ message }, index) => (
                <p
                  key={index}
                  className="text-sm text-white bg-white/5 rounded-lg p-2.5 w-full"
                >
                  {message}
                </p>
              ))}
            </div>
          </section>
          {Object.keys(response).length > 0 && (
            <section className="max-w-[75ch] h-fit flex flex-col gap-6">
              {response?.response && (
                <div className="flex flex-col gap-2">
                  <p className="text-white/40 text-3xl font-bold brightness-75">
                    Response
                  </p>

                  <article className="p-6 rounded-lg text-white bg-white/5 grow ">
                    {response?.response}
                  </article>
                </div>
              )}
              {response?.questions && (
                <div className="flex flex-col gap-2">
                  <p className="text-white/40 text-3xl font-bold brightness-75">
                    Questions
                  </p>

                  <ul className="flex flex-col gap-2">
                    {response?.questions.map((question, index) => (
                      <li
                        key={index}
                        className="text-white/40 text-sm bg-white/5 rounded-lg p-2.5 w-full"
                      >
                        <a
                          className="text-white/60 text-sm border-b"
                          href={question.link}
                          target="_blank"
                        >
                          {question.question}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {response?.videos && (
                <div className="flex flex-col gap-2">
                  <p className="text-white/40 text-3xl font-bold brightness-75">
                    Videos
                  </p>

                  <ul className="flex flex-col gap-2">
                    {response?.videos.map((video, index) => (
                      <li
                        key={index}
                        className="text-white/40 text-sm bg-white/5 rounded-lg p-2.5 w-full"
                      >
                        <a
                          className="text-white/60 text-sm border-b"
                          href={video.link}
                          target="_blank"
                        >
                          {video.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {response?.articles && (
                <div className="flex flex-col gap-2">
                  <p className="text-white/40 text-3xl font-bold brightness-75">
                    Articles
                  </p>

                  <ul className="flex flex-col gap-2">
                    {response?.articles.map((article, index) => (
                      <li
                        key={index}
                        className="text-white/40 text-sm bg-white/5 rounded-lg p-2.5 w-full"
                      >
                        <a
                          className="text-white/60 text-sm border-b"
                          href={article.link}
                          target="_blank"
                        >
                          {article.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
