<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Explorando emociones y habilidades comunicativas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprobar la apropiación de los conceptos fundamentales del componente formativo mediante la resolución de preguntas de selección múltiple sobre desarrollo personal, inteligencia emocional, comunicación y relaciones interpersonales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'El desarrollo personal se entiende como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso de aprendizaje exclusivamente académico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un proceso continuo de crecimiento que permite fortalecer habilidades y conocimientos personales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una actividad enfocada únicamente en el trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un conjunto de actividades recreativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal del autoconocimiento en el desarrollo personal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer las propias emociones, pensamientos y comportamientos para actuar de forma consciente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Evitar la interacción social para proteger la estabilidad emocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ignorar las propias debilidades para mantener la confianza personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depender de otras personas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Seleccione la afirmación que describe correctamente una creencia limitante:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impulsar el crecimiento personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la confianza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar barreras que impiden el desarrollo personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promover la innovación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La inteligencia emocional se refiere a la capacidad de:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alcanzar un alto coeficiente intelectual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprender y gestionar las emociones propias y de los demás.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar las emociones de las demás personas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar experimentar emociones negativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes es un componente de la inteligencia emocional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La empatía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La capacidad de memorización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El pensamiento lógico-analítico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El coeficiente intelectual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'La gestión de emociones consiste en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los sentimientos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar y regular las emociones adecuadamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar expresar emociones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las emociones negativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Identifique la afirmación que describe correctamente la comunicación humana:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un proceso que se limita al intercambio verbal de palabras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un intercambio restringido a contextos formales y laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una transmisión unidireccional de mensajes entre emisor y receptor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El intercambio de información, ideas y emociones entre personas, a través del lenguaje verbal y no verbal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿A qué hace referencia la comunicación interpersonal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La comunicación con máquinas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La comunicación interna de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La comunicación entre dos o más personas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La comunicación digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Un acto lingüístico es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una acción que se realiza a través del lenguaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una regla que organiza las palabras dentro de una oración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una forma de comunicación exclusivamente no verbal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un medio para transmitir información únicamente por escrito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Identifique la afirmación correcta sobre el lenguaje verbal:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar gestos únicamente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar palabras habladas o escritas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar señales visuales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar sonidos naturales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes elementos corresponde al lenguaje no verbal?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las palabras escritas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los textos académicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las ecuaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los gestos, posturas y expresiones faciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'La comunicación asertiva permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imponer las ideas propias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Expresar ideas de forma clara y respetuosa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar a los demás.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Seleccione la afirmación que describe una característica de la comunicación asertiva:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La agresividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La imposición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El respeto por las opiniones de los demás.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La indiferencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes factores puede convertirse en una barrera de la comunicación?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La escucha activa y la disposición para comprender al interlocutor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El ruido o la falta de atención.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El respeto mutuo entre las personas durante la conversación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La empatía y la capacidad de reconocer las emociones ajenas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las estrategias para mejorar la comunicación interpersonal buscan:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar conflictos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la interacción entre las personas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar el diálogo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Identifique la afirmación que define correctamente las relaciones interpersonales:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los vínculos establecidos exclusivamente en el entorno familiar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La comunicación a través de medios digitales y redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los lazos afectivos formados únicamente en contextos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las interacciones que se establecen entre las personas en distintos contextos de la vida cotidiana.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿En qué consiste la empatía?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprender las emociones de otras personas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar el contacto social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar los sentimientos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imponer ideas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'La resolución de conflictos implica:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar el problema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Buscar soluciones mediante el diálogo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imponer decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Seleccione la afirmación que corresponde al trabajo colaborativo:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trabajar de forma individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el trabajo en grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Competir constantemente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cooperar con otras personas para alcanzar objetivos comunes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿En qué principios se fundamenta una convivencia positiva?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El respeto y la cooperación entre las personas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La imposición de ideas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aislamiento social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La falta de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
