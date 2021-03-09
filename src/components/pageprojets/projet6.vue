<template>
  <div class="projet1">


    <div class="fondprojet" data-aos="flip-right">
      <div class="imgprojprincipale">
        <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/scenebureau.jpg" alt="Modélisation 3D">
      </div>
      <div class="explicationprojet">
        <h1>Bureau en 3D: <br/>
          le bureau idéal </h1>
        <div class="traitprojet"></div>

        <div class="grid" data-aos="fade-up">
          <div class="texteprojet">
            <p><b>Dans le cadre de mon DUT MMI</b> lors du troisième semestre, avec ma coéquipière Coline Jacobé nous
              devions créer un bureau de reve en 3D, puis réaliser quelques animations avec ThreeJS.

            </p>
            <p>
              <b>Défi : </b>
              Nous devions réaliser cela dans un laps de temps, et créer de A à Z le bureau en 3D et ensuite l'animer.
            </p>
          </div>
          <div class="texteprojet text2">
            <h5>Rôle</h5>
            <p>Création du bureau en 3D</p>
            <p><a href="http://jacobe.fr/">Coline Jacobé</a> fut en charge des animations via ThreeJS</p>


            <div class="survollien">
              <h5>Lien du site web</h5>
              <p><a href="http://portfolio.khadijaboudjemline.fr/">http://portfolio.khadijaboudjemline.fr/</a>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="imgdemarque" data-aos="fade-up">
        <div class="traitprojet1"></div>

        <h4>LA CONCEPTION</h4>

        <p class="mt-3">Tout d'abord il a fallu créer sur <b>l'interface 3DSMAX</b> qui est un logiciel de conception 3D,
          qui
          ressemble beaucoup à Blender. Il a fallu modéliser les objets ce qui a pris un certain temps, puis enfin les
          lier si nécessaire et <b>les préparer à l'animation</b> s'ils devaient être animer par la suite. Puis le
          fichier
          3dsmax a été exporté et converti en fichier <em>.dae </em>afin de pourvoir le lier au fichier html. </p>

        <img data-aos="zoom-in"
             src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/CONCEPTION3D.jpg" alt="Site WebGL">
        <blockquote>" Un bureau simple et professionnel créé en 3D."</blockquote>
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface" data-aos="zoom-in">
          <h4>Le bureau</h4>
          <div class="traitprojet1"></div>
          <p class="mt-3"> La pièce est principalement composée des couleurs noir/blanc/rouge. <br>Les éléments qui la
            composent sont :
          </p>
          <ul>
            <li>Un bureau | Une chaise</li>
            <li>Une poubelle | Une étagère</li>
            <li>Un meuble à tiroir | Un plateau de thé</li>
            <li>Deux ordinateurs | Un coffre-fort</li>

          </ul>
          <div class="elementsbureau">
            <div>
              <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/23D.jpg" alt="Conception de site en 3D">
            </div>

            <div>
              <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/13D.jpg" alt="Conception de site en 3D">
            </div>
          </div>


        </div>
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface" data-aos="zoom-in">

          <h4>Les animations</h4>
          <div class="traitprojet1"></div>
          <p class="mt-3">Les animations ont été réalisé à l'aide de la bibliothèque Javascript <b>ThreeJS</b>. Cette
            bibliothèque permet de créer des scènes 3D dans un navigateur. </p>


        </div>
      </div>

      <div class="animation">
        <h4>Les éléments animés</h4>
        <div>
          <h5>La poubelle</h5>
          <p>La poubelle s'anime lorsque l'utilisateur clique sur le couvercle, ce dernier bascule en arrière.</p>
        </div>
        <div>
          <h5>Le coffre fort</h5>
          <p>Le coffre-fort est caché derrière un cadre, on doit cliquer sur le cadre afin d'apercevoir le coffre-fort
            qui s'ouvre en cliquant sur la poignée. Derrière ce coffre se trouve les lingots d'or. </p>
        </div>
        <div>
          <h5>Les lumières</h5>
          <p>L'utilisateur peut allumer la lumière ou l'éteindre en cliquant sur les interrupteurs de la pièce. Il peut
            allumer la lumière générale de la pièce ou alors si il clique sur l'interrupteur près de l'ordinateur, ce
            sera le spot au-dessus du cadre qui s'ouvrira. </p>
        </div>

      </div>

      <div class="presentationinterface">
        <div class="premier">
          <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/13D.jpg"
               alt="Conception de site en 3D">
        </div>

      </div>


      <div class="autresprojets">
        <div>
          <img width="300" src="../pageprojets/../../assets/site2/image.jpg" alt="Conception de site web">
          <p>CONCEPTION DE SITE WEB</p>
          <h4>Hiking</h4>
          <router-link to="/projet2">
            <button>Voir</button>
          </router-link>
        </div>
        <div>
          <img width="300" src="../pageprojets/../../assets/logo1.jpg" alt="Conception de site web">
          <p>CONCEPTION DE LOGO</p>
          <h4>Methodiya</h4>
          <router-link to="/Logofolio">
            <button>Voir</button>
          </router-link>
        </div>
      </div>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../Footer";

