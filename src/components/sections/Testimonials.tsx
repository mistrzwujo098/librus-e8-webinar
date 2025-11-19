import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Monika Mączyńska",
        role: "mama",
        title: "Dostała się do najlepszego liceum w mieście",
        content: "Kursy są rewelacyjne! Moja córka uczyła się sama w trybie edukacji domowej korzystając tylko z kursu pani Pauliny (żadnych dodatkowych korepetycji!) i zdała egzamin ósmoklasisty na tak wysokim poziomie, że dostała się do jednego z najlepszych liceów w mieście. Szczerze polecam!",
        rating: 5
    },
    {
        name: "Anna",
        role: "mama",
        title: "Z 48% na 100%",
        content: "Kurs matematyki E8 u Pani Pauliny to absolutny strzał w dziesiątkę! Zajęcia prowadzone są w niezwykle przystępny sposób – Pani Paulina potrafi tłumaczyć nawet najtrudniejsze zagadnienia w sposób prosty, zrozumiały i... ciekawy! Dzięki niej moja córka nie tylko nadrobiła zaległości, ale też zaczęła wierzyć w siebie i polubiła matematykę.",
        rating: 5
    },
    {
        name: "Iwona Zaremska",
        role: "mama",
        title: "Z 23% na 83%",
        content: "Syn podniósł wynik z 23% na 83%, włożył ogrom pracy, dzięki pani bardzo się przyłożył, skrupulatnie rozwiązywał zadania. Skorzysta w przyszłym roku z pani kursu. Dziękujemy!",
        rating: 5
    },
    {
        name: "Rodzic ucznia z dysleksją",
        role: "mama/tata",
        title: "77% mimo dysleksji",
        content: "Syn uzyskał super wynik z egzaminu ósmoklasisty 77% (mimo dysleksji to wspaniałe osiągnięcie)!!! Bardzo się cieszymy i jesteśmy z niego dumni!!! Jeszcze raz dziękujemy za wszystko!!!",
        rating: 5
    },
    {
        name: "Uczennica klasy 8",
        role: "uczennica",
        title: "Z 23-30% na 80%",
        content: "Z e8 z matematyki uzyskałam 80%! Chcę Pani bardzo podziękować za kurs przygotowawczy z matematyki, ponieważ to dzięki niemu uzyskałam tak wysoki wynik! Na początku roku szkolnego moje wyniki z próbnych egzaminów wynosiły zaledwie 30%, czasem 23%, a teraz aż 80%!",
        rating: 5
    },
    {
        name: "Urszula Godlewska",
        role: "mama",
        title: "1 miesiąc: 30% → 85%",
        content: "Egzamin 8-klasisty to świetny kurs. Moja córka w ciągu zaledwie 1 miesiąca nauki z tym kursem z 30% na egzaminach próbnych zdała egzamin 8-klasisty na 85%.",
        rating: 5
    },
    {
        name: "Magda M.",
        role: "mama",
        title: "Egzamin na 96%",
        content: "Kupiłam kurs ósmoklasisty dla mojej córki. Uczyła się przy moim wsparciu, a razem uczestniczyłyśmy również w spotkaniach na żywo. Pani Paulina w sposób bardzo klarowny tłumaczy zagadnienia, z szacunkiem podchodzi do uczniów i nigdy nie okazuje poirytowania ani zniecierpliwienia. Taka atmosfera zdecydowanie sprzyja efektywnej nauce. Kurs znacząco pomógł w przygotowaniach do egzaminu – wynik to aż 96%!",
        rating: 5
    },
    {
        name: "Anna Surmiak",
        role: "mama",
        title: "100% na egzaminie",
        content: "Polecam kurs bardzo gorąco, córka przeszła cały kurs przygotowujący do egzaminu z matematyki i napisała egzamin ósmoklasisty na 100%. To chyba najlepsza opinia :)",
        rating: 5
    },
    {
        name: "Katarzyna Kwiecińska",
        role: "mama",
        title: "Z 40% na 100%",
        content: "Pani Paulino, serdecznie dziękujemy za przygotowanie córki do egzaminu. Pierwszy test z matematyki rozwiązywany we wrześniu napisała na niespełna 40%, po Pani kursach, nie wierzyłam, ale tak na 100%. Serdecznie polecam, wiem że wrócimy do Pani :)",
        rating: 5
    },
    {
        name: "Anna Kupper",
        role: "mama",
        title: "Zmiana nastawienia po 2 lekcjach",
        content: "Polecam jako matka dziecka. Na początku podejście mojej córki było 'a po co, przecież my to już przerabialiśmy', za to po dwóch lekcjach zupełnie wszystko się zmieniło. Jak zapytałam no i jak? Dostałam odp., że nawet spoko i że pokazane były ciekawe sposoby na rozwiązywanie zadań, o których w szkole się nie mówi lub po prostu nie pokazuje.",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Co mówią rodzice i uczniowie?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Dołącz do tysięcy zadowolonych rodziców, którzy zaufali moim metodom.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-paulina-bg-purple border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-paulina-accent fill-current" />
                                    ))}
                                </div>
                                <h4 className="font-bold text-paulina-primary mb-2">{testimonial.title}</h4>
                                <p className="text-slate-700 mb-6 text-sm italic leading-relaxed">"{testimonial.content}"</p>
                                <div className="mt-auto">
                                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
