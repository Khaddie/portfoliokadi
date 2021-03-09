<template>
  <div class="accueil">
    <chargement/>
    <div class="accueil1">

      <div class="textaccueil">
        <h1>
          <div class="hellotext">Hello,</div>
          je suis Khadija Boudjemline
        </h1>
        <p>Développeuse Front-End | Webdesigneuse </p>
      </div>

      <div class="imgaccueil w-100">
        <img src="../assets/imgaccueil.svg" alt="">
      </div>

    </div>

    <div class="accueilmarge">
      <div class="presentation">
        <div class="w-100">
          <img src="../assets/img2accueil.svg" alt="">
        </div>

        <div class="textpresentation ">
          <h3>Besoin d'une webdesigneuse, développeuse front-end ?<br/>
            Je peux vous aider ! </h3>
          <p>J'habite dans la région du Doubs (25), j'ai 19ans et je suis actuellement étudiante. Ma formation
            s'intitule DUT des métiers du web et du multimédia, j'apprends depuis maintenant deux ans la programmation,
            le graphisme, l'intégration...tout ce qui touche au site web. Je pense continuer dans le domaine du web en
            me dirigeant vers une Licence Pro Webdesign située à Montbéliard.</p>
          <h6>Suivez-moi sur mes réseaux sociaux :</h6>
          <div class="icone">
            <a href="https://www.instagram.com/kaddichou/?hl=fr"><i class="fab fa-instagram"></i></a>
            <i class="fab fa-dribbble"><a href="#"></a></i>
            <i class="fab fa-pinterest"><a href="#"></a></i>
            <i class="fab fa-behance"><a href="#"></a></i>
          </div>
        </div>

      </div>


      <div class="qualite mt-5 ">
        <h4 class="text-center">Je suis...</h4>
        <div class="grid">
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgcreative.svg" alt="">
            </div>
            <p class="titrequalite">Créative</p>
            <p class="qualitephrase">De la maquette graphique à l'intégration Web.</p>
          </div>
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgrelationnelle.svg" alt="">
            </div>
            <p class="titrequalite">Relationnelle</p>
            <p class="qualitephrase">A la fois autonome et coopérative, je peux jouer seule et en équipe</p>
          </div>
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgpolyvalente.svg" alt="">
            </div>
            <p class="titrequalite">Polyvalente</p>
            <p class="qualitephrase">Compétente dans tous les domaines, chaque projet est pour moi un challenge ! </p>
          </div>
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgdynamique.svg" alt="">
            </div>
            <p class="titrequalite">Dynamique</p>
            <p class="qualitephrase">Débordante d'énergie, je m'investis pleinement pour la réussite de mes projets.</p>
          </div>
        </div>
      </div>


      <div class="competence">
        <h4>Mes compétences</h4>
        <div class="competences">
          <div>
            <div class="imgcompetence">
              <img src="../assets/iconedev.svg" alt="">
            </div>
            <h5>DÉVELOPPEMENT</h5>
            <ul>
              <li>Intégration avec Framework (Vues, BootstrapVue...)</li>
              <li>Développement d'applications web</li>
              <li>Gestion de flux (ShoppingFeed)</li>
              <li>Intégration HTML/CSS/JS</li>
              <li>Php, Javascript, MySQL</li>
              <li>Intégration avec CMS</li>

            </ul>
          </div>


          <div>
            <div class="imgcompetence">
              <img src="../assets/iconeweb.svg" alt="">
            </div>
            <h5>WEBDESIGN</h5>
            <ul>

              <li>Création de chartes graphiques, logos..</li>
              <li>Création de bannières publicitaires</li>
              <li>Utilisation de la suite Adobe</li>
              <li>Réalisation de montages vidéos</li>
              <li>Flyers, cartes de visite...</li>
              <li>Maquettes graphiques</li>
            </ul>
          </div>


          <div>
            <div class="imgcompetence">
              <img src="../assets/iconecom.svg" alt="">
            </div>
            <h5>COMMUNICATION</h5>
            <ul>
              <li>Concevoir une stratégie de communication crédible</li>
              <li>Mise en place d'actions de communication</li>
              <li>Élaboration d'infographies</li>
              <li>Animation de réseaux sociaux</li>
              <li>Audits de sites web</li>

              <li>Rédaction SEO</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="mesprojets">


        <div class="projet1 mt-5">
          <div class="imgprojets">
            <img src="../assets/projet1.jpg" alt="">
          </div>
          <div class="carre">
          </div>
          <div class="contenuprojet">
            <h4>CONCEPTION DE SITE WEB</h4>
            <p>Cake Beauty : <br/>
              Site vitrine de pâtisseries </p>
            <div class="traitprojet"></div>
            <button class="btnprojet">
              <router-link to="/projet1">Voir le projet</router-link></button>
          </div>
        </div>

        <div class="w-100">
          <div class="projet2 mt-5">
            <div class="contenuprojet2">
              <h4>CONCEPTION LOGO</h4>
              <p>Methodiya :<br/>
                La lecture et ses bienfaits</p>
              <div class="traitprojet"></div>
              <button class="btnprojet"><router-link to="/Logofolio">Logofolio </router-link></button>

            </div>
            <div class="carre">

            </div>
            <div class="imgprojets">
              <img src="../assets/projet1.jpg" alt="">
            </div>
          </div>

        </div>

        <div class="btnprojets w-100">

        </div>
      </div>

      <my-footer></my-footer>

    </div>

  </div>
