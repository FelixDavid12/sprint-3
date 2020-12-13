<template>
  <div id="User">
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

<style>
#User{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#User h2{
  font-size: 180%;
  color: #212121;
}
#User span{
  color: #757575;
  font-weight: bold;
}
#User ul{
  font-size: 120%;
}
</style>
