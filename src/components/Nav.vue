<template>
  
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link v-show="!user" to="/login">Login</router-link> 
      <router-link class="registerLink" v-show="!user" to="/register">Sign Up</router-link> 
      <!-- <router-link class="logoutLink"  @click="logoutHandle" to="/">Logout</router-link> -->
      <a href="javascript:void(0)" @click="logoutHandle" v-show="user" > Logout </a>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'Nav',
computed:{
  ...mapState(['user'])
},
methods:{
  logoutHandle(){

    localStorage.removeItem('token')
    this.$store.state.user =null
   this.$router.push('/').catch(()=>{})
   
  }
}
}
</script>

<style>
#nav{
  padding:10px;
  display:grid;
  margin:0 auto;
  grid-template-columns:repeat(3,1fr);

}
#nav router-link{
padding:30px;

}
</style>