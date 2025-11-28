<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="adminLogin">
            <!-- {{ JSON.stringify(errors) }} -->
            <!-- {{ errors }} -->
           <div v-if="errors.loginError">
               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">  
                  <span aria-hidden="true">&times;</span>
                  <span class="sr-only">Close</span>
                </button>
                <strong>{{ errors.loginError }} </strong> 
              </div>
           </div>


            <span class="text-danger" v-if="errors && errors.email && errors.email.length > 0">{{ errors.email[0] }}</span>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                placeholder="Email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors && errors.password && errors.password.length > 0">{{ errors.password[0] }}</span>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                v-model="form.password"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <!-- social link  -->
          <!-- <div class="social-auth-links text-center mt-2 mb-3">
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div> -->
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <!-- <a href="register.html" class="text-center">Register a new membership</a> -->
            <router-link :to="{ name: 'Register' }" class="text-center"
              >Register a new membership</router-link
            >
          </p>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    adminLogin() {
      this.$store
        .dispatch("LOGIN", this.form)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.error(err.response.data);
          this.errors = err.response.data.errors;
        });

      // without vuex
      // axios.post('http://127.0.0.1:8000/api/v1/login', this.form)
      // .then((res) => {
      //     console.log(res.data);
      // })
      // .catch((err) => {
      //  console.error(err.response.data);
      // });
      // without vuex end
    },
  },
};
</script>

<style>
</style>