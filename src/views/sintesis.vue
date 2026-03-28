<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El desarrollo personal y la comunicación efectiva constituyen competencias esenciales para el fortalecimiento de las relaciones humanas en los diferentes contextos de la vida personal, social y laboral. A lo largo de los contenidos se analizan el autoconocimiento, la inteligencia emocional, la comunicación asertiva y las relaciones interpersonales como elementos interrelacionados que inciden directamente en la convivencia, la toma de decisiones y el crecimiento individual. La comprensión y la aplicación de estos elementos permiten desarrollar habilidades que favorecen el trabajo colaborativo, la resolución constructiva de conflictos y la construcción de ambientes basados en el respeto, la empatía y la cooperación. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado \"Desarrollo Personal y Comunicación Efectiva\" organiza el tema central en cuatro ejes: desarrollo personal y autoconocimiento, inteligencia emocional, comunicación asertiva, y relaciones e interacción social. Cada eje desarrolla sus aspectos clave, desde el concepto de desarrollo personal y el reconocimiento de creencias, pasando por los componentes de la inteligencia emocional, la gestión de emociones y los pilares del autoconocimiento, hasta las características y barreras de la comunicación asertiva, las estrategias para mejorar la comunicación interpersonal, y los valores de convivencia y el trabajo colaborativo como fundamentos de la interacción social.")
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
