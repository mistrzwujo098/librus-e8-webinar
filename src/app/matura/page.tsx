import { Hero } from "@/components/sections/Hero"
import { Benefits } from "@/components/sections/Benefits"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"
import { ExitIntentPopup } from "@/components/features/ExitIntentPopup"

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
        subtitle="Pokażę Ci konkretny system 15 minut dziennie — od listopada do maja. Zamiast paniki w marcu, pewność siebie w maju."
      />
      <Benefits />
      <About />
      <Testimonials />
      <Footer />
      <ExitIntentPopup
        redirectUrl="/matura/dziekuje"
        type="matura"
      />
    </main>
  )
}
