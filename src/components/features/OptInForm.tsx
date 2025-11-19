"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from "@/lib/tracking"
import { ArrowRight, CheckCircle2, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface OptInFormProps {
    redirectUrl?: string
    type?: 'e8' | 'matura'
}

export function OptInForm({ redirectUrl = "/dziekuje", type }: OptInFormProps) {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        // Basic validation
        if (!email) {
            setError("Wpisz adres email")
            setIsLoading(false)
            return
        }
        if (!/\S+@\S+\.\S/.test(email)) {
            setError("Wpisz poprawny adres email")
            setIsLoading(false)
            return
        }

        try {
            // Track lead attempt
            trackEvent('StartRegistration', {
                content_name: 'Webinar Opt-in',
                value: 0,
                currency: 'PLN'
            })

            // Send to MailerLite Worker
            // Send to Next.js API Route (Proxy)
            if (type) {
                console.log('[OptInForm] Submitting to API Proxy. Type:', type)

                // Note: We use /librus/api/subscribe because of basePath: /librus
                const response = await fetch("/librus/api/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        type: type,
                    }),
                })

                const data = await response.json()
                console.log('[OptInForm] Response:', data)

                if (!response.ok) {
                    throw new Error(data.error || "Wystąpił błąd podczas zapisu")
                }
            }

            // Track successful lead
            trackEvent('Lead', {
                content_name: 'Webinar Opt-in',
                value: 0,
                currency: 'PLN'
            })

            // Redirect
            router.push(redirectUrl)
        } catch (err) {
            console.error("Subscription error:", err)
            setError("Wystąpił błąd. Spróbuj ponownie.")
            setIsLoading(false)
        }
    }

    // ctaText and className are no longer props, using default values or hardcoding
    const ctaText = "Pobierz darmowy plan";
    const className = ""; // Assuming no specific class is passed if not a prop

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
