<template>
  <div class="logofolio">


    <div class="explicationpage">
      <h1>L O G O F O L I O</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing</p>
    </div>
<div>

    <div class="image-hero-annabelle">
      <div class="title-position">
        <h3 class="title-cases">okfonzg</h3>
      </div>
      <div class="subtitle-project">
        <p>efnlefnle</p>
      </div>
    </div>

</div>
    <div class="camarche">
      <div class="mo">
          <img src="https://placekitten.com/200/200" alt="">
          <div class="ok">
            Voir le détail
          </div>
      </div>
      <div class="mo">
          <img src="https://placekitten.com/200/200" alt="">
          <div class="ok">
            Voir le détail
          </div>
      </div>
      <div class="mo">

          <img src="https://placekitten.com/200/200" alt="">
          <div class="ok">
            Voir le détail
          </div>

      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "Logofolio",
}
</script>

<style scoped>


.image-hero-annabelle {
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-image: url("https://placekitten.com/200/200");
  background-position: 50% 50%;
  background-size: cover;
}

.title-position {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.title-cases {
  position: relative;
  z-index: 1;
  font-family: 'Circularpro book', sans-serif;
  font-size: 7vmax;
  line-height: 8vmin;
  font-weight: 500;
  text-decoration: none;
}
.subtitle-project {
  position: relative;
  z-index: 1;
  font-family: 'Circularpro book', sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.ok {
  position: relative;
  align-items: center;
  justify-content: center;
  transition: opacity;
  background-color: black;
  inset: 0;
  display: flex;
  margin-top: 71%;
  opacity: 0;
  width:300px;

}

.ok:hover {
  opacity: 1;
}

.camarche{
  display: flex;
  flex-wrap: wrap;
}
.mo {
  border-radius: 0.25rem;
  overflow: hidden;
  color: white;
  position: relative;

width: 200px;
height: 200px;}


img {
  position: absolute;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 60px;
  font-family: Lato, sans-serif;
}

.explicationpage p {
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
}

.logofolio {
  margin: 10%;
}
@media (max-width: 768px) {

  .fondprojet{
    margin: 0;
  }


}

</style>
