<template>
  <nav>
    <!-- warpper  -->
     <div class="wrapper">

  <!-- Preloader -->
  <!-- <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
  </div> -->

  <!-- Navbar -->
  <nav-bar v-if="loggedInStatus"></nav-bar>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <side-bar v-if="loggedInStatus"></side-bar>
  <!-- Main Sidebar End  -->

  <!-- Content Wrapper. Contains page content -->
  <router-view></router-view>
  <!-- /.content-wrapper -->
  <!-- <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0
    </div>
  </footer> -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->
  </nav>
  <!-- <router-view/> -->
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import SideBar from './components/SideBar.vue'
  export default {
    components: {
      NavBar,SideBar},
    

     computed: {
       loggedInStatus() {
        return this.$store.getters.GET_AUTH_STATUS;
       }
     },
  }
</script>


