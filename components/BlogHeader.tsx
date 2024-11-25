import { Card, CardContent } from "@/components/ui/card"

export default function BlogHeader() {
    return (
        <Card className="bg-card/90 backdrop-blur-sm text-card-foreground rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02]">
            <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-muted-foreground">Universidad Tecnológica Nacional</h4>
                    <h5 className="text-lg text-muted-foreground">Facultad Regional Buenos Aires</h5>
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Informe de Prácticas Educativas en Tecnología</h1>
                    <p className="text-lg text-muted-foreground">Innovación y Aprendizaje en la Era Digital</p>
                </div>

                <div className="space-y-2">
                    <p><strong>Autor:</strong> Juan Pérez</p>
                    <p><strong>Tutor:</strong> Dra. María González</p>
                    <p><strong>Cátedra:</strong> Tecnologías Emergentes</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">Año Académico 2024</p>
                </div>
            </CardContent>
        </Card>
    )
}

