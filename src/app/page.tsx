import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SplitterPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full space-y-12">
                <div className="text-center space-y-6">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image
                            src="https://paulinaodmatematyki.com/wp-content/uploads/2025/11/avatar.webp"
                            alt="Paulina od Matematyki"
                            fill
                            className="object-contain bg-white"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Cześć! Fajnie, że jesteś.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Przygotowałam dla Ciebie konkretny plan działania. Powiedz mi tylko, do jakiego egzaminu się przygotowujesz (lub Twoje dziecko)?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-3xl mx-auto">
                    <Link href="/e8" className="group">
                        <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-paulina-primary cursor-pointer group-hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto bg-paulina-bg-purple w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-8 h-8 text-paulina-primary" />
                                </div>
                                <CardTitle className="text-2xl group-hover:text-paulina-primary transition-colors">
                                    Egzamin Ósmoklasisty
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-slate-500 mb-6">
                                    Dla uczniów klasy 8 i ich rodziców.
                                </p>
                                <Button className="w-full bg-paulina-primary group-hover:bg-paulina-primary/90">
                                    Wybieram E8
                                </Button>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/matura" className="group">
                        <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-paulina-accent cursor-pointer group-hover:-translate-y-1">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto bg-paulina-bg-yellow w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <GraduationCap className="w-8 h-8 text-paulina-orange" />
                                </div>
                                <CardTitle className="text-2xl group-hover:text-paulina-orange transition-colors">
                                    Matura
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-slate-500 mb-6">
                                    Dla maturzystów (poziom podstawowy i rozszerzony).
                                </p>
                                <Button variant="cta" className="w-full">
                                    Wybieram Maturę
                                </Button>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                <div className="text-center">
                    <p className="text-sm text-slate-400">
                        Paulina od Matematyki &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </main>
    )
}
