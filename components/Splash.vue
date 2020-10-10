<template>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img v-if="mode === 'light'" class="logo" src="~/static/images/exef_logo_light.svg/" style="width:700px" alt="exef.dev logo"/> 
        <img v-else-if="mode === 'dark'" class="logo" src="~/static/images/exef_logo_dark.svg/" style="width:700px" alt="exef.dev logo"/>
        <div class="flex items-center"> 
            <span class="text-black dark:text-white">[</span>
            <span class="typer" id="main" data-words=" xf.exef.dev , github.com/Xavulu/some-place-special , ssh ???@0.0.0.0.0 ,username: xavulu , email: xf@exef.dev, password: **************, LOGIN SUCCESSFUL " data-delay="100" data-deleteDelay="1000" data-colors="#7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #bbadd2"></span>
            <script async src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"></script> 
            <span class="text-black dark:text-white">]</span> 
        </div> 
        <div class="flex items-center"> 
            <span>[<span class="text-dark-dhover">40.730610</span>]</span> <span>[<span class="text-dark-dhover">-73.935242</span>]</span>
        </div>
        <div class="inset-2 flex items-center justify-bottom">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
                <div class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg ">xf::<span class="text-light-logo dark:text-dark-blue">about[ <nuxt-link to="/about" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover ">+</nuxt-link> ]</span></div>
                <div class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg md:rounded-none lg:rounded-none xl:rounded-none">xf::<span class="text-light-logo dark:text-dark-blue">work[ <nuxt-link to="/work" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</nuxt-link> ]</span></div>
                <div class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l md:rounded-r-lg lg:rounded-r-lg xl:rounded-r-lg">xf::<span class="text-light-logo dark:text-dark-blue">fun[ <nuxt-link to="/fun" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</nuxt-link> ]</span></div> 
                <div class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r md:rounded-l-lg lg:rounded-l-lg xl:rounded-l-lg">xf::<span class="text-light-logo dark:text-dark-blue">github[ <a href="https://github.com/Xavulu" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</a> ]</span></div> 
                <div class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg md:rounded-none lg:rounded-none xl:rounded-none">xf::<span class="text-light-logo dark:text-dark-blue">last.fm[ <a href="https://www.last.fm/user/natu2k" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">+</a> ]</span></div>
                <div class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg">xf::<span class="text-light-logo dark:text-dark-blue">null[ <nuxt-link to="/fun/terminus" class="text-light-red dark:text-dark-logo hover:bg-light-hover dark-hover:bg-dark-dhover">????</nuxt-link> ]</span></div>
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