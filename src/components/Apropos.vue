<template>
  <div class="apropos">
    <h1>À PROPOS</h1>

    <div class="contenu">
      <div>
        <img src="../assets/illustrationapropos.svg" alt="A propos de moi">
      </div>
      <div>
        <h3>Je suis Khadija Boudjemline,</h3>
        <p>J'habite dans la région du Doubs (25), j'ai 19ans et je suis actuellement étudiante en
          DUT des métiers du web et du multimédia (DUT MMI), je suis depuis près de deux ans cette formation qui permet d'acquérir
          des compétences dans le domaine du web, à savoir : la programmation, le graphisme, l'intégration...
          tout ce qui touche au monde tentaculeux des sites web. </p>
        <p data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="300"> Durant le Semestre 3, je me suis spécialisée dans le développement web.
          J'ai appris à modéliser et animer des objets avec 3DSmax et ThreeJS. Le programme contenait également le
          développement d'application avec le framework Ionic.</p>
        <p data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="300">Afin de valider mon diplome, j'ai choisi d'effectuer une alternance qui me permettra
        de consolider et étoffer mes compétences tout en m'apportant une expérience du monde du travail.</p>

        <b>Je suis actuellement en alternance dans un e-commerce, pour une période de six mois. </b>

        <h3>Mon parcours</h3>
        <p data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="300">Après un Baccalauréat scientifique, j'ai décidé de me diriger vers le domaine du Web, et plus spécialement
          le DUT MMI. Cette formation était réputée pour sa polyvalence dans le domaine du web ainsi que pour son sérieux.
          Avant cela, j'ai réalisé deux stages étudiant en entreprise dans lesquelles j'ai pu découvrir les dessous d'un site web,
          d'un e-commerce. Après l'obtention de mon
          diplôme, je compte me diriger vers une Licence Pro Webdesign.</p>

        <h3>Mes hobbies</h3>
        <p data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="300">J'ai différentes passions et je touche à tout. J'aime énormèment créer des sites web et coder mais j'ai
          également d'autres passions. Je pratique de l'équitation ainsi que des randonnées en VTT.
          J'aime beaucoup la cuisine Asiatique. Je suis une mordue de lecture, dès que j'ai du temps libre je bouquine, j'ai une préférence pour les romans policiers (Adler-Olsen, Agatha Christie...).
        </p>
        <p data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="300">Je suis également spécialisée en tatouage éphémère au henné et au jagua, j'en réalise depuis environ
          cinq ans, ce travail exige précision et rigueur.</p>

        <h6>Suivez-moi sur mes réseaux sociaux :</h6>

        <div class="icone">
          <a href="https://www.instagram.com/kaddichou/?hl=fr"><i class="fab fa-instagram"></i></a>
          <i class="fab fa-dribbble"><a href="#"></a></i>
          <i class="fab fa-pinterest"><a href="#"></a></i>
          <i class="fab fa-behance"><a href="#"></a></i>
        </div>
      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from "../Footer";

export default {
  name: "Apropos",
  components: {
    'my-footer': Footer
  }
}
</script>

<style scoped>

i {
  font-size: 2rem;
  color: #DBBCA8;
  margin-left: 4%;
  margin-top: 10px;
}

i:first-child {
  margin-left: 0px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 30px;
  margin-bottom: 20px;
}

h3 {
  font-family: Lato, sans-serif;
  margin-bottom: 2%;
  color: #DBBCA8;
  margin-top: 5%;
}

h6 {
  color: #DBBCA8;
}

.apropos {
  margin: 40px;
}

img {
  width: 600px;
  height: 500px;
}

.contenu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

h1 {
  font-family: Montserrat, sans-serif;
  text-align: left;
  margin-top: 10%;
  margin-bottom: 5%;
  margin-left: 10%;
}


@media (max-width: 768px) {
  .apropos {
    margin-top: 100px;
  }

  img {
    max-width: 100%;
  }

  .contenu {
    flex-direction: column;
  }

  h1 {
    text-align: center;
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  .contenu p {
    font-size: 0.8rem;
  }
}

</style>
