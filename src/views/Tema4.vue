<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunicación y gestión de personal

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.col-md-5.col-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img01.png')
      .col-lg-6.col-md-6.col-12.mb-5
        .row
          .col-12.mb-4
            .bloque-texto-b.color-primario.p-5
              .bloque-texto-b__texto
                p <b>La comunicación y la gestión de personal</b>, aunque son dos estrategias o procesos independientes, tienen estrecha relación en el macroproceso de la producción ganadera. La comunicación por su parte, permite el desarrollo y la interacción entre grupos y entidades en el sector ganadero; su objetivo principal es mantener una articulación constante en temas de vacunación, normativas, producción y manejo de las BPG.
          .col-auto.BG04.p-3.ms-5(data-aos="fade-left")
            h5.text-center.mb-0 Conozca qué es cada una:
      .col-md-10.col-12.mb-5
        .bloque-texto-g.color-primario.item-right.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            h5 La comunicación<br><br>
            p.mb-0 La comunicación es la estrategia que abre paso a una comunidad productiva y de gran impacto, al punto que la finca o empresa podría llegar a ser, incluso, reconocida a nivel nacional e internacional.
      .col-md-10.col-12.mb-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            h5 La Gestión de Personal<br><br>
            p.mb-0 Son todas las actividades administrativas de recursos humanos, desde el proceso de contratación hasta la finalización del contrato laboral. Aquí se implican todos los aspectos legales y de seguridad y salud en el trabajo SST. de la empresa.
    
    p.mb-5 Le presentamos una serie de aspectos clave para la aplicación de las estrategias de comunicación y gestión de personal en la finca ganadera; preste toda su atención y lleve registro de lo más destacado en su libreta personal de apuntes:

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WeKADALI0OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        



</template>

<script>
export default {
  name: 'Tema4',
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
