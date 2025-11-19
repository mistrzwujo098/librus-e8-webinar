"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from "@/lib/tracking"
import { ArrowRight, CheckCircle2, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

interface OptInFormProps {
    ctaText?: string
    className?: string
    redirectUrl?: string
}

export function OptInForm({
    ctaText = "Pobierz darmowy plan",
    className,
    redirectUrl = "/dziekuje"
}: OptInFormProps) {
    const [email, setEmail] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        if (!email || !email.includes("@")) {
            setError("Proszę podać poprawny adres email")
            setIsLoading(false)
            return
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Track Lead event
            trackEvent("Lead", { email })

            // Redirect
            router.push(redirectUrl)
        } catch (err) {
            setError("Wystąpił błąd. Spróbuj ponownie.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <div className="space-y-2">
                <label htmlFor="email" className="sr-only">
                    Adres email
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Wpisz swój e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg"
                    required
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

            <div className="space-y-4">
                <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full group"
                    disabled={isLoading}
                >
                    {isLoading ? "Przetwarzanie..." : (
                        <>
                            {ctaText}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </Button>

                <p className="text-xs text-slate-500 text-center leading-relaxed">
                    Zapisując się do newslettera, wyrażasz zgodę na otrzymywanie informacji o nowościach, promocjach, produktach i usługach paulinaodmatematyki.com. Twoje dane będą przetwarzane do celów związanych z wysyłką newslettera. Administratorem danych osobowych będzie Paulina Miś. Szczegóły: <a href="https://paulinaodmatematyki.com/polityka-prywatnosci" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">polityka prywatności</a>
                </p>
            </div>
        </form >
    )
}
