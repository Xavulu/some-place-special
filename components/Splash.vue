<template>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img v-if="mode === 'light'" class="logo" src="~/static/images/exef_logo_light.svg/" style="width:700px" alt="exef.dev logo"/> 
        <img v-else-if="mode === 'dark'" class="logo" src="~/static/images/exef_logo_dark.svg/" style="width:700px" alt="exef.dev logo"/>
        <div class="flex items-center"> 
            <p> someplace special</p> 
            </div>
        <div class="inset-2 flex items-center justify-bottom">
            <div class="grid grid-cols-3 gap-10">
                <div class="inline-block font-bold px-4 py-2 m-2"> ->  <strong class="text-light-logo dark:text-dark-blue">about[ <nuxt-link to="/about" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover ">+</nuxt-link> ]</strong></div>
                <div class="inline-block font-bold px-4 py-2 m-2"> -> <strong class="text-light-logo dark:text-dark-blue">work[ <nuxt-link to="/work" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</nuxt-link> ]</strong></div>
                <div class="inline-block font-bold px-4 py-2 m-2"> -> <strong class="text-light-logo dark:text-dark-blue">fun[ <nuxt-link to="/fun" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</nuxt-link> ]</strong></div> 
                <div class="inline-block font-bold px-4 py-2 m-2"> -> <strong class="text-light-logo dark:text-dark-blue">github[ <a href="https://github.com/Xavulu" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</a> ]</strong></div> 
                <div class="inline-block font-bold px-4 py-2 m-2"> -> <strong class="text-light-logo dark:text-dark-blue">last.fm[ <a href="https://www.last.fm/user/natu2k" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</a> ]</strong></div>
                <div class="inline-block font-bold px-4 py-2 m-2"> -> <strong class="text-light-logo dark:text-dark-blue">.....[ <nuxt-link to="/fun/terminus" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">?</nuxt-link> ]</strong></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            mode() {
                return this.$colorMode.preference;
            }
    }
}
</script>

<style lang="scss" scoped>

</style>