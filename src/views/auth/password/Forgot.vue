<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../../index2.html" class="h1"
            ><b>Enter With Your Valid Email</b></a
          >
        </div>
        <div class="card-body">
          <p class="login-box-msg">forgot to start your session</p>

          <form @submit.prevent="adminForgotPassword">
            <!-- {{ JSON.stringify(errors) }} -->
            <!-- {{ errors }} -->
            <div v-if="msg">
              <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                  <span class="sr-only">Close</span>
                </button>
                <strong>{{msg.message }} </strong>
              </div>
            </div>

            <span
              class="text-danger"
              v-if="errors.email && errors.email.length"
            >
              {{ errors.email[0] }}
            </span>
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
                  Send Password Reset Link
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

          <p class="mb-0">
            <!-- <a href="register.html" class="text-center">Register a new membership</a> -->
            <router-link :to="{ name: 'Login' }" class="text-center"
              >Return to Login</router-link
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
  name: "ForgotPage",
  data() {
    return {
      form: {
        email: "",
      },
      errors: {},
      msg:null,
    };
  },
  methods: {
    adminForgotPassword() {
      this.$store
        .dispatch("FORGOT", this.form)
        .then((res) => {
          console.log(res.data);
          this.msg=res.data;
          this.form.email='';
          //   this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.error(err.response.data);
          this.errors = err.response.data.errors;
        });

    },
  },
};
</script>

<style>
</style>