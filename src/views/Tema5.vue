<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Operación en ISO 9001:2015

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Planificación y control operacional (Numeral 8.1)

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Requisitos para productos y servicios (Numeral 8.2)

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Diseño y desarrollo de productos y servicios (Numeral 8.3)

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Control de procesos, productos y servicios externos (Numeral 8.4)

    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Producción y provisión del servicio (Numeral 8.5)

    separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Liberación de productos y servicios (Numeral 8.6)

    separador
    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.7 Control de salidas no conformes (Numeral 8.7)

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
