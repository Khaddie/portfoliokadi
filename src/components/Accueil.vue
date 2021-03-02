<template>
  <div class="accueil">


    <div class="accueil1">

      <div class="textaccueil">
        <h1>
          <div class="hellotext">Hello,</div>
          je suis Khadija Boudjemline
        </h1>
        <p>Développeuse Front-End | Webdesigner </p>
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
          <h3>Besoin d'une webdesigner, développeuse front-end ?<br/>
            Je peux vous aider ! </h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing</p>
          <strong>Vous pouvez me suivre sur mes réseaux :</strong>
        </div>

      </div>


      <div class="qualite mt-5 ">
        <h4 class="text-center">Je suis...</h4>
        <div class="grid">
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgcreativite.svg" alt="">
            </div>
            <p class="titrequalite">Créative</p>
            <p class="qualitephrase">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor., dignissimos architecto.
              Eius, maiores ad?</p>
          </div>
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgrelationnelle.svg" alt="">
            </div>
            <p class="titrequalite">Relationnelle</p>
            <p class="qualitephrase">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor., dignissimos architecto.
              Eius, maiores ad?</p>
          </div>
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgpolyvalente.svg" alt="">
            </div>
            <p class="titrequalite">Polyvalente</p>
            <p class="qualitephrase">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor., dignissimos architecto.
              Eius, maiores ad?</p>
          </div>
          <div>
            <div class="imgqualite">
              <img class="w-50" src="../assets/imgdynamique.svg" alt="">
            </div>
            <p class="titrequalite">Relationnelle</p>
            <p class="qualitephrase">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor., dignissimos architecto.
              Eius, maiores ad?</p>
          </div>
        </div>
      </div>


      <div class="competence">
        <h4>Mes compétences</h4>
        <div class="competences">
          <div>
            Développement

            <ul>
              <li>Maquettes graphiques</li>
              <li>Création de chartes graphiques, logos..</li>
              <li>Utilisation de la suite Adobe</li>
              <li>Création de bannières publicitaires</li>
              <li>Réalisation de montages vidéos</li>
              <li>Flyers, cartes de visite...</li>
            </ul>
          </div>
          <div>
            Développement
            <ul>
              <li>Maquettes graphiques</li>
              <li>Création de chartes graphiques, logos..</li>
              <li>Utilisation de la suite Adobe</li>
              <li>Création de bannières publicitaires</li>
              <li>Réalisation de montages vidéos</li>
              <li>Flyers, cartes de visite...</li>
            </ul>
          </div>
          <div>
            Développement
            <ul>
              <li>Maquettes graphiques</li>
              <li>Création de chartes graphiques, logos..</li>
              <li>Utilisation de la suite Adobe</li>
              <li>Création de bannières publicitaires</li>
              <li>Réalisation de montages vidéos</li>
              <li>Flyers, cartes de visite...</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="mesprojets">


        <div class="projet1 mt-5">
          <div class="imgprojets">
            <img src="../assets/a.jpg" alt="">
          </div>
          <div class="carre">
          </div>
          <div class="contenuprojet">
            <h4>CONCEPTION DE SITE WEB</h4>
            <p>Cake Beauty : <br/>
              Site vitrine de pâtisseries </p>
            <div class="traitprojet"></div>
            <button class="btnprojet">Voir le projet</button>
          </div>
        </div>

        <div class="w-100">
          <div class="projet2 mt-5">
            <div class="contenuprojet2">
              <h4>CONCEPTION LOGO</h4>
              <p>Methodiya :<br/>
                La lecture et ses bienfaits</p>
              <div class="traitprojet"></div>
              <button class="btnprojet">Logofolio</button>

            </div>
            <div class="carre">

            </div>
            <div class="imgprojets">
              <img src="../assets/a.jpg" alt="">
            </div>
          </div>

        </div>

        <div class="btnprojets w-100">
          <button>Voir tous les projets</button>
        </div>
      </div>


      <div class="technologies">
        <h4>Je travaille avec ...</h4>
        <div class="framework">
          <p>okcoc</p>
        </div>
        <div class="logiciels">
          <p>docnnconedc</p>
        </div>
      </div>

      <div class="contactaccueil">
        <div class="iconecontact">
          <img src="../assets/iconecontact.svg" alt="">
        </div>
        <div class="mail">
          <p>khaddie90@gmail.com</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Accueil',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/**COMPETENCES*/
.competence {
  background-color: #DBBCA8;
  padding: 5%;
  margin-bottom: 8%;
}

.competence h4 {
  font-size: 2rem;
  font-family: Dancing Script, cursive;
  text-align: center;
  margin-bottom: 5%;
  color: white;
  font-weight: bold;
}

.competences {
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: center;

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
  font-size: 4rem;
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
.iconecontact img {
  width: 66%;

}

.mail p {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #DBBCA8;
  margin-top: 1.5rem;
}

.contactaccueil {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

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
  left: 15%;
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
  background-color: #F7F5F0;
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

strong {
  font-size: 1.2rem;
  color: #DBBCA8;

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
  font-size: 0.7rem;
  margin-top: 0.7rem;
}

.titrequalite {
  text-align: center;
  margin-top: 1.5rem;
  font-family: "Dancing Script", cursive;
  font-size: 1.2rem;
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

  .accueil1 {
    background-color: #EDD9CA;
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
}

</style>
