<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Control de calidad
    p.mb-4(data-aos="fade-down") El control de calidad corresponde al conjunto de actividades orientadas a verificar que los productos, servicios y procesos cumplan con los requisitos establecidos por la organización, las normas técnicas y las necesidades de las partes interesadas. Su propósito principal es garantizar que los resultados obtenidos se ajusten a los estándares definidos, contribuyendo a la satisfacción del cliente y al fortalecimiento del desempeño organizacional.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") Dentro del Sistema de Gestión de la Calidad, el control de calidad permite realizar seguimiento sistemático al desempeño de los procesos mediante la medición, el análisis y la evaluación de los resultados. A través de este control, las organizaciones pueden identificar desviaciones, prevenir errores y aplicar acciones correctivas o de mejora que favorezcan la eficiencia operativa.
            .col.col-lg-2.col-auto.order-lg-2.order-1.mb-3.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img01.svg', alt='Imagen decorativa')
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El control de calidad se fundamenta en el uso de herramientas técnicas y estadísticas que permiten analizar la variabilidad de los procesos, establecer parámetros de aceptación y verificar el cumplimiento de especificaciones. Estas herramientas facilitan la toma de decisiones basada en datos, reducen la probabilidad de fallas y optimizan el uso de recursos organizacionales.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img03.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Asimismo, el control de calidad promueve la cultura de mejora continua, al proporcionar información confiable sobre el desempeño de los procesos y permitir la identificación de oportunidades de optimización. Este enfoque contribuye a garantizar la consistencia en la prestación de servicios y en la elaboración de productos, fortaleciendo la competitividad y la confianza de las partes interesadas.
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") Para lograr una gestión efectiva del control de calidad, es necesario implementar sistemas de medición adecuados, establecer límites de tolerancia, aplicar técnicas de control estadístico de procesos y utilizar métodos estadísticos que permitan interpretar los resultados obtenidos y orientar acciones de mejora.        
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Sistemas de medición
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img05.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") Los sistemas de medición corresponden al conjunto de instrumentos, métodos, procedimientos, #[em software], personal y condiciones utilizadas para obtener datos que permitan evaluar las características de un proceso, producto o servicio. Su correcta implementación garantiza la confiabilidad de la información utilizada para la toma de decisiones dentro del Sistema de Gestión de la Calidad.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')
        p.mb-0(data-aos="fade-down") En el contexto de la NTC ISO 9001:2015, los sistemas de medición permiten asegurar que los equipos y métodos utilizados para realizar mediciones sean adecuados para el propósito previsto, contribuyendo a verificar el cumplimiento de los requisitos establecidos. La organización debe garantizar que los instrumentos de medición se encuentren calibrados, verificados y controlados, con el fin de evitar errores que puedan afectar los resultados.
    p.mb-5(data-aos="fade-down") Un sistema de medición está conformado por varios elementos que interactúan para generar datos confiables:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C01.p-3(titulo="Instrumentos de medición")
                p.mb-0 Permiten obtener datos cuantitativos, como balanzas, termómetros, calibres o equipos electrónicos.
              .tarjeta.tarjeta--C01.p-3(titulo="Métodos de medición")
                p.mb-0 Establecen la forma en que se realiza la medición, incluyendo procedimientos técnicos y protocolos definidos.
              .tarjeta.tarjeta--C01.p-3(titulo="Personal competente")
                p.mb-0 garantiza que las mediciones se realicen correctamente, siguiendo los lineamientos establecidos.
              .tarjeta.tarjeta--C01.p-3(titulo="Condiciones ambientales")
                p.mb-0 Influyen en la exactitud de los resultados, como temperatura, humedad o vibraciones.
              .tarjeta.tarjeta--C01.p-3(titulo="Registro y análisis de datos")
                p.mb-0 Facilitan la trazabilidad de la información y permiten evaluar el desempeño de los procesos.
          .col-lg-3.col-sm-4.col-10.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img06.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C04.p-4
          .row.justify-content-center
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La confiabilidad de un sistema de medición depende de características como la exactitud, la precisión, la repetibilidad y la reproducibilidad. Estas características permiten evaluar la calidad de los datos obtenidos y determinar si los resultados son consistentes y confiables para el análisis organizacional.
            .col.col-lg-1.col-auto.order-lg-1.order-1.mb-3.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img07.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La implementación adecuada de sistemas de medición contribuye a identificar variaciones en los procesos, establecer controles efectivos y garantizar que los productos y servicios cumplan con las especificaciones definidas. De esta manera, se fortalece la gestión basada en evidencia, se reducen riesgos operativos y se promueve la mejora continua dentro del Sistema de Gestión de la Calidad.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Límites de tolerancia
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p(data-aos="fade-down") Los límites de tolerancia corresponden al rango permitido de variación que puede presentar una característica de un producto, servicio o proceso sin afectar el cumplimiento de los requisitos establecidos. Estos límites permiten determinar si un resultado se encuentra dentro de las especificaciones aceptables o si requiere acciones correctivas.
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") En el Sistema de Gestión de la Calidad, los límites de tolerancia son fundamentales para asegurar la conformidad de los productos y servicios, ya que establecen parámetros que orientan la medición, el control y la evaluación del desempeño. La definición de estos límites debe basarse en requisitos normativos, especificaciones técnicas, necesidades del cliente y condiciones del proceso.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") Los límites de tolerancia se establecen generalmente mediante un valor objetivo o nominal, acompañado por un límite superior y un límite inferior que determinan el rango permitido de variación. Cuando los resultados se encuentran dentro de estos límites, el proceso se considera conforme; en caso contrario, se generan no conformidades que deben ser analizadas y corregidas.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los principales conceptos relacionados con los límites de tolerancia:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Conceptos asociados a los límites de tolerancia
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Concepto
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Valor nominal.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Valor objetivo o estándar establecido para una característica del producto o proceso.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Un tornillo debe tener un diámetro de 10 mm.
              tr
                td(data-aos="fade-down") Límite superior de tolerancia (LST).
                td(data-aos="fade-down") Valor máximo permitido que puede alcanzar una característica sin afectar su funcionalidad.
                td(data-aos="fade-down") El diámetro máximo permitido del tornillo es 10.2 mm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Límite inferior de tolerancia (LIT).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Valor mínimo permitido que puede presentar una característica sin afectar su funcionalidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El diámetro mínimo permitido del tornillo es 9.8 mm.
              tr
                td(data-aos="fade-down") Rango de tolerancia.
                td(data-aos="fade-down") Diferencia entre el límite superior y el límite inferior establecidos.
                td(data-aos="fade-down") El rango permitido del diámetro del tornillo es entre 9.8 mm y 10.2 mm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Producto o proceso conforme.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Resultado que cumple con los límites de tolerancia definidos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Un tornillo con diámetro de 10.1 mm cumple con la especificación.
              tr
                td(data-aos="fade-down") Producto o proceso no conforme.
                td(data-aos="fade-down") Resultado que supera o no alcanza los límites de tolerancia establecidos.
                td(data-aos="fade-down") Un tornillo con diámetro de 10.4 mm no cumple con la especificación.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El establecimiento adecuado de los límites de tolerancia permite controlar la variabilidad de los procesos, reducir errores en la producción y garantizar la calidad de los resultados. Asimismo, facilita la toma de decisiones basada en datos, contribuye al control estadístico de procesos y fortalece la confiabilidad del Sistema de Gestión de la Calidad.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Control estadístico de procesos
    p(data-aos="fade-down") El control estadístico de procesos (CEP) es una metodología utilizada para supervisar, controlar y mejorar el desempeño de los procesos mediante el análisis de datos y herramientas estadísticas. Su propósito es identificar variaciones en los procesos, determinar sus causas y asegurar que los resultados se mantengan dentro de los límites de calidad establecidos.
    p.mb-5(data-aos="fade-down") El CEP permite diferenciar dos tipos de variación presentes en los procesos:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Variación común
            p.mb-0(data-aos="fade-down") Corresponde a fluctuaciones naturales propias del proceso que generalmente se mantienen dentro de límites aceptables.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Variación especial
            p.mb-0(data-aos="fade-down") Se presenta cuando existen factores externos o fallas que alteran el comportamiento normal del proceso y pueden generar productos o servicios no conformes.
    p.mb-4(data-aos="fade-down") Para aplicar el control estadístico de procesos, se utilizan diversas herramientas que permiten recolectar, organizar y analizar información sobre el desempeño del proceso, entre las cuales se destacan:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img11.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Gráficas de control
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img12.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Histogramas
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img13.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Diagramas de dispersión
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Hojas de verificación
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img15.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Diagramas de Pareto
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img16.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Las gráficas de control constituyen uno de los instrumentos más representativos del CEP, ya que permiten monitorear el comportamiento de una variable a lo largo del tiempo mediante la comparación de los resultados obtenidos con límites de control establecidos. Cuando los datos se mantienen dentro de estos límites, el proceso se considera estable. Si se presentan valores fuera del rango o patrones irregulares, se deben analizar las causas y aplicar acciones de mejora.
        .cajon.cajon.C01.mb-3.p-3
          p.mb-0(data-aos="fade-down") La implementación del control estadístico de procesos contribuye al fortalecimiento del Sistema de Gestión de la Calidad al facilitar la toma de decisiones basada en datos, prevenir defectos, optimizar recursos y mejorar la eficiencia organizacional. Además, promueve una cultura de análisis y seguimiento permanente que favorece la mejora continua y el cumplimiento de los requisitos del cliente.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Métodos estadísticos aplicados a la calidad 
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img17.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los métodos estadísticos aplicados a la calidad constituyen herramientas fundamentales para analizar información, controlar procesos y apoyar la toma de decisiones dentro del Sistema de Gestión de la Calidad. Estos métodos permiten transformar los datos en información útil, facilitando la identificación de tendencias, variaciones y oportunidades de mejora en los procesos organizacionales.
    p(data-aos="fade-down") La aplicación de técnicas estadísticas contribuye a comprender el comportamiento de los procesos, evaluar el desempeño de productos y servicios, y verificar el cumplimiento de los requisitos establecidos por el cliente y la organización. Además, favorece la prevención de fallas y la reducción de la variabilidad en los resultados.
    p.mb-5(data-aos="fade-down") Entre los principales métodos estadísticos utilizados en la gestión de la calidad se encuentran:
    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-2.order-2
              h4 Estadística descriptiva
              p Permite organizar, resumir y representar datos mediante medidas como promedio, mediana, moda, rango y desviación estándar. Facilita la comprensión general del comportamiento de los datos.
            .col-lg-8.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img18.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-2.order-2
              h4 Muestreo estadístico
              p Consiste en analizar una parte representativa de una población para obtener conclusiones sobre el total. Es ampliamente utilizado en inspecciones de calidad cuando no es viable evaluar el 100 % de los productos o servicios.
            .col-lg-8.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img19.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-2.order-2
              h4 Análisis de tendencias
              p Permite identificar patrones de comportamiento a lo largo del tiempo, facilitando la proyección de resultados y la anticipación de posibles desviaciones.
            .col-lg-8.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img20.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-2.order-2
              h4 Análisis de capacidad del proceso
              p Evalúa si un proceso es capaz de cumplir con las especificaciones o límites de calidad establecidos, considerando la variabilidad natural del proceso.
            .col-lg-8.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img21.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-4.order-lg-2.order-2
              h4 Pruebas de hipótesis
              p Permiten verificar supuestos o afirmaciones sobre un proceso, producto o servicio mediante el análisis de datos y la comparación de resultados esperados con resultados obtenidos.
            .col-lg-8.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img22.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La selección del método estadístico depende del tipo de proceso, la naturaleza de los datos disponibles y el objetivo del análisis. La correcta aplicación de estas herramientas fortalece la confiabilidad de la información, mejora la precisión en la toma de decisiones y contribuye al control y optimización de los procesos organizacionales.
    .row.justify-content-center.mb-0
      .col.col-lg-9.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p(data-aos="fade-down") El uso sistemático de métodos estadísticos dentro del Sistema de Gestión de la Calidad permite generar evidencias objetivas del desempeño de los procesos, facilitar el seguimiento de indicadores y apoyar la implementación de acciones correctivas, preventivas y de mejora continua.
      .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img23.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
