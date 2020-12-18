<template>
  <div id="Users">
    <h2>Usuarios disponibles: </h2>
    <ol>
      <li v-for="user in users">
        Nombre: <span>{{ user.name }}</span>
      </li>
    </ol>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Users",
  data: function (){
    return {
      users: null
    }
  },
  created: function(){
    axios.get("http://127.0.0.1:8000/users/")
      .then((result) => {
        this.users = result.data;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  }
}
</script>

<style scoped>
#Users{
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5% auto auto;
  background: #212121;
  padding: 2%;
  color: #FFFFFF;
  border-radius: 10px;
}

#Users h2{
  font-size: 180%;
  color: #FFFFFF;
  text-align: center;
}
#Users span{
  color: #757575;
  font-weight: bold;
}
#Users ol{
  padding: 0;
  /*text-align: center;*/
  font-size: 150%;
}

#Users li{
  margin-bottom: 20%;
}
</style>

