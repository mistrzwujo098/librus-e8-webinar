import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Brain, FileText, ShieldCheck, Zap } from "lucide-react"

const benefits = [
    {
        icon: FileText,
        title: 'PDF "Plan 6 miesięcy"',
        description: "Konkretny harmonogram od listopada do maja, moduł po module. Wiesz dokładnie co robić w każdym tygodniu."
    },
    {
        icon: Brain,
        title: "3 techniki motywacji",
        description: 'Nie "chwal więcej", ale konkretne zdania i reakcje na sytuacje, gdy dziecko mówi "nie chce mi się".'
    },
    {
        icon: Clock,
        title: "System 15 minut",
        description: "Jak wpleść naukę w codzienność bez rewolucji w życiu rodziny. Małe kroki, wielkie efekty."
    }
]

export function Benefits() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        To nie będzie "gadanie o niczym"
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Konkretne narzędzia, które możesz wdrożyć już od jutra. Oto co otrzymasz:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-paulina-bg-yellow flex items-center justify-center mb-4">
                                    <benefit.icon className="h-6 w-6 text-paulina-orange" />
                                </div>
                                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h3 className="text-2xl font-bold mb-6">Dlaczego za darmo?</h3>
                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                        <div>
                            <p className="text-slate-300 mb-4">
                                Szczerze? Chcę, żebyś poznała sposób, w jaki uczę, zanim wydasz złotówkę.
                            </p>
                            <p className="text-slate-300">
                                <strong className="text-paulina-accent">80% webinaru</strong> to czysta wartość — system, plan, techniki.
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-300 mb-4">
                                <strong className="text-paulina-accent">20%</strong> to opcja kupienia kursu dla tych, którzy chcą iść dalej.
                            </p>
                            <p className="text-slate-300">
                                Nawet jeśli nic nie kupujesz — zyskujesz gotowy plan na 6 miesięcy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
