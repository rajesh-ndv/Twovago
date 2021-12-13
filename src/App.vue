<template>
  <div class="vue-temp">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="#" target="_blank">
           Twovago
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login" v-if="user == null" >Sign In</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="btn btn-outline-primary" to="/" v-if="user == null" >Sign up</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="btn btn-outline-primary" to="/login" v-if="user != null"><span @click="removeUser">Logout</span></router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
    export default {
        methods: {
          removeUser: function(){
            localStorage.removeItem("user");
            this.$router.go();	
          }
        },
        data() {
            return {user : localStorage.getItem('user')}
        }
    }
</script>