<template>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img v-if="mode === 'light'" class="logo" src="~/static/images/exef_logo_light.svg/" style="width:700px" alt="exef.dev logo"/> 
        <img v-else-if="mode === 'dark'" class="logo" src="~/static/images/exef_logo_dark.svg/" style="width:700px" alt="exef.dev logo"/>
        <div class="flex items-center"> 
            <span class="text-black dark:text-white">[</span>
            <span aria-label="self typing object that doesnt work" class="typer" id="main" data-words=" xf.exef.dev , github.com/Xavulu/some-place-special , ssh ???@0.0.0.0.0 ,username: xavulu , email: xf@exef.dev, password: **************, LOGIN SUCCESSFUL " data-delay="100" data-deleteDelay="1000" data-colors="#7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #7c7c7c, #bbadd2"></span>
            <script async src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"></script> 
            <span class="text-black dark:text-white">]</span> 
        </div> 
        <div class="flex items-center"> 
            <span aria-label="longitude and latitude">[<span class="text-dark-dhover">40.730610</span>]</span> <span>[<span class="text-dark-dhover">-73.935242</span>]</span>
        </div>
        <div class="inset-2 flex items-center justify-bottom">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
                <div aria-label="link to about page" class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/about" >xf::<span class="text-light-logo dark:text-dark-blue">about[ <span class="text-light-red dark:text-dark-logo ">+</span> ]</span></nuxt-link></div>

                <div aria-label="link to portfolio page" class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg md:rounded-none lg:rounded-none xl:rounded-none hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/work">xf::<span class="text-light-logo dark:text-dark-blue">work[ <span class="text-light-red dark:text-dark-logo">+</span> ]</span></nuxt-link></div>

                <div aria-label="link to assorted small programs page" class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg md:rounded-r-lg lg:rounded-r-lg xl:rounded-r-lg md:rounded-l-none lg:rounded-l-none xl:rounded-l-none hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/fun">xf::<span class="text-light-logo dark:text-dark-blue">fun[ <span class="text-light-red dark:text-dark-logo">+</span> ]</span></nuxt-link></div> 

                <div aria-label="link to github" class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg md:rounded-l-lg lg:rounded-l-lg xl:rounded-l-lg md:rounded-r-none lg:rounded-r-none xl:rounded-r-none hover:bg-light-hover dark-hover:bg-dark-dhover"><a href="https://github.com/Xavulu">xf::<span class="text-light-logo dark:text-dark-blue">github[ <span class="text-light-red dark:text-dark-logo">+</span> ]</span></a></div> 

                <div aria-label="link to last.fm account" class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg md:rounded-none lg:rounded-none xl:rounded-none hover:bg-light-hover dark-hover:bg-dark-dhover"><a href="https://www.last.fm/user/natu2k">xf::<span class="text-light-logo dark:text-dark-blue">last.fm[ <span class="text-light-red dark:text-dark-logo">+</span> ]</span></a></div>

                <div aria-label="link to glitch art page" class="border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/fun/terminus">xf::<span class="text-light-logo dark:text-dark-blue">null[ <span class="text-light-red dark:text-dark-logo">????</span> ]</span></nuxt-link></div>
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