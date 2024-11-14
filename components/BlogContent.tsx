import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ImageModal } from "./ImageModal";

export default function BlogContent() {
    const sections = [
        {
            id: "portada-oficial",
            title: "🌟 Portada Oficial",
            content: [
                {
                    title: "Práctica Social en Fisioterapia",
                    text: `Hospital Departamental San Juan de Dios de Riosucio. 
                           Sistema Territorial y Ciudadanía Activa sobre Interculturalidad.`,
                    src: "/images/Imagen1.jpeg",
                    alt: "Hospital San Juan de Dios de Riosucio",
                },
            ],
        },
        {
            id: "nivel-basico",
            title: null, // Título eliminado
            content: [
                {
                    title: "¿Qué voy a hacer en mi práctica?",
                    text: "Voy a realizar mi última práctica social de la carrera de fisioterapia, seré un apoyo en los servicios de salud del Hospital Departamental San Juan de Dios de Riosucio.",
                    src: "/images/Imagen2.jpeg",
                    alt: "Estudiante de fisioterapia en práctica",
                },
                {
                    title: "¿Para qué voy a hacer este trabajo?",
                    text: "Para culminar mi carrera profesional en Fisioterapia de la Universidad Autónoma de Manizales y contribuir al sistema de salud local.",
                    src: "/images/Imagen3.jpeg",
                    alt: "Universidad Autónoma de Manizales",
                },
                {
                    title: "¿Realmente comprendo la importancia de mi práctica?",
                    text: "Sí, entiendo que esta práctica es fundamental para mi formación profesional y para brindar servicios de salud a la comunidad.",
                    src: "/images/Imagen4.jpeg",
                    alt: "Estudiante reflexionando sobre su práctica",
                },
                {
                    title: "¿Cómo voy a organizar el tiempo?",
                    text: "Estableceré un horario semanal coordinado con mi jefe inmediato, distribuyendo las jornadas para participar en todas las actividades planificadas.",
                    src: "/images/Imagen5.jpeg",
                    alt: "Planificación de horario",
                },
            ],
        },
        {
            id: "nivel-analitico",
            title: null, // Título eliminado
            content: [
                {
                    title: "¿Estoy consiguiendo lo que me han pedido?",
                    text: "¡Sí! Ha sido una experiencia gratificante desde el primer momento, he participado en muchas actividades sociales y de promoción y prevención en salud.",
                    src: "/images/Imagen6.jpeg",
                    alt: "Actividad de promoción de salud",
                },
                {
                    title: "¿Voy bien de tiempo?",
                    text: "¡Sí! según mi plan de acción y su cronograma, he seguido cada actividad según la fecha propuesta.",
                    src: "/images/Imagen7.jpeg",
                    alt: "Cronograma de actividades",
                },
                {
                    title: "¿Qué he aprendido?",
                    text: "El mejor aprendizaje viene desde la experiencia, el enfrentarse a la realidad de la salud en población indígena es fundamental para expandir las visiones sobre la importancia de integrar tanto conocimientos de la medicina occidental como de la medicina ancestral.",
                    src: "/images/Imagen8.jpeg",
                    alt: "Integración de medicina occidental y ancestral",
                },
            ],
        },
        {
            id: "nivel-critico",
            title: null, // Título eliminado
            content: [
                {
                    title: "¿Está bien lo que he hecho?",
                    text: "Sí, he logrado cumplir con los objetivos planteados y he recibido retroalimentación positiva de mis supervisores. Siento que cada una de las actividades que participo, estoy dando lo mejor de mí y eso me da la tranquilidad y la garantía que aunque no salga perfecto, saldrá bien.",
                    src: "/images/Imagen11.jpeg",
                    alt: "Retroalimentación de supervisores",
                },
                {
                    title: "¿Hay algo que pueda mejorarse?",
                    text: "Siempre hay espacio para mejorar, especialmente en la documentación de los casos y en la comunicación con los pacientes.",
                    src: "/images/Imagen12.jpeg",
                    alt: "Documentación de casos clínicos",
                },
                {
                    title: "¿Como he corregido los errores?",
                    text: "Primeramente reconociendo y aceptando que como ser humano y tan inexperta puedo equivocarme, luego, analizo qué acciones llevaron a eso, para no repetirlas, y busco opciones diferentes que me sirvan para realizar cada una de mis actividades de la mejor manera.",
                    src: "/images/Imagen15.jpeg",
                    alt: "Confianza en el proceso",
                },
                {
                    title: "¿De qué me siento orgullosa?",
                    text: "De darme cuenta que mi trabajo aquí, generó un impacto positivo en la comunidad, escuchar los agradecimientos de las personas de que alguna u otra manera pude intervenir, es lo que queda grabado en mi memoria y es el mejor triunfo que pude adquirir en esta práctica.",
                    src: "/images/Imagen16.jpeg",
                    alt: "Un bello paisaje",
                },
                {
                    title: "¿Qué he aprendido?",
                    text: "He aprendido que es de suma importancia integrar conceptos de territorio, de territorialidad y territorialización, que en las creencias y herencias ancestrales de costumbres y hábitos juegan un papel importante y hace parte de esa esencia que nos caracteriza, creando así un territorio rico en enseñanzas y en potencialidades. He aprendido que al abordar una situación particular, no solo es importante ocuparse de la condición en sí, sino también de la persona que la presenta, quien está inmersa en un contexto que impacta tanto su estado de salud como su proceso de recuperación.",
                    src: "/images/Imagen23.jpeg",
                    alt: "Un momento de convivencia",
                },
                {
                    title: "¿Qué es lo que he hecho mejor?",
                    text: "La adaptación al entorno intercultural y la capacidad de integrar diferentes enfoques de tratamiento han sido mis puntos más fuertes.",
                    src: "/images/Imagen13.jpeg",
                    alt: "Integración de enfoques de tratamiento",
                },
                {
                    title: "¿Qué momento destacaría del proceso como una celebración de lo aprendido?",
                    text: "El momento en que logré establecer una conexión efectiva con la comunidad indígena y ver cómo los tratamientos integrados mejoraban la calidad de vida de los pacientes.",
                    src: "/images/Imagen14.jpeg",
                    alt: "Conexión con la comunidad indígena",
                },
            ],
        },
    ];

    return (
        <div className="space-y-12 bg-none">
            {sections.map((section) => (
                <section key={section.id} id={section.id}>
                    {section.title && <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-2">{section.title}</h2>}
                    <Card className="bg-gray-800/50 text-white shadow-xl rounded-lg">
                        <CardContent className="p-8 space-y-8">
                            {section.content.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center ${
                                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    } gap-8`}
                                >
                                    <div className="md:w-1/2">
                                        <ImageModal src={item.src} alt={item.alt} />
                                    </div>
                                    <div className="md:w-1/2 space-y-4">
                                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                                        <p className="text-lg leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    {section.id !== "nivel-critico" && <Separator className="bg-gray-600 my-8" />}
                </section>
            ))}
        </div>
    );
}
