import Image from "next/image"
import { Star, Users, Trophy, Clock } from "lucide-react"

interface AboutProps {
    systemMinutes?: number
}

const stats = [
    { label: "Lat doświadczenia", value: "16", icon: Clock },
    { label: "Kursantów", value: "24k+", icon: Users },
    { label: "Średni wynik", value: "84%", icon: Trophy },
    { label: "Ocena", value: "4.9/5", icon: Star },
]

export function About({ systemMinutes = 15 }: AboutProps) {
    return (
        <section className="py-20 bg-paulina-bg-yellow">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            {/* Using standard img tag to ensure it respects aspect ratio and fits container */}
                            <img
                                src="https://paulinaodmatematyki.com/wp-content/uploads/2025/11/avatar.webp"
                                alt="Paulina od Matematyki"
                                className="w-full h-auto object-contain bg-white"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Kto prowadzi webinar?
                        </h2>
                        <h3 className="text-xl text-paulina-primary font-semibold mb-6">
                            Paulina od Matematyki
                        </h3>

                        <div className="space-y-4 text-slate-600 mb-8">
                            <p>
                                Od 16 lat pomagam uczniom i ich rodzicom w przygotowaniach do egzaminów.
                                Przekonałam się, że systematyczność bije korepetycje na głowę.
                            </p>
                            <p>
                                Stworzyłam system, który działa — bez wieczornych kłótni, bez stresu,
                                bez przepłacania. {systemMinutes} minut dziennie wystarczy, by osiągnąć sukces.
                            </p>
                            <p>
                                Jestem twórcą kanału na YouTube z ponad <strong>20 mln wyświetleń </strong>
                                oraz wielokrotną laureatką plebiscytu Orły Edukacji.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-2xl font-bold text-paulina-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
