<template>
  <div> 
      <Orbiter/>
      <Splash/>
      <ColorModePicker aria-label="darkmode light-mode switch button" class="absolute top-0 right-0"/>
      
      <Nuxt />

      <Footer/>
  </div>
</template>

<style>
.dark-mode { 
  @apply text-white;
  @apply bg-dark; 
}

.light-mode { 
  @apply text-black;
  @apply bg-light;
}
</style>


