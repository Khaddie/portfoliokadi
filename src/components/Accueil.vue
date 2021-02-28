<template>
  <div class="accueil">


    <div class="accueil1">

      <div class="textaccueil">
        <h1>BIENVENUE</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium
          recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto.
          Eius, maiores ad?</p>
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


      <div class="competences">
        <h4>Mes compétences</h4>
        <div>

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
.accueilmarge {
  margin-left: 40px;
  margin-right: 40px;
}

/*DEBUT ACCUEIL*/
.imgaccueil img {
  height: 113%;
  float: right;
}

.textaccueil {
  align-self: center;
}

.accueil1 {
  display: inline-flex;
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
.btnprojet{
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
/**COMPETENCES*/
.competences {
  background-color: #DBBCA8;
  padding-bottom: 10%;
}

/**FIN COMPETENCES*/

/*TEXTES*/

h3 {
  font-size: 1.625rem;
  line-height: 2.313rem;
  color: #DBBCA8;
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

p {
  font-size: 1rem;
}

.qualitephrase {
  text-align: center;
  font-size: 0.7rem;
  margin-top: 0.7rem;
}

.titrequalite {
  text-align: center;
  margin-top: 1.5rem;
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


</style>
