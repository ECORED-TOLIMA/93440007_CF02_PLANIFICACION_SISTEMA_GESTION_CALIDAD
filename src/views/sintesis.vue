<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda la gestión de procesos y la mejora continua bajo la norma ISO 9001:2015, incluyendo la identificación, análisis y optimización de procesos, el uso de indicadores de gestión y la aplicación de métodos estructurados para la solución de problemas. Además, integra el control de calidad, la operación de productos y servicios, y la implementación de acciones correctivas, fortaleciendo la eficiencia, la satisfacción del cliente y la competitividad organizacional.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis representa la gestión de procesos y la mejora continua bajo la norma ISO 9001:2015. Incluye la identificación y optimización de procesos, indicadores de gestión, métodos de solución de problemas, control de calidad, operación de productos y servicios, y acciones correctivas para fortalecer la eficiencia, la satisfacción del cliente y la competitividad organizacional.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
