<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Procedimientos, procesos y registros de la implementación BPG

    .row.align-items-center.justify-content-center.mb-5
      .col-md-4.col-10.mb-5.mb-md-0.mb-4
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img01.png')
      .col-md-7.col-11.mb-md-0.mb-4
        p.p-3 Un procedimiento es un conjunto de actividades detalladas que se describen secuencialmente y deben cumplir con unas condiciones establecidas por las normas: duración, documentación, entre otras. 
        .bloque-texto-b.color-acento-botones.p-3(data-aos="fade-left")
          .bloque-texto-b__texto
            p <b>Para el caso de BPG, la norma que regula tales procedimientos es la resolución 068167 de 2020, por la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos.</b>
      .col-md-10.mb-md-0.mb-4
        .cajon.color-acento-contenido.p-2
          .row.align-items-center.justify-content-center
            .col-md-2.col-6.mb-4
              figure.img03(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img02.svg')
            .col-9(data-aos="fade-left")
              p Adicional a las exigencias normativas, para el cumplimiento y salubridad de un producto inocuo y de alta calidad para el consumo humano, se debe cumplir con un registro en el que se evidencie el desarrollo de cada una de las actividades de la empresa. 
    p.mb-5 Conozca los aspectos generales relacionados con procedimientos, procesos y registros, que se enuncian a continuación. Recuerde llevar nota en su libreta personal de apuntes:

    .row.justify-content-center.mb-5.BG01(data-aos="fade-right")
      .col-xl-11.col-md-12.col-11.py-5
        SlyderA(tipo="b")
          .row.ms-1
            .col-lg-6
              .row  
                .col-md-12.p-xl-3.p-lg-2.p-3.BG07
                  h5.ps-5.mb-0 Procedimientos
                .col-12.p-xl-4.p-3.BG08
                  p.mb-0 Sirven para detallar un proceso y están conformados por actividades cronológicas del personal encargado, regidas por normas. Los procedimientos de las BPG están encaminados a la certificación por buen manejo de la crianza, explotación y exportación de carne bovina para consumo humano. La normativa por cumplir la reglamenta el ICA.
            .col-lg-6.ps-0
              figure.img04
                img(src='@/assets/curso/tema2/img03.png')
          .row.ms-1 
            .col-lg-6
              .row  
                .col-md-12.p-xl-3.p-lg-2.p-3.BG07
                  h5.ps-5.mb-0 Procesos
                .col-12.p-xl-4.p-3.BG08
                  p.mb-0 Cadena de actividades realizadas para alcanzar una meta o propósito. Vinculan al personal para darles tareas, de acuerdo a su profesión o experiencia, lo cual permite un control y ordenar todas las secciones o departamentos de la empresa ganadera. Los procesos mejoran las actividades administrativas y productivas de los predios y permiten que la ganadería se establezca como una empresa competitiva y eficaz. 
            .col-lg-6.ps-0
              figure.img04
                img(src='@/assets/curso/tema2/img04.png')
          .row.ms-1 
            .col-lg-6
              .row  
                .col-md-12.p-xl-3.p-lg-2.p-3.BG07
                  h5.ps-5.mb-0 Entes de control
                .col-12.p-xl-4.p-3.BG08
                  p.mb-0 Existen entes de control que se encargan de verificar los estándares de la producción y velar por el funcionamiento y calidad del producto final. El  ICA se encarga de prevenir, vigilar y controlar los riesgos sanitarios, biológicos y químicos para las especies animales y vegetales. FEDEGAN, organiza el gremio ganadero a nivel nacional.
            .col-lg-6.ps-0
              figure.img04
                img(src='@/assets/curso/tema2/img06.svg')
          .row.ms-1
            .col-lg-6
              .row  
                .col-md-12.p-xl-3.p-lg-2.p-3.BG07
                  h5.ps-5.mb-0 Registros BPG
                .col-12.p-xl-4.p-3.BG08
                  p.mb-0 Es documentación que consigna la actividad específica y propia de una empresa o establecimiento, conserva información y su trazabilidad en archivos. Para llevar adecuadamente la documentación, deben existir unos parámetros claros para la empresa. Algunos parámetros son:
            .col-lg-6.BG13.p-xl-4.p-lg-2.p-4.px-5
              ul.lista-ul
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Logo de la empresa.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Razón social.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Nombre del registro.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Realizado por. 
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Fecha de diligenciamiento.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Aprobado. 
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Fecha de aprobación.
                li 
                  i.fas.fa-paper-plane.fa-fw.mb-0
                  p.mb-0 Aspectos a registrar (actividad).

          .row.ms-1 
            .col-lg-6
              .row  
                .col-md-12.p-xl-3.p-lg-2.p-3.BG07
                  h5.ps-5.mb-0 Manejo de los registros
                .col-12.p-xl-4.p-lg-2.p-3.BG08
                  p.mb-0 El manejo acertado de registros es una condición indispensable que ayuda a que la empresa ganadera tenga, entre otras, soporte financiero y rentable, además de crear un archivo que permite visualizar los avances de las labores productivas, económicas, comerciales, etc. Algunos de estos registros son:
            .col-lg-6.BG13.p-xl-4.p-lg-2.p-4.px-5
              ul.lista-ul
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Registro de ingreso de personas y vehículos.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Registro Sanitario de Predio Pecuario -RSPP- o Inscripción Sanitaria de Predio Pecuario -ISPP. 
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Registro de temperatura de biológicos.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Registro de tratamiento veterinarios.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Registro de uso de medicamentos por animal.
                li 
                  i.fas.fa-paper-plane.fa-fw
                  | Registro de la rotación de animales en potreros y la utilización de plaguicidas y fertilizantes.

              
        
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-7
        a.anexo.mb-4.mb-lg-0(href="https://www.ica.gov.co/getattachment/74510117-1403-4242-81f9-b7224b32b0fd/Por-la-cual-se-establecen-los-requisitos-para-3.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web]. Afiance su saber sobre procedimientos, procesos y registros, explorando el enlace que aquí se propone:




</template>

<script>
export default {
  name: 'Tema2',
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
