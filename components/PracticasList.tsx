import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ImageModal } from "./ImageModal"

const practicas = [
    {
        id: 1,
        titulo: "Desarrollo Web Fullstack",
        descripcion: "Aprende a crear aplicaciones web completas con React y Node.js. Este curso práctico te llevará desde los fundamentos hasta la implementación de proyectos reales.",
        duracion: "12 semanas",
        nivel: "Intermedio",
        tecnologias: ["React", "Node.js", "Express", "MongoDB"],
        imagenes: [
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Estudiantes trabajando en un proyecto web",
                descripcion: "Nuestros estudiantes trabajan en proyectos reales, aplicando los conocimientos adquiridos en el curso."
            },
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Interfaz de una aplicación web moderna",
                descripcion: "Aprenderás a crear interfaces modernas y responsivas utilizando las últimas tecnologías web."
            }
        ]
    },
    {
        id: 2,
        titulo: "Ciencia de Datos",
        descripcion: "Explora el mundo del análisis de datos y machine learning. Aprenderás a utilizar Python para el análisis estadístico, visualización de datos y creación de modelos predictivos.",
        duracion: "10 semanas",
        nivel: "Avanzado",
        tecnologias: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
        imagenes: [
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Visualización de datos complejos",
                descripcion: "Aprenderás a crear visualizaciones de datos complejas para comunicar insights de manera efectiva."
            },
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Modelo de machine learning en acción",
                descripcion: "Implementarás modelos de machine learning para resolver problemas del mundo real."
            }
        ]
    },
    {
        id: 3,
        titulo: "Diseño UX/UI",
        descripcion: "Crea interfaces de usuario atractivas y funcionales. Este curso te enseñará los principios del diseño centrado en el usuario y cómo implementarlos en proyectos reales.",
        duracion: "8 semanas",
        nivel: "Principiante",
        tecnologias: ["Figma", "Adobe XD", "Sketch", "InVision"],
        imagenes: [
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Diseño de una interfaz de usuario moderna",
                descripcion: "Aprenderás a diseñar interfaces de usuario atractivas y funcionales utilizando las herramientas más populares."
            },
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Prototipo interactivo de una aplicación",
                descripcion: "Crearás prototipos interactivos para probar tus diseños y obtener feedback de los usuarios."
            }
        ]
    },
    {
        id: 4,
        titulo: "Desarrollo de Aplicaciones Móviles",
        descripcion: "Aprende a crear aplicaciones móviles nativas para iOS y Android utilizando React Native. Este curso te dará las habilidades para desarrollar apps multiplataforma eficientes.",
        duracion: "10 semanas",
        nivel: "Intermedio",
        tecnologias: ["React Native", "JavaScript", "Redux", "Expo"],
        imagenes: [
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Aplicación móvil en un dispositivo",
                descripcion: "Aprenderás a desarrollar aplicaciones móviles nativas para iOS y Android utilizando React Native."
            },
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Código de una aplicación móvil",
                descripcion: "Dominarás los conceptos clave de desarrollo móvil y crearás aplicaciones eficientes y escalables."
            }
        ]
    },
    {
        id: 5,
        titulo: "Ciberseguridad",
        descripcion: "Sumérgete en el mundo de la seguridad informática. Aprenderás sobre ethical hacking, criptografía, y cómo proteger sistemas y redes contra amenazas cibernéticas.",
        duracion: "12 semanas",
        nivel: "Avanzado",
        tecnologias: ["Kali Linux", "Wireshark", "Metasploit", "Nmap"],
        imagenes: [
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Análisis de seguridad informática",
                descripcion: "Aprenderás a identificar y mitigar vulnerabilidades en sistemas y redes."
            },
            {
                url: "/placeholder.svg?height=400&width=600",
                alt: "Herramientas de ciberseguridad",
                descripcion: "Utilizarás herramientas de ciberseguridad de vanguardia para proteger sistemas y redes."
            }
        ]
    }
]

export default function PracticasList() {
    return (
        <div className="space-y-16">
            {practicas.map((practica, index) => (
                <div key={practica.id}>
                    {index > 0 && <Separator className="my-16" />}
                    <Card className="bg-card/90 backdrop-blur-sm text-card-foreground rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02]">
                        <CardContent className="p-8 space-y-8">
                            <h2 className="text-3xl font-bold">{practica.titulo}</h2>
                            <p className="text-lg text-muted-foreground">{practica.descripcion}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <p><strong>Duración:</strong> {practica.duracion}</p>
                                <p><strong>Nivel:</strong> {practica.nivel}</p>
                            </div>
                            <div>
                                <strong className="text-sm">Tecnologías:</strong>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {practica.tecnologias.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                {practica.imagenes.map((imagen, imgIndex) => (
                                    <div key={imgIndex} className={`flex flex-col ${imgIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                                        <div className="w-full md:w-1/2">
                                            <ImageModal src={imagen.url} alt={imagen.alt} />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <p className="text-lg">{imagen.descripcion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}

