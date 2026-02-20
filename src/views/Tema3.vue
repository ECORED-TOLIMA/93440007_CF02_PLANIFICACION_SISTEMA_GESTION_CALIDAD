<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Métodos de solución de problemas y mejora
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La solución de problemas y la mejora constituyen actividades fundamentales dentro del Sistema de Gestión de la Calidad, ya que permiten identificar desviaciones, analizar sus causas y establecer acciones que optimicen el desempeño organizacional. Estos métodos facilitan la toma de decisiones basada en información objetiva, promoviendo la eficiencia de los procesos y el cumplimiento de los requisitos establecidos por la organización y las partes interesadas.
    p.mb-5(data-aos="fade-down") Los métodos de solución de problemas proporcionan herramientas estructuradas que permiten analizar situaciones complejas, priorizar causas, generar alternativas de solución y evaluar los resultados obtenidos. Su aplicación favorece la reducción de errores, el fortalecimiento del control de procesos y la consolidación de la mejora continua como práctica organizacional.
    p.mb-5(data-aos="fade-down") Dentro del Sistema de Gestión de la Calidad, estos métodos se utilizan para:
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/img02.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img03.svg", alt="alt").img100.m-auto
              p Identificar y analizar problemas que afectan la calidad de los productos o servicios.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img04.svg", alt="alt").img100.m-auto
              p Determinar las causas que originan las desviaciones o no conformidades.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img05.svg", alt="alt").img100.m-auto
              p Priorizar acciones de intervención según su impacto en los procesos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img06.svg", alt="alt").img100.m-auto
              p Proponer soluciones basadas en análisis técnico y participación del equipo de trabajo.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img07.svg", alt="alt").img100.m-auto
              p Evaluar la eficacia de las acciones implementadas y su contribución al mejoramiento continuo.
    p.mb-5(data-aos="fade-down") La aplicación de estos métodos requiere la participación del talento humano, el análisis de datos confiables y el uso de herramientas gráficas y estadísticas que faciliten la comprensión de la información. Entre los métodos más utilizados se encuentran el jurado de opinión o selección ponderada, el diagrama de Pareto, el diagrama causa-efecto, la tormenta de ideas, el diagrama de dispersión y la metodología Seis Sigma, los cuales permiten abordar los problemas desde diferentes enfoques analíticos.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-9.order-lg-2.order-2
        .tarjeta.tarjeta--C01.px-4.py-2
          p(data-aos="fade-down") El uso sistemático de estas herramientas fortalece la cultura de mejora organizacional, contribuye a la prevención de errores y permite optimizar los recursos disponibles, garantizando la sostenibilidad y competitividad de la organización.
      .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img08.svg', alt='Imagen decorativa')
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Jurado de opinión o selección ponderada
    p.mb-5(data-aos="fade-down") El jurado de opinión, también conocido como selección ponderada, es un método estructurado de toma de decisiones que permite evaluar diferentes alternativas mediante la asignación de criterios y pesos de importancia. Esta herramienta facilita la elección de la opción más adecuada cuando existen varias soluciones posibles para un problema o cuando se requiere priorizar acciones de mejora.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema3/img09.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") Este método se basa en la participación de un grupo de expertos o integrantes del equipo de trabajo que analizan las alternativas desde diferentes perspectivas. La selección ponderada permite reducir la subjetividad en la toma de decisiones, ya que cada alternativa es valorada con base en criterios previamente definidos y en su impacto sobre los objetivos organizacionales.
        p(data-aos="fade-down") El jurado de opinión se utiliza frecuentemente en procesos de mejora, selección de proveedores, priorización de proyectos, evaluación de riesgos y definición de estrategias, permitiendo comparar opciones de manera objetiva y sistemática.
    p.mb-5(data-aos="fade-down") A continuación, se describen los pasos que facilitan su aplicación práctica dentro de la organización:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definir el problema o decisión a tomar")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establece claramente la situación que requiere análisis, identificando las alternativas posibles de solución o acción.
          .row(numero="2" titulo="Establecer los criterios de evaluación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se determinan los aspectos que serán analizados para comparar las alternativas. Estos criterios pueden incluir costos, impacto en la calidad, tiempo de implementación, riesgos, satisfacción del cliente, entre otros.
          .row(numero="3" titulo="Asignar un peso a cada criterio")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se define el nivel de importancia de cada criterio según su influencia en la decisión. Generalmente, los pesos se expresan en porcentajes o valores numéricos.
          .row(numero="4" titulo="Evaluar cada alternativa")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cada alternativa se califica frente a los criterios establecidos, utilizando escalas numéricas que permiten medir su desempeño.
          .row(numero="5" titulo="Calcular la puntuación ponderada")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se multiplica la calificación obtenida por cada alternativa por el peso del criterio correspondiente y se suman los resultados.
          .row(numero="6" titulo="Seleccionar la alternativa con mayor puntuación")
            .col-12.mb-4.mb-md-0
              p.mb-0 La opción con el mayor resultado ponderado representa la alternativa más favorable para la organización.
      .col-lg-6.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img10.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Para aplicar este método, se plantea el siguiente caso:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.order-lg-1.order-1.g-0
        figure
          img(src='@/assets/curso/tema3/img11.png', alt='Imagen decorativa')
      .col.col-lg-8.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C08.px-4.py-2
              p(data-aos="fade-down") 
              .row.justify-content-center
                .col.col-12
                  p.mb-2(data-aos="fade-down") Una organización desea seleccionar el mejor proveedor para el suministro de insumos. Para ello, establece tres criterios de evaluación: calidad del producto, costo y tiempo de entrega. Posteriormente, asigna un peso a cada criterio según su importancia estratégica.
                  .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
                    .row.justify-content-center(data-aos="flip-up")
                      .col
                        .titulo-sexto.color-acento-contenido
                          h5 Tabla 5.
                          span Caso práctico
                        .tabla-a.color-acento-contenido
                          table
                            thead
                              tr
                                th(data-aos="fade-down")(style= "width: 20%") Criterio
                                th(data-aos="fade-down")(style= "width: 20%") Peso
                                th(data-aos="fade-down")(style= "width: 20%") Proveedor A
                                th(data-aos="fade-down")(style= "width: 20%") Proveedor B
                                th(data-aos="fade-down")(style= "width: 20%") Proveedor C
                            tbody
                              tr
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") Calidad
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 40 %
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 4
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 5
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 3
                              tr
                                td(data-aos="fade-down") Costo
                                td(data-aos="fade-down") 35 %
                                td(data-aos="fade-down") 5
                                td(data-aos="fade-down") 3
                                td(data-aos="fade-down") 4
                              tr
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo de entrega
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 25 %
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 3
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 4
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 5
                  p.mb-0(data-aos="fade-down") Después de realizar el cálculo ponderado, la organización puede determinar cuál proveedor cumple mejor con los criterios establecidos y tomar una decisión basada en evidencia.
    p.mb-0(data-aos="fade-down") El jurado de opinión o selección ponderada contribuye a mejorar la objetividad en la toma de decisiones, facilita la participación del equipo de trabajo y permite priorizar acciones que generan mayor impacto en el desempeño organizacional. Su aplicación fortalece la gestión estratégica y favorece el uso eficiente de los recursos dentro del Sistema de Gestión de la Calidad.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Diagrama de Pareto
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img12.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") El diagrama de Pareto es una herramienta de análisis utilizada para identificar y priorizar las causas más relevantes de un problema. Se basa en el principio 80/20, el cual establece que, en muchos casos, aproximadamente el 80 % de los efectos proviene del 20 % de las causas. Este método permite enfocar los esfuerzos de mejora en los factores que generan mayor impacto dentro de un proceso.
        p(data-aos="fade-down") El diagrama de Pareto se representa mediante un gráfico de barras ordenadas de mayor a menor frecuencia o impacto, acompañado generalmente por una línea acumulativa que facilita la interpretación de los resultados. Su aplicación permite a las organizaciones optimizar recursos, mejorar la toma de decisiones y fortalecer el control de calidad.
        .row.justify-content-center
          .col.col-lg-9.order-lg-2.order-2
            .tarjeta.tarjeta--C01.p-4.h-100
              p(data-aos="fade-down") Esta herramienta es ampliamente utilizada en el análisis de fallas, quejas de clientes, defectos de producción, tiempos de retraso, desperdicios y cualquier situación donde sea necesario identificar las causas principales de un problema.
          .col.col-lg-3.order-lg-1.order-1.d-none.d-lg-block.g-0
            figure
              img(src='@/assets/curso/tema3/img13.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Procedimiento para elaborar un diagrama de Pareto:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definir el problema a analizar")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establece la situación que requiere estudio, por ejemplo, defectos en un producto, retrasos en entregas o reclamaciones de clientes.
          .row(numero="2" titulo="Recolectar datos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se recopila información relacionada con las causas del problema, registrando su frecuencia o impacto durante un periodo determinado.
          .row(numero="3" titulo="Clasificar las causas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se agrupan los datos según categorías o tipos de fallas identificadas.
          .row(numero="4" titulo="Ordenar las causas de mayor a menor frecuencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se organizan los datos para identificar cuáles son las causas más recurrentes o significativas.
          .row(numero="5" titulo="Calcular el porcentaje acumulado")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se determina el porcentaje que representa cada causa y su acumulación progresiva.
          .row(numero="6" titulo="Construir el gráfico")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se elaboran las barras que representan la frecuencia de cada causa y se traza la línea acumulativa para facilitar el análisis.
          .row(numero="7" titulo="Analizar los resultados")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se identifican las causas prioritarias sobre las cuales deben enfocarse las acciones de mejora.
      .col-lg-6.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Con el fin de facilitar la comprensión de esta herramienta, a continuación, se presenta un ejemplo aplicado del diagrama de Pareto, en el que se evidencian las causas de un problema organizacional clasificadas según su frecuencia e impacto.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ejemplo diagrama de Pareto
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img15.svg', alt=' La figura 4 presenta un diagrama de Pareto que organiza diferentes causas de un problema según su frecuencia o impacto, ordenándolas de mayor a menor importancia. Las barras representan cada categoría de causa y la línea acumulada contiene el porcentaje total, permitiendo identificar las causas más significativas que requieren atención prioritaria conforme al principio 80/20.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/img16.svg', alt=' La figura 4 presenta un diagrama de Pareto que organiza diferentes causas de un problema según su frecuencia o impacto, ordenándolas de mayor a menor importancia. Las barras representan cada categoría de causa y la línea acumulada contiene el porcentaje total, permitiendo identificar las causas más significativas que requieren atención prioritaria conforme al principio 80/20.')
    p.mb-5(data-aos="fade-down") Para aplicar este método, se plantea el siguiente caso práctico:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.order-lg-1.order-1.g-0
        figure
          img(src='@/assets/curso/tema3/img17.png', alt='Imagen decorativa')
      .col.col-lg-8.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C08.px-4.py-2
              p(data-aos="fade-down") 
              .row.justify-content-center
                .col.col-12
                  p.mb-2(data-aos="fade-down") Una empresa analiza las quejas recibidas por parte de sus clientes durante un mes y obtiene los siguientes resultados:
                  .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
                    .row.justify-content-center(data-aos="flip-up")
                      .col
                        .titulo-sexto.color-acento-contenido
                          h5 Tabla 6.
                          span Tabla de resultados
                        .tabla-a.color-acento-contenido
                          table
                            thead
                              tr
                                th(data-aos="fade-down")(style= "width: 50%") Causa de la queja
                                th(data-aos="fade-down")(style= "width: 50%") Frecuencia
                            tbody
                              tr
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") Retrasos en la entrega.
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 40
                              tr
                                td(data-aos="fade-down") Producto defectuoso.
                                td(data-aos="fade-down") 25
                              tr
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") Errores en facturación.
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 15
                              tr
                                td(data-aos="fade-down") Atención al cliente.
                                td(data-aos="fade-down") 10
                              tr
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") Empaque inadecuado.
                                td(data-aos="fade-down")(style="background-color: #F6F6F6") 10
                  p.mb-0(data-aos="fade-down") Al organizar la información en el diagrama de Pareto, la organización puede identificar que los retrasos en la entrega y los productos defectuosos representan la mayor proporción de las inconformidades. Con base en este análisis, se priorizan acciones correctivas dirigidas a mejorar la logística y el control de calidad.

    p.mb-5(data-aos="fade-down") Recomendaciones para su aplicación:
    .row.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Utilizar datos reales y actualizados para garantizar un análisis confiable.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Aplicar el diagrama de Pareto como herramienta inicial para identificar prioridades.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Complementar el análisis con otras herramientas como el diagrama causa–efecto.
      .col.col-lg-3.col-12.col-lg.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img21.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Realizar seguimiento a las acciones implementadas para verificar su efectividad.
    p.mb-0(data-aos="fade-down") El uso del diagrama de Pareto permite a las organizaciones concentrar sus esfuerzos en los problemas que generan mayor impacto, favoreciendo la mejora continua, la optimización de procesos y el fortalecimiento del Sistema de Gestión de la Calidad.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Diagrama causa-efecto
    .row.justify-content-center
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3.mb-4
          p.mb-0(data-aos="fade-down") El diagrama causa–efecto, también conocido como diagrama de Ishikawa o espina de pescado, es una herramienta de análisis que permite identificar, organizar y representar las posibles causas que generan un problema o situación específica dentro de un proceso. Su principal propósito es facilitar la comprensión de los factores que influyen en un resultado, permitiendo realizar análisis estructurados que apoyen la toma de decisiones y la implementación de acciones de mejora.
        p.mb-5(data-aos="fade-down") Esta herramienta se caracteriza por representar gráficamente un problema central, ubicado en el extremo derecho del diagrama, del cual se desprenden diversas ramas que agrupan las causas potenciales. Generalmente, estas causas se clasifican en categorías que facilitan el análisis sistemático del problema. Entre las clasificaciones más utilizadas se encuentran:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
          h4.text-center Mano de obra
          p Factores relacionados con el talento humano, competencias, capacitación y desempeño del personal.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img23.svg' alt='AvatarTop')
          h4.text-center Métodos
          p Procedimientos, instrucciones de trabajo o formas en que se ejecutan las actividades.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
          h4.text-center Maquinaria o equipos
          p Condiciones, mantenimiento o funcionamiento de los equipos utilizados.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
          h4.text-center Materiales
          p Calidad, disponibilidad o características de los insumos empleados.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
          h4.text-center Medición
          p Métodos de control, instrumentos y confiabilidad de los datos obtenidos.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img27.svg' alt='AvatarTop')
          h4.text-center Medio ambiente
          p Condiciones del entorno laboral, factores físicos o contextuales que afectan el proceso.
    p(data-aos="fade-down") El uso del diagrama causa–efecto permite identificar relaciones entre diferentes factores, facilitando el análisis integral del problema y evitando que se tomen decisiones basadas únicamente en síntomas o percepciones. Asimismo, promueve el trabajo colaborativo, ya que su elaboración suele realizarse mediante sesiones grupales en las que participan personas vinculadas al proceso analizado.
    p.mb-5(data-aos="fade-down") Para la construcción del diagrama causa–efecto, se recomienda seguir los siguientes pasos:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definir claramente el problema")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establece la situación que se desea analizar, formulándola de manera concreta y verificable.
          .row(numero="2" titulo="Identificar las categorías principales de causas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se seleccionan las clasificaciones que permitirán organizar la información, de acuerdo con el tipo de proceso o situación evaluada.
          .row(numero="3" titulo="Determinar las posibles causas")
            .col-12.mb-4.mb-md-0
              p.mb-0 A través de técnicas como la lluvia de ideas, el análisis documental o la consulta a expertos, se identifican los factores que pueden originar el problema.
          .row(numero="4" titulo="Analizar y validar las causas identificadas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se revisa la información recopilada para determinar cuáles causas tienen mayor incidencia en el problema.
          .row(numero="5" titulo="Definir acciones de mejora")
            .col-12.mb-4.mb-md-0
              p.mb-0 Con base en el análisis realizado, se establecen estrategias orientadas a eliminar o reducir las causas identificadas.
      .col-lg-6.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img28.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema3/img29.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 El diagrama causa–efecto constituye una herramienta ampliamente utilizada en los Sistemas de Gestión de la Calidad, debido a que facilita la identificación de causas raíz, contribuye al análisis de no conformidades y fortalece la implementación de acciones correctivas y preventivas. Su aplicación favorece el mejoramiento continuo al permitir comprender los procesos desde una perspectiva integral.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo de aplicación del diagrama causa–efecto en el análisis de problemas organizacionales.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Ejemplo diagrama causa–efecto
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img30.svg', alt='La figura 5 presenta un diagrama causa-efecto que organiza de manera estructurada las posibles causas de un problema central. El esquema agrupa las causas en categorías, permitiendo analizar los factores que influyen en la situación evaluada y facilitando la identificación de oportunidades de mejora.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/img31.svg', alt='La figura 5 presenta un diagrama causa-efecto que organiza de manera estructurada las posibles causas de un problema central. El esquema agrupa las causas en categorías, permitiendo analizar los factores que influyen en la situación evaluada y facilitando la identificación de oportunidades de mejora.')
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Tormenta de ideas
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img32.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La tormenta de ideas, también conocida como #[em brainstorming], es una técnica de trabajo grupal orientada a la generación de ideas de manera creativa y participativa para solucionar problemas, identificar oportunidades de mejora o proponer alternativas frente a una situación específica. Esta herramienta favorece la participación activa de los integrantes del equipo, promoviendo la libre expresión de pensamientos sin realizar juicios previos sobre su viabilidad.
    p(data-aos="fade-down") Dentro del Sistema de Gestión de la Calidad, la tormenta de ideas es utilizada para identificar causas de problemas, plantear soluciones, analizar riesgos, diseñar estrategias y fortalecer la toma de decisiones colectivas. Su aplicación contribuye a aprovechar el conocimiento y la experiencia del talento humano, facilitando el análisis integral de los procesos organizacionales.
    p.mb-5(data-aos="fade-down") Para garantizar la efectividad de esta técnica, se recomienda seguir los siguientes principios:
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Fomentar la participación de todos los integrantes del equipo.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Evitar críticas o evaluaciones durante la generación de ideas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Promover la creatividad y el pensamiento libre.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Registrar todas las ideas propuestas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Priorizar posteriormente las ideas según su viabilidad e impacto.
      .col-lg-5.col-8.col-md-7.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema3/img33.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La aplicación de la tormenta de ideas generalmente se desarrolla mediante las siguientes etapas:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img34.svg' alt='AvatarTop')
          h4.text-center Definición del problema o situación a analizar
          p Se establece con claridad el objetivo de la sesión, asegurando que todos los participantes comprendan el tema a tratar.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img35.svg' alt='AvatarTop')
          h4.text-center Generación de ideas
          p Los participantes proponen ideas libremente, sin restricciones ni evaluaciones, favoreciendo la creatividad colectiva.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img36.svg' alt='AvatarTop')
          h4.text-center Organización y clasificación de ideas
          p Se agrupan las propuestas similares para facilitar su análisis posterior.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img37.svg' alt='AvatarTop')
          h4.text-center Evaluación y priorización
          p Se analizan las ideas considerando criterios como viabilidad, impacto, recursos necesarios y alineación con los objetivos organizacionales.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img38.svg' alt='AvatarTop')
          h4.text-center Definición de acciones
          p Se seleccionan las alternativas más adecuadas y se establecen planes de acción para su implementación.
    .row.justify-content-center.mb-5
      .col.col-lg-6.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4.py-3
          p(data-aos="fade-down") La tormenta de ideas puede aplicarse de forma presencial o virtual y suele complementarse con otras herramientas de calidad, como el diagrama causa–efecto, el diagrama de Pareto o matrices de priorización, lo que permite fortalecer el análisis de problemas y la formulación de estrategias de mejora.
      .col.col-lg-2.order-lg-1.order-1.d-none.d-lg-block.g-0
        figure
          img(src='@/assets/curso/tema3/img39.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El uso adecuado de esta técnica contribuye a fortalecer el trabajo en equipo, estimula la innovación y facilita la construcción de soluciones orientadas al mejoramiento continuo dentro de la organización.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Diagrama de dispersión
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img40.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-4.py-3
          p(data-aos="fade-down") El diagrama de dispersión es una herramienta estadística utilizada para analizar la relación existente entre dos variables y determinar si existe algún tipo de correlación entre ellas. Esta técnica permite identificar patrones de comportamiento, tendencias o posibles relaciones causa–efecto dentro de los procesos organizacionales, facilitando el análisis y la toma de decisiones basadas en datos.
        p.mb-4(data-aos="fade-down") El diagrama se construye representando los valores de dos variables en un plano cartesiano, donde cada punto corresponde a un par de datos relacionados. A través de la distribución de los puntos, es posible identificar si existe relación directa, inversa o si no hay correlación entre las variables analizadas.
        .row.justify-content-center
          .col.col-lg-9.order-lg-2.order-2
            .tarjeta.tarjeta--C01.p-4.py-3.h-100
              p(data-aos="fade-down") Esta herramienta es ampliamente utilizada en el control de calidad para analizar el impacto de una variable sobre otra, por ejemplo, la relación entre el tiempo de producción y el número de defectos, el nivel de capacitación del personal y el rendimiento laboral, o la inversión en mantenimiento y la reducción de fallas en los equipos.
          .col.col-lg-3.order-lg-1.order-1.d-none.d-lg-block.g-0
            figure
              img(src='@/assets/curso/tema3/img41.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Para elaborar un diagrama de dispersión, se recomienda seguir los siguientes pasos:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-down")
              h4 Definir las variables a analiza
              p Se seleccionan dos variables que puedan tener relación dentro del proceso evaluado.
            .col-lg-2.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img42.svg', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-2.col-6.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img43.svg', alt="Imagen decorativa")          
            .col-lg-10(data-aos="fade-down")
              h4 Recolectar los datos
              p Se obtienen pares de datos confiables que permitan representar la relación entre las variables.
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-down")
              h4 Representar los datos en el plano cartesiano
              p Se ubica una variable en el eje horizontal y la otra en el eje vertical.
            .col-lg-2.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img44.svg', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-2.col-6.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/tema3/img45.svg', alt="Imagen decorativa")          
            .col-lg-10(data-aos="fade-down")
              h4 Analizar el comportamiento de los puntos
              p Se evalúa la distribución para identificar tendencias o correlaciones.
    p.mb-5(data-aos="fade-down") La interpretación del diagrama permite reconocer diferentes tipos de relaciones entre variables, como se presenta en la siguiente figura.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Posibles resultados del diagrama de dispersión
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img46.svg', alt='La figura 6 presenta cinco gráficos que representan posibles resultados de un diagrama de dispersión. En su orden, se identifican correlación positiva débil, ausencia de correlación, correlación negativa débil, correlación positiva fuerte y correlación negativa fuerte entre dos variables, mostrando distintos comportamientos en la relación de los datos.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/img47.svg', alt='La figura 6 presenta cinco gráficos que representan posibles resultados de un diagrama de dispersión. En su orden, se identifican correlación positiva débil, ausencia de correlación, correlación negativa débil, correlación positiva fuerte y correlación negativa fuerte entre dos variables, mostrando distintos comportamientos en la relación de los datos.')
    p.mb-5(data-aos="fade-down") Los resultados del análisis pueden indicar:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img48.svg' alt='AvatarTop')
        h4.text-center Correlación positiva débil
        p(data-aos="fade-down") Cuando existe una relación directa, pero con mayor dispersión de los datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img49.svg' alt='AvatarTop')
        h4.text-center Ausencia de correlación
        p(data-aos="fade-down") Cuando no se identifica relación entre las variables analizadas.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img50.svg' alt='AvatarTop')
        h4.text-center Correlación negativa débil
        p(data-aos="fade-down") Cuando existe relación inversa con variabilidad en los datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img51.svg' alt='AvatarTop')
        h4.text-center Correlación positiva fuerte
        p(data-aos="fade-down") Cuando el aumento de una variable genera el aumento proporcional de la otra.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img52.svg' alt='AvatarTop')
        h4.text-center Correlación negativa fuerte
        p(data-aos="fade-down") Cuando el aumento de una variable provoca la disminución de la otra.
    p.mb-0(data-aos="fade-down") El diagrama de dispersión facilita la identificación de relaciones entre variables que pueden influir en el desempeño de los procesos, permitiendo validar hipótesis, detectar causas potenciales de problemas y apoyar la implementación de acciones de mejora dentro del Sistema de Gestión de la Calidad.
    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Introducción a Seis Sigma
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img53.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Seis Sigma es una metodología de gestión orientada a la mejora de procesos mediante la reducción de la variabilidad y la eliminación de defectos, con el propósito de aumentar la calidad de los productos y servicios. Este enfoque se fundamenta en el análisis estadístico de los procesos y en la toma de decisiones basada en datos, permitiendo optimizar el desempeño organizacional y fortalecer la satisfacción del cliente.
    .row.justify-content-center.mb-5
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema3/img54.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 La metodología Seis Sigma busca que los procesos operen dentro de niveles de desempeño controlados, reduciendo errores y desviaciones respecto a los estándares establecidos. Para ello, emplea herramientas estadísticas que permiten medir, analizar y mejorar los resultados obtenidos en cada etapa del proceso.
    p.mb-5(data-aos="fade-down") Uno de los enfoques más utilizados en Seis Sigma es el ciclo DMAIC, el cual estructura el proceso de mejora en cinco fases:
    .row.mb-4.justify-content-center
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img55.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Definir
              p.text-center Identifica el problema, los objetivos del proyecto y las necesidades del cliente.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img56.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Medir
              p.text-center Recopila información del proceso para conocer su desempeño actual.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img57.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Analizar
              p.text-center Determina las causas de las variaciones o fallas del proceso.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img58.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Mejorar
              p.text-center Implementa acciones para optimizar el desempeño del proceso.
      .col.col-lg-4.col-12.col-lg.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img59.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Controlar
              p.text-center Establece mecanismos de seguimiento para garantizar la sostenibilidad de la mejora.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C01.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") Dentro del análisis estadístico de procesos, Seis Sigma utiliza los límites de especificación para evaluar si los resultados cumplen con los requisitos establecidos. Estos límites permiten determinar el rango aceptable de variación del proceso.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo gráfico que representa los límites de especificación utilizados para analizar el desempeño de un proceso.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Límites de especificación del proceso
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img60.svg', alt='La figura 7 presenta una gráfica de distribución de datos donde se presenta el comportamiento de un proceso. En la gráfica se identifican el límite inferior (LI) y el límite superior (LS), los cuales delimitan el rango aceptable de variación del proceso y permiten analizar el cumplimiento de los requisitos establecidos.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/img61.svg', alt='La figura 7 presenta una gráfica de distribución de datos donde se presenta el comportamiento de un proceso. En la gráfica se identifican el límite inferior (LI) y el límite superior (LS), los cuales delimitan el rango aceptable de variación del proceso y permiten analizar el cumplimiento de los requisitos establecidos.')

</template>

<script>
export default {
  name: 'Tema3',
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
