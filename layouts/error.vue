<template>
  <div id="err" class="absolute inset-0 flex flex-col items-center justify-center border-dotted border-dark-dhover bg-red-900">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"> 
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100 mx-8">404</h1>
        </div>
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100 mx-8">404</h1>
        </div> 
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100 mx-8">404</h1>
        </div> 
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100 mx-8">404</h1>
        </div>
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100 mx-8">404</h1>
        </div>
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100 mx-8 hidden md:block lg:block xl:block">404</h1>
        </div>
        <div>
          <span class="font-ferrite-light text-opacity-100 text-white ">  >GOTO <nuxt-link class="hover:bg-light-hover dark-hover:bg-dark-dhover" to="/">index</nuxt-link></span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'errlay' // you can set a custom layout for the error page
  }
</script>
