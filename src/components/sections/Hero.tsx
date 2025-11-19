import { OptInForm } from "@/components/features/OptInForm"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-paulina-bg-purple pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-paulina-primary/20 bg-white px-3 py-1 text-sm font-medium text-paulina-primary mb-6 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-paulina-accent mr-2"></span>
                            Autorski system L.A.P.S do zrozumienia matematyki
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
                            Egzamin ósmoklasisty <span className="text-paulina-primary">za 6 miesięcy.</span>
                            <br />
                            Bez wieczornych kłótni.
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Pokażę Ci konkretny system 15 minut dziennie — od listopada do maja.
                            Zamiast paniki w marcu, spokój w maju.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mb-8">
                            <h3 className="text-lg font-semibold mb-4">Zapisz się bezpłatnie i odbierz plan:</h3>
                            <OptInForm />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold overflow-hidden">
                                        {/* Placeholder avatars */}
                                        <div className="w-full h-full bg-paulina-bg-yellow" />
                                    </div>
                                ))}
                            </div>
                            <p>Dołącz do <span className="font-bold text-slate-900">1,247</span> rodziców</p>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] w-full hidden lg:block">
                        <div className="relative w-full h-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="https://paulinaodmatematyki.com/wp-content/uploads/2025/06/hero-1.webp"
                                alt="Materiały edukacyjne Paulina od Matematyki"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
