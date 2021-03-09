<template>
  <div class="mentions">
    <div class="contenu">
      <h1>MENTIONS LÉGALES</h1>

      <div class="entete">
        <p>
          Khadija Boudjemline <br>
          France <br>
          <b>khaddie90@gmail.com</b>
        </p>
      </div>

      <div>
        <h3>Responsabilité du contenu</h3>
        <p>Le contenu des pages de Khadija Boudjemline a été créé avec le plus grand soin. Cependant, je ne peux
          garantir
          l'exactitude, l'exhaustivité ou l'actualité du contenu. Conformément aux dispositions légales, je suis en
          outre
          responsable de mon propre contenu sur ces pages Web. Dans ce contexte, veuillez noter que je ne suis donc pas
          obligé de surveiller uniquement les informations transmises ou enregistrées par des tiers, ni d'enquêter sur
          des
          circonstances indiquant une activité illégale.
          Les illustrations ont également été réalisées par Khadija Boudjemline et font parties du contenu du site web.
          Toute forme d'utilisation, de reproduction ou de traitement d'œuvres soumises à la protection du droit
          d'auteur sur mes pages Web nécessite le consentement préalable du propriétaire respectif des droits</p>

        <h3>Responsabilité pour les liens</h3>
        <p>
          La responsabilité du contenu des liens externes (vers des pages Web de tiers) incombe exclusivement aux
          opérateurs des pages liées. Aucune violation n'était évidente pour moi au moment de la liaison. Si une
          infraction à la loi me venait à l'esprit, je supprimerai immédiatement le lien correspondant.
        </p>

        <h3>Google Analytics</h3>
        <p>Ce site Web utilise Google Analytics, un service d'analyse Web fourni par Google, Inc. («Google»). Google
          Analytics utilise des «cookies», qui sont des fichiers texte placés sur votre ordinateur, pour aider le site
          Web à analyser l'utilisation du site par ses utilisateurs. Les informations générées par le cookie concernant
          votre utilisation du site Web (y compris votre adresse IP) seront transmises et stockées par Google sur des
          serveurs aux États-Unis. En cas d'activation de l'anonymisation IP, Google tronquera / anonymisera le dernier
          octet de l'adresse IP pour les États membres de l'Union européenne ainsi que pour les autres parties à
          l'accord sur l'Espace économique européen. Ce n'est que dans des cas exceptionnels que l'adresse IP complète
          est envoyée et raccourcie par les serveurs de Google aux États-Unis. Au nom du fournisseur du site Web, Google
          utilisera ces informations dans le but d'évaluer votre utilisation du site Web, compilation de rapports sur
          l'activité du site Web pour les exploitants de site Web et fourniture d'autres services liés à l'activité du
          site Web et à l'utilisation d'Internet au fournisseur du site Web. Google n'associera votre adresse IP à
          aucune autre donnée détenue par Google. Vous pouvez refuser l'utilisation de cookies en sélectionnant les
          paramètres appropriés de votre navigateur. Cependant, veuillez noter que si vous faites cela, vous ne pourrez
          peut-être pas utiliser toutes les fonctionnalités de ce site Web. En outre, vous pouvez empêcher la collecte
          et l'utilisation de données par Google (cookies et adresse IP) en téléchargeant et en installant le plug-in de
          navigateur disponible sous https://tools.google.com/dlpage/gaoptout?hl=fr-FR. Google n'associera votre adresse
          IP à aucune autre donnée détenue par Google. Vous pouvez refuser l'utilisation de cookies en sélectionnant les
          paramètres appropriés de votre navigateur. Cependant, veuillez noter que si vous faites cela, vous ne pourrez
          peut-être pas utiliser toutes les fonctionnalités de ce site Web. En outre, vous pouvez empêcher la collecte
          et l'utilisation de données par Google (cookies et adresse IP) en téléchargeant et en installant le plug-in de
          navigateur disponible sous https://tools.google.com/dlpage/gaoptout?hl=fr-FR. Google n'associera votre adresse
          IP à aucune autre donnée détenue par Google. Vous pouvez refuser l'utilisation de cookies en sélectionnant les
          paramètres appropriés de votre navigateur. Cependant, veuillez noter que si vous faites cela, vous ne pourrez
          peut-être pas utiliser toutes les fonctionnalités de ce site Web. En outre, vous pouvez empêcher la collecte
          et l'utilisation de données par Google (cookies et adresse IP) en téléchargeant et en installant le plug-in de
          navigateur disponible sous https://tools.google.com/dlpage/gaoptout?hl=fr-FR.</p>
      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>

import Footer from "../Footer";
export default {
  name: "Mentionslegales",
  components:{
    'my-footer':Footer
  }
}
</script>

<style scoped>

p {
  font-family: Lato, sans-serif;
  font-size: 1rem;
}

.entete p {
  font-size: 20px;
  font-family: Lato, sans-serif;
  font-weight: 200;
  margin-bottom: 10px;
}

.contenu {
  margin: 10%;
}

h3 {
  font-family: Lato, sans-serif;
  font-size: 25px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 20px;
}

.mentions {
  padding-top: 5%;
  background-color: #f7f5f0;
  padding-bottom: 30%;

}

h1 {
  font-family: Montserrat, sans-serif;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 5%;
}

@media (max-width: 768px) {

  .entete{
    margin-top: 10%;
  }
  h1{
    font-size: 20px;
    margin-top: 25%;
  }


}
</style>
