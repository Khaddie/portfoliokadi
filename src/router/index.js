import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Logofolio from "../components/Logofolio";
import Sitesweb from "../components/Sitesweb";
import Creations from "../components/Creations";
import Contact from "../components/Contact";
import Mentionslegales from "../components/Mentionslegales";
import projet1 from "../components/pageprojets/projet1";
import projet2 from "../components/pageprojets/projet2";
import projet3 from "../components/pageprojets/projet3";
import Apropos from "../components/Apropos";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/Logofolio', name: 'Logofolio', component: Logofolio},
    {path: '/Sitesweb', name: 'Sitesweb', component: Sitesweb},
    {path: '/Créationsgraphiques', name: 'Créationsgraphiques', component: Creations},
    {path: '/Apropos', name: 'Apropos', component: Apropos},
    {path: '/Mentionslegales', name: 'Mentionslegales', component: Mentionslegales},
    {path: '/Contact', name: 'Contact', component: Contact},


    {path: '/projet1', name: 'projet1', component: projet1},
    {path: '/projet2', name: 'projet2', component: projet2},
    {path: '/projet3', name: 'projet3', component: projet3},


  ]
})
