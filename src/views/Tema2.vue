<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Indicadores de gestión
    p.mb-5(data-aos="fade-down") Los indicadores de gestión constituyen herramientas fundamentales para medir, analizar y evaluar el desempeño de los procesos organizacionales. Permiten verificar el cumplimiento de objetivos, realizar seguimiento a las metas establecidas y facilitar la toma de decisiones basada en información confiable y verificable.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En el marco del Sistema de Gestión de la Calidad, los indicadores permiten evaluar la eficacia y eficiencia de los procesos, identificar oportunidades de mejora y evidenciar el cumplimiento de los requisitos establecidos en la NTC ISO 9001. Su implementación favorece el control sistemático del desempeño organizacional y contribuye al logro de los resultados estratégicos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Los indicadores se construyen a partir de variables cuantitativas o cualitativas que permiten analizar el comportamiento de un proceso en un periodo determinado. Para que sean efectivos, deben estar alineados con los objetivos organizacionales, los resultados esperados y las necesidades de las partes interesadas.
        p.mb-0(data-aos="fade-down") Dentro del enfoque basado en procesos, los indicadores facilitan el monitoreo permanente del desempeño, permitiendo detectar desviaciones, evaluar tendencias y establecer acciones correctivas o de mejora cuando sea necesario. De esta manera, se convierten en instrumentos clave para el fortalecimiento del Sistema de Gestión de la Calidad y la optimización de los resultados organizacionales.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") La adecuada formulación de indicadores requiere definir claramente qué se desea medir, cómo se realizará la medición, con qué frecuencia se evaluará y quién será responsable del seguimiento. Estos elementos permiten garantizar la confiabilidad de la información y el uso adecuado de los resultados obtenidos.
            .col.col-lg-2.col-auto.order-lg-2.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema2/img03.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El uso sistemático de indicadores promueve una cultura organizacional orientada al análisis de datos, al mejoramiento continuo y al cumplimiento de los objetivos estratégicos, fortaleciendo la competitividad y la sostenibilidad institucional.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Elementos de un indicador
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img04.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Un indicador de gestión se estructura a partir de varios elementos que permiten garantizar su claridad, medición objetiva y utilidad para la toma de decisiones. La correcta definición de estos componentes facilita el seguimiento del desempeño de los procesos y la evaluación del cumplimiento de los objetivos organizacionales.
        p.mb-0(data-aos="fade-down") Los elementos de un indicador permiten establecer qué se mide, cómo se realiza la medición, cuál es el resultado esperado y quién es responsable del seguimiento. Su adecuada formulación contribuye a generar información confiable que respalde la gestión del Sistema de Gestión de la Calidad.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los principales elementos que conforman un indicador de gestión:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Elementos de un indicador de gestión
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Elemento
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Nombre del indicador.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identifica de manera clara y precisa qué se desea medir. Debe ser comprensible y relacionarse con el proceso u objetivo que evalúa.
              tr
                td(data-aos="fade-down") Objetivo del indicador.
                td(data-aos="fade-down") Describe el propósito del indicador y el resultado que se pretende controlar o mejorar.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fórmula de cálculo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Establece la operación matemática que permite obtener el resultado del indicador.
              tr
                td(data-aos="fade-down") Unidad de medida.
                td(data-aos="fade-down") Define la forma en que se expresa el resultado, por ejemplo, porcentaje, número absoluto, tiempo o tasa.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Meta.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Representa el resultado esperado o nivel de desempeño que la organización pretende alcanzar.
              tr
                td(data-aos="fade-down") Frecuencia de medición.
                td(data-aos="fade-down") Determina el periodo en el que se realiza el seguimiento del indicador, como mensual, trimestral o anual.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fuente de información.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indica el origen de los datos necesarios para calcular el indicador.
              tr
                td(data-aos="fade-down") Responsable.
                td(data-aos="fade-down") Define la persona o área encargada de recopilar, analizar y reportar la información del indicador.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rango de interpretación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite analizar los resultados mediante parámetros que indican niveles de cumplimiento o desviación.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La definición adecuada de estos elementos permite asegurar que los indicadores sean pertinentes, medibles y útiles para el seguimiento del desempeño organizacional. Asimismo, facilita la comparación de resultados en diferentes periodos, el análisis de tendencias y la identificación de oportunidades de mejora dentro de los procesos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 Los indicadores correctamente estructurados contribuyen al fortalecimiento del Sistema de Gestión de la Calidad, ya que proporcionan información objetiva que respalda la toma de decisiones, el control del desempeño y la mejora continua de la organización.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Elaboración de indicadores
    p(data-aos="fade-down") La elaboración de indicadores de gestión es un proceso que permite medir el desempeño de los procesos organizacionales, verificar el cumplimiento de los objetivos y facilitar la toma de decisiones basada en datos. Un indicador bien formulado debe ser claro, medible, relevante y alineado con los objetivos estratégicos y operativos de la organización.
    p.mb-4(data-aos="fade-down") La construcción de indicadores requiere seguir una metodología estructurada que garantice su pertinencia y confiabilidad. A continuación, se presenta un procedimiento general para su elaboración.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center.g-0
            .col-lg-6.order-lg-2.order-2
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                .tarjeta.bg-white.p-4
                  //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                  //-   h2 Pódcast
                  TarjetaAudio.color-acento-botones.mb-3(
                  texto="Pódcast"
                  :audio="require('@/assets/curso/audio/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6.col-8.col-md-7.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema2/img06.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo aplicado a un proceso de atención al cliente:
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema2/img07.png', alt='Imagen decorativa')
      .col.col-lg-8.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C08.p-4
              p.mb-0(data-aos="fade-down") #[b Proceso:] atención al cliente.
              p.mb-0(data-aos="fade-down") #[b Objetivo del indicador:] evaluar la oportunidad en la atención de solicitudes de los usuarios.
              p.mb-0(data-aos="fade-down") #[b Variable a medir:] tiempo de respuesta a solicitudes.
              p.mb-0(data-aos="fade-down") #[b Fórmula de cálculo:] número de solicitudes atendidas dentro del tiempo establecido ÷ total de solicitudes recibidas × 100.
              p.mb-0(data-aos="fade-down") #[b Unidad de medida:] porcentaje (%).
              p.mb-0(data-aos="fade-down") #[b Meta:] 95 % de solicitudes atendidas dentro del tiempo establecido.
              p.mb-0(data-aos="fade-down") #[b Frecuencia de medición:] mensual.
              p.mb-0(data-aos="fade-down") #[b Fuente de información:] registro de solicitudes del sistema de atención al cliente.
              p(data-aos="fade-down") Responsable: coordinador del área de servicio al cliente.
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-3
                    p.text-bold(data-aos="fade-down") Interpretación:
                    ul.lista-ul--color.mb-0(data-aos="fade-down")
                      li
                        i.fas.fa-folder
                        p.mb-0 Igual o superior al 95 % indica cumplimiento del objetivo.
                      li
                        i.fas.fa-folder
                        p.mb-0 Entre 80 % y 94 % indica necesidad de seguimiento.
                      li
                        i.fas.fa-folder
                        p.mb-0 Inferior al 80 % indica desviación y requiere acciones correctivas.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La elaboración adecuada de indicadores permite a la organización monitorear el desempeño de sus procesos, identificar desviaciones, evaluar el cumplimiento de metas y orientar acciones de mejora continua. Asimismo, fortalece la gestión basada en evidencia, promoviendo la eficiencia, la transparencia y la satisfacción de las partes interesadas.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Tipos de indicadores
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img08.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") Los indicadores de gestión pueden clasificarse según el tipo de información que permiten analizar dentro de los procesos organizacionales. Esta clasificación facilita la evaluación integral del desempeño, ya que permite medir resultados, uso de recursos, calidad del servicio y cumplimiento de requisitos.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img09.svg', alt='Imagen decorativa')
        .cajon.cajon.C02.color-primario.p-4.mb-3.py-3
          p.mb-0(data-aos="fade-down") La NTC ISO 9001 promueve el uso de diferentes tipos de indicadores con el fin de realizar seguimiento al desempeño del Sistema de Gestión de la Calidad, identificar oportunidades de mejora y fortalecer la toma de decisiones basada en datos.
        p.mb-0(data-aos="fade-down") A continuación, se presenta una clasificación comparativa de los principales tipos de indicadores utilizados en la gestión organizacional:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación de indicadores de gestión
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Tipo de indicador
                th(data-aos="fade-down")(style= "width: 25%") Qué mide
                th(data-aos="fade-down")(style= "width: 25%") Característica principal
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo práctico
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Eficacia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Nivel de cumplimiento de objetivos y metas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa si se logran los resultados planificados.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Porcentaje de metas de producción cumplidas en un periodo determinado.
              tr
                td(data-aos="fade-down") Eficiencia.
                td(data-aos="fade-down") Relación entre resultados obtenidos y recursos utilizados.
                td(data-aos="fade-down") Analiza el aprovechamiento de recursos como tiempo, costos y personal.
                td(data-aos="fade-down") Costo promedio por unidad producida.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Efectividad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Impacto de los resultados en las partes interesadas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Integra el logro de objetivos con el valor generado.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Nivel de satisfacción del cliente frente al servicio prestado.
              tr
                td(data-aos="fade-down") Calidad.
                td(data-aos="fade-down") Cumplimiento de requisitos técnicos y expectativas del cliente.
                td(data-aos="fade-down") Permite identificar conformidad o no conformidad del producto o servicio.
                td(data-aos="fade-down") Porcentaje de productos defectuosos detectados.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Productividad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Relación entre producción y recursos empleados.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evalúa el rendimiento global de los procesos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Número de servicios prestados por trabajador en una jornada.
              tr
                td(data-aos="fade-down") Cumplimiento.
                td(data-aos="fade-down") Nivel de aplicación de requisitos legales, normativos o contractuales.
                td(data-aos="fade-down") Permite verificar la conformidad regulatoria.
                td(data-aos="fade-down") Porcentaje de auditorías legales aprobadas.
    p.mb-0(data-aos="fade-down") El análisis conjunto de estos indicadores permite obtener una visión integral del desempeño organizacional, facilitando la identificación de fortalezas, debilidades y oportunidades de mejora. La adecuada selección y aplicación de indicadores contribuye al fortalecimiento del Sistema de Gestión de la Calidad, permitiendo realizar seguimiento permanente a los procesos y garantizar el cumplimiento de los objetivos institucionales.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Interpretación y análisis de resultados
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación y análisis de resultados constituye una actividad fundamental dentro del Sistema de Gestión de la Calidad, ya que permite evaluar el desempeño de los procesos, verificar el cumplimiento de los objetivos organizacionales e identificar oportunidades de mejora. Este análisis facilita la toma de decisiones basada en evidencia, contribuyendo al fortalecimiento de la gestión institucional.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-primario.p-4.mb-5.py-3
          p.mb-0(data-aos="fade-down") La NTC ISO 9001 establece la importancia de realizar seguimiento, medición, análisis y evaluación de los procesos mediante indicadores que permitan comprender el comportamiento del sistema y determinar la eficacia de las acciones implementadas.
        p.mb-0(data-aos="fade-down") Para interpretar adecuadamente los indicadores, la organización debe comparar los resultados obtenidos con las metas establecidas, analizar tendencias, identificar desviaciones y definir acciones correctivas o de mejora cuando sea necesario.
    .row.justify-content-center.mb-5
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img11.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 En este punto se puede hacer uso del semáforo de desempeño, el cual constituye una herramienta sencilla para interpretar los resultados y clasificar el nivel de cumplimiento de las metas establecidas.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Interpretación de indicadores mediante semáforo de desempeño
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Color
                th(data-aos="fade-down")(style= "width: 25%") Interpretación
                th(data-aos="fade-down")(style= "width: 25%") Nivel de cumplimiento
                th(data-aos="fade-down")(style= "width: 25%") Acción recomendada
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  |Verde.
                  span.indicador-color.verde
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cumplimiento satisfactorio.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Meta alcanzada o superada.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener estrategias y fortalecer buenas prácticas.
              tr
                td(data-aos="fade-down") 
                  |Amarillo.
                  span.indicador-color.amarillo
                td(data-aos="fade-down") Cumplimiento parcial.
                td(data-aos="fade-down") Resultado cercano a la meta.
                td(data-aos="fade-down") Analizar causas y aplicar acciones preventivas.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  |Rojo.
                  span.indicador-color.rojo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Incumplimiento.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Resultado inferior a la meta.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Implementar acciones correctivas y seguimiento continuo.
    p.mb-5(data-aos="fade-down") Un ejemplo práctico de análisis de indicadores puede ser:
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-8.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C08.p-4
              p(data-aos="fade-down") Una organización establece como meta lograr un nivel de satisfacción del cliente del 90 % durante un trimestre.
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 #[b Indicador:] satisfacción del cliente.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 #[b Meta:] 90 %.
                li.mb-0
                  i.lista-ul__vineta
                  p #[b Resultado obtenido:] 82 %.
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-3
                    p(data-aos="fade-down") #[b Interpretación:] nivel amarillo. Se requiere analizar causas relacionadas con el servicio y establecer acciones de mejora.
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center
            .col.col-lg-9.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") En este caso, el análisis permite identificar que, aunque el resultado es cercano a la meta, existen oportunidades de mejora relacionadas con la atención al cliente, tiempos de respuesta o calidad del servicio prestado.
            .col.col-lg-auto.col-auto.order-lg-1.order-1.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img13.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Es importante identificar los aspectos clave para el análisis de indicadores, ya que permiten interpretar la información obtenida, evaluar el desempeño organizacional y orientar la toma de decisiones basada en evidencia. Para ello, se recomienda considerar los siguientes elementos:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Comparar resultados con metas y periodos anteriores.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Analizar tendencias de comportamiento.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Identificar causas de desviaciones.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Definir acciones correctivas, preventivas o de mejora.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Realizar seguimiento a las acciones implementadas.
    p.mb-0(data-aos="fade-down") El análisis adecuado de los indicadores facilita la identificación de oportunidades de mejora, fortalece el control de los procesos y contribuye al cumplimiento de los objetivos estratégicos. De esta manera, los indicadores se consolidan como herramientas fundamentales para el seguimiento del desempeño y el mejoramiento continuo del Sistema de Gestión de la Calidad.
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
