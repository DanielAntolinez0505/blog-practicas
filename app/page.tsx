import Header from '@/components/Header'
import BlogContent from '@/components/BlogContent'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
                    <BlogContent />
                </div>
            </main>
            <Footer />
        </div>
    )
}

