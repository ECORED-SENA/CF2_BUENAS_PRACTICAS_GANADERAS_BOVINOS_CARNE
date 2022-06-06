<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Plan de implementación

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.col-md-6.col-10.order-md-1.order-2.mt-5(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.mb-5
          p Las buenas prácticas ganaderas son un sistema de aseguramiento enfocados en la producción primaria que busca la inocuidad en la producción pecuaria; disminuyendo así todo tipo de riesgo ya sean biológicos, químicos o físicos, generados en el predio o los procesos y que podría afectar la salud del consumidor potencial.
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img01.png')

    .row.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          .row.align-items-center
            .col-lg-2.col-md-3.col-4
              figure
                img(src='@/assets/curso/tema1/img02.svg')
            .col-lg-10.col-md-9.col-8.p-4
              p El productor ganadero debe propender, entre sus principales responsabilidades, por la seguridad alimentaria y garantizar que dichos alimentos no causen ningún tipo de daño a la salud del consumidor en las diversas etapas de comercialización.
      
    p.mb-5 En Colombia, existen entidades como el ICA, Invima o el Ministerio de Salud, entre otras, que son las encargadas de todos los procesos ganaderos; estas entidades buscan cuidar, fortalecer y controlar las BPG, verificando siempre el beneficio del consumidor. Ampliemos la información sobre algunas de ellas.

    .row.justify-content-center.mb-5.mb-md-5(data-aos="fade-right")
      .col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img03.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.ms-4.mb-0 ICA
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center
            .p-4
              h5 ICA
              p.mb-0  El Instituto Colombiano Agropecuario, ICA, es una entidad Pública del Orden Nacional con personería jurídica, autonomía administrativa y patrimonio independiente, perteneciente al Sistema Nacional de Ciencia y Tecnología, adscrita al Ministerio de Agricultura y Desarrollo Rural.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img04.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.ms-4.mb-0 INVIMA
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center
            .p-4
              h5 INVIMA
              p.mb-0 Instituto Nacional de Vigilancia de Medicamentos y Alimentos, es una entidad de vigilancia y control de carácter técnico científico, que trabaja para la protección de la salud individual y colectiva de los colombianos, mediante la aplicación de las normas sanitarias asociada al consumo y uso de alimentos, medicamentos, dispositivos médicos y otros productos objeto de vigilancia sanitaria.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img05.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.ms-4.mb-0 Entidades territoriales
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center
            .p-4
              h5 Entidades territoriales
              p.mb-0 Son entidades territoriales los departamentos, los distritos, los municipios y los territorios indígenas. La ley podrá darles el carácter de entidades territoriales a las regiones y provincias que se constituyan, en los términos de la Constitución y la ley.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Objetivos

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-12.order-md-1.order-2.mb-md-0.mb-4
        p #[strong Se trata de aquellas metas establecidas dentro del plan de Buenas Prácticas Ganaderas, con las cuales se favorece el cumplimiento de las mismas, en todos los predios interesados en cumplir la norma y ser competitivos a nivel nacional e internacional]. Es de suma importancia, para el gremio ganadero, que las entidades como el ICA y el INVIMA intervengan en los procesos en los cuales se encuentre la cadena primaria (consumo de carne bovina)
        p En la ganadería bovina se debe contar con una misión y visión marcadas, debido a que esto refleja la motivación y empeño del negocio y fija las metas en calidad del producto y bienestar común. Cabe resaltar que, en la implementación de BPG, los objetivos clave son:
      .col-lg-5.col-md-6.col-10.order-md-2.order-1.mb-md-0.mb-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img06.png')

    .row.mb-5
      LineaTiempoE.color-primario
        .row(titulo="Trazar programas")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Trazar programas sanitarios y de inocuidad. 
        .row(titulo="Recopilar y organizar")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Recopilar y organizar los registros para manejo administrativo.
        .row(titulo="Implementar")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Implementar las buenas prácticas pecuarias en la alimentación y en el uso de los medicamentos.
        .row(titulo="Instaurar")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Instaurar requisitos sanitarios en la propiedad. 
        .row(titulo="Implementar")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Implementar registro de vehículos. 
        .row(titulo="Inspeccionar")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Inspeccionar los insumos y medicamentos  
        .row(titulo="Efectuar")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Efectuar programa de saneamiento 
        .row(titulo="Cumplir")
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            p Cumplir con los requerimientos del almacenamiento de insumos

    separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Cronograma

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-10.mb-md-0.mb-4
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Los cronogramas son una herramienta útil que ayuda a planificar, organizadamente, el desarrollo de actividades requeridas y acordes a la línea de tiempo de un proyecto. Esta actividad es responsabilidad de la persona dueña o encargada de administrar la empresa y debe saber divulgar a tiempo y en buena forma a las demás personas implicadas en el proceso productivo.
      .col-lg-5.col-8.mb-md-0.mb-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img07.png')

    p.mb-5 Afiance su conocimiento, en lo relacionado con el cronograma del plan de implementación de BPB, visualizando con atención el recurso que a continuación se muestra. Recuerde llevar registro de los aspectos más relevantes, en su libreta personal de apuntes.

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        separador   
    #t_1_3.titulo-segundo.color-acento-contenido.p-0.mb-0(data-aos="fade-right")
      h2 1.3	Lista de chequeo

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2.mt-5(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3.mb-5
          p #[strong La lista de chequeo es un formato impreso que se diligencia como medio de información de ciertos puntos o situaciones de control y es muy utilizada en auditorías de calidad]. La función principal es identificar si hay un mal procedimiento y es el primer paso para una auditoría y la manera de cómo analizarla y dar solución a este inconveniente.
          p Para realizar una lista de chequeo, se deben tener algunos parámetros y se requieren formular algunas preguntas orientadoras, como las que se mencionan a continuación:
      .col-lg-4.col-md-6.col-10.order-md-2.order-1(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img08.png')

    .row.justify-content-center.mb-5.mb-md-5(data-aos="fade-right")
      .col-lg-10.mb-5
        figure
          img(src='@/assets/curso/tema1/img09.svg')
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            h4.ms-5.ps-5.text-center ¡Importante!
            p La lista de chequeo se adecua, de acuerdo a los procedimientos a observar y, con esa adecuación, se procede a la recolección de la información.

    p.mb-5 Según determinaciones del ICA, los ganaderos y entidades que busquen comercializar productos cárnicos, deben cumplir con un reglamento de cumplimiento a la normativa impuesta por protección animal y la dirección técnica de inocuidad e insumos veterinarios; en ella se utiliza una lista de chequeo muy similar a la planteada a continuación:

    .tabla-b.color-acento-contenido.mb-0
      .tabla-b__header
        h4.mb-0 <b>Tabla 1</b> Lista de chequeo para comercialización de productos cárnicos
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000; width: 12%").text-center <b>1</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000; width: 68%") <b>SANIDAD ANIMAL</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 1.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Plan sanitario y enfermedades de control oficial.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 1.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Certificado de hato libre de brúcela y tuberculosis.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 1.3
        td.ps-4(style="background-color: #F8F2E8; color: #000") Protocolo de manejo y aislamiento de animales enfermos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 1.4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Registro de diagnósticos de enfermedades y de mortalidades. 
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 1.5
        td.ps-4(style="background-color: #F8F2E8; color: #000") Instructivo de manejo sanitario sobre enfermedades de control oficial.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 1.6
        td.ps-4(style="background-color: #FBF7F1; color: #000") Área o potrero de enfermería o tratamiento.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>2</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>IDENTIFICACIÓN</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 2.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Identificación de los animales.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 2.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Registro o ficha individual o por lotes.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>3</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>BIOSEGURIDAD</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 3.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Delimitación del predio.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 3.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Registro de ingreso de personas y vehículos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 3.3
        td.ps-4(style="background-color: #F8F2E8; color: #000") Cuarentena.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 3.4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Protocolo de ingreso del material genético.		
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 3.5
        td.ps-4(style="background-color: #F8F2E8; color: #000") Identificación de áreas.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>4</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE BUENAS PRÁCTICAS PARA EL USO DE MEDICAMENTOS VETERINARIOS-BPMV.</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 4.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Registro ICA de los productos veterinarios.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Vigencia de los productos veterinarios.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 4.3
        td.ps-4(style="background-color: #F8F2E8; color: #000") Almacenamiento de productos veterinarios.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4.4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Sustancias prohibidas.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 4.5
        td.ps-4(style="background-color: #F8F2E8; color: #000") No utilizar materias primas de naturaleza química con fines terapéuticos o como promotores de crecimiento.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4.6
        td.ps-4(style="background-color: #FBF7F1; color: #000") Tiempo de retiro de medicamentos veterinarios. 
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 4.7
        td.ps-4(style="background-color: #F8F2E8; color: #000") Prescripción veterinaria de los medicamentos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4.8
        td.ps-4(style="background-color: #FBF7F1; color: #000") Registros de tratamientos veterinarios.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 4.9
        td.ps-4(style="background-color: #F8F2E8; color: #000") Equipos para la reproducción y administración de medicamentos y biológicos veterinarios.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4.10
        td.ps-4(style="background-color: #FBF7F1; color: #000") Inventario de productos veterinarios.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 4.11
        td.ps-4(style="background-color: #F8F2E8; color: #000") Autorización veterinaria de aplicación de medicamentos y realización de pequeñas intervenciones quirúrgicas.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4.12
        td.ps-4(style="background-color: #FBF7F1; color: #000") Notificación de eventos adversos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>5</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE BUENAS PRÁCTICAS PARA LA ALIMENTACIÓN ANIMAL –BPAA.</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 5.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Registro ICA y buen estado de alimentos comerciales.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 5.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Uso de alimentos como vehículo para la administración de medicamentos para animales.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 5.3
        td.ps-4(style="background-color: #F8F2E8; color: #000") Prohibiciones alimentación animal.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 5.4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Uso de subproductos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 5.5
        td.ps-4(style="background-color: #F8F2E8; color: #000") Insumos agrícolas y periodo de carencia.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 5.6
        td.ps-4(style="background-color: #FBF7F1; color: #000") Inventario de alimentos y materias primas.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 5.7
        td.ps-4(style="background-color: #F8F2E8; color: #000") Almacenamiento y calidad del agua para consumo de animales.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>6</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE SANEAMIENTO.</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 6.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Condición limpieza áreas, equipos y utensilios.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 6.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") El predio se encuentra ubicado en zonas alejadas de contaminación.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 6.3
        td.ps-4(style="background-color: #F8F2E8; color: #000") Protección y conservación de fuentes hídricas.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 6.4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Disposición de estiércol y de efluentes.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 6.5
        td.ps-4(style="background-color: #F8F2E8; color: #000") Manejo de residuos sólidos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 6.6
        td.ps-4(style="background-color: #FBF7F1; color: #000") Almacenamiento de productos agropecuarios, equipos y herramientas.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 6.7
        td.ps-4(style="background-color: #F8F2E8; color: #000") Manejo de plagas y roedores.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>7</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE BIENESTAR ANIMAL.</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 7.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Adaptación de los animales.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 7.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Superficies y espacio disponible.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 7.3
        td.ps-4(style="background-color: #F8F2E8; color: #000") Agrupamiento social.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 7.4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Estabulación.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 7.5
        td.ps-4(style="background-color: #F8F2E8; color: #000") Enfermedades y parásitos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 7.6
        td.ps-4(style="background-color: #FBF7F1; color: #000") Alimentos y agua. 
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 7.7
        td.ps-4(style="background-color: #F8F2E8; color: #000") Sacrificio humanitario.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 7.8
        td.ps-4(style="background-color: #FBF7F1; color: #000") Dolor y sufrimiento.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 7.9
        td.ps-4(style="background-color: #F8F2E8; color: #000") Relación hombre-animal.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Concepto
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center <b>8</b>
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE PERSONAL.</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 8.1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Capacitación al personal.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 8.2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Uso de implementos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 

    separador
    #t_1_4.titulo-segundo.color-acento-contenido.p-0.mb-0(data-aos="fade-right")
      h2 1.4	Parámetros BPG

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-5.col-8
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img11.svg')
      .col-lg-6.col-md-7.col-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Los parámetros son elementos que permiten clasificar, medir y determinar las condiciones de un proceso, en cualquiera de sus líneas. Se trata de un método que, al momento de evaluar diferentes situaciones en particular, determina las variables representativas dando un pronóstico del panorama que se está analizando.
    p.mb-5 Conozca algunos aspectos importantes, relacionados con los parámetros en las buenas prácticas ganaderas:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Diagnóstico de áreas de trabajo")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-md-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img12.png')
          .col-md-7.mb-md-0.mb-4
            h5 Diagnóstico de áreas de trabajo
            p Para identificar los parámetros, dentro de un proceso, se realiza un diagnóstico del área a trabajar; además, se determinan todos los puntos donde se presenta mayor concentración de labor.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis de parámetros")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-md-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img13.png')
          .col-md-7.mb-md-0.mb-4
            h5 Análisis de parámetros
            p Una vez identificados los puntos donde hay mayor trabajo, se analizan los parámetros que se generan, permitiendo clasificar y medir las condiciones y, entonces, tener mayor control de la función que se está desarrollando. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Responsables")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-md-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img14.png')
          .col-md-7.mb-md-0.mb-4
            h5 Responsables
            p El personal responsable de realizar el debido seguimiento son los operarios de una empresa u organización y el análisis que los asigna, lo hace profesional a cargo o la persona que conoce el proceso.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Evaluación de variables")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-md-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img15.png')
          .col-md-7.mb-md-0.mb-4
            h5 Evaluación de variables
            p En ganadería de carne, las variables a evaluar se determinan de acuerdo al área de proceso; es así como se encuentran diferentes parámetros, los cuales se deben manejar independientemente, pero con un fin en particular: la obtención de un producto inocuo y de calidad para los consumidores. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Verificación de las entidades competentes")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-md-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img16.svg')
          .col-md-6.mb-md-0.mb-4
            h5 Verificación de las entidades competentes
            p Generalmente, la revisión la efectúan los administradores de la finca o predio en proceso de certificación y, luego, son verificados por las entidades como el ICA para, posteriormente, ser comercializados y direccionados a su consumidor final.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido.p-0.mb-0(data-aos="fade-right")
      h2 1.5	Metodología BPG

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-12.order-md-1.order-2.mb-md-0.mb-4
        p Se trata de métodos usados para alcanzar objetivos, siendo muy similares a los utilizados en investigaciones científicas; sirven para organizar la estructura de una empresa o proyecto, debido a que generan instrumentos para valorar los tiempos y costos de la producción. Las personas encargadas son, generalmente, los ganaderos propietarios de fincas o las personas encargadas de su administración. 
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p En los predios que se quieran certificar en BPG por parte del ICA, tales metodologías se aplican en todo el proceso (proceso completo) de la producción de carne. 
      .col-lg-5.col-md-6.col-11.order-md-2.order-1.mb-md-0.mb-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img17.png')

    p.mb-5 Aunque la metodología de las buenas prácticas ganaderas tiene unas fases acordes a la visión del ganadero, existen algunas que son indispensables para el manejo de la producción. Aquí se las presentamos:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.col-9.mb-4
        figure
          img(src='@/assets/curso/tema1/img18.svg')
      .col-lg-7.col-md-6.col-12.p-4.BG01
        SlyderA(tipo="b")
          .row
            .col-md-12.mb-5
              figure
                img(src='@/assets/curso/tema1/img19.png')
            .col-md-12
              h5 1. Diagnóstico
              p Es la recolección de datos, este fase es la estructura de las otras fases (planificación, ejecución, evaluación). Da una perspectiva de cómo se encuentra la empresa ganadera. El diagnóstico puede ser observado desde la documentación o mediante visitas al área o predio, por método observatorio de cada proceso, con una herramienta documental (DOFA).
          .row
            .col-md-12.mb-5
              figure
                img(src='@/assets/curso/tema1/img20.png')
            .col-md-12
              h5 2. Identificación
              p Fase para establecer falencias encontradas y formular el problema. Esta fase debe ser muy clara y en ella se deben establecer los parámetros a utilizar en el proceso (inversión y operación, de acuerdo a situación actual de la especie o actividad).  Esta fase vincula información de procesos de ganadería en Colombia y el mundo (normatividad, manejo, mercadeo, etc.)
          .row
            .col-md-12.mb-5
              figure
                img(src='@/assets/curso/tema1/img21.png')
            .col-md-12
              h5 3. Implementación
              p Se trata de todos los procedimientos  por aplicar durante la producción, los cuales tendrán un monitoreo constante para cumplir todos los objetivos propuestos. Es importante documentarse con respecto al proyecto o tener asesores del área, que puedan tomar la mejor decisión y en el momento oportuno.
          .row
            .col-md-12.mb-5
              figure
                img(src='@/assets/curso/tema1/img22.png')
            .col-md-12
              h5 4. Evaluación 
              p Es la fase  más crucial e importante de toda la metodología; en ella se realiza la valoración de cada una de las fases planteadas en donde se aprueban o rediseñan las actividades del proceso, de acuerdo a los materiales, usos, herramientas, acciones, desempeños y planes ejecutados durante el proceso productivo.

    .row.justify-content-center.mb-5
      .col-md-10.p-3.BG02
        .row.align-items-center.justify-content-center
          .col-md-2.col-6
            figure.img03
              img(src='@/assets/curso/tema1/img23.svg')
          .col-md-1
            h4.text-center ¡Atención!
          .col-md-8.ps-5
            p La ganadería colombiana está en constante evolución por eso constantemente las normas y legislaciones están en proceso de actualización para ser competitivos comercialmente con otros países, esta es la ventana comercial que tiene todos los productores agropecuarios a nivel mundial.

    separador
    #t_1_6.titulo-segundo.color-acento-contenido.p-0.mb-5(data-aos="fade-right")
      h2 1.6	Estrategias de evaluación de la implementación BPG

    p.mb-5 La estrategia de evaluación en BPG es una herramienta que permite realizar un monitoreo constante de la producción, la cual debe ser bien implementada y tener participación directa con un recurso de mano de obra y recursos económicos. Esta facilita el propósito, la estrategia y la cobertura de las acciones implementadas.

    .row.justify-content-center.mb-5
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img24.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            p El propósito principal de la aplicación de la estrategia de evaluación es alcanzar los indicadores sugeridos por los entes de control y alcanzar las metas propuestas que benefician tanto al productor como al consumidor y, en general, generar un buen servicio en óptimas condiciones.
      
    .row.justify-content-center.mb-4  
      .col-md-8
        TabsC.color-acento-contenido
          .py-3(titulo="<b>Criterios de la evaluación</b>")
            .row.justify-content-center
              .col-12.BG03.p-5
                p Los criterios fundamentales de evaluación, utilizados en cualquier hato ganadero, deben llevar una lista de chequeo que será previamente revisada, evaluada y diligenciada para la obtención del certificado de las BPG.
          .py-3(titulo="<b>Exigencias</b>")
            .row.justify-content-center
              .col-12.BG03.p-5
                p La lista de chequeo para la evaluación, debe cumplir las normas exigidas en la normatividad del ente de control y se adapta a la producción, abarcando todas las áreas del proceso de producción de carne.
      
    p.mb-5 Analice la siguiente tabla, en la cual se detallan aspectos generales de suma importancia para la aplicación de las estrategias de evaluación en la implementación de BPG:

    .tabla-b.color-acento-contenido.mb-0
      .tabla-b__header
        p <b>Tabla 2</b> Lista de chequeo de estrategias de evaluación
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-2(style="background-color: #FBF7F1; color: #000") <b>SANIDAD ANIMAL</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 1
        td.ps-4(style="background-color: #F8F2E8; color: #000") Existe certificación oficial vigente que certifique hato libre de brucelosis.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 2
        td.ps-4(style="background-color: #FBF7F1; color: #000") Existe certificación oficial vigente que certifique hato libre de tuberculosis.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 3
        td.ps-4(style="background-color: #F8F2E8; color: #000") El esquema de vacunación de enfermedades de control oficial está actualizado.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 4
        td.ps-4(style="background-color: #FBF7F1; color: #000") Realiza un manejo adecuado de animales enfermos dentro del predio.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 5
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee un Ilustrativo de instrucciones por parte del médico veterinario sobre el manejo de enfermedades de control oficial.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 6
        td.ps-4(style="background-color: #FBF7F1; color: #000") Cuenta con lugar para almacenar equipos y medicamentos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-2(style="background-color: #FBF7F1; color: #000") <b>IDENTIFICACIÓN</b>  
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 7
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee el predio delimitado.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 8
        td.ps-4(style="background-color: #FBF7F1; color: #000") Posee un registro individual de los animales.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000")

    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No    
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>BIOSEGURIDAD</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 9
        td.ps-4(style="background-color: #F8F2E8; color: #000") El predio se encuentra delimitado.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 10
        td.ps-4(style="background-color: #FBF7F1; color: #000") Cuenta con bitácora de ingreso y salida de semovientes, personas y vehículos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 11
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee área de cuarentena.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 12
        td.ps-4(style="background-color: #FBF7F1; color: #000") Posee área de desinfección de vehículos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 13
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee guías sanitarias de movilización de los semovientes.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No     
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE BUENAS PRÁCTICAS PARA EL USO DE MEDICAMENTOS VETERINARIOS-BPMV.</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 14
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee plan sanitario en el predio.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 15
        td.ps-4(style="background-color: #FBF7F1; color: #000") Realiza una vigencia de productos agropecuarios de acuerdo con lo establecido en la norma.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 16
        td.ps-4(style="background-color: #F8F2E8; color: #000") Clasifica los medicamentos veterinarios de acuerdo con la norma.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 17
        td.ps-4(style="background-color: #FBF7F1; color: #000") Posee personal capacitado para el manejo y atención de los medicamentos veterinarios de acuerdo con la norma.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 18
        td.ps-4(style="background-color: #F8F2E8; color: #000") El MVZ MV pose su tarjeta profesional.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 19
        td.ps-4(style="background-color: #FBF7F1; color: #000") Utiliza el tiempo de retiro de medicamentos veterinarios de acuerdo con lo establecido.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 20
        td.ps-4(style="background-color: #F8F2E8; color: #000") Realiza la prescripción veterinaria de los medicamentos de acuerdo con la norma.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 21
        td.ps-4(style="background-color: #FBF7F1; color: #000") Posee un registro de aplicación de tratamientos veterinarios.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 22
        td.ps-4(style="background-color: #F8F2E8; color: #000") Tiene inventario de los medicamentos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 23
        td.ps-4(style="background-color: #FBF7F1; color: #000") Posee almacenamiento y transporte de biológicos de acuerdo con la norma.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 24
        td.ps-4(style="background-color: #F8F2E8; color: #000") Tiene un lugar apto para almacenar y transportar medicamentos biológicos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 25
        td.ps-4(style="background-color: #FBF7F1; color: #000") Utiliza un control de medicamentos especiales de acuerdo con la norma.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No    
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE BUENAS PRÁCTICAS PARA LA ALIMENTACIÓN ANIMAL-BPAA</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 26
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee un registro ICA vigente.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 27
        td.ps-4(style="background-color: #FBF7F1; color: #000") Cuenta con suplementación animal bajo los parámetros técnicos.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 28
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee un lugar de almacenamiento de alimentos.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 29
        td.ps-4(style="background-color: #FBF7F1; color: #000") Tiene disponibilidad de alimento y agua.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 30
        td.ps-4(style="background-color: #F8F2E8; color: #000") Tiene un inventario de alimentos y materias primas utilizadas.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 31
        td.ps-4(style="background-color: #FBF7F1; color: #000") Realiza un registro de calidad de agua.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No  
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE SANEAMIENTO</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 32
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee limpieza de áreas, equipos y utensilios de las instalaciones.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 33
        td.ps-4(style="background-color: #FBF7F1; color: #000") Realiza la clasificación y manejo de basuras actualizados.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 34
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee protección y mantenimiento de fuentes hídricas.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 35
        td.ps-4(style="background-color: #FBF7F1; color: #000") Manejo de residuos sólidos agrícolas, de plagas y roedores.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 36
        td.ps-4(style="background-color: #F8F2E8; color: #000") Realiza periodo de carencia de los productos plaguicidas en uso agrícola.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 37
        td.ps-4(style="background-color: #FBF7F1; color: #000") Tiene registro de plaguicidas agrícolas.
        td(style="background-color: #FFF5E5; color: #000")
        td(style="background-color: #FFFAF2; color: #000") 
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No     
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE BIENESTAR ANIMAL</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 38
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee instalaciones adecuadas para los animales.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
    
    table.mb-4(data-aos="fade-right")
      tr
        th(style="background-color: #DDEFD7; color: #000; width: 12%").text-center Número
        th(style="background-color: #F8F2E8; color: #000; width: 68%").text-center Criterio
        th.p-0(colspan="2" style="background-color: #FFCE7E; color: #000").text-center Cumple
          table
            tr
              td(style="background-color: #FFEBCB; color: #000").text-center Sí
              td(style="background-color: #FFF0D8; color: #000").text-center No      
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 
        td.ps-4(style="background-color: #FBF7F1; color: #000") <b>REQUISITOS DE PERSONAL</b>
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 39
        td.ps-4(style="background-color: #F8F2E8; color: #000") Posee un esquema de capacitación de los operarios.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 40
        td.ps-4(style="background-color: #FBF7F1; color: #000") Tienen certificación médica de los operarios.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 
      tr  
        td(style="background-color: #DDEFD7; color: #000").text-center 41
        td.ps-4(style="background-color: #F8F2E8; color: #000") Los operarios cuentan con seguridad social.
        td(style="background-color: #FFE9C6; color: #000") 
        td(style="background-color: #FFEED2; color: #000") 
      tr  
        td(style="background-color: #E5F3E1; color: #000").text-center 42
        td.ps-4(style="background-color: #FBF7F1; color: #000") Tienen ropa de trabajo adecuada.
        td(style="background-color: #FFF5E5; color: #000") 
        td(style="background-color: #FFFAF2; color: #000") 

    separador
    #t_1_7.titulo-segundo.color-acento-contenido.p-0.mb-5(data-aos="fade-right")
      h2 1.7	Documentación y Metas BPG

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.col-md-6.col-11.mb-md-0.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img25.png')
      .col-lg-7.col-md-6.col-12.mb-md-0.mb-4
        p La documentación es un proceso que consiste en recopilar datos e identificar información verídica de un tema, para la obtención de un nuevo conocimiento. Su principal función es garantizar la conservación de datos, además de intercambiar información con un equipo de trabajo, a fin de crear un documento sólido que permita reconocer, en una empresa u organización, la existencia de errores, prácticas, registros, entre otras fuentes.
        .cajon.color-primario.p-4(data-aos="fade-left")
          p En el año 2020 se creó la resolución 068167 por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG, en la producción de carne de bovinos y/o bufalinos.
    
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.BG04.p-2
        .h4.ms-3.mb-0.me-5 Metas
      .col-auto
        img.img01(src='@/assets/curso/tema1/img26.svg')

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-9.col-md-8.col-12.order-md-1.order-2
        p En cuanto a las metas BPG, estas son un conjunto de prácticas que conllevan un resultado deseado en una organización. Los resultados se han de orientar en el corto, mediano y largo plazo y serán logrados a través de acciones concretas que se formularán, simultáneamente, con las metas.
        .cajon.color-acento-contenido.p-4.mb-4
          p El alcance oportuno de las metas, facilita el aseguramiento de la inocuidad y el posicionamiento de la finca en el mercado nacional e internacional, trazando un panorama productivo y competitivo.
        p Las metas de BPG de carne son:
      .col-lg-3.col-md-4.col-8.order-md-2.order-1
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img27.png')

    .row.justify-content-center.mb-5
      .col-md-8.col-11.p-3.mb-5.BG05
        p.text-center <b>Figura 1</b> Metas de BPG de carne
      .col-md-8.col-11.p-3.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img28.svg')
      .col-md-10.col-12.BG06.p-2
        .row.justify-content-center.align-items-center
          .col-md-2.col-4
            figure.img03(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img29.svg')
          .col-md-7.col-8
            .row
              .col-md-8
                h4 Plan de Implementación de BPG
                p Amplie su conocimiento, en lo relacionado con el Plan de Implementación de BPG, explorando el enlace que aquí se propone:
              .col-sm-auto(data-aos="fade-left")
                a.boton.color-acento-contenido(href="https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx" target="_blank")
                  span Descargar
                  i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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
