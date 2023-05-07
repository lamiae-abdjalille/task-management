<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 bg-three py-2">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start" >
          <a class="text-2xl font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase text-main"
            href="/">
            Todo task
          </a>
        </div>
        <div class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto" >
  
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-main hover:opacity-75">
                <span class="ml-2">
                  <RouterLink to="/access/sign-up/">
                    Sign up
                  </RouterLink>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-main hover:opacity-75">
  
                <span class="ml-2">
                  <RouterLink to="/access/sign-in/">
                    Log in
                  </RouterLink>
                </span>
              </a>
            </li>
          </ul>
        
        </div>
      </div>
  
    </nav>
   
  
  </template>
  
  <script lang="ts" setup>

  
  
  </script>