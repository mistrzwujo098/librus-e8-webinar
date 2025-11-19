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
    redirectUrl = "/dziekujemy"
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
                <div className="flex items-start gap-2 text-sm text-slate-600">
                    <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-paulina-orange focus:ring-paulina-orange"
                    />
                    <label htmlFor="privacy" className="leading-tight">
                        Zgadzam się na przetwarzanie danych osobowych i otrzymywanie newslettera.
                        <br />
                        <span className="text-xs text-slate-500">
                            Administratorem danych jest Paulina Miś. Szczegóły w polityce prywatności.
                        </span>
                    </label>
                </div>

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

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <Lock className="h-3 w-3" />
                    <span>100% bezpieczny. Zero spamu.</span>
                </div>
            </div>
        </form>
    )
}
