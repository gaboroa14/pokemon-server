import swaggerJsonDoc from 'swagger-jsdoc'

const swaggerOptions = {
  openapi: "3.0.0",
  swaggerDefinition: {
    info: {
      title: "I Competencia de Programación de GracoSoft",
      description:
        "Esta es la documentación de la API que utilizarás en la competencia de programación. En esta página encontrarás todo lo relacionado con los Endpoints que utilizaremos en el desarrollo del concurso, junto al modelo con el cual debes realizar estas solicitudes, y la forma en que las mismas serán respondidas por el servidor. Te invitamos a que eches un vistazo a esta página, juegues, estudies y analices cómo funciona esta API, ¡y que te pongas creativo programando!",
    },
    basePath: '/api',
    securityDefinitions: {

    },
    security: [ ],
  },
  apis: [
    './src/components/*/*.yml',
  ]
}

export const swaggerDocs = swaggerJsonDoc(swaggerOptions)
