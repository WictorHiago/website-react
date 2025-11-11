'use client'
import { useState, useEffect } from 'react'
import type { Image } from '../interfaces/Image'
import { GetImagesService } from '../services/GetImagesService'

const Home = () => {
    const [images, setImages] = useState<Image[]>([])

    useEffect(() => {
        async function fetchImages() {
            const data = await GetImagesService()
            setImages(data)
        }

        fetchImages()
    }, [])

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-12 px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2 text-blue-400">Galeria de Carros</h1>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Confira alguns modelos incríveis renderizados em alta qualidade.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-72 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-transform duration-300"
                    >
                        <img
                            src={image.url}
                            alt={image.modelo}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold text-blue-300">{image.modelo}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home
