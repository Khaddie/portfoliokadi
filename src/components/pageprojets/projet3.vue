<template>
  <div class="projet1">

    <div class="fondprojet" data-aos="flip-right">
      <div class="imgprojprincipale">
        <img src="../pageprojets/../../assets/site3/alainresnais.jpg" alt="">
      </div>
      <div class="explicationprojet">
        <h1>ALAIN RESNAIS : <br/>
          Site web d'un réalisateur français</h1>
        <div class="traitprojet"></div>

        <div class="grid" data-aos="fade-up">
          <div class="texteprojet">
            <p>Ce site web est un site regroupant les informations concernant le réalisateur français <b>Alain Resnais</b>
            ainsi que sa filmographie, ses meilleurs films. </p>
            <p>
              <b>Défi : </b>
              Ce site web a été réalisé dans le cadre pédagogique de mon DUT MMI. Le défi était de réaliser le maquettage complet du site web,
              son identité visuelle, et enfin son intégration via le framework VuJS. Ce site a été réalisé entièrement en 8h.
            </p>
          </div>
          <div class="texteprojet text2">
            <h5>Rôle</h5>
            <p>Créer l'interface via Adobe XD</p>
            <p>Intégrer la maquette via le Framework VueJS</p>
            <h5>Technique</h5>
            <p>Framework VueJS</p>
            <p>BootstrapVue</p>
            <p>Adobe XD</p>
            <p>HTML | CSS</p>
            <div class="survollien">
              <h5>Lien du site web</h5>
              <p><a href="http://hicking.khadijaboudjemline.fr/">http://hicking.khadijaboudjemline.fr/</a> </p>
            </div>
          </div>
        </div>
      </div>


      <div class="imgdemarque" data-aos="fade-up">
        <div class="traitprojet1"></div>

        <h4>L'HARMONIE COLORÉE</h4>

        <p class="mt-3">L'harmonie colorée est simple et s'adapte au style du réalisateur. Un stle plutot sombre, avec
          des couleurs simples. Le contenu va également etre assez chargé
          avec les différentes affiches de films. Les typographies utilisées s'harmonisent avec les couleurs, la
          typographie script casse la rigidité du site.</p>

        <img data-aos="zoom-in" src="../pageprojets/../../assets/site3/harmoniecoloree.jpg" alt="">
        <blockquote>" Un site web qui retrace la vie d'un réalisateur francais. "</blockquote>
      </div>


      <div class="interfaceprojet">

        <div class="explicationinterface" data-aos="zoom-in">

          <h4>Interface du site</h4>
          <div class="traitprojet1"></div>
          <p class="mt-3" >La page d'accueil est totalement noire et blanche,
            cela plonge l'utilisateur directement dans l'univers du réalisateur. L'ensemble du site est simple et compréhensible.</p>
        </div>
      </div>

      <div class="presentationinterface">
        <div>
          <img src="../pageprojets/../../assets/site3/accueilbureau.jpg" alt="">
        </div>
        <div>
          <img src="../pageprojets/../../assets/site3/accueilmobile.jpg" alt="">
        </div>


      </div>

      <div class="defbesoins" data-aos="fade-up">

        <h4>Processus de création</h4>
        <p>
         Le site devait etre livrable à la fin de la journée, la matinée a été consacrée aux recherches sur le personnage, puis à la création de l'identité visuelle. Ensuite
        à l'élaboration des différentes pages du site web. L'après-midi a été consacré à l'intégration avec le framework VueJS des diffèrentes pages du site, évidemment
          le site devait etre disponible sur mobile également. </p>
      </div>


      <div class="voir">
        <h4></h4>
      </div>
      <div class="autresprojets">
        <div>
          <img width="300" src="../pageprojets/../../assets/projet1.jpg" alt="">
          <p>CONCEPTION DE SITE WEB</p>
          <h4>Hicking</h4>
          <router-link to="/projet1">
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
  name: "projet3",
  components:{
    'my-footer':Footer
  }

}
</script>

<style scoped>
.presentationinterface {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
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

a{
  text-decoration: none;
  color: black;
}
.survollien p {
  position: relative;
}


.imgdemarque p{
  margin: 20px;
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
.autresprojets img{
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

.presentationinterface img{
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
    margin: 15px  0px;
    width: 70%;
  }
  .autresprojets img{
    height:160px;
  }

  .explicationinterface h4 {
    font-size: 24px;

  }

  h5 {
    margin: 20px 0 20px 0;
  }
  .presentationinterface{
    margin: 10%;
  }


}

@media (min-width: 769px) and (max-width: 1024px) {
  .autresprojets{
    flex-wrap: unset;
  }


}


</style>

