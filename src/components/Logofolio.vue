<template>


  <div class="logofolio">
    <div class="explicationpage">
      <h1>L O G O F O L I O</h1>
      <p>Découvrez ci-dessous les différents logos que j'ai réalisés. Certains logos ont été réalisés dans le cadre de
        mes études, pour différents projets
        et d'autres pour des particuliers. Une page qui va etre régulièrement alimentée, car afin de m'améliorer je vais
        participer à un défi qui consiste à réaliser un logo par mois. </p>
    </div>


    <div class="meplogos"  v-for="logo in donnees">
      <div class="logos" v-for="lo in logo.logos">

        <div class="hover" :style="{backgroundImage:`url(${lo.image})`}">


          <div class="texthover">
            <h2>{{ lo.titre }} </h2>
            <p>{{ lo.resume }} </p>
          </div>
        </div>
        </div>
    </div>

    <my-footer></my-footer>
  </div>

</template>

<script>

import Footer from "../Footer";

export default {
  name: "Logofolio",
  components: {
    'my-footer':Footer
  },
  data() {
    return {
      donnees: [],
    }
  },
  created() {
    axios.get('static/projet.json')
      .then(function (response) {
        console.log(response.data);
        this.donnees = response.data;
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }

}
</script>

<style scoped>

.meplogos {
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
}

.hover:hover .texthover {
  display: block;
  z-index: 100;
  background-color: #F7F5F0;
  padding-top: 10%;
  padding-bottom: 23%;
}

.texthover {
  display: none;
}

.texthover p {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
}

h2 {
  text-align: center;
  margin-top: 25%;
  font-family: Lato, sans-serif;
  font-weight: 500;
}

.logos {
  display: flex;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 5%;

}

.hover {
  width: 300px;
  height: 300px;
  margin-left: 5%;
  margin-top: 5%;
  box-shadow: 5px 5px 10px 5px #f7f5f0;
}

.hover p {
  padding: 0px 30px;
  text-align: center;
}

.hover p:hover {
  display: block;
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

.explicationpage {
  margin-bottom: 5%;
}

@media (max-width: 768px) {

  .fondprojet {
    margin: 0;
  }

  .logos, .hover {
    margin-left: 0px;
  }

h1{
  font-size: 25px;
  font-weight: 600;
}
.explicationpage{
  margin-top: 30%;
}

}

</style>
