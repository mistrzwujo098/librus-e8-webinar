import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Paulina od Matematyki. Wszelkie prawa zastrzeżone.
                </p>
                <div className="flex justify-center gap-6 text-sm">
                    <Link href="#" className="hover:text-white transition-colors">
                        Polityka Prywatności
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Regulamin
                    </Link>
                    <Link href="mailto:paulina@skutecznekorepetycje.com" className="hover:text-white transition-colors">
                        Kontakt
                    </Link>
                </div>
            </div>
        </footer>
    )
}
