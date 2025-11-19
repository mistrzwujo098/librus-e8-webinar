import { Hero } from "@/components/sections/Hero"
import { Benefits } from "@/components/sections/Benefits"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"
import { ExitIntentPopup } from "@/components/features/ExitIntentPopup"

const maturaTestimonials = [
  {
    name: "Małgorzata Nowak",
    role: "mama",
    title: "Matura zaliczona - 60%",
    content: "Dzień dobry, udało się matura zaliczona. Matematyka poziom podstawowy 60%. Wszystko dzięki Pani, dodam, że mam 45 lat. Uczyłam się dosłownie od podstaw. Bardzo dziękuję i pozdrawiam serdecznie.",
    rating: 5
  },
  {
    name: "Katarzyna Wiśniewska",
    role: "mama",
    title: "44% - ponad próg",
    content: "Dzień dobry! Bardzo dobry dzień dla mnie! Dziękuję bardzo za wszystkie live przygotowujące do matury oraz darmowe filmy, dzięki nim zrozumiałam matematykę, bo od zawsze to dla mnie była czarna magia. ZDAŁAM NA 44%. Cały czas sobie powtarzałam: \"Oby było 30%\" i się bałam, czy zdam czy nie. Pozdrawiam",
    rating: 5
  },
  {
    name: "Maciej Holc",
    role: "uczeń",
    title: "Tydzień = kilka lat zaległości",
    content: "Konkretny i odpowiedni kurs dla tych, co celują po 100%, jak i dla tych, co celują, aby tylko zdać. W tydzień z samym kursem nadrobiłem zaległości spokojnie z paru lat. Jeśli jeszcze raz miałbym zdawać maturę i zastanawiać się nad skorzystaniem z Korepetycji, to tym razem bym się nie wahał i skorzystał z pełną świadomością. Pozdrawiam 🙂",
    rating: 5
  },
  {
    name: "Piotr Kowalczyk",
    role: "uczeń",
    title: "94% na maturze",
    content: "Pani Paulino, mamy to 94%!!!!!! To wszystko z Pani wielką pomocą, po zdalnych nie potrafiłem nic z matematyki i dopiero w trzeciej klasie obudziłem się, że trzeba coś z tym zrobić i tak przez 2 lata się z Panią przygotowywałem. No i jest 94%. Bardzo Pani dziękuję, nigdy nie spotkałem lepszego nauczyciela matematyki 🤘🤘",
    rating: 5
  },
  {
    name: "Martyna Jączyk",
    role: "uczennica",
    title: "Matura zdana",
    content: "Polecam kurs stworzony przez Panią Paulinę z całego serca. Na pewnym etapie mojej nauki sądziłam, że nigdy nie zdołam nauczyć się matematyki wystarczająco dobrze, aby zdać maturę. Jednakże ten kurs zmienił całkowicie moje postrzeganie tego przedmiotu i uświadomił, że nauka matematyki może być przyjemna. Dzięki kursowi zdałam maturę z matematyki i mogę dalej spełniać marzenia ❤️ Serdecznie polecam!",
    rating: 5
  },
  {
    name: "Marika Kowalska",
    role: "uczennica",
    title: "Wszystko jasne",
    content: "Wspaniały kurs!! Bardzo merytoryczny i pomocny, nagle wszystko staje się jasne",
    rating: 5
  },
  {
    name: "Agnieszka Lewandowska",
    role: "uczennica",
    title: "Z 0% na 62%",
    content: "Witam, piszę do Pani, aby bardzo podziękować za kurs. Dzięki Pani polubiłam matematykę i mogłam zdać maturę z wynikiem, który kiedyś wydawał mi się nieosiągalny. Naukę zaczęłam w lipcu od zera, ponieważ nie umiałam wykonać żadnego zadania z matur i miałam duże zaległości. W grudniu próbną udało mi się napisać na 44%, co było dla mnie dużym progresem, a ostatecznie udało mi się uzyskać 62%. Jestem dumna z tego wyniku i bardzo Pani dziękuję za tak wspaniały kurs i live'y oraz za wsparcie na każdym etapie przygotowań do matury. Pozdrawiam Agnieszka 🙂",
    rating: 5
  },
  {
    name: "Milena Zawadzka",
    role: "uczennica",
    title: "100% podstawa + 68% rozszerzenie",
    content: "Dzień dobry, Korzystałam z Pani kursu i miałam 100% z podstawy i 68% z rozszerzenia!! Dziękuję bardzo za materiały, które były niezwykle pomocne! Pozdrawiam Milena ❤️",
    rating: 5
  },
  {
    name: "Monika Zielińska",
    role: "uczennica",
    title: "Cel 70% → Wynik 92%",
    content: "Pani Paulino… byłam słaba z matmy zawsze, tak czułam przynajmniej. Pamiętam, jak kupiłam Pani kurs i zapytałam, czy 70 procent jest w ogóle możliwe… sprawdziłam wynik matury - 92%!!!!! DZIĘKUJĘ, DZIĘKUJĘ, DZIĘKUJĘ!!!!!!!",
    rating: 5
  },
  {
    name: "Tomasz Wójcik",
    role: "uczeń",
    title: "85% na maturze",
    content: "Zdobyłem 85 procent Dziękuję za pomoc w nauce. Pozdrawiam",
    rating: 5
  },
  {
    name: "Kacper Dąbrowski",
    role: "uczeń",
    title: "Ocena 2 → Matura 72%",
    content: "Dzień dobry, Pani Paulina dziękuję za wskazówki, spotkania. Nie mam 100%, ale 72%. Najlepszy wynik w klasie, ocena końcowa to 2. Jestem dumny i przeszczęśliwy. Dziękuję z całego serca. Pozdrawiam serdecznie Kacper. P.S. Teraz siostra będzie z panią przygotowywać się z rozszerzenia 🙂",
    rating: 5
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-paulina-bg-yellow selection:text-paulina-primary">
      <Hero
        redirectUrl="/matura/dziekuje"
        type="matura"
        title={
          <>
            Matura z matematyki <span className="text-paulina-primary">za 6 miesięcy.</span>
            <br />
            Bez stresu i zakuwania.
          </>
        }
        subtitle="Pokażę Ci konkretny system 30 minut dziennie — od listopada do maja. Zamiast paniki w marcu, pewność siebie w maju."
      />
      <Benefits />
      <About />
      <Testimonials testimonials={maturaTestimonials} />
      <Footer />
      <ExitIntentPopup
        redirectUrl="/matura/dziekuje"
        type="matura"
      />
    </main>
  )
}
