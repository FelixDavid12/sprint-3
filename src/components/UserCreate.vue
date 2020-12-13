<template>
  <div id="UserCreate">
    <h2>{{body}}</h2>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UserCreate',
  data: function (){
    return {
      body: ''
    }
  },
  created: function(){
    const bodySend = {
      name: this.$route.params.name,
      surname: this.$route.params.surname,
      national_id: this.$route.params.national_id,
      email: this.$route.params.email,
      phone: this.$route.params.phone
    };

    axios.post("https://sprint-2-12.herokuapp.com/user/create/", bodySend)
      .then((response) => {
        this.body = response.data;
        })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  }
}
</script>

<style>

</style>
