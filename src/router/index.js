import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Logofolio from "../components/Logofolio";
import Sitesweb from "../components/Sitesweb";
import Creation from "../components/Creation";
import Contact from "../components/Contact";
import Mentionslegales from "../components/Mentionslegales";
import projet1 from "../components/pageprojets/projet1";
import projet2 from "../components/pageprojets/projet2";
import projet3 from "../components/pageprojets/projet3";
import projet4 from "../components/pageprojets/projet4";
import projet6 from "../components/pageprojets/projet6";
import Apropos from "../components/Apropos";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/Logofolio', name: 'Logofolio', component: Logofolio},
    {path: '/Sitesweb', name: 'Sitesweb', component: Sitesweb},
    {path: '/Apropos', name: 'Apropos', component: Apropos},
    {path: '/Mentionslegales', name: 'Mentionslegales', component: Mentionslegales},
    {path: '/Contact', name: 'Contact', component: Contact},
    {path: '/Creations', name: 'Creation', component: Creation},


    {path: '/projet1', name: 'projet1', component: projet1},
    {path: '/projet2', name: 'projet2', component: projet2},
    {path: '/projet3', name: 'projet3', component: projet3},
    {path: '/projet4', name: 'projet4', component: projet4},
    {path: '/projet6', name: 'projet6', component: projet6},

  ]
})
