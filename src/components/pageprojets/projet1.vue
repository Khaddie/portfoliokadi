<template>
  <div class="projet1">


    <div class="fondprojet" data-aos="flip-right">
      <div class="imgprojprincipale">
        <img src="../pageprojets/../../assets/site1/image.jpg" alt="Conception de site web de patisseries">
      </div>
      <div class="explicationprojet">
        <h1>CAKE BEAUTY : <br/>
          Site vitrine de pâtisseries </h1>
        <div class="traitprojet"></div>

        <div class="grid" data-aos="fade-up">
          <div class="texteprojet">
            <p><b>Cake Beauty</b> est une pâtissière spécialisée dans le Cake Design et les pâtisseries
              américaines. Depuis lors, ses devis se faisaient via ses réseaux sociaux, cela devint vite ingérable.
              La création d'un site web lui est venu à l'esprit.
              Elle fit appel à moi pour réaliser son site vitrine, présentant toutes les pâtisseries qu'elle propose à
              la vente. </p>
            <p>
              <b>Défi : </b>
              Le défi était de réaliser un site web clair, <b>simple et accessible</b> pour faciliter au maximum le parcours utilisateur. Le
              potentiel client devait pouvoir
              visualiser toutes les pâtisseries disponibles et commander via un formulaire simple et
              compréhensible.
            </p>
          </div>
          <div class="texteprojet text2">
            <h5>Rôle</h5>
            <p> Intégratrice via un CMS</p>


            <div class="survollien">
              <h5>Lien du site web</h5>
              <p><a href="https://cakebeautyy.fr/">https://cakebeautyy.fr/</a></p>
            </div>
          </div>
        </div>
      </div>


      <div class="imgdemarque" data-aos="fade-up">
        <div class="traitprojet1"></div>

        <h4>L'HARMONIE COLORÉE</h4>

        <p class="mt-3">Nous avons ici une harmonie colorée simple et nécessaire pour ce site web. En effet, le contenu
          de ce site est très coloré, afin que le tout
          soit harmonieux il a fallu utiliser des couleurs sobres. </p>

        <img data-aos="zoom-in" src="../pageprojets/../../assets/site1/harmoniecoloree.jpg" alt="Harmonie coloréeWebdesign">
        <blockquote>" Une harmonie colorée simple et minimaliste <br/> pour un style épuré et classe ! "</blockquote>
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface" data-aos="zoom-in">

          <h4>Interface du site</h4>
          <div class="traitprojet1"></div>
          <p class="mt-3">Notre approche était d'allier élégance et simplicité. Comme nous avions affaire à un site web
            riche en contenu,
            l'objectif principal était d'allier des images colorées et de qualité avec une ambiance simple et
            agréable.</p>
        </div>
      </div>

      <div class="presentationinterface">
        <video controls data-aos="fade-up">

          <source src="https://khadijaboudjemline.fr/images/sitesweb/pr%C3%A9sentationpage/videocakebeauty.mp4"
                  type="video/mp4">
        </video>

      </div>

      <div class="defbesoins" data-aos="fade-up">

        <h4>Technologies utilisées</h4>
        <p>
          Ce site Web a été créé à partir du CMS Wordpress, le thème a été entièrement personnalisé. Le CSS
          personnalisable a beaucoup été utilisé et pour la structure et mise en page
          des différentes pages le plugin <b>Elementor</b> a été un grand allié.</p>
      </div>


      <div class="voir">
        <h4></h4>
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
  name: "projet1",
  components: {
    'my-footer': Footer
  }
}
</script>

<style scoped>

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
  width: 37%;
}

a {
  text-decoration: none;
  color: black;
}

.survollien p {
  position: relative;
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

video {
  max-width: 70%;
  border-radius: 20px;
  border: 0px;
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


}

@media (min-width: 769px) and (max-width: 1024px) {
  .autresprojets {
    flex-wrap: unset;
  }
}


</style>
