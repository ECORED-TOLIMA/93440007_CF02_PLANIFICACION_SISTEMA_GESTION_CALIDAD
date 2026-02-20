<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Operación en ISO 9001:2015
    p.mb-5(data-aos="fade-down") La operación constituye una fase esencial dentro del Sistema de Gestión de la Calidad, ya que en esta etapa se ejecutan los procesos necesarios para la provisión de productos y servicios que satisfacen los requisitos del cliente y las disposiciones normativas aplicables. La norma NTC ISO 9001:2015 establece en su capítulo 8 los lineamientos que orientan la planificación, ejecución y control de las actividades operativas, garantizando la coherencia entre lo planificado y lo ejecutado.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img01.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Este apartado aborda las disposiciones necesarias para asegurar que los procesos operacionales se desarrollen bajo condiciones controladas, considerando la identificación de requisitos, la gestión del diseño y desarrollo, el control de proveedores externos, la producción y provisión del servicio, así como la verificación y liberación de los productos y servicios. Asimismo, contempla la gestión de salidas no conformes, con el fin de prevenir la entrega de productos o servicios que no cumplan con los estándares establecidos.
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") La operación del Sistema de Gestión de la Calidad exige la definición de controles adecuados, la disponibilidad de recursos, la asignación de responsabilidades y la implementación de mecanismos de seguimiento que permitan evaluar el desempeño de los procesos. De esta manera, se asegura la trazabilidad de las actividades, el cumplimiento de los requisitos del cliente y la mejora del desempeño organizacional.
        p(data-aos="fade-down") La adecuada gestión de la operación permite a las organizaciones garantizar la consistencia en la prestación de sus servicios, optimizar el uso de recursos y fortalecer la confianza de las partes interesadas. Además, favorece la integración del enfoque basado en procesos y la aplicación del ciclo PHVA, promoviendo la mejora continua y el cumplimiento de los objetivos de calidad.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Planificación y control operacional (Numeral 8.1)
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img02.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p(data-aos="fade-down") La planificación y el control operacional constituyen un componente fundamental del Sistema de Gestión de la Calidad, ya que permiten asegurar que los procesos organizacionales se ejecuten de manera controlada, coherente y alineada con los requisitos del cliente y los lineamientos establecidos en la NTC ISO 9001:2015. Este numeral establece la necesidad de planificar, implementar y controlar los procesos necesarios para cumplir con los requisitos de los productos y servicios.
        .cajon.cajon.C01.p-4.mb-3.py-3
          p(data-aos="fade-down") La planificación operacional implica definir las actividades, recursos, responsabilidades, criterios de aceptación y métodos de control que garantizan la conformidad de los resultados. A su vez, el control operacional permite verificar que las actividades se desarrollen conforme a lo planificado, facilitando la detección de desviaciones y la aplicación de acciones correctivas o de mejora.
    .row.justify-content-center.mb-4
      .col.col-lg-11.order-lg-2.order-2
        p(data-aos="fade-down") Para asegurar el control operacional, la organización debe establecer criterios para la ejecución de los procesos, mantener información documentada que evidencie el cumplimiento de los requisitos y controlar los cambios que puedan afectar la calidad de los productos o servicios. Asimismo, debe garantizar que los procesos externalizados cumplan con las condiciones establecidas por el Sistema de Gestión de la Calidad.
      .col.col-lg-1.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img03.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") A continuación, se presenta un esquema general del proceso de planificación y control operacional:
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema5/img04.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img05.svg", alt="alt").img100.m-auto
              p Entradas (Requisitos del cliente, requisitos legales, políticas y objetivos de calidad).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img06.svg", alt="alt").img100.m-auto
              p Planificación operacional (Definición de actividades, recursos, responsables y criterios).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img07.svg", alt="alt").img100.m-auto
              p Ejecución del proceso (Producción o prestación del servicio).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img08.svg", alt="alt").img100.m-auto
              p Seguimiento y control (Indicadores, auditorías, verificación de resultados).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img09.svg", alt="alt").img100.m-auto
              p Salidas (Producto o servicio conforme).
    p.mb-5(data-aos="fade-down") Posteriormente, se presentan los principales elementos que facilitan la planificación y el control operacional dentro del Sistema de Gestión de la Calidad:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Elementos de la planificación y control operacional
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Elemento
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Definición de actividades.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identifica las tareas necesarias para cumplir los requisitos del producto o servicio.
              tr
                td(data-aos="fade-down") Establecimiento de criterios.
                td(data-aos="fade-down") Define parámetros de calidad, aceptación y control para los procesos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asignación de recursos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Determina talento humano, infraestructura, tecnología e insumos requeridos.
              tr
                td(data-aos="fade-down") Responsables del proceso.
                td(data-aos="fade-down") Establece roles y funciones para la ejecución y supervisión de las actividades.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Información documentada.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Registra procedimientos, instructivos y evidencias del cumplimiento de los procesos.
              tr
                td(data-aos="fade-down") Seguimiento y control.
                td(data-aos="fade-down") Permite verificar el cumplimiento de requisitos mediante indicadores, auditorías y revisiones.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gestión del cambio.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa y controla modificaciones que puedan afectar la operación o la calidad.
              tr
                td(data-aos="fade-down") Control de procesos externalizados.
                td(data-aos="fade-down") Asegura que proveedores y servicios externos cumplan los requisitos establecidos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La correcta aplicación de la planificación y el control operacional contribuye al cumplimiento de los objetivos organizacionales, fortalece la eficiencia de los procesos y garantiza la satisfacción de las partes interesadas. De esta manera, se consolida un enfoque sistemático que permite gestionar la operación bajo criterios de calidad, control y mejora continua.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Requisitos para productos y servicios (Numeral 8.2)
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img10.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C01.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") El numeral 8.2 de la NTC ISO 9001:2015 establece los lineamientos para determinar, revisar y comunicar los requisitos relacionados con los productos y servicios ofrecidos por la organización. Su propósito es garantizar que las necesidades y expectativas del cliente, así como los requisitos legales y reglamentarios aplicables, sean comprendidos y cumplidos antes de la entrega del producto o la prestación del servicio.
        p(data-aos="fade-down") La organización debe establecer mecanismos que permitan identificar de manera clara los requisitos del cliente, incluyendo aquellos que no estén expresados explícitamente, pero que sean necesarios para el uso previsto del producto o servicio. Asimismo, debe considerar los requisitos legales, normativos y organizacionales que influyen en la conformidad del resultado final.
        .row.justify-content-center
          .col.col-lg-10.order-lg-2.order-2
            .cajon.cajon.C02.p-4.mb-3.py-3
              p.mb-0(data-aos="fade-down") Dentro de este proceso, resulta fundamental mantener una comunicación efectiva con el cliente, con el fin de obtener información precisa sobre sus necesidades, resolver inquietudes, gestionar cambios y asegurar la retroalimentación sobre el desempeño del producto o servicio. Esta comunicación contribuye a fortalecer la relación con las partes interesadas y a prevenir errores o inconformidades.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/img11.svg', alt='Imagen decorativa')
    p(data-aos="fade-down") Antes de comprometerse a suministrar un producto o servicio, la organización debe realizar una revisión de los requisitos para confirmar que cuenta con la capacidad técnica, operativa y administrativa para cumplirlos. Cuando se presenten cambios en los requisitos, estos deben ser documentados, comunicados y controlados para evitar impactos negativos en la calidad.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los elementos clave que orientan la gestión de los requisitos para productos y servicios:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Gestión de requisitos para productos y servicios
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Elemento
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificación de requisitos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Determina necesidades del cliente, requisitos legales y condiciones organizacionales aplicables.
              tr
                td(data-aos="fade-down") Comunicación con el cliente.
                td(data-aos="fade-down") Facilita la recopilación de información, atención de solicitudes, gestión de cambios y retroalimentación.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisión de requisitos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Verifica la viabilidad técnica, operativa y administrativa para cumplir con los compromisos adquiridos.
              tr
                td(data-aos="fade-down") Confirmación de requisitos.
                td(data-aos="fade-down") Formaliza acuerdos con el cliente antes de iniciar la producción o prestación del servicio.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gestión de cambios.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Controla modificaciones en los requisitos para garantizar la conformidad del producto o servicio.
              tr
                td(data-aos="fade-down") Información documentada.
                td(data-aos="fade-down") Registra evidencias de los requisitos establecidos, revisiones realizadas y acuerdos con el cliente.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La adecuada gestión de los requisitos permite prevenir reprocesos, reducir riesgos operacionales y mejorar la satisfacción del cliente. De esta manera, la organización fortalece su capacidad para entregar productos y servicios conformes, alineados con los objetivos del Sistema de Gestión de la Calidad y con las necesidades del entorno.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Diseño y desarrollo de productos y servicios (Numeral 8.3)
    p.mb-5(data-aos="fade-down") El numeral 8.3 de la NTC ISO 9001:2015 establece los lineamientos para planificar, controlar y desarrollar el diseño y desarrollo de productos y servicios, con el fin de garantizar que los resultados cumplan los requisitos del cliente, los requisitos legales y las condiciones definidas por la organización.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El diseño y desarrollo permite transformar las necesidades y expectativas del cliente en características técnicas, especificaciones y procesos que aseguren la conformidad del producto o servicio. Para ello, la organización debe planificar las etapas del diseño, definir responsabilidades, establecer controles y gestionar los riesgos asociados al proceso.
    .row.justify-content-center.mb-4
      .col.col-lg-8.order-lg-2.order-2
        .cajon.cajon.C01.color-secundario.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") Durante el diseño y desarrollo, es necesario considerar aspectos como la revisión, verificación y validación de los resultados, con el propósito de asegurar que el producto o servicio cumpla con los requisitos establecidos antes de su implementación o entrega. Asimismo, la organización debe controlar los cambios que puedan surgir durante el proceso, garantizando que estos sean evaluados, aprobados y documentados.
      .col.col-lg-2.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img13.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") El proceso de diseño y desarrollo se estructura generalmente en una secuencia de etapas que permiten transformar las necesidades del cliente en resultados conformes, tal como se presenta a continuación:
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema5/img14.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img15.svg", alt="alt").img100.m-auto
              p Planificación del diseño y desarrollo
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img16.svg", alt="alt").img100.m-auto
              p Entradas del diseño
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Requisitos del cliente
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Requisitos legales
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Información técnica
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img17.svg", alt="alt").img100.m-auto
              p Actividades de diseño y desarrollo
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img18.svg", alt="alt").img100.m-auto
              p Revisión del diseño
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img19.svg", alt="alt").img100.m-auto
              p Verificación
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema5/img20.svg", alt="alt").img100.m-auto
              p Validación
    p.mb-0(data-aos="fade-down") La aplicación de controles en el diseño y desarrollo permite reducir riesgos, prevenir errores y asegurar que los productos y servicios satisfagan las necesidades del cliente. De esta manera, la organización fortalece su capacidad de innovación, mejora la calidad de sus resultados y garantiza el cumplimiento de los requisitos del Sistema de Gestión de la Calidad.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Control de procesos, productos y servicios externos (Numeral 8.4)
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img21.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") El numeral 8.4 de la NTC ISO 9001:2015 establece los requisitos para asegurar que los procesos, productos y servicios suministrados por proveedores externos cumplan con las condiciones definidas por la organización y los requisitos del cliente. Este control es fundamental para garantizar la calidad del producto o servicio final, ya que muchos procesos dependen de recursos, insumos o actividades realizadas por terceros.
        p(data-aos="fade-down") La organización debe determinar qué procesos, productos o servicios requieren ser suministrados externamente y establecer criterios para su evaluación, selección, seguimiento y reevaluación. Estos controles permiten asegurar que los proveedores externos mantengan niveles adecuados de desempeño y cumplimiento de los requisitos establecidos.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-9.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") El control de los procesos externos implica definir claramente las especificaciones técnicas, los criterios de aceptación, los métodos de verificación y las responsabilidades asociadas a la provisión del producto o servicio. Asimismo, es necesario establecer mecanismos de comunicación con los proveedores para garantizar la comprensión de los requisitos, incluyendo aspectos relacionados con calidad, tiempos de entrega, cumplimiento legal y desempeño esperado.
            .col.col-lg-auto.col-auto.order-lg-1.order-1.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img22.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12
        p.mb-0(data-aos="fade-down") Entre las actividades que permiten ejercer control sobre los proveedores externos, se destacan:
    .row.mb-4.justify-content-center
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img23.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Verificación de los productos o servicios recibidos antes de su utilización.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Evaluación y selección de proveedores con base en criterios previamente definidos.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Seguimiento del desempeño mediante indicadores de calidad, cumplimiento y confiabilidad.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img26.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Reevaluación periódica del proveedor para asegurar el mantenimiento de los estándares establecidos.
      .col.col-lg-4.col-12.col-lg.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img27.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Registro y documentación de los resultados de evaluación y seguimiento.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El control adecuado de los procesos, productos y servicios externos contribuye a reducir riesgos, prevenir no conformidades y fortalecer la confiabilidad de la cadena de suministro. De esta manera, se asegura la continuidad operativa, la satisfacción del cliente y el cumplimiento de los requisitos del Sistema de Gestión de la Calidad.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Producción y provisión del servicio (Numeral 8.5)
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img28.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p(data-aos="fade-down") El numeral 8.5 de la NTC ISO 9001:2015 establece los lineamientos para garantizar que la producción de bienes y la prestación de servicios se realicen bajo condiciones controladas, asegurando el cumplimiento de los requisitos establecidos por la organización y por el cliente. Este control permite que las actividades operacionales se desarrollen de manera planificada, estandarizada y verificable, contribuyendo a la calidad del producto o servicio final.
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") La organización debe implementar controles que aseguren la disponibilidad de información documentada que describa las características del producto o servicio, los resultados esperados y los procedimientos necesarios para su ejecución. Asimismo, debe garantizar la disponibilidad y el adecuado uso de recursos, infraestructura, equipos de medición y personal competente.
    p.mb-5(data-aos="fade-down") Para asegurar el control de la producción y provisión del servicio, la organización debe considerar, entre otros, los siguientes aspectos:
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-9.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Disponibilidad de instrucciones de trabajo, especificaciones técnicas y procedimientos operativos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Uso de equipos y herramientas adecuadas para la ejecución de las actividades.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Implementación de actividades de seguimiento y medición en las etapas pertinentes del proceso.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Control de los cambios que puedan afectar la producción o la prestación del servicio.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Identificación y trazabilidad de los productos o servicios cuando sea necesario.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Protección y preservación de los productos durante su elaboración, almacenamiento y entrega.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 7
              | Validación de procesos cuando los resultados no pueden verificarse posteriormente mediante medición o inspección.
      .col-lg-3.col-8.col-md-7.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema5/img29.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-9.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") El control de la producción y provisión del servicio también contempla la gestión de la propiedad del cliente o de proveedores externos, asegurando su adecuada identificación, protección y conservación mientras esté bajo responsabilidad de la organización.
            .col.col-lg-auto.col-auto.order-lg-1.order-1.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img30.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La correcta aplicación de este numeral permite garantizar la uniformidad en los procesos, reducir errores operativos, optimizar el uso de recursos y fortalecer la confianza del cliente. De esta manera, se asegura que los productos y servicios entregados cumplan consistentemente con los requisitos establecidos y con los objetivos del Sistema de Gestión de la Calidad.
    separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Liberación de productos y servicios (Numeral 8.6)
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img31.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La liberación de productos y servicios corresponde al proceso mediante el cual la organización verifica y confirma que los resultados obtenidos cumplen los requisitos establecidos antes de su entrega al cliente. Este proceso garantiza que los productos o servicios cumplen con los criterios de aceptación definidos, asegurando la conformidad con las especificaciones técnicas, normativas y contractuales.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") De acuerdo con la NTC ISO 9001:2015, la organización debe implementar controles que permitan verificar el cumplimiento de los requisitos mediante inspecciones, ensayos, revisiones técnicas o validaciones, según corresponda. La liberación solo puede realizarse cuando exista evidencia documentada que confirme que los criterios establecidos han sido cumplidos, y debe ser autorizada por personal competente.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img32.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 Este proceso permite reducir riesgos asociados a la entrega de productos o servicios no conformes, fortalece la confianza del cliente y contribuye al cumplimiento de los objetivos de calidad. Asimismo, facilita la trazabilidad de la información relacionada con las verificaciones realizadas y las decisiones tomadas durante el proceso.
    p.mb-5(data-aos="fade-down") Para facilitar la comprensión del proceso de liberación, se puede representar mediante un esquema que evidencia la secuencia de verificación, evaluación de criterios, autorización y entrega del producto o servicio.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Proceso de liberación de productos y servicios
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img33.svg', alt='La figura 8 presenta el proceso de liberación de productos y servicios. Inicia con la ejecución del producto o prestación del servicio, seguido de la verificación del cumplimiento de requisitos y la evaluación de los criterios de aceptación. Si el producto o servicio cumple los requisitos, se autoriza su liberación y se entrega al cliente. Si no cumple, se aplica el control de salidas no conformes, se realizan correcciones o reprocesos y se efectúa una nueva verificación antes de la liberación.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema5/img34.svg', alt='La figura 8 presenta el proceso de liberación de productos y servicios. Inicia con la ejecución del producto o prestación del servicio, seguido de la verificación del cumplimiento de requisitos y la evaluación de los criterios de aceptación. Si el producto o servicio cumple los requisitos, se autoriza su liberación y se entrega al cliente. Si no cumple, se aplica el control de salidas no conformes, se realizan correcciones o reprocesos y se efectúa una nueva verificación antes de la liberación.')
    separador
    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.7 Control de salidas no conformes (Numeral 8.7)
    p.mb-5(data-aos="fade-down") El control de salidas no conformes corresponde al conjunto de actividades orientadas a identificar, gestionar y corregir productos o servicios que no cumplen los requisitos establecidos. Este proceso permite prevenir la entrega de resultados que puedan afectar la satisfacción del cliente, el cumplimiento normativo o el desempeño del Sistema de Gestión de la Calidad.
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") La NTC ISO 9001:2015 establece que la organización debe asegurarse de que las salidas que no cumplen los requisitos sean identificadas y controladas para evitar su uso o entrega no intencional. Para ello, se deben implementar mecanismos que permitan detectar oportunamente las no conformidades, registrar la información asociada y definir las acciones necesarias para su tratamiento.
      .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img35.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema5/img36.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p(data-aos="fade-down") El control de salidas no conformes puede implicar diferentes tipos de tratamiento según la naturaleza de la desviación identificada. Entre las acciones más comunes se encuentran la corrección del producto o servicio, el reproceso, la reclasificación, la autorización mediante concesión o, en algunos casos, la eliminación del producto o la suspensión del servicio. Estas decisiones deben basarse en criterios técnicos, normativos y organizacionales, garantizando la trazabilidad y el registro de la información documentada.
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") La gestión adecuada de las salidas no conformes contribuye a la mejora continua del sistema, ya que permite identificar causas raíz, prevenir la recurrencia de fallas y fortalecer los controles operacionales. Asimismo, facilita la toma de decisiones basada en evidencias, promoviendo la confiabilidad de los procesos y la satisfacción de las partes interesadas.
        p(data-aos="fade-down") Para comprender el tratamiento de las salidas no conformes dentro del Sistema de Gestión de la Calidad, se presenta el siguiente esquema:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Control de salidas no conformes
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img37.svg', alt='La figura 9 describe el proceso de control de salidas no conformes. Inicia con la identificación de una desviación, seguida del registro y análisis de la no conformidad. Posteriormente, se evalúa el impacto y se define el tratamiento, que puede incluir corrección, reproceso, reclasificación, concesión autorizada o eliminación del producto o servicio. Finalmente, se verifica la conformidad, se libera el producto o se cierra el caso, y se analizan las causas para implementar acciones de mejora.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema5/img38.svg', alt='La figura 9 describe el proceso de control de salidas no conformes. Inicia con la identificación de una desviación, seguida del registro y análisis de la no conformidad. Posteriormente, se evalúa el impacto y se define el tratamiento, que puede incluir corrección, reproceso, reclasificación, concesión autorizada o eliminación del producto o servicio. Finalmente, se verifica la conformidad, se libera el producto o se cierra el caso, y se analizan las causas para implementar acciones de mejora.')
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
