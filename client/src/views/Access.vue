<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from "vue";
import Navbar from '@/components/navbar/Navbar.vue';
 import Login from '../components/access/Login.vue';
import Register from '../components/access/Register.vue';
const route = useRoute();
const ActiveMethod = computed(() => {
    if (route.params.method === 'sign-up') {
        return Register;
    } else if (route.params.method === 'sign-in') {
        return Login;
    }
});
 
</script>

<template>
   <Navbar></Navbar>
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  <!-- login/register container -->
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          
                <component :is="ActiveMethod"/>
        
        
    <!-- image -->
    <div class="md:block hidden w-1/2">
      <img class="rounded-2xl" src="../images/todo.jpg">
    </div>
  </div>
</section>
</template>