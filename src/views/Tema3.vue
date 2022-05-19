<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión documental: concepto y técnicas

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6.col-md-7.col-12.order-md-1.order-2
        .bloque-texto-b.color-secundario.p-5
          .bloque-texto-b__texto
            p La gestión documental es un mecanismo operativo que permite sistematizar e inspeccionar las actividades con el fin de planificar, organizar y manejar la documentación respectiva de las BPG, en todas sus etapas hasta llegar a su disposición final.
      .col-lg-4.col-md-5.col-10.order-md-2.order-1
        figure
          img(src='@/assets/curso/tema3/img01.png')
    p.mb-5 Sobre la gestión documental, se deben tener presentes las siguientes generalidades:

    .BG10.p-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="1")
          .col-md-5.col-6



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
