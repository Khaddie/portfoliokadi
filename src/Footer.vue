<template>
  <div id="footer">
    <div class="contact">
      <div class="iconecontact">
        <img src="./assets/iconecontact.svg" alt="Contact">
      </div>
      <div class="survollien">
        <p><a href="mailto:khaddie90@gmail.com">khaddie90@gmail.com </a></p>
      </div>
      <div>
        <p>© Khadija Boudjemline. Tous droits réservés.</p>

      </div>

      <p class="mentions">
        <router-link to="/Mentionslegales">
       Mentions légales  </router-link>
      </p>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
/*EFFETS*/



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
  width: 100%;
}

.iconecontact img {
  width: 100%;

}

a {
  text-decoration: none;
  color: black;
}

.survollien p {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: black;
  margin-top: 1.5rem;
  position: relative;


}

.mentions, p {
  font-family: Lato, sans-serif;
  font-size: 0.8rem;
}

.contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: black;
  margin-top: 10%;
  margin-bottom: 5%;
}


@media (max-width: 768px) {
  .contact {
    margin-top: 30%;
  }

  .survollien p {
    font-size: 1rem;
  }
}


</style>
