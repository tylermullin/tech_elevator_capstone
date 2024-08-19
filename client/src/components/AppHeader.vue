<template>
      
      <header>
      <img src="Images/Tee_times_logo.png" alt="Tee Times logo" id="logo">
    <nav>
      <div class="links-group">
        <router-link class="links" v-bind:to="{name : 'home'}">Home</router-link>
        <router-link class="links" v-bind:to="{name : 'home'}">Search Tee Times</router-link>
        <router-link v-if="$store.state.token" class="links" v-bind:to="{name : 'my_tee_times'}">My Tee Times</router-link>
      </div> 
    
    </nav>
    <!-- login / logout button --> 
    <router-link v-bind:to="{ name: 'login' }">
          <button v-if="$store.state.token===''" type="button" class="login-button">Log In / Sign Up</button>
        </router-link>

        <router-link v-bind:to="{ name: 'logout' }">
          <button v-if="$store.state.token!==''" type="button" class="login-button">Logout</button>
        </router-link>
      
    <!-- mobile menu bar -->
    <div class="dropdown">
      <select name="main menu" id="dropdown-menu" v-model="userSelection" v-on:change="toLinkedPage">
        <option value="home">Home</option>
        <option value="home">Search Tee Times</option>
        <option value="my_tee_times">My Tee Times</option>
        <option v-if="$store.state.token===''" value="login">Login</option>
        <option v-if="$store.state.token!==''" value="logout">Logout</option>
      </select>
      </div>

    
  </header>
   
</template>


<script>
export default {
  data() {
    return {
      userSelection: "",
    }

  },
  methods: {
    toLinkedPage(){
      if(this.userSelection === "home"){
        this.$router.push({ name: 'home' });
      }else if(
        this.userSelection === "my_tee_times"
      ){
        this.$router.push({ name: 'my_tee_times' });
      }else if(
        this.userSelection === "login"
      ){
        this.$router.push({ name: 'login' });
      }else if(
        this.userSelection === "logout"
      ){
        this.$router.push({ name: 'logout' });
      }
    }
  }
}


</script>

<style scoped>
/* logo & nav bar */
#logo {
  width: 140px;
}

header {
  display: flex;
  align-items: center;
}

.links-group {
  list-style-type: none;
  display: flex;
  padding: 0px;
}

.links-group .links {
  text-transform: uppercase;
  padding: 0 40px 0 0;
}

nav {
  flex-grow: 1;
}

.login-button {
 margin: 30px;
 padding: 10px;
 text-transform: uppercase;
 font-size: 14px;
 color: black;
 background-color: whitesmoke;
 border-radius: 6px;
}

.login-button:hover {
  cursor: pointer;
}

a,
a:visited {
  color: #707070;
  text-decoration: none;
}

a:hover {
  color: #00AFEF;
  text-decoration: underline;
}

.dropdown {
  display: none;
}

/* mobile nav bar */


 @media only screen and (max-width: 425px) {
  
  .dropdown {
  display: flex;
  justify-content: right;
  width: 90%;
  margin-right: 30px;
}

#dropdown-menu {
  background-color: whitesmoke;
  border-color: black;
  border: solid 2px;
  padding: 4px;
  border-radius: 6px;
}

option {
  font-size: 12px;
  text-align: center;
}
  nav {
    display: none;
  }

.login-button {
  display: none;
}



 } 





</style>


