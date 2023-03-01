<template>
    <div>
        <h1>Employee List</h1>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(axios,VueAxios)
export default{
        name : "Employee List",
        mounted(){
            Vue.axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response => {
                console.warn(response)
            })
        }
}
</script>
