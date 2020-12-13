<template>
  <div id="app">
    <div class="header">
      <h1>Sprint 3</h1>
      <nav>
        <button v-on:click="init">Inicio</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
      <h2>©Equipo 15</h2>
    </div>
<!--    <img src="./assets/logo.png">-->
<!--    <HelloWorld/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
    init: function(){
      if (this.$route.name !== "home"){
        this.$router.push({name: "home"})
      }
    },
    getUser: function(){
      if(this.$route.name !== "user"){
        let name = localStorage.getItem("current_name")
        this.$router.push({name: "user", params:{name:name}})
      }
    },
    createUser: function(){
      if(this.$route.name !== "user_create"){
        this.$router.push({name:"user_create",
          params: {name: "d", surname: "c.sur", national_id: 3, email: "c@c.com", phone: 3}
        })
      }
    }
  },
  beforeCreate: function(){
    localStorage.setItem('current_username', 'a')
    this.$router.push({name:"home"})
  }
}
</script>

<style>
body{
  margin: 0 0 0 0;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #009688;
  color:#E5E7E9 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1{
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button{
  color: #212121;
  background: #FFC107;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 110%;
}
.header nav button:hover{
  color: #283747;
  background: #BDBDBD;
  border: 1px solid #BDBDBD;
}
.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #009688;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
