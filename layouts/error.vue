<template>
  <div id="err" class="absolute inset-0 flex flex-col items-center justify-center border-dotted border-dark-dhover rounded bg-red-900">
    <div class="grid grid-cols-1"> 
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100">404</h1>
        </div>
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100">404</h1>
        </div> 
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100">404</h1>
        </div> 
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100">404</h1>
        </div>
        <div>
          <h1  class="text-7xl font-ferrite-display text-white text-opacity-100">404</h1>
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
