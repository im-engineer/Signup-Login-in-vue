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
        type="email"
        name="email"
        placeholder="Enter email"
        v-model="loginData.email"
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
        email: null,
        password: null,
        }
        };
  },
  methods: {
    login(e) {
        this.error = [];
        if(this.loginData.email && this.loginData.password){
            console.warn("no error")
        }
        if(!this.loginData.email){
            this.error.push("email is required")
        }
        if(!this.loginData.password){
            this.error.push("password is password")
        }
        console.log("hello", this.error)
         e.preventDefault();
    },
  },
};
</script>
