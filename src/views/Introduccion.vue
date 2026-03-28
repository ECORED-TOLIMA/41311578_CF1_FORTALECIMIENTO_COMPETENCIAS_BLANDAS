<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure(data-aos="fade-up")
      img(src='@/assets/curso/intro/1.png', alt='', style="width: 1220px").m-auto

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/intro/2.svg', style='width: 100px').m-auto
      
      .col
        p El fortalecimiento de las competencias blandas orientadas al desarrollo personal y la comunicación efectiva constituye uno de los elementos más significativos para el desempeño de las personas en los contextos cotidianos, sociales y laborales actuales. Reconocer las propias capacidades, gestionar adecuadamente las emociones y expresarse con claridad y respeto frente a los demás son habilidades que inciden directamente en la calidad de las relaciones interpersonales y en la construcción de entornos de convivencia saludable. Este componente formativo aborda de manera articulada estos elementos, ofreciendo herramientas conceptuales y prácticas orientadas al crecimiento integral del individuo.

    .row.bg-01
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="fade-right")
                img(src='@/assets/curso/intro/3.png', style='width: 100%')
            .col-lg-8
              p La formación se organiza en torno a cinco núcleos temáticos interrelacionados: el desarrollo personal y el autoconocimiento, la inteligencia emocional y la gestión de emociones, la comunicación humana y los actos lingüísticos, la comunicación asertiva, y las relaciones interpersonales y la convivencia. Cada uno de estos núcleos aporta elementos conceptuales y estrategias de aplicación que permiten comprender la manera en que las emociones, las creencias y los estilos comunicativos influyen en el comportamiento humano y en la interacción con los demás. La articulación de estos contenidos favorece el desarrollo de habilidades aplicadas a distintos espacios de la vida personal y profesional.

              .row.justify-content-center
                .col-lg-12
                  .row.align-items-center
                    .col-lg-12
                      .cajon.color2.p-4
                        p La comprensión de estos contenidos requiere una aproximación reflexiva que permita vincular los conceptos con la experiencia cotidiana. Por ello, el estudio de este componente se complementa con un recurso audiovisual que contextualiza los temas abordados, facilita la comprensión de su relevancia en situaciones reales y orienta el proceso de aprendizaje desde una perspectiva práctica. Para acceder a este recurso, se recomienda consultar el material audiovisual que acompaña esta sección.
                        
    .row.justify-content-center.align-items-center.mt-4           
          .col-lg-12
            figure(data-aos="fade-down")
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
