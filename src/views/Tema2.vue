<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Inteligencia emocional y gestión de emociones

    figure
      img(src='@/assets/curso/tema2/1.png', alt='', style="width: 1220px").m-auto

    p La inteligencia emocional se refiere a la capacidad que tienen las personas para reconocer, comprender y gestionar sus propias emociones, así como para identificar y comprender las emociones de los demás. Esta habilidad permite interpretar adecuadamente las situaciones que se presentan en la vida cotidiana y responder de manera consciente frente a ellas. En el ámbito personal y social, la inteligencia emocional favorece la toma de decisiones responsables, el fortalecimiento de las relaciones interpersonales y el manejo adecuado de situaciones que pueden generar estrés o conflicto.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Asimismo, el desarrollo de la inteligencia emocional implica aprender a identificar las emociones que se experimentan en diferentes momentos y comprender cómo estas influyen en el comportamiento. Las emociones forman parte natural de la experiencia humana y pueden manifestarse de diversas formas, como alegría, tristeza, miedo, enojo o entusiasmo. Reconocer estas emociones permite comprender mejor las reacciones propias y facilita la construcción de respuestas más equilibradas frente a los acontecimientos del entorno.


    p.mt-4 La gestión de las emociones consiste en la capacidad de regularlas de manera adecuada para evitar que influyan negativamente en las decisiones o en la convivencia con otras personas. A continuación, se presentan los pasos que orientan este proceso.

    .row.align-items-center.justify-content-center.mt-4(data-aos="flip-up")
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/3.svg', style="width: 128px").m-auto
            p.text-center
              b Reconocer las emociones
            p.text-center.mb-0 Identificar las emociones que se experimentan en un momento determinado, comprendiendo su origen y la manera en que influyen en el comportamiento cotidiano. 
                  
          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/4.svg', style="width: 128px").m-auto
            p.text-center
              b Interpretar las emociones
            p.text-center.mb-0 Analizar el significado de cada emoción y comprender qué situación la genera, sin suprimirla ni ignorarla, sino aceptándola como parte de la experiencia humana.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/5.svg', style="width: 128px").m-auto
            p.text-center
              b Canalizar las emociones
            p.text-center.mb-0 Orientarlas de forma constructiva, transformando las reacciones impulsivas en respuestas conscientes que favorezcan la convivencia y el bienestar personal. 


          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/6.svg', style="width: 128px").m-auto
            p.text-center
              b Comunicarse con claridad
            p.text-center.mb-0 Expresar ideas y sentimientos de manera más clara y respetuosa, fortaleciendo la calidad de las relaciones interpersonales en distintos contextos.


          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/7.svg', style="width: 128px").m-auto
            p.text-center
              b Actuar con empatía
            p.text-center.mb-0 Comprender las situaciones que viven los demás, facilitando la resolución de conflictos y la construcción de relaciones basadas en el respeto mutuo.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p Fortalecer la inteligencia emocional contribuye al desarrollo de competencias blandas fundamentales para la vida personal, social y laboral. Las personas que aprenden a reconocer y gestionar sus emociones suelen mostrar mayor capacidad de adaptación, mejor disposición para el trabajo en equipo y mayor habilidad para enfrentar desafíos. En este sentido, la inteligencia emocional se convierte en un elemento clave para promover el bienestar individual, mejorar la convivencia y favorecer el desarrollo integral de las personas en distintos contextos de la vida.



    p.mt-4 Para comprender mejor la relación entre la inteligencia emocional y la gestión de las emociones, es útil identificar en la tabla 3 algunos de los componentes que intervienen en este proceso. La inteligencia emocional no se limita únicamente a reconocer lo que una persona siente, sino que también implica desarrollar habilidades que permitan comprender, regular y expresar adecuadamente las emociones en diferentes situaciones. En la siguiente tabla se presentan algunos componentes de la inteligencia emocional y su importancia en el desarrollo personal y en la convivencia con los demás.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Componentes de la inteligencia emocional

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #A0F7FE")
              tr
                th(style="width: 300px;") Componente
                th Descripción
                th Importancia en la vida personal y social
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start #[b Autoconocimiento emocional.]
                td.text-start Capacidad para reconocer e identificar las propias emociones y comprender cómo influyen en el comportamiento.
                td.text-start Permite comprender las reacciones personales frente a diferentes situaciones y tomar decisiones más conscientes.
              tr
                td.text-start #[b Autocontrol emocional.]
                td.text-start Habilidad para regular las emociones y responder de manera equilibrada ante situaciones de estrés, conflicto o presión.
                td.text-start Favorece la toma de decisiones responsables y evita reacciones impulsivas que puedan afectar las relaciones interpersonales.

              tr(style="background-color: #F6F6F6")
                td.text-start #[b Motivación personal.]
                td.text-start Capacidad de orientar las emociones hacia el logro de metas y objetivos personales.
                td.text-start Contribuye a mantener una actitud positiva, perseverante y orientada al crecimiento personal.
              tr
                td.text-start #[b Empatía.]
                td.text-start Habilidad para comprender y reconocer las emociones y perspectivas de otras personas.
                td.text-start Fortalece las relaciones interpersonales, la convivencia y el respeto por los demás.

              tr(style="background-color: #F6F6F6")
                td.text-start #[b Habilidades sociales.]
                td.text-start Capacidad para interactuar de manera efectiva con otras personas mediante la comunicación, la cooperación y la resolución de conflictos.
                td.text-start Facilita el trabajo en equipo, la construcción de relaciones positivas y la convivencia en diferentes contextos sociales y laborales.


    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Concepto de inteligencia emocional

    .row.align-items-center
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La inteligencia emocional es la capacidad que tienen las personas para reconocer, comprender y gestionar sus propias emociones, así como para identificar y comprender las emociones de los demás. Este concepto se ha convertido en un elemento fundamental dentro del desarrollo humano, ya que las emociones influyen directamente en la manera en que las personas piensan, actúan y se relacionan con su entorno. Comprender las emociones permite responder de forma más consciente ante diversas situaciones de la vida cotidiana, favoreciendo una convivencia más equilibrada y respetuosa.


        p.mt-4 La inteligencia emocional se relaciona con la habilidad de reconocer los propios sentimientos y los de otras personas, de orientar la motivación hacia el logro personal y de manejar adecuadamente las emociones en las relaciones interpersonales (Goleman, 2013). Esta capacidad no solo influye en el bienestar personal, sino también en el desempeño social y laboral. Cuando una persona desarrolla inteligencia emocional, puede gestionar de manera más efectiva situaciones de presión, conflicto o cambio, lo que contribuye a fortalecer su capacidad de adaptación en distintos contextos. Asimismo, la inteligencia emocional se compone de diferentes habilidades que permiten comprender el papel de las emociones en la vida humana. Entre estas habilidades se encuentran:

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema2/8.png', alt='', style="width: 100%").m-auto


    .row.bg-05.mt-4
      .col-12
        .p-5
          .row.align-items-center.p-5
            .tarjeta.bg-9.p-4
              PasosB.color-acento-contenido
                //-Primer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/9.png', alt='')
                    
                  .col-md-6
                    h4 El autoconocimiento emocional

                    p Capacidad para reconocer e identificar las propias emociones y comprender cómo influyen en el comportamiento. Por ejemplo, una persona identifica que siente ansiedad antes de hablar en público y comprende que esa emoción afecta su desempeño. 

                //-Segundo Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/10.png', alt='')
                    
                  .col-md-6
                    h4 El autocontrol

                    p Habilidad para regular las emociones y responder de manera equilibrada ante situaciones de estrés, conflicto o presión. Por ejemplo, ante una discusión laboral, una persona decide respirar profundo antes de responder para evitar una reacción impulsiva. 

                //-Tercer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/11.png', alt='')
                    
                  .col-md-6
                    h4 La motivación personal


                    p Capacidad de orientar las emociones hacia el logro de metas y objetivos personales. Por ejemplo, una persona mantiene una actitud positiva frente a los errores porque los interpreta como oportunidades de aprendizaje. 
                    
              
                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/12.png', alt='')
                    
                  .col-md-6
                    h4 La empatía

                    p Habilidad para comprender y reconocer las emociones y perspectivas de otras personas. Por ejemplo, un compañero de trabajo nota que otro está frustrado y ajusta su comunicación para brindarle apoyo en ese momento. 

                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/13.png', alt='')
                    
                  .col-md-6
                    h4 Las habilidades sociales

                    p Capacidad para interactuar de manera efectiva con otras personas mediante la comunicación, la cooperación y la resolución de conflictos. Por ejemplo, un integrante de un equipo facilita el diálogo entre sus compañeros cuando surgen desacuerdos, promoviendo soluciones constructivas.




    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p Estas dimensiones contribuyen a que las personas puedan interpretar adecuadamente sus experiencias emocionales y actuar de manera responsable frente a ellas, promoviendo relaciones más saludables y ambientes de convivencia más positivos.



    p.mt-4 En consecuencia, el desarrollo de la inteligencia emocional resulta esencial para fortalecer competencias blandas relacionadas con la comunicación, el trabajo en equipo y la resolución de conflictos. Cuando las personas aprenden a reconocer y gestionar sus emociones, pueden mejorar su capacidad para interactuar con otros, comprender diferentes perspectivas y tomar decisiones más equilibradas. Por esta razón, la inteligencia emocional se considera una herramienta clave para el crecimiento personal y el desarrollo integral de los individuos en los diferentes ámbitos de la vida.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Reconocimiento y comprensión de las emociones

    p El reconocimiento y la comprensión de las emociones constituyen habilidades fundamentales dentro del desarrollo de la inteligencia emocional. Estas habilidades permiten a las personas identificar lo que sienten en diferentes situaciones y comprender cómo esas emociones influyen en sus pensamientos, decisiones y comportamientos. Reconocer una emoción implica ser capaz de nombrarla y entender su origen, mientras que comprenderla supone analizar las causas que la generan y las posibles consecuencias que puede tener en la interacción con otras personas. El primer paso para gestionar adecuadamente las emociones consiste en desarrollar la conciencia emocional, es decir, la capacidad de identificar los propios sentimientos y comprender su impacto en la conducta (Goleman, 2013).

    .row.align-items-center.mt-4(data-aos="flip-up")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/14.png', alt='', style="width: 380px").m-auto
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Con el propósito de profundizar en la comprensión del reconocimiento y la comprensión de las emociones, se presenta a continuación el recurso de  audio que desarrolla de manera clara y estructurada la identificación de las emociones, su origen, las causas que las generan y su impacto en los pensamientos, las decisiones y el comportamiento en diferentes contextos de la vida cotidiana.

        .row.mt-4.bg-r8.bg-base.p-2.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/15.svg', alt='', style="width: 230px").m-auto
          .col-lg-8
            p(style="color: #FFDFFC")
              b Pódcast

            p.text-white Lo invitamos a escuchar el siguiente Pódcast:

            .row.justify-content-center.mt-4.text-white.bg-base
              .tarjeta.h-100
                TarjetaAudio.color-acento-botones.bg-base.mb-3(
                texto="Pódcast Instruccional"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )

            
    p.mt-4 Desde esta perspectiva, el reconocimiento emocional favorece el desarrollo del autoconocimiento, ya que permite a las personas identificar patrones de reacción frente a determinadas situaciones. Cuando una persona logra identificar si se siente frustrada, alegre, preocupada o motivada, puede interpretar mejor sus respuestas emocionales y actuar de manera más consciente. Comprender las propias emociones es un elemento esencial de la educación emocional, ya que contribuye al bienestar personal y facilita la regulación de las respuestas emocionales en diferentes contextos (Bisquerra, 2009).

    .bloque-texto-g.bloque-texto-g--inverso.bg-base.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De igual manera, comprender las emociones también implica reconocer las emociones que experimentan otras personas, lo cual fortalece la empatía y mejora la calidad de las relaciones interpersonales. La capacidad de interpretar expresiones, gestos, tonos de voz o actitudes permite entender cómo se sienten los demás y responder de manera respetuosa y adecuada. Las personas que desarrollan habilidades para interpretar las emociones en los entornos sociales y laborales logran interactuar de manera más efectiva y contribuir a la construcción de ambientes de trabajo más colaborativos (Robbins y Judge, 2017).


    .row.justify-content-center
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/17.svg', style='width: 100px').m-auto
          
          .col
            p En consecuencia, el reconocimiento y la comprensión de las emociones permiten desarrollar una mayor conciencia sobre la forma en que las experiencias emocionales influyen en la convivencia, la comunicación y la toma de decisiones. Cuando las personas adquieren estas habilidades, pueden enfrentar los desafíos de la vida cotidiana con mayor equilibrio emocional y fortalecer su capacidad para relacionarse con los demás.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p El aprendizaje sobre las emociones se convierte en un componente clave dentro del desarrollo personal y del fortalecimiento de las competencias blandas necesarias para la vida y el trabajo.

    p.mt-4 Por esta razón, comprender las propias emociones y las de los demás no es un proceso aislado, sino una habilidad que se fortalece de manera continua y que impacta directamente en la calidad de las relaciones interpersonales y en el desempeño en diferentes contextos sociales y laborales.



    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 2.3 Estrategias para la gestión emocional

    .row.align-items-center
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/18.png', alt='', style="width: 480px").m-auto

      .col-lg-7
        p La gestión emocional se refiere a la capacidad de las personas para reconocer, comprender y regular sus emociones de manera adecuada frente a diferentes situaciones de la vida cotidiana. Desarrollar estrategias para gestionar las emociones permite mantener el equilibrio personal, tomar decisiones más conscientes y mejorar la manera en que interactúa con otras personas. En muchos casos, las emociones intensas pueden influir en las reacciones de una persona; por ello, aprender a gestionarlas contribuye a responder de manera más reflexiva y constructiva ante los retos o conflictos que puedan surgir.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/19.svg', style='width: 80px').m-auto
          
          .col
            p A continuación, se presentan las tres estrategias clave que orientan este proceso y que permiten desarrollar un manejo emocional más consciente en diferentes contextos de la vida personal y laboral.


    .row.justify-content-center.mt-4
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-1")
          .tarjeta.clr--pink02.p-4(titulo="El reconocimiento oportuno de las emociones")
            .row.align-items-center
              .col-lg-6
                p Identificar lo que se siente en un momento determinado ayuda a comprender el origen de la emoción y a evitar reacciones impulsivas. Este proceso implica detenerse a reflexionar sobre lo que ocurre internamente, analizar la situación que la provoca y evaluar las posibles formas de responder de manera adecuada. Por ejemplo, una persona que siente frustración en una reunión de trabajo se detiene a identificar esa emoción antes de responder, lo que le permite expresar su punto de vista con calma y respeto.

              .col-lg-6
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema2/20.png', alt='', style="width: 100%")
    
          div(titulo="El autocontrol emocional")
            .row.align-items-center
              .col-lg-6
                p Permite regular las reacciones frente a situaciones que generan tensión, frustración o estrés. Algunas acciones que favorecen este proceso son la respiración consciente, la reflexión antes de actuar, el diálogo interno positivo y la búsqueda de soluciones constructivas frente a los problemas. Por ejemplo, ante una situación de conflicto, una persona practica la respiración consciente antes de responder, lo que le permite mantener una actitud equilibrada y encontrar soluciones sin generar tensiones adicionales.

              .col-lg-6
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema2/21.png', alt='', style="width: 100%") 

          div(titulo="La comunicación y el apoyo social")
            .row.align-items-center
              .col-lg-6
                p Compartir experiencias, expresar sentimientos de manera respetuosa y buscar orientación en otras personas permite comprender mejor las situaciones que generan determinadas emociones. Establecer relaciones basadas en la confianza y el respeto facilita la construcción de ambientes de convivencia más positivos. Por ejemplo, una persona que atraviesa una situación difícil en su entorno laboral busca el diálogo con un colega de confianza, lo que le permite obtener una perspectiva diferente y encontrar alternativas para gestionar la situación de manera más efectiva.

              .col-lg-6
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/tema2/22.png', alt='', style="width: 100%") 



    p.mt-4 En consecuencia, aplicar estas estrategias de manera consciente y progresiva contribuye al fortalecimiento del equilibrio emocional y al mejoramiento de las relaciones interpersonales en los diferentes ámbitos de la vida. La gestión emocional no es una habilidad innata, sino una competencia que se desarrolla con la práctica, la reflexión y el compromiso personal con el propio crecimiento. De esta manera, las personas que trabajan en el desarrollo de estas estrategias logran responder con mayor serenidad frente a los desafíos cotidianos y participar de manera más efectiva en los espacios de convivencia y colaboración.


    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Impacto de las emociones en la convivencia y en el desempeño laboral


    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-base(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/23.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                figure
                  img(src="@/assets/curso/tema2/24.svg", alt="", style="width: 80px")

                p.mt-4.text-white Las emociones influyen de manera significativa en la forma en que las personas interactúan con los demás y enfrentan las diferentes situaciones de la vida cotidiana. En los entornos sociales y laborales, las emociones pueden facilitar o dificultar la convivencia, dependiendo de cómo sean reconocidas y gestionadas. Cuando una persona comprende sus emociones y actúa de manera consciente frente a ellas, es más probable que establezca relaciones basadas en el respeto, la empatía y la cooperación. En cambio, cuando las emociones no se gestionan adecuadamente, pueden generar conflictos, malentendidos y dificultades en la comunicación.


    p.mt-4 En el ámbito de la convivencia, las emociones influyen directamente en la manera en que las personas se relacionan con su entorno familiar, social y comunitario. Emociones como la empatía, la comprensión y la tolerancia favorecen la construcción de ambientes de respeto y colaboración. Por el contrario, emociones mal gestionadas como la ira, la frustración o el resentimiento pueden afectar negativamente la interacción entre las personas. Por esta razón, el desarrollo de habilidades emocionales resulta fundamental para fortalecer la convivencia y promover relaciones interpersonales más saludables. En la figura 1 se ilustra el impacto que genera la mala gestión emocional en la convivencia y las emociones que intervienen en este proceso.


    .row.mt-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 1. 
          span Impacto emocional en la convivencia 

        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/25.svg',
            alt='Figura 1. Impacto emocional en la convivencia. figura  ilustra el impacto de seis emociones: empatía, comprensión, tolerancia, ira, frustración y resentimiento en la convivencia, mostrando cómo su inadecuada gestión genera conflictos, comportamientos negativos y deterioro en las relaciones interpersonales.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/26.svg',
            alt='Figura 1. Impacto emocional en la convivencia. Esta figura  ilustra el impacto de seis emociones: empatía, comprensión, tolerancia, ira, frustración y resentimiento en la convivencia, mostrando cómo su inadecuada gestión genera conflictos, comportamientos negativos y deterioro en las relaciones interpersonales.'
          )


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p En el contexto laboral, las emociones cumplen un papel fundamental en el rendimiento de las personas y en el clima organizacional. La forma en que un trabajador gestiona sus emociones puede influir en su capacidad para trabajar en equipo, resolver problemas, comunicarse de manera efectiva y adaptarse a los cambios. Las organizaciones valoran cada vez más a las personas que demuestran equilibrio emocional, ya que estas habilidades contribuyen a mejorar la productividad, fortalecer la cooperación y facilitar la toma de decisiones en situaciones complejas.

        p.mt-4 De igual manera, comprender el impacto de las emociones permite desarrollar estrategias que favorezcan el bienestar individual y colectivo en los espacios de trabajo. Cuando las personas aprenden a reconocer sus emociones y a gestionarlas de manera adecuada, pueden enfrentar los desafíos laborales con mayor serenidad y confianza. Además, el manejo adecuado de las emociones contribuye a crear ambientes laborales más positivos, donde se promueve la colaboración, el respeto mutuo y el logro de objetivos comunes.

    .row.bg-01
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/27.png', alt='', style="width: 380px").m-auto
            .col-lg-8
              p El manejo adecuado de las emociones genera efectos concretos y positivos en la convivencia, la comunicación y el desempeño en los diferentes ámbitos de la vida personal y laboral. A continuación, se presentan los principales impactos que se evidencian cuando las personas desarrollan habilidades para reconocer y gestionar sus emociones de manera consciente y efectiva:

              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 1
                  p.mb-0 Fortalecimiento de las relaciones interpersonales basadas en el respeto y la empatía.
          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 2
                  p.mb-0 Mejora en la comunicación entre las personas en diferentes contextos sociales y laborales.

          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 3
                  p.mb-0 Mayor capacidad para resolver conflictos de manera constructiva.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 4
                  p.mb-0 Desarrollo de habilidades para el trabajo en equipo y la cooperación.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 5
                  p.mb-0 Incremento de la motivación y el compromiso frente a las responsabilidades laborales.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 6
                  p.mb-0 Mejora del clima organizacional y de la convivencia en los espacios de trabajo.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 7
                  p.mb-0 Mayor capacidad de adaptación frente a cambios o situaciones de presión.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 8
                  p.mb-0 Toma de decisiones más equilibradas y responsables.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 9
                  p.mb-0 Promoción del bienestar personal y del equilibrio emocional.

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 10
                  p.mb-0 Contribución al logro de objetivos individuales y colectivos.




</template>

<script>
export default {
  name: 'Tema2',
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