export default {
  name: "projet6",
  components: {
    'my-footer': Footer
  }
}
</script>

<style scoped>


.animation h4 {
  margin-bottom: 5%;
}

ul {
  list-style: none;
  font-family: Lato, sans-serif;
  margin-left: 0px;
}

.elementsbureau {
  display: flex;
  flex-direction: column-reverse;
}


.survollien p:after {
  content: '';
  display: block;
  position: absolute;
  width: 0%;
  left: 0px;
  height: 4px;
  transition: 0.25s cubic-bezier(0.72, -0.01, 0.19, 0.92);
  background: black;
}

.survollien p:hover:after {
  width: 65%;
}

a {
  text-decoration: none;
  color: black;
}

.survollien p {
  position: relative;
}


.premier {
  align-self: end;
}

.presentationinterface {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
}

img {
  max-width: 100%;
}

.texteprojet p {
  font-family: Lato, sans-serif;
  font-size: 1rem;
}

.autresprojets p {
  font-family: Lato, sans-serif;
  font-size: 0.8rem;
  margin-top: 20px;
  letter-spacing: 8px;
  max-width: 100%;
}

.autresprojets h4 {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
}

button {
  border: 1px solid black;
  text-align: center;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: white;
  margin-top: 1rem;

}

.autresprojets div {
  margin-left: 30px;
  padding: 5%;
  background-color: white;
  border-radius: 10px;
}

.autresprojets img {
  height: 210px;
  width: 300px;
}

.autresprojets {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;
  text-align: center;
  margin-top: 10%;

}


.imgdemarque {
  text-align: center;
  margin-top: 15px;

}

h4 {
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  letter-spacing: 5px;
  font-weight: 600;
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

blockquote {
  font-size: 35px;
  font-family: Montserrat, sans-serif;
  font-style: italic;
  text-align: center;
  margin: 10%;
}


.texteprojet {
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
  border-radius: 5px;
}

.imgdemarque .traitprojet1 {
  margin-top: 10%;
  margin-bottom: 10px;
  border-bottom: 4px solid #DBBCA8;
  width: 6%;
}

.traitprojet1 {
  border-bottom: 4px solid #DBBCA8;
  width: 6%;
  margin-left: 48%;
  border-radius: 5px;

}

h1 {
  font-size: 40px;
  font-weight: 200;
  letter-spacing: 3px;
  line-height: 50px;
  font-family: Montserrat, sans-serif;
}


.fondprojet {
  background-color: #F7F5F0;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 8%;
  padding-bottom: 10%;
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;

}

.logoo img {
  max-width: 80%;
  width: 300px;

}

.presentationinterface img {
  max-width: 70%;
  box-shadow: #F7F5F0;
}

h5 {
  font-family: Montserrat, sans-serif;
  font-weight: 500;
}

@media (max-width: 768px) {

  .fondprojet {
    margin: 0px;
    padding: 0px;
  }

  .projet1 {
    background-color: #F7F5F0;
  }

  .explicationprojet {
    margin: 5%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    text-align: left;
    line-height: 32px;
    letter-spacing: 0px;
  }

  .traitprojet {
    display: none;
  }

  .grid {
    flex-direction: column;
    width: 80%;
  }

  .text2 {
    margin-top: 20px;
  }

  blockquote {
    font-size: 21px;
  }


  .autresprojets {
    flex-direction: column;
  }

  video {
    max-width: 87%;
  }

  .defbesoins {
    padding: 60px;
  }

  .autresprojets div {
    margin: 15px 0px;
    width: 70%;
  }

  .autresprojets img {
    height: 160px;
  }

  .explicationinterface h4 {
    font-size: 24px;

  }

  h5 {
    margin: 20px 0 20px 0;

  }

  .presentationinterface {
    margin: 10%;
  }

  .imgdemarque p {
    margin: 26px;
  }

}

@media (min-width: 769px) and (max-width: 1024px) {
  .autresprojets {
    flex-wrap: unset;
  }
}


</style>

