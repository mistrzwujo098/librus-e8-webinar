"use client"

import * as React from "react"
import { Modal } from "@/components/ui/modal"
import { OptInForm } from "@/components/features/OptInForm"
import { Gift } from "lucide-react"

export interface ExitIntentPopupProps {
    redirectUrl?: string
    type?: 'e8' | 'matura'
}

export function ExitIntentPopup({ redirectUrl, type }: ExitIntentPopupProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hasShown, setHasShown] = React.useState(false)

    React.useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsOpen(true)
                setHasShown(true)
            }
        }

        document.addEventListener("mouseleave", handleMouseLeave)
        return () => document.removeEventListener("mouseleave", handleMouseLeave)
    }, [hasShown])

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="max-w-2xl p-0 overflow-hidden">
            <div className="grid md:grid-cols-2">
                <div className="bg-slate-900 p-8 text-white flex flex-col justify-center items-center text-center">
                    <div className="bg-white/10 p-4 rounded-full mb-6">
                        <Gift className="h-12 w-12 text-paulina-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Zaczekaj!</h3>
                    <p className="text-slate-300 mb-6">
                        Nie odchodź z pustymi rękami. Pobierz darmowy plan nauki i zdaj egzamin bez stresu.
                    </p>
                    <div className="text-sm text-slate-400 italic">
                        "To zmieniło nasze przygotowania!" - Anna
                    </div>
                </div>
                <div className="p-8 bg-white">
                    <h4 className="text-lg font-semibold mb-4 text-slate-900">
                        Wpisz email, aby odebrać prezent:
                    </h4>
                    <OptInForm redirectUrl={redirectUrl} type={type} />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-4 w-full text-center text-sm text-slate-400 hover:text-slate-600 underline"
                    >
                        Nie, dziękuję, wolę stresować się egzaminem
                    </button>
                </div>
            </div>
        </Modal>
    )
}
