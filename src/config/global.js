export default {
  global: {
    componenteFormativo: 'Implementación de BPG en bovinos de carne',
    descripcionCurso:
      'Con el estudio de este componente formativo, el aprendiz podrá asimilar conceptos y prácticas para el desempeño de plan de implementación de BPG. Se afianzará en la generación de objetivos, cronograma, listas de chequeo, parámetros, metodología, estrategias de evaluación, documentación y procedimientos generales del mismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cronograma',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Lista de chequeo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Parámetros BPG',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Metodología BPG',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Estrategias de evaluación de la implementación BPG',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Documentación y metas BPG',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimientos, procesos y registros de la implementación BPG',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión documental: concepto y técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación y gestión de personal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema: 'Plan de Implementación',
      referencia:
        'Producción agropecuaria y agroindustrial. (2021). Buenas prácticas ganaderas, ICA; 2020 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F1SXng6fIr4&t=227s',
    },
    {
      tema: 'Plan de implementación',
      referencia:
        'La Finca de Hoy. (2019). Impacto de las BPG en productividad y mercados [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=leSpGVgUde0',
    },
    {
      tema: 'Documentación y metas BPG',
      referencia:
        'TvAgro. (2018). Requisitos para Certificar una Finca en Buenas Prácticas Ganaderas - TvAgro por Juan Gonzalo Ángel [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=z_g_1Fn4exk',
    },
    {
      tema: 'Procedimientos, procesos y registros de la implementación BPG',
      referencia:
        'Sánchez, L. (2020). BPG en Producción de Carne Bovina [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CDffdvhbR_c',
    },
    {
      tema: 'Gestión documental: concepto y técnicas',
      referencia:
        'Didáctica Empresarial. (2020). Sistema de gestión documental [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uxLwxvnG2NY',
    },
  ],
  glosario: [
    {
      termino: 'ICA',
      significado:
        'Como lo indica sus siglas, el ICA es el Instituto Colombiano Agropecuario: entidad Pública del Orden Nacional agropecuaria, que tiene como función la prevención, vigilancia y control de todo riesgo sanitario, biológico y químico en las especies animales y vegetales.',
    },
    {
      termino: 'Implementación',
      significado:
        'Es la ejecución de una idea la cual tiene un proceso dónde se cumplen unas normas o parámetros.',
    },
    {
      termino: 'Personal',
      significado:
        'Conjunto de las personas que laboran en un lugar, dependencia, ganadería, etc.',
    },
    {
      termino: 'Resolución',
      significado:
        'Son decisiones o normativas que imparte una autoridad la cual es para cumplir las pautas de acuerdo a lo establecido.',
    },
    {
      termino: 'Sanidad',
      significado:
        'Estado óptimo de un ser viviente con respecto a la sanidad y bienestar del mismo. ',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Un procedimiento que permite identificar y evaluar el proceso de un producto en toda su etapa de producción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corrientes Portal Turístico Provincial (s.f.). Ganadería de Corrientes. Corrientes.',
      link: 'http://www.corrientes.com.ar/provincia/ganaderia.php',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos (s.f.). Buenas Prácticas Ganaderas. FEDEGAN.',
      link:
        'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20Ganaderas%20(BPG,que%20trabajan%20en%20la%20explotaci%C3%B3n',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (s.f.). Reglamento sobre las condiciones sanitarias y de inocuidad en la producción de ganado bovino y porcino.',
      link:
        'https://www.ica.gov.co/getdoc/016f3c96-a458-4fa6-ae96-41d18b2221f5/requisitos-sanitarios-y-de-inocuidad-en-la-producc.aspx',
    },
    {
      referencia:
        'OnCuba (08 de noviembre de 2018). Ganadería cubana: más leche, pero muy lejos de satisfacer la demanda. Oncuba next.',
      link:
        'https://oncubanews.com/cuba/ganaderia-cubana-mas-leche-pero-muy-lejos-de-satisfacer-la-demanda/',
    },
    {
      referencia:
        'Resolución 002341 de 2007. [Instituto Colombiano Agropecuario]. Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano. Agosto 23 de 2007',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'James Dubán Lozano Cuellar',
        cargo: 'Experto Temático',
        centro: 'Centro Agropecuario la Granja Regional Tolima',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
