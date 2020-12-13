<template>
  <div id="User">
    <div id="contenido">
      <h2>Los datos de <span> {{name}} </span> son: </h2>
      <ul>
        <li>
          Nombre: {{name}}
        </li>
        <li>
          Apellido: {{surname}}
        </li>
        <li>
          ID: {{national_id}}
        </li>
        <li>
          Correo: {{email}}
        </li>
        <li>
          Teléfono: {{phone}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'User',
  data: function (){
    return {
      name: "",
      surname: "",
      national_id: 0,
      email: "",
      phone: 0
    }
  },
  created: function(){
    this.name = this.$route.params.name
    let self = this
    axios.get("https://sprint-2-12.herokuapp.com/user/" + this.name)
      .then((result) => {
        self.surname = result.data.surname;
        self.national_id = result.data.national_id;
        self.email = result.data.email;
        self.phone = result.data.phone;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  }
}
</script>

<style scoped>
#User{
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5% auto auto;
  background: #212121;
  padding: 2%;
  color: #FFFFFF;
  border-radius: 10px;
}

#User h2{
  font-size: 180%;
  color: #FFFFFF;
}
#User span{
  color: #757575;
  font-weight: bold;
}
#User ul{
  font-size: 120%;
}
</style>
