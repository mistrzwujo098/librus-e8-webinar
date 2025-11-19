"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const targetDate = new Date("2025-11-30T23:59:00")

        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs text-slate-400 uppercase">Dni</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs text-slate-400 uppercase">Godz</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-slate-400 uppercase">Min</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-slate-400 uppercase">Sek</div>
            </div>
        </div>
    )
}
