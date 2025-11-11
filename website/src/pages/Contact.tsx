export const Contact = () => {
    return (
        <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 p-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-md p-8 text-white border border-white/20">
                <h2 className="text-3xl font-bold text-center mb-4">Fale Conosco</h2>
                <p className="text-center text-gray-300 mb-6">
                    Tem alguma dúvida ou sugestão? Envie uma mensagem e retornaremos o mais rápido possível!
                </p>

                <form className="space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-200">
                            Seu Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="exemplo@email.com"
                            className="p-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="subject" className="mb-1 text-sm font-semibold text-gray-200">
                            Assunto
                        </label>
                        <input
                            id="subject"
                            type="text"
                            placeholder="Ex: Suporte ou Dúvida"
                            className="p-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 text-sm font-semibold text-gray-200">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Digite sua mensagem..."
                            className="p-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold py-3 rounded-lg shadow-md"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}
