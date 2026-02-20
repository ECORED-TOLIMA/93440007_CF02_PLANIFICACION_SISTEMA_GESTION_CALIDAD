export default {
  global: {
    Name: 'Operación, control y mejora del Sistema de Gestión de la Calidad.',
    Description:
      'Este componente formativo aborda la operación, el control y la mejora del Sistema de Gestión de la Calidad, mediante el análisis de la gestión por procesos, los indicadores de desempeño, los métodos de solución de problemas y los requisitos operacionales de la NTC ISO 9001. Su desarrollo permite comprender cómo asegurar la eficacia, el seguimiento y el mejoramiento continuo de los procesos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Los procesos y los principios de gestión de calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores críticos de éxito',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Enfoque basado en procesos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Modelo ISO 9001:2015 aplicado a procesos',
            hash: 't_1_4',
          },
          { numero: '1.5', titulo: 'Mapa de procesos', hash: 't_1_5' },
          { numero: '1.6', titulo: 'Mejora de procesos', hash: 't_1_6' },
          {
            numero: '1.7',
            titulo: 'Requisitos para mejorar los procesos',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Mejora continua y la organización',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Elementos de un indicador', hash: 't_2_1' },
          {
            numero: '2.2',
            titulo: 'Elaboración de indicadores',
            hash: 't_2_2',
          },
          { numero: '2.3', titulo: 'Tipos de indicadores', hash: 't_2_3' },
          {
            numero: '2.4',
            titulo: 'Interpretación y análisis de resultados',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métodos de solución de problemas y mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Jurado de opinión o selección ponderada',
            hash: 't_3_1',
          },
          { numero: '3.2', titulo: 'Diagrama de Pareto', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Diagrama causa-efecto', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Tormenta de ideas', hash: 't_3_4' },
          { numero: '3.5', titulo: 'Diagrama de dispersión', hash: 't_3_5' },
          { numero: '3.6', titulo: 'Introducción a Seis Sigma', hash: 't_3_6' },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control de calidad',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Sistemas de medición', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Límites de tolerancia', hash: 't_4_2' },
          {
            numero: '4.3',
            titulo: 'Control estadístico de procesos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métodos estadísticos aplicados a la calidad',
            hash: 't_4_4',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Operación en ISO 9001:2015',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Planificación y control operacional (Numeral 8.1)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Requisitos para productos y servicios (Numeral 8.2)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Diseño y desarrollo de productos y servicios (Numeral 8.3)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Control de procesos, productos y servicios externos (Numeral 8.4)',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Producción y provisión del servicio (Numeral 8.5)',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Liberación de productos y servicios (Numeral 8.6)',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Control de salidas no conformes (Numeral 8.7)',
            hash: 't_5_7',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Mejora del Sistema de Gestión de la Calidad',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Tipos de mejora', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Acciones correctivas', hash: 't_6_2' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  // complementario: [
  //   {
  //     tema: '',
  //     referencia: '',
  //     tipo: 'Sitio web',
  //     link: '',
  //   },
  // ],
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'Medidas implementadas para eliminar las causas de no conformidades y evitar su repetición, contribuyendo a la mejora del Sistema de Gestión de la Calidad.',
    },

    {
      termino: 'Control de calidad',
      significado:
        'Conjunto de procedimientos y herramientas utilizados para asegurar que los productos o servicios cumplan con los estándares definidos.',
    },

    {
      termino: 'Control estadístico de procesos',
      significado:
        'Técnica que utiliza herramientas estadísticas para monitorear y controlar procesos, asegurando su estabilidad y calidad.',
    },

    {
      termino: 'Diseño y desarrollo de productos y servicios',
      significado:
        'Actividades relacionadas con la creación o modificación de productos o servicios, garantizando que cumplan los requisitos definidos.',
    },

    {
      termino: 'Enfoque basado en procesos',
      significado:
        'Principio de gestión que organiza las actividades de una organización como procesos interrelacionados, con el fin de lograr resultados más eficientes y consistentes.',
    },

    {
      termino: 'Indicadores de gestión',
      significado:
        'Instrumentos de medición utilizados para evaluar el desempeño de procesos, productos o servicios, facilitando la toma de decisiones.',
    },

    {
      termino: 'Mapa de procesos',
      significado:
        'Representación gráfica que describe la secuencia y relación entre los procesos de una organización, facilitando su análisis y mejora.',
    },

    {
      termino: 'Mejora continua',
      significado:
        'Actividad sistemática y permanente destinada a optimizar procesos, productos, servicios y el desempeño organizacional.',
    },

    {
      termino: 'Mejora de procesos',
      significado:
        'Conjunto de acciones orientadas a optimizar la eficiencia, efectividad y calidad de los procesos organizacionales.',
    },

    {
      termino: 'Organización',
      significado:
        'Conjunto de personas, recursos y estructuras que interactúan de manera coordinada para lograr objetivos específicos, cumpliendo con sus responsabilidades y compromisos.',
    },

    {
      termino: 'Partes interesadas',
      significado:
        'Personas, grupos u organizaciones que pueden afectar, verse afectadas o percibir un impacto por las decisiones, actividades o resultados de una organización.',
    },

    {
      termino: 'Proceso',
      significado:
        'Conjunto de actividades interrelacionadas o interactuantes que transforman entradas en salidas, generando un valor específico para la organización o sus clientes.',
    },

    {
      termino: 'Sistema',
      significado:
        'Conjunto de elementos interconectados y coordinados que funcionan como un todo para cumplir objetivos definidos, garantizando consistencia y eficacia en la gestión de actividades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Betancourt, D. (2015). Diseño y desarrollo de productos y servicios en ISO 9001.',
      link: 'https://www.ingenioempresa.com/diseno-desarrollo-iso-9001/',
    },

    { referencia: 'Cabrera, H. (s.f.). 1.8 Mejoramiento continuo.', link: '' },

    {
      referencia:
        'Canela López, J. R. (2004). La gestión por calidad total en la empresa moderna. Alfaomega.',
      link: '',
    },

    {
      referencia:
        'Cantú Delgado, H. (1997). Desarrollo de una cultura de calidad (1.ª ed.). McGraw-Hill.',
      link: '',
    },

    {
      referencia:
        'Deming, W. E. (s.f.). Calidad, productividad y competitividad: La salida de la crisis.',
      link: '',
    },

    {
      referencia:
        'Euskalit. (s.f.). Herramientas para resolución de problemas.',
      link: '',
    },

    {
      referencia:
        'Fred, R. (1997). Conceptos de administración estratégica. Prentice Hall Hispanoamericana.',
      link: '',
    },

    {
      referencia:
        'Geocities. (s.f.). ISO 9000 para pequeñas y medianas empresas (pymes).',
      link: '',
    },

    {
      referencia:
        'Harrington, J., & Harrington, J. Jr. (1997). Administración total del mejoramiento continuo. McGraw-Hill.',
      link: '',
    },

    {
      referencia:
        'International Organization for Standardization (ISO). (2015). ISO 9001:2015 – Quality management systems – Requirements. ISO.',
      link: '',
    },

    {
      referencia:
        'Juran, J. M., Gryna, F., & Bingham, R. S. (1983). Manual de control de la calidad (p. 14). Reverte.',
      link: '',
    },

    {
      referencia: 'Maldonado, J. Á. (2015). Fundamentos de calidad total.',
      link: '',
    },

    {
      referencia:
        'Serna Gómez, H. (2008). Gerencia estratégica (10.ª ed.). 3R Editores.',
      link: '',
    },

    {
      referencia:
        'Summers, D. C. (2006). Administración de la calidad (1.ª ed.). Pearson.',
      link: '',
    },

    {
      referencia:
        'Udaondo Durán, M. (1992). Gestión de calidad (p. 35). Díaz de Santos.',
      link: '',
    },

    {
      referencia: 'WorkMeter. (2014). La mejora continua de procesos.',
      link: 'https://www.workmeter.com/blog/la-mejora-continua-de-procesos/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alejandro Mantilla Cáceres',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑADOR Y DESARROLLADOR DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
