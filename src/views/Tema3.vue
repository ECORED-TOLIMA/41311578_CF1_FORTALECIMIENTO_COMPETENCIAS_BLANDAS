<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación humana y actos lingüísticos

    .row.align-items-center(data-aos="flip-up")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/1.png', alt='', style="width: 380px").m-auto
          
      .col-lg-8
        p La comunicación humana es un proceso fundamental mediante el cual las personas intercambian información, ideas, emociones y significados en diferentes contextos de la vida social. Este proceso no se limita únicamente al uso de palabras, sino que también incluye gestos, expresiones faciales, posturas corporales y otros elementos que complementan el mensaje que se desea transmitir. A través de la comunicación, las personas construyen relaciones, comparten experiencias y coordinan acciones con otros, lo que la convierte en una herramienta esencial para la convivencia y el trabajo en equipo.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p Además, la comunicación humana implica no solo transmitir mensajes, sino también interpretar adecuadamente la información que se recibe. Este proceso requiere habilidades como la escucha activa, la empatía y la claridad al expresar ideas, elementos que favorecen la comprensión mutua entre las personas. Cuando la comunicación se desarrolla de manera efectiva, se reducen los malentendidos y se fortalecen las relaciones interpersonales, lo que contribuye a generar ambientes de respeto, cooperación y confianza en los diferentes espacios sociales y laborales.



    .bloque-texto-g.bloque-texto-g--inverso.bg-base.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, los actos lingüísticos representan las acciones que se realizan a través del lenguaje durante la comunicación. Cada vez que una persona habla, no solo transmite información, sino que también realiza acciones como solicitar, prometer, agradecer, declarar o expresar opiniones. Comprender los actos lingüísticos permite reconocer la intención que hay detrás de las palabras y mejorar la forma en que se construyen los mensajes en la interacción con otras personas. De esta manera, el estudio de la comunicación humana y de los actos lingüísticos contribuye al fortalecimiento de habilidades comunicativas que favorecen la convivencia y el desarrollo de competencias blandas en distintos contextos.



    p.mt-4 Para comprender mejor cómo funciona la comunicación humana en la vida cotidiana, en la tabla 4 se puede reconocer que el lenguaje no solo transmite información, sino que también permite realizar acciones a través de las palabras. Estas acciones se conocen como actos lingüísticos y forman parte fundamental de la interacción entre las personas. En diferentes contextos sociales y laborales, las personas utilizan el lenguaje para solicitar, ofrecer, afirmar, prometer o expresar emociones, entre otras acciones comunicativas. En la siguiente tabla se presentan algunos ejemplos de actos lingüísticos y su función dentro de los procesos de comunicación interpersonal.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 4.
          span Ejemplos de actos lingüísticos en la comunicación humana

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #A0F7FE")
              tr
                th(style="width: 300px;") Acto lingüístico
                th Descripción
                th Ejemplo en la comunicación cotidiana
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start #[b Afirmación]
                td.text-start Consiste en expresar una idea, información o punto de vista sobre una situación determinada.
                td.text-start La reunión comenzará a las ocho de la mañana.
              tr
                td.text-start #[b Solicitud]
                td.text-start Se utiliza para pedir apoyo, información o la realización de una acción por parte de otra persona.
                td.text-start ¿Podrías enviarme el informe antes de finalizar el día?

              tr(style="background-color: #F6F6F6")
                td.text-start #[b Promesa]
                td.text-start Se realiza cuando una persona se compromete a cumplir una acción en el futuro.
                td.text-start Mañana entregaré el trabajo solicitado.
              tr
                td.text-start #[b Declaración]
                td.text-start Se emplea para establecer o modificar una situación mediante el uso del lenguaje.
                td.text-start Queda aprobado el plan de trabajo.

              tr(style="background-color: #F6F6F6")
                td.text-start #[b Agradecimiento]
                td.text-start Permite reconocer la colaboración o el apoyo recibido por otra persona.
                td.text-start Gracias por tu ayuda en la elaboración del proyecto.

              tr
                td.text-start #[b Opinión]
                td.text-start Se utiliza para expresar una valoración o punto de vista personal frente a una situación.
                td.text-start Considero que esta propuesta puede mejorar el proceso.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Concepto de comunicación interpersonal


    p La comunicación interpersonal es el proceso mediante el cual dos o más personas intercambian información, ideas, emociones y significados a través de diferentes formas de expresión. Este tipo de comunicación se desarrolla principalmente en la interacción directa entre individuos y permite construir relaciones basadas en el entendimiento mutuo. A través de la comunicación interpersonal, las personas desarrollan acciones fundamentales que fortalecen sus relaciones y favorecen la convivencia en diferentes contextos de la vida cotidiana. A continuación, se presentan las tres acciones esenciales que caracterizan este proceso:

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
          
        h4.text-center Compartir experiencias
        p Intercambiar vivencias, conocimientos y emociones con otras personas enriquece la comprensión mutua y fortalece los vínculos interpersonales en los diferentes espacios de interacción social y laboral.
      .col-md.tarjeta.bg-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')
          
        h4.text-center Expresar opiniones
        p Manifestar ideas, puntos de vista y valoraciones de manera clara y respetuosa permite construir diálogos enriquecedores y contribuye a la toma de decisiones compartidas en diferentes contextos.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')
          
        h4.text-center Coordinar acciones
        p Organizar y articular actividades con otras personas facilita el logro de objetivos comunes, promueve el trabajo colaborativo y fortalece la responsabilidad compartida dentro de los grupos sociales y laborales.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p En este sentido, la comunicación interpersonal no se limita únicamente al uso de palabras, sino que también incluye elementos como el lenguaje corporal, el tono de voz, las expresiones faciales y otros comportamientos que acompañan el mensaje.


    .row.align-items-center.mt-4
      .col-lg-8
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/6.svg', style='width: 100px').m-auto
          
          .col
            p Estos elementos contribuyen a complementar el significado de lo que se quiere comunicar y permiten que el receptor interprete con mayor claridad la intención del mensaje. Por esta razón, una comunicación efectiva requiere prestar atención tanto al contenido verbal como a las señales no verbales que forman parte del proceso comunicativo.

        p.mt-2 Asimismo, la comunicación interpersonal cumple un papel fundamental en el fortalecimiento de las relaciones sociales y en el desarrollo de ambientes de convivencia positivos. Cuando las personas se comunican de manera clara, respetuosa y empática, es más probable que se generen relaciones basadas en la confianza y la cooperación. En cambio, cuando la comunicación es confusa o agresiva, pueden surgir malentendidos o conflictos que afectan la calidad de la interacción entre las personas.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p En consecuencia, desarrollar habilidades de comunicación interpersonal es esencial para el crecimiento personal y para el desempeño en diferentes ámbitos sociales y laborales. Estas habilidades permiten escuchar activamente, expresar ideas con claridad, comprender diferentes puntos de vista y participar de manera constructiva en la resolución de problemas. De esta manera, la comunicación interpersonal se convierte en una herramienta clave para fortalecer las competencias blandas necesarias para la convivencia y el trabajo en equipo.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/7.png', alt='', style="width: 390px").m-auto



    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Tipos de comunicación: intra, inter y transpersonal

    p La comunicación puede manifestarse de diferentes maneras dependiendo del contexto en el que se desarrolla y de las personas que participan en el proceso comunicativo. En este sentido, se pueden identificar distintos tipos de comunicación que permiten comprender mejor cómo los individuos intercambian información, pensamientos y emociones. Entre estos tipos se destacan la comunicación intrapersonal, interpersonal y transpersonal, las cuales influyen en la manera en que las personas interpretan la realidad, toman decisiones y se relacionan con su entorno.

    .row.bg-01
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/8.svg', alt='', style="width: 380px").m-auto
            .col-lg-6
              p Por un lado, la comunicación intrapersonal hace referencia al diálogo interno que cada persona mantiene consigo misma. Este tipo de comunicación ocurre cuando una persona reflexiona, analiza sus pensamientos o interpreta sus propias emociones frente a una situación determinada. A través de la comunicación intrapersonal, los individuos organizan sus ideas, evalúan sus acciones y toman decisiones que orientan su comportamiento. Este proceso es fundamental para el desarrollo del autoconocimiento y la gestión de las emociones.

              p Por otra parte, la comunicación interpersonal se desarrolla cuando dos o más personas interactúan entre sí con el propósito de intercambiar información, expresar ideas o compartir experiencias. Este tipo de comunicación se presenta en diferentes contextos sociales, familiares, educativos y laborales. La comunicación interpersonal requiere habilidades como la escucha activa, la empatía y la claridad al expresar los mensajes, elementos que facilitan la comprensión mutua y fortalecen las relaciones entre las personas.

          .row.justify-content-center.mt-4
            .col-lg-10
              .row.align-items-center
                .col-lg-12
                  .cajon.color3.p-4
                    p Finalmente, la comunicación transpersonal se refiere a un nivel de comunicación que trasciende la interacción individual y se orienta hacia la comprensión de valores, significados y propósitos compartidos en un contexto social o colectivo. Este tipo de comunicación se relaciona con la capacidad de las personas para conectarse con los demás desde una perspectiva más amplia, basada en principios como el respeto, la cooperación y el bienestar común. En consecuencia, comprender estos tipos de comunicación permite desarrollar una interacción más consciente y efectiva en los diferentes espacios de convivencia y colaboración.


    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Actos lingüísticos en la comunicación

    p Los actos lingüísticos hacen referencia a las acciones que las personas realizan a través del lenguaje durante los procesos de comunicación. Cuando una persona habla, no solo transmite información, sino que también realiza determinadas acciones mediante sus palabras, como solicitar algo, ofrecer ayuda, hacer promesas o expresar opiniones. Desde esta perspectiva, el lenguaje no solo sirve para describir la realidad, sino también para influir en ella, ya que a través de las palabras las personas pueden generar compromisos, coordinar acciones y establecer acuerdos con otros.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este sentido, los actos lingüísticos forman parte esencial de la interacción humana, ya que permiten que las personas construyan significados compartidos y desarrollen relaciones basadas en la comunicación. Cada mensaje que se emite tiene una intención comunicativa que influye en la forma en que el receptor interpreta la información. Por ejemplo, una afirmación puede transmitir un dato o una idea, mientras que una solicitud busca que otra persona realice una acción determinada. Comprender esta intención facilita que la comunicación sea más clara y efectiva.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Asimismo, el uso adecuado de los actos lingüísticos contribuye a mejorar la coordinación entre las personas en diferentes contextos sociales y laborales. En los entornos de trabajo, por ejemplo, es frecuente utilizar actos lingüísticos como peticiones, promesas o declaraciones para organizar tareas, asumir responsabilidades o tomar decisiones. Cuando estos actos se utilizan de manera clara y respetuosa, se fortalece la confianza entre los miembros de un equipo y se facilita el logro de objetivos comunes.


    p.mt-4 Por esta razón, desarrollar habilidades para reconocer y utilizar adecuadamente los actos lingüísticos permite fortalecer la comunicación interpersonal y prevenir malentendidos. Comprender la intención que hay detrás de un mensaje ayuda a interpretar mejor las palabras de los demás y a expresar las propias ideas de manera más efectiva. De esta manera, los actos lingüísticos se convierten en una herramienta fundamental para mejorar la convivencia, promover la cooperación y fortalecer las competencias comunicativas en diferentes ámbitos de la vida.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Lenguaje verbal y lenguaje no verbal

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-base(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/10.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                figure
                  img(src="@/assets/curso/tema3/11.svg", alt="", style="width: 80px")

                p.mt-4.text-white El lenguaje verbal y el lenguaje no verbal son dos formas fundamentales mediante las cuales las personas transmiten información, ideas y emociones durante los procesos de comunicación. El lenguaje verbal se refiere al uso de palabras, ya sea de manera oral o escrita, para expresar mensajes con un significado específico. Este tipo de lenguaje permite organizar pensamientos, explicar ideas y compartir conocimientos con otras personas en diferentes contextos sociales, educativos y laborales.


    p.mt-4 En cambio, el lenguaje no verbal corresponde a todas aquellas formas de comunicación que no utilizan palabras, pero que complementan o refuerzan el mensaje que se desea transmitir. Este tipo de lenguaje incluye gestos, expresiones faciales, postura corporal, contacto visual, movimientos del cuerpo y el tono de voz. En muchos casos, el lenguaje no verbal puede comunicar emociones o intenciones que no se expresan directamente mediante las palabras, por lo que resulta fundamental prestar atención a estos elementos durante la interacción con otras personas.

    .row.justify-content-center
      .col-lg-6
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Además, la combinación adecuada del lenguaje verbal y no verbal contribuye a que los mensajes sean más claros y coherentes. Cuando ambos tipos de lenguaje se complementan de manera adecuada, se facilita la comprensión del mensaje y se fortalecen las relaciones interpersonales. Sin embargo, cuando existe una contradicción entre lo que se dice con palabras y lo que se expresa a través del lenguaje corporal, pueden surgir confusiones o malentendidos en el proceso comunicativo.

        p.mt-2 Por esta razón, desarrollar conciencia sobre el uso del lenguaje verbal y no verbal permite mejorar la calidad de la comunicación interpersonal. Comprender cómo influyen los gestos, el tono de voz o la postura corporal en la interpretación de los mensajes ayuda a fortalecer la empatía, la escucha activa y la claridad al expresar ideas. De esta manera, el manejo adecuado de ambos tipos de lenguaje contribuye al desarrollo de competencias comunicativas que favorecen la convivencia y el trabajo colaborativo en distintos contextos de la vida.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/12.png', alt='', style="width: 390px").m-auto


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p Para comprender mejor la diferencia entre el lenguaje verbal y el lenguaje no verbal, a continuación, se presentan algunos ejemplos que ilustran la manera en que ambos tipos de comunicación se expresan en situaciones cotidianas.



    .row.justify-content-center.mt-4
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-1")
          .tarjeta.clr--pink02.p-4(titulo="Ejemplos de lenguaje verbal")
            .row.align-items-center
              .col-lg-6
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Explicar una idea durante una reunión de trabajo.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Dar instrucciones para realizar una actividad específica.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Expresar una opinión durante una conversación.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Realizar una solicitud o petición a otra persona.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Presentar un informe o una exposición oral.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Escribir un mensaje o un correo electrónico para comunicar información.

              .col-lg-6
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema3/13.png', alt='', style="width: 100%")
    
          div(titulo="Ejemplos de lenguaje no verbal")
            .row.align-items-center
              .col-lg-6
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Sonreír para expresar alegría o aprobación.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Mantener contacto visual durante una conversación.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Asentir con la cabeza para indicar que se está de acuerdo.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Cruzar los brazos como señal de incomodidad o desacuerdo.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Utilizar gestos con las manos para reforzar una explicación.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Cambiar el tono de voz para expresar entusiasmo, preocupación o firmeza. 


              .col-lg-6
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema3/14.png', alt='', style="width: 100%") 

    p.mt-4 El reconocimiento de estos dos tipos de lenguaje permite desarrollar una comunicación más consciente y efectiva en los diferentes contextos de la vida cotidiana. Cuando una persona comprende que sus gestos, expresiones y tono de voz complementan o contradicen sus palabras, puede ajustar su manera de comunicarse para transmitir mensajes con mayor claridad y coherencia. Esta conciencia comunicativa favorece la empatía, fortalece la escucha activa y contribuye a la construcción de relaciones interpersonales más sólidas y respetuosas en los espacios sociales y laborales.

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
