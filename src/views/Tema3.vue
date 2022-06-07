<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 Gestión documental: concepto y técnicas

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-md-7.col-12.order-md-1.order-2
        .bloque-texto-b.color-secundario.p-5
          .bloque-texto-b__texto
            p La gestión documental es un mecanismo operativo que permite sistematizar e inspeccionar las actividades con el fin de planificar, organizar y manejar la documentación respectiva de las BPG, en todas sus etapas hasta llegar a su disposición final.
      .col-lg-4.col-md-5.col-10.order-md-2.order-1
        figure
          img(src='@/assets/curso/tema3/img01.png')
    p.mb-5 Sobre la gestión documental, se deben tener presentes las siguientes generalidades:

    
    .BG10.p-5(data-aos="fade-right")
      PasosB.color-acento-contenido(data-aos="fade-right")
        .row(titulo="").justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0.pe-0.pdr
            .BG011.p-2.ps-4
              p.text-bold.mb-0 Responsables
            .BG012.p-4
              p.alt De este proceso se deben encargar los directivos o administradores, los cuales hacen el seguimiento al archivo.
          .col-lg-6.ps-0
            figure
              img(src='@/assets/curso/tema3/img02.jpg')
        .row(titulo="").justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0.pe-0.pdr
            .BG011.p-2.ps-4
              p.text-bold.mb-0 Funciones de esta dependencia
            .BG012.p-4
              p.alt Las principales funciones en esta dependencia son: formalizar el proceso administrativo, ordenar la documentación de acuerdo a las dependencias, mejorar el acceso a la información, conservar la información para luego ser digitalizada.
          .col-lg-6.ps-0
            figure
              img(src='@/assets/curso/tema3/img03.jpg')
        .row(titulo="").justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0.pe-0.pdr
            .BG011.p-2.ps-4
              p.text-bold.mb-0 Automaticidad
            .BG012.p-4
              p.alt La gestión documental brinda la oportunidad de tener procesos automatizados, de manejo de la información, dentro de una empresa y esto contribuye al rendimiento y mejora ostensibles, de la productividad.
          .col-lg-6.ps-0
            figure
              img(src='@/assets/curso/tema3/img04.jpg')
        .row(titulo="").justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0.pe-0.pdr
            .BG011.p-2.ps-4
              p.text-bold.mb-0 Tipos de archivos
            .BG012.p-4
              p.alt Los archivos suelen ser físicos y sirven para procesos fiscales y administrativos y tienen una durabilidad de 20 años de almacenamiento. Actualmente, para liberar espacio en esta área, la información puede ser ingresada a software especializados.
          .col-lg-6.ps-0
            figure
              img(src='@/assets/curso/tema3/img05.jpg')




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
