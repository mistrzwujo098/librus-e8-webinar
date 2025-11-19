import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

const MAILERLITE_WORKER_URL = process.env.NEXT_PUBLIC_MAILERLITE_WORKER_URL

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, groupId } = body

        if (!email || !groupId) {
            return NextResponse.json(
                { success: false, error: 'Brak wymaganych danych (email lub groupId)' },
                { status: 400 }
            )
        }

        if (!MAILERLITE_WORKER_URL) {
            console.error('Missing MAILERLITE_WORKER_URL')
            return NextResponse.json(
                { success: false, error: 'Konfiguracja serwera jest nieprawidłowa' },
                { status: 500 }
            )
        }

        // Proxy to Cloudflare Worker
        const response = await fetch(MAILERLITE_WORKER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                groupId,
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            return NextResponse.json(
                { success: false, error: data.error || 'Błąd zapisu' },
                { status: response.status }
            )
        }

        return NextResponse.json(data)

    } catch (error) {
        console.error('Subscription proxy error:', error)
        return NextResponse.json(
            { success: false, error: 'Wystąpił błąd serwera' },
            { status: 500 }
        )
    }
}
