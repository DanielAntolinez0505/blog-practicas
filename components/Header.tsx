import { ModeToggle } from './ModeToggle'

export default function Header() {
    return (
        <header className="bg-background/50 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Informe de Prácticas</h2>
                <ModeToggle />
            </div>
        </header>
    )
}

