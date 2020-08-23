<template>
  <div class="dark-mode"> 
    <ColorModePicker/>
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
