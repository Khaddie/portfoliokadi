<template>
<div id="chargement">
    <transition name="fade">
      <div v-if="show" class="preloader">
        <div class="logo"></div>
        <p>Porfolio de Khadija Boudjemline</p>
      </div>
    </transition>
</div>
</template>

<script>
export default {
name: "Chargement",
  data(){
  return {
    show: true
  }
},
mounted(){
  if(Boolean(this.show)) this.showToggle()
},
methods: {
  showToggle(){
    setTimeout(() => {
      this.show = false
    }, 700)
  }
}
}
</script>

<style scoped>

.preloader{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
}

.logo{
  width: 12.5rem;
  height: 12.5rem;
  background: url("./assets/a.jpg");
}

.fade-enter-active .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-active .fade-leave-active .logo, p{
  animation-name: scaleOut;
  animation-duration: 3s;
}
p {
  font-family: Lato, sans-serif;
  font-size: 1rem;
  margin-top: 2%;
}
.fade-enter .fade-leave-active{
  opacity: 0;
}

@keyframes scaleOut {
  0%{
    transform: scale(2);
  }
  100%{
    transform: scale(0);
  }
}


</style>
