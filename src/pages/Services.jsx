import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo placeholder */}
      <div className="flex justify-center mb-8">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
          Logo
        </div>
      </div>

      <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        ¡Bienvenido a LaCalle AI!
      </h1>

      <Card className="mb-8">
        <CardContent className="prose dark:prose-invert max-w-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg">
          <p className="mt-4 text-lg">
            En LaCalle AI, transformamos la interacción entre tu empresa y tus
            clientes mediante soluciones de inteligencia artificial innovadoras
            y personalizadas. Nuestro objetivo es potenciar tu productividad y
            maximizar tus ventas a través de herramientas tecnológicas de
            vanguardia.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text pb-2">
            Agentes Informativos 24/7
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-b-lg">
          <p className="text-lg">
            Imagina contar con un asistente virtual que atienda a tus clientes
            en cualquier momento del día, brindando respuestas precisas y
            rápidas sobre tu negocio. Nuestros chatbots conversacionales
            automatizan al 100% las interacciones, permitiendo que te enfoques
            en lo que realmente importa. Estos agentes pueden integrarse sin
            problemas en plataformas como WhatsApp, Instagram y tu sitio web,
            asegurando una presencia constante y eficiente.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text pb-2">
            Agentes con Funciones Avanzadas
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-b-lg">
          <p className="text-lg">
            Lleva la experiencia del cliente al siguiente nivel con agentes que
            no solo responden preguntas, sino que también:
          </p>
          <ul className="text-lg space-y-2 mt-4">
            {[
              "Agendan citas: Facilitan la programación de reuniones o servicios.",
              "Envían correos electrónicos: Gestionan comunicaciones de seguimiento o información adicional.",
              "Realizan scraping web: Obtienen información relevante de la web para tus necesidades específicas.",

              "Consultan servicios externos: Integran datos de otras plataformas para respuestas más completas.",
              "Formatean información: Presentan datos de manera clara y organizada.",
              "Generan contenido: Crean textos atractivos y relevantes para diversas aplicaciones.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4">
            Estas capacidades amplían el alcance de las interacciones
            tradicionales, ofreciendo un valor añadido significativo a tu
            negocio.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text pb-2">
            Creación de Podcasts con IA
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-b-lg">
          <p className="text-lg">
            Destaca en el mundo del marketing digital con podcasts generados por
            inteligencia artificial. Esta forma innovadora de promoción y
            comunicación es aplicable a cualquier sector de tu empresa,
            asegurando que tu mensaje llegue de manera efectiva y memorable.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text pb-2">
            Contenido Optimizado por IA
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-b-lg">
          <p className="text-lg">
            Ahorra tiempo y esfuerzo con contenido optimizado y potenciado por
            IA. Analizamos blogs, sitios web y documentos PDF para crear
            material único y destacado que simplifica tus tareas diarias y te
            libera varias horas a la semana.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="prose dark:prose-invert max-w-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg">
          <p className="mt-4 text-lg">
            En LaCalle AI, estamos comprometidos en llevar tu negocio al
            siguiente nivel con soluciones de inteligencia artificial diseñadas
            para satisfacer tus necesidades específicas. Contáctanos hoy y
            descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
