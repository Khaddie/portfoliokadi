<template>
  <div class="projet1">


    <div class="ok">

      <div class="imgprojprincipale">
        <img src="../pageprojets/../../assets/image.jpg" alt="">
      </div>
      <div class="explicationprojet">
        <h1>Cake Beauty : <br/>
          Site vitrine de pâtisseries </h1>
        <div class="traitprojet"></div>

        <div class="grid">
          <div class="ook">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero e
              os et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet,
              consetetur sadipscing</p>
            <p>
              Défi:
              Alors que nous avions une multitude d'idées à inclure dans notre plate-forme holistique, notre principal
              défi était de définir et d'exécuter notre MVP initial dans un laps de temps extrêmement court avec des
              ressources très limitées.
            </p>
          </div>
          <div class="ook">
            <h5>Role</h5>
            <p> dolore magna aliquyam</p>
            <p> dolore magna aliquyam</p>
            <p> dolore magna aliquyam</p>
            <p> dolore magna aliquyam</p>

            <h5>Role</h5>
            <p> dolore magna aliquyam</p>
          </div>
        </div>
      </div>


      <div class="traitprojet1"></div>
      <div class="imgdemarque">
        <h5>L'HARMONIE COLORÉE</h5>

        <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero e
          os et accusam .</p>

        <img src="" alt="">
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface">

          <h4>Interface du site</h4>
          <div class="traitprojet1 "></div>
          <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero e
            os et accusam .</p>
        </div>
      </div>

      <div class="defbesoins">

        <h4>Découverte et narration</h4>
        <p>
          Dans notre version 1.0, nous voulions donner à l'utilisateur un aperçu rapide de tous les looks et avons opté
          pour une mise en page de style pinterest. Pour la version 2.0, nous avons décidé de nous éloigner de cette
          mise en page sur la base de nouvelles informations sur la façon dont les utilisateurs consommaient notre
          contenu.

          Nous avons remplacé la vue en grille par une approche d'interface éditoriale , où la narration et
          l'inspiration joueraient un rôle plus important à travers le mélange d'articles et de tutoriels.</p>
      </div>


      <div class="presentationinterface">
        <div>
          <img src="../pageprojets/../../assets/imgrelationnelle.svg" alt="">
        </div>
      </div>


      <div class="autresprojets">
        <div>
          <img src="" alt="">
          <p>Conception</p>
          <h4>OZNVPZNZPVNZV</h4>
          <button>ONOENEPNV</button>
        </div>
        <div>
          <img src="" alt="">
          <p>Conception</p>
          <h4>OZNVPZNZPVNZV</h4>
          <button>ONOENEPNV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projet1"
}
</script>

<style scoped>

.autresprojets div {
  margin-left: 30px;
  padding: 5%;
  background-color: white;
  border-radius: 10px;
}

.autresprojets {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;

}

.defbesoins {
  display: block;
  max-width: 650px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;
  padding-bottom: 40px;
}

.imgdemarque {
  text-align: center;
}

.presentationinterface img {
  width: 100%;
}

.presentationinterface {
  display: flex;
  justify-content: center;
}

.interfaceprojet {
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10%;
  margin: 5% 5%;
  text-align: center;
}


.ook {
  flex: 1;
  padding-left: 10%;
}

.grid {
  display: flex;
  margin-top: 4%;
  align-content: space-between;
}

.explicationprojet {
  margin-top: 2%;
}

.traitprojet {
  border-bottom: 4px solid black;
  width: 10%;
}

.traitprojet1 {
  border-bottom: 4px solid #CE7E5D;
  width: 6%;
  margin-left: 48%;
}

h1 {
  font-size: 40px;
  font-family: Montserrat, sans-serif;
}

.imgprojprincipale img {
  max-width: 100%;
}

.ok {
  background-color: #F6E7DB;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 8%;
  padding-top: 2%;
  padding-left: 10%;
  padding-right: 10%;

}
</style>
