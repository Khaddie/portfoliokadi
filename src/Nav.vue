<template>
  <div id="nav" ref="root">
    <nav>
      <button class="menubtn" v-on:click="menuclick">
      <span>
      </span>
      </button>
      <div class="menu" style="display: none" ref="menu" v-on:click="menuclick">
        <div class="image">
          <div data-project-no="1" class="item item--1 w-100" style=" opacity: 1; z-index: 89;">
            <img class="imgmenu w-100" src="./assets/imagemenu.svg" alt="Portfolio Khadija Boudjemline">
          </div>
        </div>
        <div class="list">
          <ul v-on:click="fermeture">
            <router-link to="/Logofolio">
              <li>Logofolio</li>
            </router-link>
            <router-link to="/Sitesweb">
              <li ref="fermli">Sites Web</li>
            </router-link>
            <router-link to="/Creations">
              <li>Créations graphiques</li>
            </router-link>
            <router-link to="/Apropos">
              <li>À propos</li>
            </router-link>

            <router-link to="/Contact">
              <li>Contact</li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    menuclick: function (event) {
      if (this.$root.$el.classList.toggle('menu-open')) {
        this.$refs["menu"].style.display = 'grid';
      } else {
        this.$refs["menu"].style.display = 'none';
      }

    },
    fermeture: function (fermer) {
      this.$refs["menu"].style.display = 'none';

    },
  }
}
</script>

<style scoped>
/**Style de l'intérieur du menu*/
.menu ul {
  list-style: none;
  color: #DBBCA8;

}

.image, .list {
  height: 100%;
}

.image {
  position: relative;
}

.item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
}

.list {
  margin-top: 20%;
  padding: 20px;
}


.menu li {
  font-size: 40px;
  margin-bottom: 40px;
  font-family: Lato, sans-serif;
  font-weight: 400;
}

.menu a {
  transition: opacity 300ms ease;
  width: fit-content;
  text-decoration: none;
  color: black;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  text-decoration: none;
  color: black;
}
.menu a:hover {
  opacity: .4;
  text-decoration: none;
  color: #DBBCA8;
}


/**FIN*/
nav {

  width: 70px;
  height: 70px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

}

nav::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  background: white;
  border-radius: 100%;
  transition: transform 400ms ease;
  z-index: 10;

}

nav::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: transparent;
  border-radius: 50%;
  transition: transform 400ms ease-in;
  z-index: 40;
}

nav:hover::after {
  transform: scale(1.2);
}

.menubtn {
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 140;
  border: none;
  top: 17px;
  left: 14px;
  border-radius: 50px;
  box-shadow: #DBBCA8;
  background-image: url("assets/menu.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  background-color: transparent;
}

.menubtn::before {
  content: '';
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;


}


.menu-open nav::before {
  transform: scale(50);
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 20;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}



@media (max-width: 768px) {
  .image {
    display: none;
  }

  .list {
    margin-top: 40%;
  }

  .menu li {
    font-size: 20px;
    margin-bottom: 30px;
    font-family: Lato, sans-serif;
    font-weight: 300;
  }

  .menu a {
    transition: opacity 300ms ease;
    width: fit-content;
    font-size: 30px;
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
  }
}
</style>
