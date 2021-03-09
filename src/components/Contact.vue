<template>
  <div class="contact">
    <div class="mecontacter">
    <h1>C O N T A C T</h1>

      <h3>Une question ? Une collaboration ?</h3>
      <p> N'hésitez pas à me contacter !</p>
    </div>
    <div class="button">
      <button class="btnprojet"><a href="mailto:khaddie90@gmail.com">Me contacter</a></button>

    </div>

  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: black;
}

.button {
  display: flex;
  justify-content: center;
}

button {
  border: 1px solid black;
  text-align: center;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  background-color: transparent;

}

h1 {
  font-family: Montserrat, sans-serif;
  text-align: center;
  margin-top: 10%;
  font-weight: 700;
}

.mecontacter {
  text-align: center;
  font-family: Lato, sans-serif;
  margin-top: 1%;
}

.mecontacter h3 {
  font-size: 40px;
}

.mecontacter p {
  font-size: 20px;
}

.contact {
  background-image: url("../assets/fondcontact.png");
  padding-top: 10%;
  padding-bottom: 30%;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .mecontacter{
    margin-top: 30%;
  }

  .contact{
    padding-bottom: 100%;
  }

  h1{
    font-size: 30px;
  }

  .mecontacter h3{
    font-size: 30px;
  }

  .mecontacter p{
    font-size: 1rem;
  }
  button{
    margin-top: 0px;
  }
}

</style>
