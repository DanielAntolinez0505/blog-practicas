import { ModeToggle } from './ModeToggle'
import { Navigation } from './Navigation'

export default function Header() {
    return (
        <header className="bg-black/50 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <h1 className="text-2xl font-bold text-white">Blog Reflexivo</h1>
                    <Navigation />
                </div>
                <ModeToggle />
            </div>
        </header>
    )
}

