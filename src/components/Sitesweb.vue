<template>
  <div class="sitesweb">
    <div class="explicationpage">
      <h1>SITES WEB</h1>
      <p>Découvrez sans perdre de temps mes derniers sites web. N'hésitez pas à les explorer afin de découvrir le
        processus de création de ces
        sites ainsi que de visualiser les éléments graphiques qui les composent. Vous pouvez également voir quelles
        technologies sont associées à chaque site web.</p>
    </div>

    <div class="mpesites" v-for="site in donnees">
      <div data-aos="zoom-out-up" class="sites" v-for="si in site.sitesweb">
        <div>
          <img width="600" :src="si.image" alt="création de sites web">
        </div>
        <div class="contenu">
          <h3>{{ si.titre }}</h3>
          <p class="tech">{{ si.technique }}</p>
          <p>{{ si.resume }}</p>
          <button><a :href="si.lien">Voir plus</a></button>

        </div>
      </div>

    </div>

    <my-footer></my-footer>
  </div>
</template>


<script>
import Footer from "../Footer";

export default {
  name: "Sitesweb",
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

}


h1 {
  font-size: 60px;
  font-family: Lato, sans-serif;
  letter-spacing: 10px;

}

.explicationpage p {
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
}

.sitesweb {
  margin: 10%;
}

.explicationpage {
  margin-bottom: 5%;
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
