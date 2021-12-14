<template>
    <div class="vue-temp">
        <form v-on:submit.prevent="submitForm">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" v-model="form.username"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="form.email"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password"/>
            </div>

            <button type="submit" class="btn btn-primary gradient-custom-2 btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                form: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm(){
                axios.post('http://localhost:8080/api/user/register', this.form)
                     .then((res) => {
                         console.log("Success");
                         console.log(res.data);
                         if(res && res.data && res.data.message==="User Registration Succesful"){
                            this.$router.push("/login")
                         }else{
                            this.$swal({
                                title: "Wrong Credentials",
                                text: "Please check the Username and Password",
                                icon: "error",
                            });
                         }
                     })
                     .catch((error) => {
                         console.log("Error "+ error);
                         // error.response.status Check status code
                     }).finally(() => {
                         //Perform action in always
                     });
            }
        }
    }
</script>