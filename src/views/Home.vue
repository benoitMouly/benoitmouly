<template>
    <div class="home">

<section class="fullpage">
        <Parcours/>
      </section>
      <section class="fullpage">
        <Competences/> 
      </section>
      <section class="fullpage">
        <Portfolio/>
      </section>
      <section class="fullpage">
        <Hobbies/>
      </section>
    </div>
</template>

<script>

import Parcours from '../components/Parcours.vue'
import Competences from '../components/Competences.vue'
import Portfolio from '../components/Portfolio.vue'
import Hobbies from '../components/Hobbies.vue'



export default {
    name:'Home',
  components: { //Presentation, footerElement
  Parcours, Competences, Portfolio, Hobbies
  },


}
</script>

<style scoped>

</style>
