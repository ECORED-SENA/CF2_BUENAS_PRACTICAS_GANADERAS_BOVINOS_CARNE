<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procedimientos, procesos y registros de la implementación BPG

    .row.align-items-center.justify-content-center.mb-5
      .col-md-4.col-10.mb-5
        figure
          img(src='@/assets/curso/tema2/img01.png')
      .col-md-7.col-11
        p Un procedimiento es un conjunto de actividades detalladas que se describen secuencialmente y deben cumplir con unas condiciones establecidas por las normas: duración, documentación, entre otras. 
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p <b>Para el caso de BPG, la norma que regula tales procedimientos es la resolución 068167 de 2020, por la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos.</b>
      .col-md-10.col-12
        .cajon.color-acento-contenido.p-2
          .row.align-items-center.justify-content-center
            .col-2
              figure
                img(src='@/assets/curso/tema2/img02.svg')
            .col-9
              p Adicional a las exigencias normativas, para el cumplimiento y salubridad de un producto inocuo y de alta calidad para el consumo humano, se debe cumplir con un registro en el que se evidencie el desarrollo de cada una de las actividades de la empresa. 
    p.mb-5 Conozca los aspectos generales relacionados con procedimientos, procesos y registros, que se enuncian a continuación. Recuerde llevar nota en su libreta personal de apuntes:

    .row.justify-content-center.mb-5.BG01
      .col-md-10.col-11
        SlyderA(tipo="b")
          .row  
            .col-md-5
              .row  
                .col-12.p-3.BG07
                  h5.ps-5 



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
