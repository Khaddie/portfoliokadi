<template>
  <div class="projet1">


    <div class="fondprojet" data-aos="flip-right">
      <div class="imgprojprincipale">
        <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/methodiya.jpg" alt="">
      </div>
      <div class="explicationprojet">
        <h1>METHODIYA : <br/>
          Site de coaching-lecture </h1>
        <div class="traitprojet"></div>

        <div class="grid" data-aos="fade-up">
          <div class="texteprojet">
            <p><b>Methodiya</b> est une férue de lecture, depuis quelques temps l'idée de réaliser un site web et de
              transmettre sa passion mais également son analyse de lecture, elle décida de commencer la création d'un
              site web. Sur ce site les personnes pourront prendre rendez-vous avec elle afin de se faire coacher sur
              comment lire un livre de facon analytique.

            </p>
            <p>
              <b>Défi : </b>
              Le défi est de réaliser un site simple, mais qui contient toutes les informations nécessaires. Avec une
              boutique en ligne, un espace blog, des pages avec plusieurs formulaires.
            </p>
          </div>
          <div class="texteprojet text2">
            <h5>Rôle</h5>
            <p>Intégratrice via un CMS</p>
            <p>Webdesigneuse</p>


            <div class="survollien">
              <h5>Lien du site web</h5>
              <p>Le site est encore à la phase maquettage, le lien du site appraitra une fois le site en ligne.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="imgdemarque" data-aos="fade-up">
        <div class="traitprojet1"></div>

        <h4>L'HARMONIE COLORÉE</h4>

        <p class="mt-3">L’harmonie colorée est composée de trois couleurs, tendances, minimalistes et qui permettent de
          créer l’identité visuelle tout en mettant en
          avant le contenu du site. Effectivement, elles sont utilisées stratégiquement et apportent classe et douceur
          au site web. La couleur foncée est utilisée pour les boutons
          d’appel à l’action, le footer...les choses importantes. </p>

        <img data-aos="zoom-in" src="../pageprojets/../../assets/creations/methodiya/harmoniecoloree.jpg" alt="">
        <blockquote>" Une harmonie colorée simple et minimaliste <br/> pour un style épuré et convivial ! "</blockquote>
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface" data-aos="zoom-in">
          <h4>Conception du logo</h4>
          <div class="traitprojet1"></div>
          <p class="mt-3"> Création d’un logo simple et lisible à lire. Le but était de mettre en évidence la lettre «M»
            tout en faisant référence à la lecture. Ici le livre représente la lecture tout en formatn un M, sous
            le M, Methodiya est écrit dans une typographie simple et facilement lisible afi n de ne pas trop surcharger
            le logo.</p>
          <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/logo1.2" alt="">

        </div>
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface" data-aos="zoom-in">

          <h4>Interface du site</h4>
          <div class="traitprojet1"></div>
          <p class="mt-3">Le site est composé de couleurs douces, chaudes, conviviales. Elles sont correctement
            disposées sur le site web, les images tirées d'une banque d'images libres de droit sont dans le thème du
            site également. </p>
          <p><em>Retrouvez ici la proposition de maquette retenue, pour la page d'accueil.</em></p>

        </div>
      </div>

      <div class="presentationinterface">
        <div class="premier">
          <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/maquettemethodiyabureau.jpg"
               alt="">
        </div>
        <div>
          <img src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/methodiyapagedaccueilmobile.jpg"
               alt="">
        </div>

      </div>

      <div class="defbesoins" data-aos="fade-up">

        <h4>Technologies utilisées</h4>
        <p>
          Ce site web n'a pas encore vu le jour, mais d'après le cahier des charges il va etre mis en place sur le thème
          Wordpress Avada. Les maquettes ont été réalisées avec Adobe XD, et le logo avec Adobe Illustrator.
        </p>
      </div>


      <div class="voir">
        <h4></h4>
      </div>
      <div class="autresprojets">
        <div>
          <img width="300" src="../pageprojets/../../assets/site2/image.jpg" alt="">
          <p>CONCEPTION DE SITE WEB</p>
          <h4>Hiking</h4>
          <router-link to="/projet2">
            <button>Voir</button>
          </router-link>
        </div>
        <div>
          <img width="300" src="../pageprojets/../../assets/logo1.jpg" alt="">
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
  name: "projet5",
  components: {
    'my-footer': Footer
  }
}
</script>

<style scoped>


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
  margin-top: 50px;

}

.defbesoins {
  display: block;
  max-width: 650px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 110px;
  padding-bottom: 40px;
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
.imgdemarque p{
  margin: 26px;
}

}

@media (min-width: 769px) and (max-width: 1024px) {
  .autresprojets {
    flex-wrap: unset;
  }
}


</style>
