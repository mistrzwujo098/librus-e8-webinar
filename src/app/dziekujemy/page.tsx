import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Download, ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Success Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-paulina-bg-yellow text-paulina-orange mb-6">
                        <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Dziękujemy! Twój plan jest w drodze.
                    </h1>
                    <p className="text-xl text-slate-600">
                        Sprawdź swoją skrzynkę odbiorczą. E-mail z linkiem powinien dotrzeć w ciągu 2 minut.
                    </p>
                </div>

                {/* Video Placeholder */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-slate-200">
                    <div className="aspect-video bg-slate-900 flex items-center justify-center relative group cursor-pointer">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <PlayCircle className="h-20 w-20 text-white opacity-90 group-hover:scale-110 transition-transform relative z-10" />
                        <p className="absolute bottom-8 text-white font-medium z-10">
                            Krótkie wideo powitalne od Pauliny (30s)
                        </p>
                    </div>
                    <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-2">Ważna wiadomość na start</h3>
                        <p className="text-slate-600">
                            Zobacz jak najlepiej wykorzystać materiały, które właśnie otrzymałeś.
                        </p>
                    </div>
                </div>

                {/* Downloads */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="hover:shadow-lg transition-shadow border-paulina-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-paulina-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                            NIESPODZIANKA
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Download className="h-5 w-5 text-paulina-primary" />
                                Wzory Egzaminacyjne
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 mb-6">
                                Kompletny zestaw wzorów, które Twoje dziecko musi znać.
                            </p>
                            <Link href="https://paulinaodmatematyki.com/prezenty-e8/" target="_blank">
                                <Button className="w-full bg-paulina-primary hover:bg-paulina-primary/90">
                                    Pobierz PDF
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow border-paulina-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-paulina-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                            NIESPODZIANKA
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Download className="h-5 w-5 text-paulina-primary" />
                                E-book "Jak się uczyć"
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 mb-6">
                                Poradnik o efektywnych technikach nauki matematyki.
                            </p>
                            <Link href="https://paulinaodmatematyki.com/prezenty-e8/" target="_blank">
                                <Button className="w-full bg-paulina-primary hover:bg-paulina-primary/90">
                                    Pobierz PDF
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Black Friday Offer / Tripwire */}
                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-500 text-white text-xs font-bold px-8 py-2 rotate-45 shadow-lg">
                        BLACK FRIDAY
                    </div>

                    <h2 className="text-3xl font-bold mb-4">
                        Specjalna oferta Black Friday!
                    </h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Tylko teraz możesz dołączyć do pełnego kursu przygotowawczego z
                        <span className="text-paulina-accent font-bold"> 40% zniżką</span>.
                        Oferta wygasa za 24h.
                    </p>

                    <Button variant="cta" size="xl" className="bg-red-600 hover:bg-red-700 text-white border-none">
                        Sprawdź ofertę Black Friday
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="mt-4 text-sm text-slate-500">
                        Gwarancja satysfakcji 30 dni.
                    </p>
                </div>
            </div>
        </main>
    )
}
