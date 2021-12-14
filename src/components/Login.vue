<template>
    <div class="vue-temp">
        <form v-on:submit.prevent="submitForm">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="form.email"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password"/>
            </div>

            <button type="submit" class="btn btn-primary gradient-custom-2 btn-lg btn-block">Sign In</button>

            <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p> -->

            <!-- <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div> -->

        </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                form: {
                    email: " ",
                    password: " "
                }
            }
        },
        methods: {
            addUser: function(){
                localStorage.setItem("user",20);
                this.$router.go()	
            },
            submitForm(){
                axios.post('http://localhost:8080/api/user/login', this.form)
                     .then((res) => {
                         console.log("Success");
                         console.log(res);
                         if(res && res.data && res.data.username){
                             if(localStorage.getItem("user")){
                                 localStorage.removeItem("user");
                             }
                             localStorage.setItem("user",res.data);
                             this.$router.push("/home")	
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