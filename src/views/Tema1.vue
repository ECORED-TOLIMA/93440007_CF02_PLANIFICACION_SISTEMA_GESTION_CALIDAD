<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestión de procesos
    p.mb-5(data-aos="fade-down") La gestión de procesos constituye un enfoque organizacional orientado a planificar, ejecutar, controlar y mejorar las actividades que permiten transformar insumos en productos o servicios que generan valor para los clientes y demás partes interesadas. Este enfoque facilita la comprensión integral del funcionamiento de la organización, ya que permite identificar la relación existente entre las diferentes actividades, los recursos utilizados y los resultados obtenidos.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto del Sistema de Gestión de la Calidad, la gestión de procesos se fundamenta en la identificación, caracterización, interacción y control de los procesos organizacionales, con el propósito de asegurar el cumplimiento de los requisitos del cliente, los lineamientos normativos y los objetivos estratégicos. La Norma Técnica Colombiana NTC ISO 9001 promueve este enfoque como uno de los principios esenciales de la gestión de la calidad, al considerar que la comprensión y gestión sistemática de los procesos contribuye al logro de resultados coherentes, eficientes y sostenibles.
    .row.justify-content-center.mb-4
      .col.col-lg-1.col-md-6.col-auto.order-lg-1.order-1.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2.mb-4
        p.mb-0(data-aos="fade-down") La aplicación de la gestión de procesos permite establecer responsabilidades claras, optimizar el uso de los recursos, fortalecer la toma de decisiones basada en evidencias y facilitar la medición del desempeño organizacional. Asimismo, favorece la identificación de riesgos y oportunidades, la implementación de acciones de mejora y el fortalecimiento de la cultura de calidad dentro de la organización.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") La gestión de procesos no solo se limita a documentar actividades, sino que implica analizar la forma en que se desarrollan, identificar oportunidades de optimización y garantizar que cada proceso aporte al cumplimiento de los objetivos institucionales. Para ello, se requiere la participación activa del talento humano, el liderazgo directivo y el uso de herramientas que permitan evaluar y mejorar continuamente el desempeño organizacional.
            .col.col-lg-2.col-auto.order-lg-2.order-1.mb-3
              figure
                img(src='@/assets/curso/tema1/img03.svg', alt='Imagen decorativa')
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Los procesos y los principios de gestión de calidad
    .col.col-lg-12.mb-5
      figure
        img(src='@/assets/curso/tema1/img04.png', alt='Imagen decorativa')
    p(data-aos="fade-down") Los procesos corresponden al conjunto de actividades interrelacionadas que transforman entradas en resultados que generan valor para los clientes y las partes interesadas. En las organizaciones, los procesos permiten estructurar el trabajo de manera organizada, facilitar la asignación de responsabilidades y asegurar que las actividades se desarrollen en coherencia con los objetivos estratégicos y los requisitos normativos.
    p.mb-5(data-aos="fade-down") Dentro del Sistema de Gestión de la Calidad, los procesos se caracterizan por integrar los siguientes elementos:
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.C02.px-4.py-2.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Entradas que representan la información, recursos o insumos necesarios para iniciar el proceso.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              |  Actividades que corresponden a las acciones que permiten transformar las entradas en resultados.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              |  Recursos que incluyen talento humano, infraestructura, tecnología y materiales necesarios para la ejecución del proceso.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              |  Responsables encargados de planificar, ejecutar, controlar y mejorar las actividades.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              |  Controles que permiten verificar el cumplimiento de los requisitos establecidos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Salidas que representan los productos o servicios generados.
      .col-lg-2.col-8.col-md-7.order-lg-1.order-1
        figure
          img(src='@/assets/curso/tema1/img05.svg', alt='Imagen decorativa')
    p(data-aos="fade-down") La gestión de los procesos se fundamenta en los principios de gestión de la calidad establecidos en la NTC ISO 9001. Estos principios orientan la toma de decisiones, el direccionamiento estratégico y la mejora continua del desempeño organizacional.
    p(data-aos="fade-down") En el contexto de la gestión de procesos, los principios de calidad contribuyen a:
    //-p.mb-5(data-aos="fade-down") Asimismo, la estrategia organizacional contribuye a:
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img06.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img07.svg", alt="alt").img100.m-auto
              p Fortalecer el enfoque al cliente mediante la identificación de necesidades y expectativas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img08.svg", alt="alt").img100.m-auto
              p Promover el liderazgo organizacional en la orientación y control de los procesos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img09.svg", alt="alt").img100.m-auto
              p Fomentar el compromiso del talento humano en el desarrollo de las actividades.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img10.svg", alt="alt").img100.m-auto
              p Facilitar la mejora continua del desempeño organizacional.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img11.svg", alt="alt").img100.m-auto
              p Favorecer la toma de decisiones basada en el análisis de información y evidencias.
    .row.justify-content-center.mb-0
      .col.col-lg-10.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") De esta manera, la integración entre procesos y principios de calidad contribuye al funcionamiento articulado del Sistema de Gestión de la Calidad y al cumplimiento de los objetivos institucionales.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Factores críticos de éxito
    p.mb-5(data-aos="fade-down") Cuando una organización busca mejorar su desempeño y fortalecer sus resultados, es necesario desarrollar procesos de planeación estratégica que permitan definir su direccionamiento institucional. En este contexto, se establecen elementos como la misión, la visión, los valores, los objetivos y las metas organizacionales, los cuales orientan la toma de decisiones y el desarrollo de las actividades.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-3.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img12.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") La misión describe la razón de ser de la organización, la visión define el estado deseado a futuro y los valores representan los principios que sustentan la cultura organizacional. Estos elementos permiten orientar las acciones estratégicas y constituyen la base para identificar los factores que determinan el éxito institucional.
        p.mb-0(data-aos="fade-down") Los factores críticos de éxito (FCE) corresponden a aquellas condiciones, actividades o resultados que resultan indispensables para garantizar el cumplimiento de los objetivos organizacionales. Su identificación permite priorizar acciones, optimizar recursos y prevenir situaciones que puedan afectar el desempeño de la organización.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Factores internos y externos que influyen en los factores críticos de éxito
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img13.svg', alt='La figura 1 representa un diagrama con dos círculos que contienen los factores que influyen en los factores críticos de éxito de una organización. El círculo interno incluye factores internos como conocimiento, estructura, recursos, sistema de gestión, estrategia y accionistas. El círculo externo integra factores externos como clientes, competencia, normativa, tendencias económicas, entorno, proveedores, innovación y sociedad.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img14.svg', alt='La figura 1 representa un diagrama con dos círculos que contienen los factores que influyen en los factores críticos de éxito de una organización. El círculo interno incluye factores internos como conocimiento, estructura, recursos, sistema de gestión, estrategia y accionistas. El círculo externo integra factores externos como clientes, competencia, normativa, tendencias económicas, entorno, proveedores, innovación y sociedad.')
    p.mb-4(data-aos="fade-down") Los FCE se caracterizan por:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img15.svg", alt="alt").img50.m-auto
          h5.text-center Representar aspectos determinantes para el logro de los objetivos estratégicos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img16.svg", alt="alt").img50.m-auto
          h5.text-center Permitir la identificación de riesgos que pueden afectar el éxito organizacional.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img17.svg", alt="alt").img50.m-auto
          h5.text-center Facilitar la toma de decisiones y la asignación de prioridades.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img18.svg", alt="alt").img50.m-auto
          h5.text-center Orientar la formulación de planes, proyectos y estrategias institucionales.
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12
        p.mb-0(data-aos="fade-down") La identificación de los FCE debe considerar tanto factores internos como externos que influyen en el funcionamiento organizacional. Entre ellos se encuentran:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img19.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Factores internos
            h5.t2.mb-2 Factores internos
            p.mb-0 Relacionados con el talento humano, la infraestructura, los recursos tecnológicos, la cultura organizacional y la eficiencia de los procesos.
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img20.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Factores externos
            h5.t2.mb-2 Factores externos
            p.mb-0 Asociados con la satisfacción del cliente, la relación con proveedores, las condiciones del mercado, la normativa legal, el entorno social, económico y ambiental.
    .row.justify-content-center.mb-4
      .col.col-lg-2.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img21.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Para identificar los factores críticos de éxito, las organizaciones pueden emplear herramientas de análisis estratégico como la matriz DOFA, la cual permite analizar fortalezas, oportunidades, debilidades y amenazas, facilitando la priorización de los aspectos que influyen en el cumplimiento de los objetivos institucionales.
        .cajon.cajon.C02.p-3
          p.mb-0(data-aos="fade-down") Se recomienda que la organización seleccione un número limitado de factores críticos de éxito, priorizando aquellos que tienen mayor impacto en los resultados organizacionales y en la sostenibilidad del negocio.
    p.mb-5(data-aos="fade-down") Para facilitar la comprensión, los factores críticos de éxito pueden variar según el sector económico. Algunos ejemplos son:
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C06")
          .row(titulo="Industria energética o petrolera")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Relaciones con entidades gubernamentales.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Capacidad financiera y liquidez.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Desarrollo de alianzas estratégicas.
          .row(titulo="Industria automotriz")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Imagen corporativa.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Eficiencia en la red de distribución.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Condiciones del mercado energético.
          .row(titulo="Sector educativo o de formación")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Calidad del talento humano.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Pertinencia de los contenidos formativos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Satisfacción de los usuarios.
          .row(titulo="Industria del <em>software</em>")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Innovación tecnológica.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Facilidad de uso de los productos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Calidad del servicio al cliente.
          .row(titulo="Sector asegurador")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Desarrollo y capacitación del personal.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Estrategias de mercadeo y posicionamiento.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Productividad operativa.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La identificación y gestión de los factores críticos de éxito permite fortalecer la planificación estratégica, facilitar el control del desempeño organizacional y contribuir al cumplimiento de los requisitos del Sistema de Gestión de la Calidad.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Enfoque basado en procesos
    p.mb-0(data-aos="fade-down") El enfoque basado en procesos es uno de los principios fundamentales de la gestión de la calidad y constituye un elemento esencial para la implementación del Sistema de Gestión de la Calidad conforme a la NTC ISO 9001. Este enfoque permite comprender la organización como un sistema integrado de procesos interrelacionados que transforman insumos en resultados que generan valor para las partes interesadas.
    .row.BG03.justify-content-center.align-items-center.pt-4.pb-4.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img23.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C03.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") Un proceso se define como un conjunto de actividades relacionadas que utilizan recursos para transformar entradas en salidas. Las entradas pueden corresponder a información, materiales, requisitos del cliente o lineamientos normativos, mientras que las salidas representan productos, servicios o resultados que satisfacen necesidades y expectativas.
        p(data-aos="fade-down") La gestión por procesos facilita el control de las actividades organizacionales, mejora la eficiencia operativa y fortalece la toma de decisiones basada en evidencias. Asimismo, permite identificar responsabilidades, optimizar recursos y establecer mecanismos de seguimiento y medición que contribuyen al mejoramiento continuo.
        p.mb-0(data-aos="fade-down") Para comprender la estructura general de un proceso dentro del Sistema de Gestión de la Calidad, a continuación, su representación básica:
    .row.justify-content-center
      .col-12.mb-4.movil
        figure
          img(src='@/assets/curso/tema1/img25.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/tema1/img24.svg', alt="Imagen decorativa")
          .tarjeta.color-secundario.p-3(x="11%" y="48%" numero="1")
            p Incluyen requisitos del cliente, información, recursos humanos, materiales, normatividad y lineamientos organizacionales necesarios para ejecutar el proceso.
          .tarjeta.color-secundario.p-3(x="50%" y="75%" numero="2")
            p Corresponde al conjunto de actividades planificadas y controladas que permiten transformar las entradas en resultados, mediante la asignación de responsabilidades, el uso de recursos y la aplicación de métodos de trabajo definidos.
          .tarjeta.color-secundario.p-3(x="84%" y="48%" numero="3")
            p Representan los productos, servicios o resultados generados por el proceso, los cuales deben cumplir con los requisitos establecidos y contribuir a la satisfacción de las partes interesadas.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Además de estos elementos, los procesos requieren mecanismos de control que permitan evaluar su desempeño. Estos mecanismos incluyen la asignación de responsables, la definición de indicadores, la gestión de recursos y la aplicación de actividades de seguimiento y medición.
    .row.justify-content-center.mb-0
      .col.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema1/img26.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 La aplicación del enfoque basado en procesos permite identificar la interacción entre las diferentes actividades organizacionales, facilitando la articulación entre áreas, la estandarización de procedimientos y la mejora continua del desempeño institucional. De esta manera, la organización logra orientar sus actividades hacia el cumplimiento de los objetivos estratégicos y los requisitos del Sistema de Gestión de la Calidad.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Modelo ISO 9001:2015 aplicado a procesos
    p.mb-5(data-aos="fade-down") La Norma ISO 9001:2015 establece el enfoque basado en procesos como uno de los fundamentos para la implementación y mantenimiento del Sistema de Gestión de la Calidad. Este modelo permite comprender la organización como un sistema integrado en el que las actividades se desarrollan de manera articulada para generar resultados que satisfagan las necesidades de las partes interesadas.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img27.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") Desde versiones anteriores, la norma ha promovido la gestión por procesos; sin embargo, en su versión 2015 se fortalece este enfoque mediante la integración del contexto organizacional, el liderazgo, el pensamiento basado en riesgos y la mejora continua. En este sentido, el numeral 4.4 establece que la organización debe determinar los procesos necesarios para el Sistema de Gestión de la Calidad, así como su interacción, control y seguimiento.
        p.mb-0(data-aos="fade-down") La aplicación del modelo ISO 9001:2015 implica reconocer que los procesos ya existen dentro de la organización. Por lo tanto, el principal desafío consiste en identificarlos, analizarlos y gestionarlos de manera estructurada, priorizando aquellos que tienen mayor impacto en el cumplimiento de los objetivos estratégicos y en la satisfacción del cliente.
    p.mb-5(data-aos="fade-down") Para realizar la identificación y selección de los procesos, la organización debe analizar diferentes factores que permiten determinar su relevancia dentro del sistema. Entre los principales se encuentran:
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img28.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img29.svg", alt="alt").img100.m-auto
              p Influencia en la satisfacción del cliente.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img30.svg", alt="alt").img100.m-auto
              p Impacto en la calidad de los productos o servicios.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img31.svg", alt="alt").img100.m-auto
              p Relación con los factores críticos de éxito.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img32.svg", alt="alt").img100.m-auto
              p Contribución al cumplimiento de la misión y la estrategia organizacional.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img33.svg", alt="alt").img100.m-auto
              p Cumplimiento de requisitos legales y reglamentarios.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img34.svg", alt="alt").img100.m-auto
              p Nivel de riesgos asociados al proceso.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img35.svg", alt="alt").img100.m-auto
              p Uso y disponibilidad de recursos.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Una vez identificados los procesos, la organización debe establecer una estructura que permita representar su relación e interacción. Esta representación se conoce como mapa de procesos, el cual facilita la comprensión del funcionamiento organizacional y permite identificar responsabilidades, flujos de información y relaciones entre actividades.
            .col.col-lg-2.col-auto.order-lg-1.order-1.mb-3
              figure
                img(src='@/assets/curso/tema1/img36.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La Norma ISO 9001:2015 no establece un modelo único de clasificación de procesos; sin embargo, comúnmente las organizaciones los agrupan en tres categorías principales:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema1/img37.svg", alt="alt").img130.m-auto
          h4.text-center Procesos estratégicos
          p.mb-0 Orientados a la dirección y planificación organizacional, incluyendo la definición de políticas, objetivos y estrategias institucionales.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema1/img38.svg", alt="alt").img130.m-auto
          h4.text-center Procesos operativos o misionales
          p.mb-0 Relacionados directamente con la prestación del servicio o la elaboración del producto, constituyendo la razón de ser de la organización.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema1/img39.svg", alt="alt").img130.m-auto
          h4.text-center Procesos de soporte o apoyo
          p.mb-0 Brindan soporte a los procesos operativos mediante la gestión de recursos, talento humano, infraestructura, tecnología y control documental.
    p.mb-4(data-aos="fade-down") Para garantizar la adecuada gestión de los procesos, es necesario analizar sus interrelaciones, identificando las entradas que reciben, las salidas que generan, los recursos que utilizan y los responsables de su ejecución. Este análisis permite fortalecer el control organizacional, optimizar la toma de decisiones y facilitar la mejora continua.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") La aplicación del modelo ISO 9001:2015 promueve una visión sistémica de la organización, permitiendo articular la planificación, operación, evaluación y mejora de los procesos, contribuyendo al fortalecimiento del desempeño institucional y al cumplimiento de los requisitos del Sistema de Gestión de la Calidad.
            .col.col-lg-2.col-auto.order-lg-2.order-1
              figure
                img(src='@/assets/curso/tema1/img40.svg', alt='Imagen decorativa')
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Mapa de procesos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img41.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El mapa de procesos es una representación gráfica que permite identificar, organizar y representar la interacción entre los procesos que conforman el Sistema de Gestión de la Calidad de una organización. Esta herramienta facilita comprender cómo se articulan las actividades institucionales, permitiendo establecer relaciones entre los procesos, identificar responsabilidades y analizar el flujo de valor orientado al cumplimiento de los objetivos organizacionales y la satisfacción de las partes interesadas.
    p.mb-5(data-aos="fade-down") De acuerdo con el enfoque basado en procesos promovido por la Norma ISO 9001:2015, los procesos organizacionales suelen agruparse en tres categorías principales:
    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Procesos estratégicos o de gestión")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img42.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Corresponden a los procesos relacionados con el direccionamiento institucional, la formulación de políticas, la planeación estratégica, el análisis del contexto organizacional y la toma de decisiones. Estos procesos orientan el funcionamiento general de la organización y establecen los lineamientos para el desarrollo de los procesos operativos y de apoyo.
      .py-3.py-md-4(titulo="Procesos operativos o misionales")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img43.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Se relacionan directamente con la generación de productos o la prestación de servicios que aportan valor al cliente. Estos procesos comprenden desde la identificación de necesidades y requisitos del cliente hasta la entrega del producto o servicio y la evaluación de su satisfacción. Generalmente, ocupan la parte central del mapa de procesos y varían según la naturaleza y actividad económica de la organización. Entre los ejemplos de procesos operativos se encuentran:
            .tarjeta.tarjeta--blanca.p-3
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Gestión de requerimientos del cliente.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Planificación y ejecución del servicio.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Desarrollo de productos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Evaluación de resultados.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Entrega del producto o servicio.
      .py-3.py-md-4(titulo="Procesos de soporte o apoyo")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img44.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            p Son aquellos procesos que proporcionan los recursos necesarios para el funcionamiento de los procesos estratégicos y operativos. Incluyen la gestión del talento humano, la administración de recursos financieros, la infraestructura, la tecnología, la gestión documental y los sistemas de medición y seguimiento. En algunos casos, estas actividades pueden ser tercerizadas sin afectar la misión principal de la organización.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img45.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C02.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") El mapa de procesos permite evidenciar la secuencia e interacción entre los procesos, facilitando el análisis de entradas, salidas, responsables y recursos asociados. Asimismo, contribuye a mejorar la trazabilidad de las actividades, verificar la coherencia entre los procesos y fortalecer la gestión organizacional.
        .row.justify-content-center
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") Aunque la Norma ISO 9001:2015 no exige la elaboración de un manual de calidad, muchas organizaciones lo utilizan como un medio para estructurar la información documentada del sistema, incluyendo el mapa de procesos como una herramienta de referencia para comprender el funcionamiento integral del Sistema de Gestión de la Calidad.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img46.svg', alt='Imagen decorativa')
        .row.justify-content-center
          .col.col-12.order-lg-1.order-2
            .cajon.cajon.C01.p-3
              p.mb-0(data-aos="fade-down") La versión 2015 de la norma introduce cambios importantes en la gestión organizacional, incorporando el enfoque basado en riesgos y fortaleciendo aspectos como la gestión del conocimiento organizacional y la gestión del cambio. Estos elementos pueden reflejarse dentro del mapa de procesos, dependiendo del nivel de madurez del sistema y de las necesidades estratégicas de la organización.
    p.mb-5(data-aos="fade-down") Una vez identificados los procesos, es necesario documentarlos y describir su funcionamiento mediante diferentes herramientas, tales como:
    .row.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img47.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Procedimientos documentados.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img48.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Diagramas de flujo.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img49.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Instructivos, listas de verificación o registros operativos.
    .row.justify-content-center.mb-4
      .col.col-lg-9.order-lg-2.order-2
        .cajon.cajon.C02.px-3.py-2
          p(data-aos="fade-down") La documentación de los procesos debe orientarse a facilitar su comprensión, promover el trabajo colaborativo y garantizar la eficiencia en la gestión organizacional, evitando la generación de información innecesaria.
      .col.col-lg-1.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img50.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.text-center(data-aos="fade-down") A continuación, se presenta el mapa de procesos dentro del Sistema de Gestión de la Calidad.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Mapa de procesos
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/tema1/img51.svg', alt='La figura 2 representa un mapa de procesos del Sistema de Gestión de la Calidad que organiza los procesos en tres grupos: procesos estratégicos, que orientan el direccionamiento y la planificación organizacional; procesos operativos, relacionados con la prestación del servicio o elaboración del producto; y procesos de soporte, que suministran los recursos necesarios para el funcionamiento del sistema.')
      .col-12.movil
        figure.mb-4
          img(src='@/assets/curso/tema1/img51_.svg', alt='La figura 2 representa un mapa de procesos del Sistema de Gestión de la Calidad que organiza los procesos en tres grupos: procesos estratégicos, que orientan el direccionamiento y la planificación organizacional; procesos operativos, relacionados con la prestación del servicio o elaboración del producto; y procesos de soporte, que suministran los recursos necesarios para el funcionamiento del sistema.')
        a.anexo(:href="obtenerLink('/downloads/Anexo_Mapa_de_procesos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Figura 2. Mapa de procesos
    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Mejora de procesos
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img52.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") La mejora de procesos constituye una práctica fundamental dentro del Sistema de Gestión de la Calidad, ya que permite optimizar el desempeño organizacional, fortalecer la eficiencia operativa y garantizar el cumplimiento de los requisitos establecidos por los clientes y las partes interesadas. En el marco de la NTC ISO 9001, la mejora de procesos se orienta a la identificación, análisis y perfeccionamiento permanente de las actividades que conforman el sistema.
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") La mejora de procesos implica evaluar de manera sistemática cómo se desarrollan las actividades, identificar oportunidades de optimización y aplicar acciones que permitan reducir errores, eliminar actividades que no generan valor y aumentar la calidad de los productos o servicios ofrecidos. Este enfoque favorece la toma de decisiones basada en evidencias y contribuye al fortalecimiento de la competitividad organizacional.
    p.mb-5(data-aos="fade-down") Dentro del Sistema de Gestión de la Calidad, la mejora de procesos se apoya en el análisis de información proveniente de diferentes fuentes, entre ellas:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Resultados de auditorías internas y externas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Evaluaciones de desempeño de los procesos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Medición de indicadores de gestión.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Análisis de quejas, reclamos y satisfacción del cliente.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Identificación de riesgos y oportunidades.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Evaluación de no conformidades.
      .col-lg-5.col-8.col-md-7.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema1/img53.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La aplicación de acciones de mejora puede desarrollarse mediante diferentes estrategias, tales como la optimización de procedimientos, la actualización de metodologías de trabajo, la incorporación de tecnologías, el fortalecimiento de competencias del talento humano y el rediseño de procesos organizacionales.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La mejora de procesos se encuentra estrechamente relacionada con el ciclo PHVA, ya que permite planificar cambios, implementar acciones, evaluar resultados y establecer ajustes orientados al perfeccionamiento continuo. De esta manera, se promueve una cultura organizacional basada en la calidad, el aprendizaje permanente y la innovación, favoreciendo la sostenibilidad y el crecimiento institucional.
            .col.col-lg-2.col-auto.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema1/img54.svg', alt='Imagen decorativa')
    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 Requisitos para mejorar los procesos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img55.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La mejora de los procesos dentro del Sistema de Gestión de la Calidad requiere el cumplimiento de una serie de lineamientos que permiten garantizar que las acciones implementadas sean planificadas, controladas y orientadas al logro de resultados sostenibles. La NTC ISO 9001 establece que las organizaciones deben determinar, implementar y mantener procesos eficaces que contribuyan al mejoramiento del desempeño y al cumplimiento de los requisitos aplicables.
    p.mb-5(data-aos="fade-down") Para lograr una mejora efectiva, es necesario que la organización considere los siguientes requisitos:
    .cajon.cajon.C04.p-5.mb-5
      SlyderB(:datos="datosSlyder")
    p.mb-0(data-aos="fade-down") El cumplimiento de estos requisitos permite que la mejora de los procesos sea sistemática, verificable y alineada con los objetivos estratégicos de la organización, fortaleciendo la eficiencia operativa, la satisfacción del cliente y la confiabilidad del Sistema de Gestión de la Calidad.
    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.8 Mejora continua y la organización
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img63.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") La mejora continua constituye un principio fundamental del Sistema de Gestión de la Calidad, orientado a fortalecer el desempeño organizacional mediante la optimización permanente de los procesos, productos y servicios. Este enfoque permite a las organizaciones adaptarse a los cambios del entorno, responder a las necesidades de las partes interesadas y consolidar una cultura de calidad basada en el aprendizaje y la innovación.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img64.svg', alt='Imagen decorativa')
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") La NTC ISO 9001 promueve la mejora continua como una actividad sistemática que involucra la planificación, ejecución, evaluación y ajuste de las actividades organizacionales. Para ello, se apoya en herramientas metodológicas como el ciclo PHVA, el análisis de datos, las auditorías internas, la revisión por la dirección y la gestión de acciones correctivas.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Ciclo PHVA aplicado a la mejora continua organizacional
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img65.svg', alt='En la figura 3 se presenta el ciclo PHVA conformado por cuatro etapas interrelacionadas: planear, hacer, verificar y actuar, orientadas al mejoramiento continuo de los procesos organizacionales.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img66.svg', alt='En la figura 3 se presenta el ciclo PHVA conformado por cuatro etapas interrelacionadas: planear, hacer, verificar y actuar, orientadas al mejoramiento continuo de los procesos organizacionales.')
    p(data-aos="fade-down") La mejora continua no depende únicamente de la aplicación de herramientas técnicas, sino también del compromiso del liderazgo, la participación del talento humano y la adecuada gestión del conocimiento organizacional. Cuando la mejora se integra a la cultura institucional, se favorece la toma de decisiones basada en evidencia, la optimización de recursos y el incremento de la satisfacción del cliente.
    p.mb-5(data-aos="fade-down") A continuación, se presentan algunos elementos que facilitan la implementación de la mejora continua dentro de la organización:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Implementación de la mejora continua
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Elemento
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Liderazgo organizacional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Promueve la cultura de calidad, orienta la estrategia y facilita la asignación de recursos para la mejora.
              tr
                td(data-aos="fade-down") Participación del personal.
                td(data-aos="fade-down") Permite identificar oportunidades de mejora a partir de la experiencia y conocimiento de quienes ejecutan los procesos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluación del desempeño.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Facilita el análisis de resultados mediante indicadores, auditorías y seguimiento de metas.
              tr
                td(data-aos="fade-down") Gestión del conocimiento.
                td(data-aos="fade-down") Favorece la transferencia de experiencias, lecciones aprendidas y buenas prácticas organizacionales.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Innovación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Impulsa la implementación de nuevas estrategias, tecnologías y metodologías que optimizan los procesos.
              tr
                td(data-aos="fade-down") Enfoque al cliente.
                td(data-aos="fade-down") Permite ajustar los procesos y servicios según las necesidades y expectativas de las partes interesadas.
    .row.justify-content-center.mb-0
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema1/img67.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 La mejora continua contribuye al fortalecimiento del Sistema de Gestión de la Calidad al generar procesos más eficientes, reducir errores, optimizar el uso de recursos y aumentar la competitividad organizacional. De esta manera, se consolida un sistema dinámico que evoluciona conforme a las exigencias del entorno y a los objetivos estratégicos de la organización.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    datosSlyder: [
      {
        titulo: 'Identificación y análisis del proceso',
        texto:
          'Implica conocer claramente el propósito del proceso, sus actividades, responsables, recursos, entradas, salidas e interacciones con otros procesos.',
        imagen: require('@/assets/curso/tema1/img56.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Definición de criterios y métodos de control',
        texto:
          'Se deben establecer parámetros que permitan evaluar el desempeño del proceso, incluyendo indicadores de gestión, estándares de calidad y mecanismos de seguimiento.',
        imagen: require('@/assets/curso/tema1/img57.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gestión de riesgos y oportunidades',
        texto:
          'Se requiere identificar situaciones que puedan afectar el logro de los resultados esperados, estableciendo acciones preventivas y estrategias de mitigación.',
        imagen: require('@/assets/curso/tema1/img58.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Disponibilidad de recursos',
        texto:
          'La mejora de procesos demanda la asignación adecuada de recursos humanos, tecnológicos, financieros y de infraestructura que permitan su ejecución y control.',
        imagen: require('@/assets/curso/tema1/img59.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Seguimiento y medición del desempeño',
        texto:
          'Es necesario evaluar periódicamente los resultados obtenidos mediante el análisis de datos, auditorías, revisiones por la dirección y retroalimentación de las partes interesadas.',
        imagen: require('@/assets/curso/tema1/img60.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Implementación de acciones correctivas y de mejora',
        texto:
          'Cuando se identifican desviaciones, fallas u oportunidades de optimización, la organización debe establecer acciones que permitan eliminar las causas y prevenir su recurrencia.',
        imagen: require('@/assets/curso/tema1/img61.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gestión de la información documentada',
        texto:
          'Los procesos mejorados deben estar respaldados por registros y documentación que faciliten su control, trazabilidad y estandarización.',
        imagen: require('@/assets/curso/tema1/img62.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
