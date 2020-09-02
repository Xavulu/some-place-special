<template>
  <div> 
      <Splash/>
      <ColorModePicker class="absolute top-0 right-0"/>
      <h1>this is the home page</h1>
    <Nuxt />
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