</template>

<script>
import Footer from "../Footer";

import Chargement from "../Chargement";

export default {
  name: 'Accueil',
  data() {
    return {}
  },
  components: {
    Chargement,
    'my-footer': Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
  text-decoration: none;
  color: black;
}
i {
  font-size: 2rem;
  color: #DBBCA8;
  margin-left: 2%;
  margin-top: 10px;
}

i:first-child {
  margin-left: 0px;
}

h6 {
  color: #DBBCA8;
  font-family: Lato, sans-serif;
}

.mesprojets img {
  max-width: 100%;
}


.imgaccueil {
  margin: 5%;
}


.competences div:hover {
  transform: scale(0.9);
}


/**COMPETENCES*/

.imgcompetence {
  display: flex;
  justify-content: center;
}

.imgcompetence img {
  width: 60px;
  height: 50px;
}

.competence {
  background-color: #DBBCA8;
  padding: 5%;
  margin-bottom: 8%;
}

ul {
  list-style: none;
  text-align: center;
  padding: 0px;

}

ul li {

  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 15px;
}


.projet1 img{
  width: 80%;
}
.imgaccueil {
  margin: 5%;
}

h5 {
  text-align: center;
  font-size: 17px;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
}

.competence h4 {
  font-size: 2rem;
  font-family: Montserrat, sans-serif;
  text-align: center;
  margin-bottom: 5%;
  color: white;
  font-weight: 500;
}

.competences {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.competences div {
  padding: 3%;
  background-color: white;
  border-radius: 6px;
  margin: 10px;
}

/**FIN COMPETENCES*/


.accueilmarge {
  margin-left: 40px;
  margin-right: 40px;
}

/*DEBUT ACCUEIL*/

.textaccueil h1 {
  align-self: center;
  font-family: Lato, sans-serif;
  font-size: 3rem;
}

.hellotext {
  align-self: center;
  font-family: Lato, sans-serif;
  font-size: 6rem;
}

.textaccueil {
  padding: 4rem;
  margin-top: 10%;
}

.textaccueil p {
  font-family: Lato, sans-serif;
  font-size: 1rem;

}

.accueil1 {
  display: flex;
  flex-direction: row;
}

/*FIN DEBUT ACCUEIL*/


/*Petite section contact page accueil*/


/*FIN section contact page accueil*/

/**PROJET ACCUEIL*/
.btnprojets {
  justify-content: center;
  display: flex;
}

.btnprojet {
  border: 1px solid black;
  text-align: center;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  background-color: transparent;
}

.traitprojet {
  border-bottom: 4px solid black;
  width: 10%;
}

.btnprojets button {
  border: 1px solid black;
  text-align: center;
  padding: 1rem;
  background-color: white;
  margin-top: 3rem;

}

.contenuprojet2 {
  align-self: center;
  position: relative;
  left: 0%
}

.contenuprojet {
  align-self: center;
  position: relative;
  right: 15%;
}

.carre {
  height: 400px;
  width: 300px;
  align-self: center;
  background-color: white;
  opacity: 0.5;
}

.projet1 {
  display: flex;
  justify-content: left;
  justify-items: center;
  flex-direction: row;

}

.projet2 {
  display: flex;
  float: right;
  flex-direction: row;
}

/**FIN PROJET ACCUEIL*/


/*TEXTES*/

.presentation h3 {
  font-size: 1.625rem;
  line-height: 2.313rem;
  color: #DBBCA8;
  font-family: Montserrat, sans-serif;
}


.mesprojets h4 {
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 40px;
}

.mesprojets p {
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 0.2rem;
}


.qualitephrase {
  text-align: center;
  font-size: 1rem;
  margin-top: 0.7rem;
}

.titrequalite {
  text-align: center;
  margin-top: 1.5rem;
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
  font-weight: 500;
}

/*FIN CSS TEXTES*/


/*GRID QUALITE*/

.imgqualite {
  text-align: center;

}

.imgqualite .w-50 {
  width: 100px;
  height: 100px;
}

.grid img {
  width: 20%;
}

.qualite h4, .technologies h4 {
  font-family: Montserrat, sans-serif;
  font-size: 35px;
  letter-spacing: 4px;
  text-align: center;
}

.technologies h4 {
  margin-top: 7%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
  grid-gap: 6rem;
  justify-content: center;
  margin: 5%;
}

/*PRESENTATION*/

.presentation {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.textpresentation {
  border-left: 1px solid #DBBCA8;;
  margin-left: 50px;
  padding: 10px;
  margin-top: 12%;
  height: 80%;
}

/*FIN PRESENTATION*/

@media (min-width: 768px) and (max-width: 1024px) {

  .carre {
    position: absolute;
    z-index: -100;
    width: 350px;
    height: 350px;
    opacity: 0.6;
  }

  .mesprojets h4 {
    font-size: 22px;
    text-align: center;
  }

  .mesprojets img {
    width: 100%;
    height: 100%;

  }


  .projet1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .projet2 {
    flex-direction: column-reverse;
    justify-content: center;
    display: flex;
  }

  .contenuprojet, .contenuprojet2 {
    right: 0px;
    margin-top: 2%;
    left: 0px;
  }

  .mesprojets p {
    text-align: center;
    font-size: 20px;
  }

  .traitprojet {
    margin-left: 45%;
  }
  .btnprojet {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    margin-left: 27%;
  }

  .imgprojets {
    display: flex;
    justify-content: center;
  }

}
@media (max-width: 768px) {

  .accueil {
    overflow: hidden;
  }

  .accueilmarge {
    margin: 0px
  }

  /***DEBUT*******/
  .imgaccueil {
    display: none;
  }

  .textaccueil {
    text-align: left;
  }

  h6 {
    margin-bottom: 0px;
  }

  .accueil1 {
    background-color: #DBBCA8;
  }

  .textaccueil h1 {
    font-size: 2rem;
  }

  .hellotext {
    font-size: 2.4rem;
  }

  .textaccueil {
    padding: 3rem;
    margin-top: 40%;
  }

  .textaccueil p {
    font-size: 0.8rem;
  }

  /***FIN DEBUT*******/
  /*PRESENTATION*/
  .presentation img {
    display: none
  }

  .presentation {

    display: flex;
    justify-content: left;
    flex-direction: column;
  }

  .textpresentation {
    margin: 7% 5%;
    font-size: 3rem;
    border: none;
    padding: 0;
  }

  .presentation h3 {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: bold;
  }

  .presentation p {
    font-size: 1rem;
  }

  .grid {
    grid-gap: 0.8rem;
  }

  .qualitephrase {
    font-size: 0.5rem;
  }

  .competences {
    justify-content: center;
  }

  .competences div {
    margin-bottom: 5%;
  }


  .qualite h4, .technologies h4 {
    font-size: 20px;
  }

  .competence h4 {
    font-size: 1rem;
  }

  .carre {
    position: absolute;
    z-index: -100;
    width: 350px;
    height: 350px;
    opacity: 0.6;
  }

  .mesprojets h4 {
    font-size: 22px;
    text-align: center;
  }

  .mesprojets img {
    width: 100%;
    height: 300px;

  }


  .projet1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .projet2 {
    flex-direction: column-reverse;
    justify-content: center;
    display: flex;
  }

  .contenuprojet, .contenuprojet2 {
    right: 0px;
    margin-top: 2%;
    left: 0px;
  }

  .mesprojets p {
    text-align: center;
    font-size: 20px;
  }

  .traitprojet {
    margin-left: 45%;
  }

  .btnprojet {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    margin-left: 27%;
  }

  .imgprojets {
    display: flex;
    justify-content: center;
  }
}

@media (height: 1024px) {

  .grid {
    grid-gap: 5rem;
  }

  .imgprojets img {
    height: 500px;
    width: 100%;
  }

}


</style>
