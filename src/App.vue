<template>
  <div id="app" ref="root">
    <div>

      <div>
        <my-nav></my-nav>
      </div>
    </div>


    <router-view/>
  </div>
</template>
<script>
import Nav from "./Nav";
export default {
  name: 'App',
  components:{
    'my-nav':Nav
  }

}
</script>

<style>
a{
  text-decoration: none;
}
a:hover{
  text-decoration: none;
  color: black;
}

a:hover{
  text-decoration: none;
  color: black;
}

button:hover {
  transform: scale(0.9);
  text-decoration: none;
  color: black;
}

.logo img {
  width: 10%;
  height: 80px;
  position: fixed;
  top: 10px;
  left: 20px;
  z-index: 10;
}


@media (max-width: 768px) {


  .logo img{
    width: 25%;
  }
}
</style>
