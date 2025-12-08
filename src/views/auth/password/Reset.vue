<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../../index2.html" class="h1"
            ><b>Reset Password</b></a
          >
        </div>
        <div class="card-body">
          <!-- <p class="login-box-msg">Reset to start your session</p> -->

          <form @submit.prevent="adminResetPassword">
          
          <div v-if="msg">
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="msg = null"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>{{ msg.message }}</strong>
          </div>
        </div>


          <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>

            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                v-model="form.password"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>


            <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                v-model="form.password_confirmation"
                placeholder="Retype Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>

            <div class="row">
      
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                 Submit
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>
         

          <p class="mb-0">
            <!-- <a href="register.html" class="text-center">Register a new membership</a> -->
            <router-link :to="{ name: 'Forgot' }" class="text-center"
              >Return to Forgot</router-link
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
  name: "ResetPage",
  data() {
    return {
      form: {
        password:null,
        password_confirmation:null,
        token:null,
      },
      errors: {},
      msg:null,
    }
  },
  created(){
    this.form.token=this.$route.query.token;
  },
  
  methods: {
    adminResetPassword() {
      // console.log(this.form);
      this.$store
        .dispatch("RESET", this.form)
        .then((res) => {
          console.log(res.data);
          this.msg=res.data;
           this.errors = {};
           this.$router.push({ name: "Login" });
          
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