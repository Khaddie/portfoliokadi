<template>
  <div class="sitesweb">
    <chargement/>
      <div class="explicationpage">
        <h1>L O G O F O L I O</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing</p>

        <router-link to="/projet1">
          <li ref="fermli"><a href="#" data-project-no="2">Sites Web</a></li>
        </router-link>


      </div>


  </div>
</template>


<script>
import Chargement from "../Chargement";
export default {
  name: "Sitesweb",
  components:{
    Chargement,
  }
}
</script>

<style scoped>


</style>
