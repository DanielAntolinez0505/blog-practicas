import Header from '@/components/Header'
import BlogHeader from '@/components/BlogHeader'
import PracticasList from '@/components/PracticasList'
import Footer from '@/components/Footer'
import { Separator } from "@/components/ui/separator"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="space-y-12">
                    <BlogHeader />
                    <Separator className="my-12" />
                    <PracticasList />
                </div>
            </main>
            <Footer />
        </div>
    )
}

