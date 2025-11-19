import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Download, ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "@/components/features/CountdownTimer"

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
                <div className="bg-white p-4 rounded-2xl shadow-xl mb-12">
                    <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <iframe
                            src="https://streamyard.com/watch/8VJJVDuM2nme?embed=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                    <p className="text-center text-slate-600 mt-4 font-medium">
                        Nagranie z wyjaśnieniem jak w końcu możesz zrozumieć i polubić matematykę
                    </p>
                </div>

                {/* Downloads */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="hover:shadow-lg transition-shadow border-paulina-primary/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-paulina-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                            NIESPODZIANKA
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Download className="h-5 w-5 text-paulina-primary" />
                                Wzory Podstawa
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 mb-6 text-sm">
                                Wzory, których nie ma w tablicach (PP).
                            </p>
                            <Link href="https://paulinaodmatematyki.com/wp-content/uploads/2025/07/Wzory-ktorych-nie-ma-w-tablicach-PP-Paulina-od-Matematyki.pdf" target="_blank">
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
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Download className="h-5 w-5 text-paulina-primary" />
                                Wzory Rozszerzenie
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 mb-6 text-sm">
                                Wzory do matury rozszerzonej.
                            </p>
                            <Link href="https://paulinaodmatematyki.com/wp-content/uploads/2025/07/wzory-do-matury-rozszerzonej-Paulina-od-Matematyki.pdf" target="_blank">
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
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Download className="h-5 w-5 text-paulina-primary" />
                                E-book "Jak się uczyć"
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 mb-6 text-sm">
                                Poradnik o efektywnych technikach nauki.
                            </p>
                            <Link href="https://paulinaodmatematyki.com/wp-content/uploads/2025/07/ebook-Jak-sie-uczyc-Paulina-Mis-2025.pdf" target="_blank">
                                <Button className="w-full bg-paulina-primary hover:bg-paulina-primary/90">
                                    Pobierz PDF
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Black Friday Offer */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Ribbon - fixed positioning to be visible */}
                    <div className="absolute top-0 right-0 bg-paulina-accent text-slate-900 font-black py-2 px-12 transform rotate-45 translate-x-[30%] translate-y-[50%] shadow-xl z-10 border-4 border-slate-900">
                        BLACK FRIDAY
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Chcesz mieć pewność wyniku na maturze?
                        </h2>

                        <CountdownTimer />

                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                            Zdasz maturę bez stresu i drogich korepetycji.
                            <br />
                            <span className="text-paulina-accent font-bold block mt-2">
                                Sprawdź ofertę na moje kursy z mnóstwem bonusów ważną tylko do 30 listopada.
                            </span>
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="https://paulinaodmatematyki.com/matura-bf" target="_blank">
                                <Button variant="cta" className="w-full md:w-auto min-w-[250px]">
                                    Matura Podstawowa
                                </Button>
                            </Link>
                            <Link href="https://paulinaodmatematyki.com/rozszerzenie-bf" target="_blank">
                                <Button variant="cta" className="w-full md:w-auto min-w-[250px] bg-paulina-orange hover:bg-paulina-orange/90">
                                    Matura Rozszerzona
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
