<template>
<div id="container">

  <div id="register">
    <form v-on:submit.prevent="register">
      <h1>Sign Up</h1>
      <div id="fields">
        <div id="username" class="form">
        <label id="username" for="username">Email</label>
        <input
          type="text"
          id="username"
          placeholder="Email"
          v-model="user.email"
          required
          autofocus
        />
      </div>

      <div id="password" class="form">  
      <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
      </div>
        <div id="confirm-password" class="form">
        <label for="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          v-model="user.confirmPassword"
          required
        />
      </div>
        <div id="address" class="form">
        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Address"
          v-model="user.streetAddress"
        />
      </div>
        <div id="city" class="form">
        <label for="city">City</label>
        <input type="text" id="city" placeholder="City" v-model="user.city" />
      </div>
        <div id="state" class="form">
        <label for="state">State</label>
        <input
          type="text"
          id="state"
          placeholder="State"
          v-model="user.state"
          maxlength="2"
          required
        />
      </div>
        <div id="zip" class="form">
        <label for="zip">ZIP</label>
        <input
          type="number"
          id="zip"
          placeholder="ZIP"
          v-model="user.zipcode"
          required
          minlength="5"
          maxlength="5"
        />
      </div>
      <div id="golf-handicap" class="form">
        <label for="golf-handicap">Golf Handicap</label>
        <input
          type="text"
          id="golf-handicap"
          placeholder="Golf Handicap"
          v-model="user.golfHandicap"
        />
      </div>
        <div></div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </div>
      <hr />
      <div id="sign-in-text">
      Have an account?
      <router-link v-bind:to="{ name: 'login' }">Sign in!</router-link>
    </div>
    </form> 
  </div>

</div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  data() {
    return {
      user: {
        // username: "",
        email: "",
        name: "",
        password: "",
        role: "USER",
        confirmPassword: "",
        streetAddress: "",
        city: "",
        state: "",
        zipcode: "",
        // role: "user",
        golfHandicap: ""
      },
    };
  },
  methods: {
    error(msg) {
      alert(msg);
    },
    success(msg) {
      alert(msg);
    },
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.error("Password & Confirm Password do not match");
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.success("Thank you for registering, please sign in.");
              this.$router.push({
                path: "/login",
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            if (!response) {
              this.error(error);
            } else if (response.status === 400) {
              if (response.data.errors) {
                // Show the validation errors
                let msg = "Validation error: ";
                for (let err of response.data.errors) {
                  msg += `'${err.field}':${err.defaultMessage}. `;
                }
                this.error(msg);
              } else {
                this.error(response.data.message);
              }
            } else {
              this.error(response.data.message);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
  font-size: 20px;
}
#register {
  width: 500px;
  padding: 10px 40px 30px 40px;
  background-color: coral;
  border-radius: 10px;
  border: solid 2px;
  margin-bottom: 100px;
  margin-top: 20px;
}

.form {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid
}

button {
  width: 100%;
  margin: 10px;
  padding: 5px;
  border-radius: 40px;
  background-color: whitesmoke;
  color: black
}

button:hover {
  background-color: navy;
  color: white;
  cursor: pointer;
}

#sign-in-text {
  text-align: center;
}


</style>
