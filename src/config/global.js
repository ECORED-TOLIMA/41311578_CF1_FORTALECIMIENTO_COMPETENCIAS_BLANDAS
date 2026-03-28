export default {
  global: {
    Name: 'Desarrollo personal y comunicación efectiva',
    Description:
      'Este componente formativo orienta el desarrollo de habilidades socioemocionales relacionadas con el autoconocimiento, la inteligencia emocional y la comunicación efectiva, con el fin de fortalecer las relaciones interpersonales en contextos personales y laborales, favorecer la convivencia y el desempeño, y promover el crecimiento integral y el compromiso con el propio desarrollo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo personal y autoconocimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de desarrollo personal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del autoconocimiento en el crecimiento humano',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Identificación de fortalezas y oportunidades de mejora',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Creencias limitantes y creencias potenciadoras',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Inteligencia emocional y gestión de emociones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de inteligencia emocional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reconocimiento y comprensión de las emociones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estrategias para la gestión emocional',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Impacto de las emociones en la convivencia y en el desempeño laboral',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación humana y actos lingüísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de comunicación interpersonal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de comunicación: intra, inter y transpersonal',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Actos lingüísticos en la comunicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Lenguaje verbal y lenguaje no verbal',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comunicación asertiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de comunicación asertiva',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características de la comunicación asertiva',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Barreras de la comunicación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estrategias para mejorar la comunicación interpersonal',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Relaciones interpersonales y convivencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia de las relaciones interpersonales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Empatía y respeto en la interacción social',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Resolución de conflictos en contextos cotidianos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Convivencia y trabajo colaborativo',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Desarrollo personal:</strong>',
      significado:
        'proceso continuo mediante el cual una persona fortalece sus habilidades, conocimientos y actitudes con el fin de mejorar su bienestar, su desempeño y su crecimiento en diferentes ámbitos de la vida.',
    },
    {
      termino: '<strong>Autoconocimiento:</strong>',
      significado:
        'capacidad de una persona para comprender sus emociones, pensamientos, valores y comportamientos, lo que le permite tomar decisiones más conscientes y mejorar su interacción con los demás.',
    },
    {
      termino: '<strong>Inteligencia emocional:</strong>',
      significado:
        'habilidad para reconocer, comprender y gestionar las propias emociones, así como para identificar y comprender las emociones de otras personas.',
    },
    {
      termino: '<strong>Gestión emocional:</strong>',
      significado:
        'proceso mediante el cual una persona regula sus emociones de forma adecuada para responder de manera equilibrada ante diferentes situaciones.',
    },
    {
      termino: '<strong>Comunicación:</strong>',
      significado:
        'proceso mediante el cual las personas intercambian información, ideas, sentimientos y significados a través del lenguaje verbal y no verbal.',
    },
    {
      termino: '<strong>Comunicación asertiva:</strong>',
      significado:
        'forma de comunicación que permite expresar ideas, opiniones y emociones de manera clara, respetuosa y honesta, sin afectar los derechos de los demás.',
    },
    {
      termino: '<strong>Lenguaje verbal:</strong>',
      significado:
        'tipo de comunicación que utiliza palabras, de forma oral o escrita, para transmitir información o expresar pensamientos.',
    },
    {
      termino: '<strong>Lenguaje no verbal:</strong>',
      significado:
        'forma de comunicación que se expresa a través de gestos, posturas, expresiones faciales, contacto visual y tono de voz, complementando el mensaje verbal.',
    },
    {
      termino: '<strong>Empatía:</strong>',
      significado:
        'capacidad de comprender y reconocer las emociones, pensamientos o situaciones que experimentan otras personas.',
    },
    {
      termino: '<strong>Relaciones interpersonales:</strong>',
      significado:
        'interacciones que se establecen entre dos o más personas y que influyen en la convivencia, la cooperación y el desarrollo social.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alles, M. (2012). Desarrollo del talento humano basado en competencias. Granica.',
      link: '',
    },
    {
      referencia:
        'Bisquerra, R. (2009). Educación emocional y bienestar. Praxis.',
      link: '',
    },
    {
      referencia:
        'Boyatzis, R., & McKee, A. (2005). Resonant leadership: Renewing yourself and connecting with others through mindfulness, hope, and compassion. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Carnegie, D. (2010). Cómo ganar amigos e influir sobre las personas. Edhasa.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2017). Gestión del talento humano. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Covey, S. (2005). Los siete hábitos de la gente altamente efectiva. Paidós.',
      link: '',
    },
    {
      referencia: 'Echeverría, R. (2011). Ontología del lenguaje. Granica.',
      link: '',
    },
    {
      referencia: 'Goleman, D. (2013). Inteligencia emocional. Kairós.',
      link: '',
    },
    {
      referencia:
        'Robbins, S., & Judge, T. (2017). Comportamiento organizacional. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Rosenberg, M. (2003). Comunicación no violenta: un lenguaje de vida. Gran Aldea Editores.',
      link: '',
    },
    {
      referencia:
        'Salovey, P., & Mayer, J. D. (1990). Emotional intelligence. <em>Imagination, Cognition and Personality</em>, <em>9</em>(3), 185–211.',
      link: '',
    },
    {
      referencia:
        'Senge, P. (2006). La quinta disciplina: el arte y la práctica de la organización que aprende. Granica.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2019). <em>Diseño curricular del programa Fortalecimiento de las competencias blandas para la vida y la productividad</em>.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2020). <em>Guía metodológica para el desarrollo de competencias transversales</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General  ',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
