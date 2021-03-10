<template>


  <div class="logofolio">
    <div data-aos="flip-right" class="explicationpage">
      <h1>CRÉATIONS GRAPHIQUES </h1>
      <p>Découvrez ci-dessous différentes créations graphiques réalisées par mes soins. Dans cette catégorie vous
        retrouverez : de la modélisation 3D, des maquettes graphiques, des identités visuelles, et enfin des affiches / bannières.</p>
    </div>

    <div>
      <div data-aos="flip-up" class="accueilD">
        <div class="explicationsection">
          <h2>Créations 3D</h2>
          <p>Retrouvez les projets réalisés en 3D. De simples créations <br>ou encore des créations animées avec Three.JS. </p>
        </div>
      </div>
      <div class="mpesites" v-for="projet in donnees">
        <div data-aos="zoom-in-up" class="sites" v-for="proj in projet.projetsmax">
          <div>
            <img width="600" :src="proj.image" alt="Créations graphiques">
          </div>
          <div class="contenu">
            <h3>{{ proj.titre }}</h3>
            <p class="tech">{{ proj.technique }}</p>
            <p>{{ proj.resume }}</p>
            <button><a :href="proj.lien">Voir plus</a></button>

          </div>
        </div>

      </div>
    </div>

    <div>
      <div data-aos="flip-up" class="accueilD">
        <div class="explicationsection">
          <h2>Identités visuelles</h2>
          <p>Retrouvez les maquettes réalisées pour des sites web, je suis développeuse front-end mais également
            webdesigneuse je conçois des interfaces graphiques. Vous trouverez ci dessous
            des maquettes graphiques, prêtes à être intégrées sur un site web ou en cours de réalisation. </p>
        </div>
      </div>

      <div class="mpesites" v-for="creation in donnees">
        <div data-aos="zoom-in-up" class="sites" v-for="crea in creation.maquettes">
          <div>
            <img width="600" :src="crea.image" alt="">
          </div>
          <div class="contenu">
            <h3>{{ crea.titre }}</h3>
            <p class="tech">{{ crea.technique }}</p>
            <p>{{ crea.resume }}</p>
            <button><a :href="crea.lien">Voir plus</a></button>

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
  name: "Creation",
  components: {
    'my-footer': Footer
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


/*****/
button {
  background-color: transparent;
  padding: 10px 20px;
  border: 2px solid #DBBCA8;
  font-family: Lato, sans-serif;
  font-size: 15px;
  color: #DBBCA8;
}

h3 {
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  letter-spacing: 5px;
}

.contenu {
  margin-left: 10%;
  margin-top: 5%;
}


.tech {
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  color: #DBBCA8;
  margin-top: 2%;
}

a {
  text-decoration: none;
  color: #DBBCA8;
}

.mpesites {
  display: flex;
  justify-content: left;
  flex-direction: column;
}

.sites {
  display: flex;
  justify-content: left;
  flex-direction: row;
  margin-bottom: 5%;
  margin-left: 5%;

}

/******/
.accueilD {

  display: flex;
  justify-content: center;
  background-color: #F7F5F0;
  padding: 10%;
  margin: 5% 5%;
  text-align: center;
}


.explicationpage {
  margin-bottom: 5%;
}

h2 {
  text-align: center;
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 35px;

}

h1 {
  font-size: 60px;
  font-family: Lato, sans-serif;
}

.explicationpage p {
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
}

.explicationsection p {
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
}

.logofolio {
  margin: 10%;
}


@media (max-width: 768px) {

  h1 {
    font-size: 25px;
    font-weight: 600;
  }

  .explicationpage {
    margin-top: 30%;
  }

  .sites {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .contenu {
    margin-top: 5%;
    margin-left: 0;

  }

  img {
    max-width: 100%;
  }

  .sites {
    margin-top: 10%;
  }
}

</style>

