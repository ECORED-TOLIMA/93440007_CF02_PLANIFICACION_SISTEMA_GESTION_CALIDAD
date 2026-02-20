<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") Este componente presenta los aspectos relacionados con la operación, el control y la mejora del Sistema de Gestión de la Calidad, abordando los lineamientos establecidos en la NTC ISO 9001 que orientan la gestión de los procesos organizacionales. Se enfoca en la comprensión del enfoque basado en procesos, la identificación de factores críticos de éxito, la aplicación de métodos para la solución de problemas y el control de la calidad como elementos fundamentales para garantizar el cumplimiento de los requisitos del sistema.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.col-md-7.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-secundario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") El propósito es fortalecer las competencias relacionadas con la ejecución y seguimiento del Sistema de Gestión de la Calidad, reconociendo la importancia de la operación de los procesos, la medición del desempeño mediante indicadores de gestión y la aplicación de herramientas que contribuyen al control y mejora organizacional. A través del análisis conceptual, el estudio de los requisitos operacionales de la norma y la aplicación de metodologías de mejora, se promueve una visión integral del funcionamiento del sistema en su fase de ejecución.
        p.mb-0(data-aos="fade-down") El desarrollo de los temas se realiza mediante un enfoque teórico-práctico que permite comprender la gestión de procesos, aplicar herramientas para el análisis y solución de problemas, y fortalecer la cultura de mejora continua dentro de la organización. De esta manera, se busca que el aprendiz adquiera capacidades para operar, controlar y optimizar los procesos, favoreciendo la eficiencia organizacional, la toma de decisiones basada en evidencias y la satisfacción de las partes interesadas.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/nIMKBeSrw1E?si=-j1UXcakRaEoWeM2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
