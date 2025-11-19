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
        redirectUrl="/e8/dziekuje"
        groupId={process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID_E8}
      />
      <Benefits />
      <About />
      <Testimonials />
      <Footer />
      <ExitIntentPopup />
    </main>
  )
}
