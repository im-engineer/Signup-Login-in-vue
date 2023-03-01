<template>
  <div>
    <h1 v-if="error.length">
       <div>
        <b>Please correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id">  {{ e }}</li>
        </ul>
       </div>
    </h1>
    <form @submit="login">
      <h4>Login Form</h4>
      <input
        type="username"
        name="username"
        placeholder="Enter username"
        v-model="loginData.username"
      /><br /><br />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        v-model="loginData.password"
      /><br /><br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
        error : [],
        loginData : {
        username: null,
        password: null,
        }
        };
  },
  methods: {
    login(e) {
        this.error = [];
        if(this.loginData.username && this.loginData.password){
            console.warn("no error")
        }
        if(!this.loginData.username){
            this.error.push("username is required")
        }
        if(!this.loginData.password){
            this.error.push("username is password")
        }
        console.log("hello", this.error)
         e.preventDefault();
    },
  },
};
</script>
