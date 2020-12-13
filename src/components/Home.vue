<template>
  <div id="Home">
    <section class="card">
      <h2>Datos del usuario a ingresar:</h2><br>
      <form>
        <input class="input--style-3" name="name" placeholder="Nombre" type="text" v-model="name"/>
        <input class="input--style-3" name="surname" placeholder="Apellido" type="text" v-model="surname"/><br>
        <input class="input--style-3" name="national_id" placeholder="Cédula" type="number" v-model="national_id"/><br>
        <input class="input--style-3" name="email" placeholder="Correo" type="email" v-model="email"/><br>
        <input class="input--style-3" name="phone" placeholder="Celular" type="number" v-model="phone"/><br>

        <button class="btn btn--pill btn--green" v-on:click="getFormValues">Submit</button>
      </form>
    </section>

    <section class="card error-card">
      <p v-if="errors.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>
    </section>

    <section class="card">
      <h2>Nombre del usuario por buscar:</h2><br>
      <form>
        <input class="input--style-3" placeholder="Nombre" name="name" type="text" v-model="name"/>

        <button class="btn btn--pill btn--green" v-on:click="getUser">Submit</button>
      </form>
    </section>


  </div>
</template>

<script>
export default {
  name: "Home",
  data: function(){
    return{
      errors: [],
      output: '',
      name: null,
      surname: null,
      national_id: null,
      email: null,
      phone: null
    }

  },
  methods: {
    getFormValues: function (e){
      if (this.name && this.surname && this.national_id && this.email && this.phone){
        this.$router.push({ name:"user_create",
          params: {
            name: this.name,
            surname: this.surname,
            national_id: this.national_id,
            email: this.email,
            phone: this.phone}
        })

      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.surname) {
        this.errors.push('El apellido es obligatorio.');
      }
      if (!this.national_id) {
        this.errors.push('La cédula es obligatoria.');
      }
      if (!this.email) {
        this.errors.push('El correo es obligatorio.');
      }
      if (!this.phone) {
        this.errors.push('El número celular es obligatorio.');
      }

      this.output = this.name;
      e.preventDefault();
    },
    getUser: function (e){
      if (this.name){
        this.$router.push({name: "user", params:{name:this.name}})
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.');
      }

      e.preventDefault();

    }
  }
}
</script>

<style>

button {
  outline: none;
  background: none;
  border: none;
}

body {
  font-family: "Poppins", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
  color: #FFFFFF;
}

/* ==========================================================================
   #BUTTON
   ========================================================================== */
.btn {
  display: inline-block;
  line-height: 40px;
  padding: 0 33px;
  font-family: Poppins, Arial, "Helvetica Neue", sans-serif;
  cursor: pointer;
  color: #fff;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 18px;
}

.btn--pill {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.btn--green {
  background: #57b846;
}

.btn--green:hover {
  background: #4dae3c;
}

/* ==========================================================================
   #FORM
   ========================================================================== */
input {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
}

.input--style-3 {
  padding: 5px 0;
  font-size: 16px;
  color: #ccc;
  background: transparent;
  position: relative;
  margin-bottom: 33px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);;
}

#Home {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
}

.card {
  overflow: hidden;
  border-radius: 3px;
  background: #212121;
  padding: 1% 2% 2% 2%;

}

.error-card {
  width: 20%;
  color: #FFFFFF;

}

</style>
