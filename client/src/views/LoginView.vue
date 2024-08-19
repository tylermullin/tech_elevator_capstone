<template>

  <header></header>
    <div id="wrapper">
  <div id="login-page">
    <form v-on:submit.prevent="login">
      <h1>Please Sign In or Create a New Account</h1>
      <div id="fields">
        <label id="email" for="email">Username</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          v-model="user.email"
          required
          autofocus
        />
        <label id="password" for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
        <div id="sign-in-button-container"><button id="sign-in-button" type="submit">Sign in</button></div>
      </div>
      <hr/>
      <div id="register">
      Need an account? <router-link id="register-link" v-bind:to="{ name: 'register' }">Register!</router-link>
    </div>
    </form>
  </div>
</div>

  <footer></footer>


</template>

<script>
import authService from "../services/AuthService";

export default {
  components: {
},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;
          if (!response) {
            alert(error);
          } else if (response.status === 401) {
            alert("Invalid username and password!");
          } else {
            alert(response.message);
          }
        });
    },
  },
};
</script>

<style scoped>

#wrapper {
  display: flex;
  justify-content: center;
}

#login-page {
  /* width: 700px; */
  width: 50%;
  height: 250px;
  margin-top: 40px;;
  background-color: coral;
  border-radius: 10px;
  border: solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 20px;
}

#email {
  margin: 5px;
}

#password {
  margin: 5px;
}

#sign-in-button-container {
  text-align: center;
}
#sign-in-button {
  width: 50%;
  margin: 10px;
  border-radius: 40px;
  background-color: whitesmoke;
  color: black
  
}

#sign-in-button:hover {
  background-color: navy;
  color: white;
  cursor: pointer;
}

#register{
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

#register-link {
  margin-left: 4px;
}

@media only screen and (max-width: 425px) {
  h1 {
    font-size: 15px;
    margin-bottom: 20px;
  }
  
  #login-page {
    height: 300px;
    width: 90%;
  }

  #email {
    width: 90%;
    align-items: center;
  }

  #password {
    width: 90%;
  }
}



</style>
