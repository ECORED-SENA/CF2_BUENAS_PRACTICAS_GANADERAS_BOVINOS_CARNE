<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel

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
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2.bg3
            h4.mb-0 ICA
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 ICA
              p.mb-0  El Instituto Colombiano Agropecuario, ICA, es una entidad Pública del Orden Nacional con personería jurídica, autonomía administrativa y patrimonio independiente, perteneciente al Sistema Nacional de Ciencia y Tecnología, adscrita al Ministerio de Agricultura y Desarrollo Rural.      .col-lg-3.mb-3.mb-md-0
      .col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img04.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2.bg3
            h4.mb-0 INVIMA
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 INVIMA
              p.mb-0 Instituto Nacional de Vigilancia de Medicamentos y Alimentos, es una entidad de vigilancia y control de carácter técnico científico, que trabaja para la protección de la salud individual y colectiva de los colombianos, mediante la aplicación de las normas sanitarias asociada al consumo y uso de alimentos, medicamentos, dispositivos médicos y otros productos objeto de vigilancia sanitaria.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img05.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2.bg3
            h4.mb-0 Entidades territoriales
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Entidades territoriales
              p.mb-0 Son entidades territoriales los departamentos, los distritos, los municipios y los territorios indígenas. La ley podrá darles el carácter de entidades territoriales a las regiones y provincias que se constituyan, en los términos de la Constitución y la ley.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Objetivos

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-12.order-md-1.order-2
        p Se trata de aquellas metas establecidas dentro del plan de Buenas Prácticas Ganaderas, con las cuales se favorece el cumplimiento de las mismas, en todos los predios interesados en cumplir la norma y ser competitivos a nivel nacional e internacional. Es de suma importancia, para el gremio ganadero, que las entidades como el ICA y el INVIMA intervengan en los procesos en los cuales se encuentre la cadena primaria (consumo de carne bovina)
        p En la ganadería bovina se debe contar con una misión y visión marcadas, debido a que esto refleja la motivación y empeño del negocio y fija las metas en calidad del producto y bienestar común. Cabe resaltar que, en la implementación de BPG, los objetivos clave son:
      .col-lg-5.col-md-6.col-10.order-md-2.order-1
        figure
          img(src='@/assets/curso/tema1/img06.png')

    .row.mb-5
      LineaTiempoE.color-primario
        .row(titulo="Trazar programas")
          .col-lg-6.mb-4.mb-lg-0
            p Trazar programas sanitarios y de inocuidad. 
        .row(titulo="Recopilar y organizar")
          .col-lg-6.mb-4.mb-lg-0
            p Recopilar y organizar los registros para manejo administrativo.
        .row(titulo="Implementar")
          .col-lg-6.mb-4.mb-lg-0
            p Implementar las buenas prácticas pecuarias en la alimentación y en el uso de los medicamentos.
        .row(titulo="Instaurar")
          .col-lg-6.mb-4.mb-lg-0
            p Instaurar requisitos sanitarios en la propiedad. 
        .row(titulo="Implementar")
          .col-lg-6.mb-4.mb-lg-0
            p Implementar registro de vehículos. 
        .row(titulo="Inspeccionar")
          .col-lg-6.mb-4.mb-lg-0
            p Inspeccionar los insumos y medicamentos  
        .row(titulo="Efectuar")
          .col-lg-6.mb-4.mb-lg-0
            p Efectuar programa de saneamiento 
        .row(titulo="Cumplir")
          .col-lg-6.mb-4.mb-lg-0
            p Cumplir con los requerimientos del almacenamiento de insumos
      
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Cronograma

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-6
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Los cronogramas son una herramienta útil que ayuda a planificar, organizadamente, el desarrollo de actividades requeridas y acordes a la línea de tiempo de un proyecto. Esta actividad es responsabilidad de la persona dueña o encargada de administrar la empresa y debe saber divulgar a tiempo y en buena forma a las demás personas implicadas en el proceso productivo.
      .col-lg-5.col-6
        figure
          img(src='@/assets/curso/tema1/img07.png')

    p.mb-5 Afiance su conocimiento, en lo relacionado con el cronograma del plan de implementación de BPB, visualizando con atención el recurso que a continuación se muestra. Recuerde llevar registro de los aspectos más relevantes, en su libreta personal de apuntes.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    #t_1_3.titulo-segundo.color-acento-contenido.p-0.mb-0(data-aos="fade-right")
      h2 1.3	Lista de chequeo

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.col-md-6.col-10.order-md-1.order-2.mt-5(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.mb-5
          p La lista de chequeo es un formato impreso que se diligencia como medio de información de ciertos puntos o situaciones de control y es muy utilizada en auditorías de calidad. La función principal es identificar si hay un mal procedimiento y es el primer paso para una auditoría y la manera de cómo analizarla y dar solución a este inconveniente.
          p Para realizar una lista de chequeo, se deben tener algunos parámetros y se requieren formular algunas preguntas orientadoras, como las que se mencionan a continuación:
      .col-lg-5.col-md-6.col-10.order-md-2.order-1(data-aos="fade-left")
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
          .bloque-texto-g__texto.p-5
            h4.ms-5.ps-5 ¡Importante!<br><br>
            p La lista de chequeo se adecua, de acuerdo a los procedimientos a observar y, con esa adecuación, se procede a la recolección de la información.

    p.mb-5 Según determinaciones del ICA, los ganaderos y entidades que busquen comercializar productos cárnicos, deben cumplir con un reglamento de cumplimiento a la normativa impuesta por protección animal y la dirección técnica de inocuidad e insumos veterinarios; en ella se utiliza una lista de chequeo muy similar a la planteada a continuación:

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        p.pt-3 <b>Tabla 1</b> Lista de chequeo para comercialización de productos cárnicos
      table
        tr
          th(style="background-color: #DDEFD7; color: #000").text-center Número
          th(style="background-color: #F8F2E8; color: #000").text-center Concepto
          th.p-0
            table
              tr(style="background-color: #FFCE7E; color: #000").text-center Cumple
            table
              tr
                td(style="background-color: #FFEBCB; color: #000").text-center Sí
                td(style="background-color: #FFF0D8; color: #000").text-center No
        tr  
          td(style="background-color: #E5F3E1; color: #000").text-center 1
          td(style="background-color: #FBF7F1; color: #000").text-center SANIDAD ANIMAL
          th.p-0
            table
              tr
                td(style="background-color: #FFF5E5; color: #000").text-center 
                td(style="background-color: #FFFAF2; color: #000").text-center 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
