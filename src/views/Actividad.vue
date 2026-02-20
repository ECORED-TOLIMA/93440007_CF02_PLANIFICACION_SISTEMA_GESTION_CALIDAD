<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conocimientos sobre los elementos, herramientas y lineamientos que orientan la planificación, operación, control y mejora del Sistema de Gestión de la Calidad según la NTC ISO 9001:2015.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué representan los procesos dentro de una organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conjunto de reglas contables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actividades interrelacionadas que transforman entradas en resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solamente la producción de bienes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluaciones financieras periódicas en la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál de los siguientes NO es un elemento de un proceso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entradas.', esCorrecta: false },
            { id: 'b', texto: 'Actividades.', esCorrecta: false },
            { id: 'c', texto: 'Salidas.', esCorrecta: false },
            { id: 'd', texto: 'Beneficios fiscales.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'Los factores críticos de éxito permiten principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar riesgos y orientar la toma de decisiones.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Incrementar la publicidad.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reducir el personal necesario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear logotipos principales institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'Los procesos estratégicos se relacionan con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La prestación del servicio o elaboración de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La planificación y dirección organizacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El mantenimiento de equipos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El control de proveedores.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es la finalidad del enfoque basado en procesos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejorar eficiencia, asignar responsabilidades y controlar actividades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir costos exclusivamente en el área de recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la publicidad interna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la planificación estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El ciclo PHVA permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar auditorías legales únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar proveedores externos sin análisis interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planear, Hacer, Verificar y Actuar para mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Generar estados financieros trimestrales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'La participación del personal contribuye a:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar reuniones de seguimiento en la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir la responsabilidad de la dirección frente al sistema de gestión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir indicadores de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar oportunidades de mejora con base en experiencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Los indicadores de gestión permiten:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir y analizar el desempeño de los procesos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir reuniones de evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la publicidad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar la planificación estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué herramienta utiliza el principio 80/20 para priorizar causas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Jurado de opinión.', esCorrecta: false },
            { id: 'b', texto: 'Diagrama causa-efecto.', esCorrecta: false },
            { id: 'c', texto: 'Diagrama de Pareto.', esCorrecta: true },
            { id: 'd', texto: 'Tormenta de ideas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El diagrama causa-efecto también se conoce como:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diagrama de Pareto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Espina de pescado o Ishikawa.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Selección ponderada.', esCorrecta: false },
            { id: 'd', texto: 'Análisis FODA.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'El jurado de opinión o selección ponderada se utiliza para:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir niveles de producción considerando la misión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar proveedores externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar alternativas considerando criterios ponderados.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Crear mapas de procesos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'La planificación y control operacional (8.1) garantiza:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la entrega de productos sin control y sin documentos relacionados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cumplimiento de actividades según criterios, recursos y responsabilidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Revisión de publicidad interna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación de los indicadores de gestión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'Los requisitos para productos y servicios (8.2) incluyen:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Necesidades y expectativas del cliente, y requisitos legales y organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo los requisitos legales aplicables y vigentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente la satisfacción del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control financiero interno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'En el diseño y desarrollo (8.3), la organización debe:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar documentación técnica importante para la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegar la calidad exclusivamente al proveedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Planificar etapas, definir responsabilidades y gestionar riesgos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Solo evaluar costos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El control de procesos, productos y servicios externos (8.4) permite:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supervisar proveedores y asegurar cumplimiento de requisitos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la documentación interna de manuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la planificación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar auditorías internas y externas dentro del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Las acciones correctivas buscan:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solucionar problemas inmediatos sin análisis de causas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar causas de no conformidades y prevenir su repetición.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'Una no conformidad corresponde a:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incumplimiento de un requisito establecido en procesos, productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cumplimiento exacto de los requisitos de la norma ISO 9001.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una recomendación informal del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una estrategia de marketing.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'La mejora continua se apoya en:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente auditorías externas por parte de la empresa certificadora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ciclo PHVA, auditorías internas, análisis de datos y acciones correctivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La reducción de personal operativo.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La publicidad interna.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Los procesos de soporte se enfocan en:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prestación directa de servicios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Brindar recursos, talento humano, infraestructura y control documental a procesos operativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir políticas estratégicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo producción de bienes para las personas interesadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El liderazgo organizacional en la gestión de calidad permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar costos operativos y de servicios públicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar el seguimiento de indicadores para no encontrar hallazgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la planificación operacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Orientar la estrategia, asignar recursos y promover la cultura de calidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
