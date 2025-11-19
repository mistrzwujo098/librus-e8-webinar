import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Paulina od Matematyki. Wszelkie prawa zastrzeżone.
                </p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="https://paulinaodmatematyki.com/polityka-prywatnosci/" target="_blank" className="text-sm text-slate-500 hover:text-paulina-primary transition-colors">
                        Polityka Prywatności
                    </Link>
                    <Link href="https://paulinaodmatematyki.com/regulamin/" target="_blank" className="text-sm text-slate-500 hover:text-paulina-primary transition-colors">
                        Regulamin
                    </Link>
                    <Link href="https://paulinaodmatematyki.com/kontakt" className="text-sm text-slate-500 hover:text-paulina-primary transition-colors">
                        Kontakt
                    </Link>
                </div>
            </div>
        </footer>
    )
}
