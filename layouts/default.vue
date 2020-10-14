<template>
  <div> 
      <TheCube/>
      <Header/>
      <Nuxt/>
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
