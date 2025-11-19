import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

const MAILERLITE_WORKER_URL = process.env.MAILERLITE_WORKER_URL || process.env.NEXT_PUBLIC_MAILERLITE_WORKER_URL

// Group IDs from environment
const GROUP_IDS = {
    e8: process.env.MAILERLITE_GROUP_ID_E8 || process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID_E8 || '',
    matura: process.env.MAILERLITE_GROUP_ID_MATURA || process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID_MATURA || '',
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, name, phone, type, level } = body

        // Validation
        if (!email || !type) {
            return NextResponse.json(
                { success: false, error: 'Brak wymaganych danych (email lub type)' },
                { status: 400 }
            )
        }

        // Determine Group ID based on type
        const groupId = type === 'e8' ? GROUP_IDS.e8 : GROUP_IDS.matura

        if (!groupId) {
            console.error('Missing Group ID for type:', type)
            return NextResponse.json(
                { success: false, error: 'Konfiguracja grupy jest nieprawidłowa' },
                { status: 500 }
            )
        }

        if (!MAILERLITE_WORKER_URL) {
            console.error('Missing MAILERLITE_WORKER_URL')
            return NextResponse.json(
                { success: false, error: 'Konfiguracja serwera jest nieprawidłowa' },
                { status: 500 }
            )
        }

        // Prepare fields object
        const fields: Record<string, string> = {}
        if (name) fields.name = name
        if (phone) fields.phone = phone
        if (level) fields.level = level

        // Proxy to Cloudflare Worker
        const response = await fetch(MAILERLITE_WORKER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                groupId,
                fields,
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            return NextResponse.json(
                { success: false, error: data.error || 'Błąd zapisu' },
                { status: response.status }
            )
        }

        return NextResponse.json({ success: true, data })

    } catch (error) {
        console.error('Subscription proxy error:', error)
        return NextResponse.json(
            { success: false, error: 'Wystąpił błąd serwera' },
            { status: 500 }
        )
    }
}
