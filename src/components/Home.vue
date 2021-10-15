<template>
  <div><h1>Home</h1>
 
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
name:'Home',
async created(){

  const response = await axios.get('users',{
      headers:{
          Authorization:`Bearer ${localStorage.token}` 
      }
    
  })
 
  console.log(response)
  
}

}
</script>

<style>

</style>