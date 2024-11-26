import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ImageModal } from "./ImageModal"

export default function BlogContent() {
    return (
        <div className="space-y-12 bg-none">
            <section id="portada-oficial">
                <h2 className="text-3xl font-bold mb-6 text-white">Portada Oficial</h2>
                <Card className="bg-gray-800/50 text-white">
                    <CardContent className="p-6 space-y-4">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold">Práctica Social en Fisioterapia</h1>
                            <p className="text-xl">Hospital Departamental San Juan de Dios de Riosucio</p>
                            <p className="text-lg">Sistema Territorial y Ciudadanía Activa sobre Interculturalidad</p>
                        </div>
                        <ImageModal src="/images/Imagen1.jpeg" alt="Hospital San Juan de Dios de Riosucio" />
                    </CardContent>
                </Card>
            </section>

            <Separator className="bg-gray-600" />

            <section id="nivel-basico">
                <h2 className="text-3xl font-bold mb-6 text-white">Nivel Básico</h2>
                <Card className="bg-gray-800/50 text-white">
                    <CardContent className="p-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">¿Qué voy a hacer en mi práctica?</h3>
                            <p>Voy a realizar mi última práctica social de la carrera de fisioterapia, seré un apoyo en los servicios de salud del Hospital Departamental San Juan de Dios de Riosucio.</p>
                            <ImageModal src="/images/Imagen2.jpeg" alt="Estudiante de fisioterapia en práctica" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Para qué voy a hacer este trabajo?</h3>
                            <p>Para culminar mi carrera profesional en Fisioterapia de la Universidad Autónoma de Manizales y contribuir al sistema de salud local.</p>
                            <ImageModal src="/images/Imagen3.jpeg" alt="Universidad Autónoma de Manizales" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Realmente comprendo la importancia de mi práctica?</h3>
                            <p>Sí, entiendo que esta práctica es fundamental para mi formación profesional y para brindar servicios de salud a la comunidad.</p>
                            <ImageModal src="/images/Imagen4.jpeg" alt="Estudiante reflexionando sobre su práctica" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Cómo voy a organizar el tiempo?</h3>
                            <p>Estableceré un horario semanal coordinado con mi jefe inmediato, distribuyendo las jornadas para participar en todas las actividades planificadas.</p>
                            <ImageModal src="/images/Imagen5.jpeg" alt="Planificación de horario" />
                        </div>
                    </CardContent>
                </Card>
            </section>

            <Separator className="bg-gray-600" />

            <section id="nivel-analitico">
                <h2 className="text-3xl font-bold mb-6 text-white">Nivel Analítico</h2>
                <Card className="bg-gray-800/50 text-white">
                    <CardContent className="p-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">¿Estoy consiguiendo lo que me han pedido?</h3>
                            <p>¡Sí! Ha sido una experiencia gratificante desde el primer momento, he participado en muchas actividades sociales y de promoción y prevención en salud.</p>
                            <ImageModal src="/images/Imagen6.jpeg" alt="Actividad de promoción de salud" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Voy bien de tiempo?</h3>
                            <p>¡Sí! según mi plan de acción y su cronograma, he seguido cada actividad según la fecha propuesta.</p>
                            <ImageModal src="/images/Imagen7.jpeg" alt="Cronograma de actividades" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Qué he aprendido?</h3>
                            <p>El mejor aprendizaje viene desde la experiencia, el enfrentarse a la realidad de la salud en población indígena es fundamental para expandir las visiones sobre la importancia de integrar tanto conocimientos de la medicina occidental como de la medicina ancestral.</p>
                            <ImageModal src="/images/Imagen8.jpeg" alt="Integración de medicina occidental y ancestral" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ImageModal src="/images/Imagen9.jpeg" alt="Actividad comunitaria en práctica" />
                            <ImageModal src="/images/Imagen10.jpeg" alt="Sesión de aprendizaje práctico" />
                        </div>
                    </CardContent>
                </Card>
            </section>

            <Separator className="bg-gray-600" />

            <section id="nivel-critico">
                <h2 className="text-3xl font-bold mb-6 text-white">Nivel Crítico</h2>
                <Card className="bg-gray-800/50 text-white">
                    <CardContent className="p-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">¿Está bien lo que he hecho?</h3>
                            <p>Sí, he logrado cumplir con los objetivos planteados y he recibido retroalimentación positiva de mis supervisores.</p>
                            <ImageModal src="/images/Imagen11.jpeg" alt="Retroalimentación de supervisores" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Hay algo que pueda mejorarse?</h3>
                            <p>Siempre hay espacio para mejorar, especialmente en la documentación de los casos y en la comunicación con los pacientes.</p>
                            <ImageModal src="/images/Imagen12.jpeg" alt="Documentación de casos clínicos" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Qué es lo que he hecho mejor?</h3>
                            <p>La adaptación al entorno intercultural y la capacidad de integrar diferentes enfoques de tratamiento han sido mis puntos más fuertes.</p>
                            <ImageModal src="/images/Imagen13.jpeg" alt="Integración de enfoques de tratamiento" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">¿Qué momento destacaría del proceso como una celebración de lo aprendido?</h3>
                            <p>El momento en que logré establecer una conexión efectiva con la comunidad indígena y ver cómo los tratamientos integrados mejoraban la calidad de vida de los pacientes.</p>
                            <ImageModal src="/images/Imagen14.jpeg" alt="Conexión con la comunidad indígena" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ImageModal src="/images/Imagen15.jpeg" alt="Tratamiento fisioterapéutico" />
                            <ImageModal src="/images/Imagen16.jpeg" alt="Actividad comunitaria" />
                            <ImageModal src="/images/Imagen17.jpeg" alt="Evaluación de paciente" />
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

