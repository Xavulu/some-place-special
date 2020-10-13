<template>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img v-if="mode === 'light'" class="logo" src="~/static/images/exef_logo_light.svg/" style="width:700px" alt="exef.dev logo"/> 
        <img v-else-if="mode === 'dark'" class="logo" src="~/static/images/exef_logo_dark.svg/" style="width:700px" alt="exef.dev logo"/>
        <div class="flex items-center mb-6 md:mb-1 lg:mb-1 xl:mb-1"> 
            <span class="text-black dark:text-white text-xl"></span>
            <div id="op0" class="grid grid-cols-1 bg-dark-teal text-white  rounded">
                <div><span class="font-ferrite-light">[WELCOME TO HTTPS://XF.EXEF.DEV]</span></div>
            </div>
            <span class="text-black dark:text-white text-xl"></span> 
        </div> 
        <div class="flex items-center md:hidden lg:hidden xl:hidden">
                <div class="grid grid-cols-1 "> 
                    
                </div>
            </div>
        <div class="mb-20 inset-2 flex items-center justify-bottom">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
                <div id="op1" aria-label="link to about page" class="mb-2 bg-light dark:bg-dark border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/about" ><span class="text-pink-700 dark:text-light-lavender">@</span>xf<span class="text-ferrite-display hidden md:inline-block lg:inline-block xl:inline-block">::</span><span class="md:hidden lg:hidden xl:hidden text-julia-regular text-base text-black dark:text-white"></span><span class="block md:inline-block lg:inline-block xl:inline-block text-light-logo dark:text-dark-blue">about[<span class="text-light-red dark:text-dark-logo ">+</span>]</span></nuxt-link></div>

                <div id="op2" aria-label="link to portfolio page" class="mb-2 bg-light dark:bg-dark border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg md:rounded-none lg:rounded-none xl:rounded-none hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/work"><span class="text-pink-700 dark:text-light-lavender">@</span>xf<span class="text-ferrite-display hidden md:inline-block lg:inline-block xl:inline-block">::</span><span class="md:hidden lg:hidden xl:hidden text-julia-regular text-base text-black dark:text-white"></span><span class="block md:inline-block lg:inline-block xl:inline-block text-light-logo dark:text-dark-blue">work[<span class="text-light-red dark:text-dark-logo">+</span>]</span></nuxt-link></div>

                <div id="op3" aria-label="link to assorted small programs page" class="mb-2 bg-light dark:bg-dark border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg md:rounded-r-lg lg:rounded-r-lg xl:rounded-r-lg md:rounded-l-none lg:rounded-l-none xl:rounded-l-none hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/fun"><span class="text-pink-700 dark:text-light-lavender">@</span>xf<span class="text-ferrite-display hidden md:inline-block lg:inline-block xl:inline-block">::</span><span class="md:hidden lg:hidden xl:hidden text-julia-regular text-base text-black dark:text-white"></span><span class="block md:inline-block lg:inline-block xl:inline-block text-light-logo dark:text-dark-blue">fun[<span class="text-light-red dark:text-dark-logo">+</span>]</span></nuxt-link></div> 

                <div id="op4" aria-label="link to github" class="mb-2 bg-light dark:bg-dark border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg md:rounded-l-lg lg:rounded-l-lg xl:rounded-l-lg md:rounded-r-none lg:rounded-r-none xl:rounded-r-none hover:bg-light-hover dark-hover:bg-dark-dhover"><a href="https://github.com/Xavulu"><span class="text-pink-700 dark:text-light-lavender">@</span>xf<span class="text-ferrite-display hidden md:inline-block lg:inline-block xl:inline-block">::</span><span class="md:hidden lg:hidden xl:hidden text-julia-regular text-base text-black dark:text-white"></span><span class="block md:inline-block lg:inline-block xl:inline-block text-light-logo dark:text-dark-blue">github[<span class="text-light-red dark:text-dark-logo">+</span>]</span></a></div> 

                <div id="op5" aria-label="link to last.fm account" class="mb-2 bg-light dark:bg-dark border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-l-lg md:rounded-none lg:rounded-none xl:rounded-none hover:bg-light-hover dark-hover:bg-dark-dhover"><a href="https://www.last.fm/user/natu2k"><span class="text-pink-700 dark:text-light-lavender">@</span>xf<span class="text-ferrite-display hidden md:inline-block lg:inline-block xl:inline-block">::</span><span class="md:hidden lg:hidden xl:hidden text-julia-regular text-base text-black dark:text-white"></span><span class="block md:inline-block lg:inline-block xl:inline-block text-light-logo dark:text-dark-blue">last.fm[<span class="text-light-red dark:text-dark-logo">+</span>]</span></a></div>

                <div id="op6" aria-label="link to glitch art page, epilepsy warning for this one" class="mb-2 bg-light dark:bg-dark border border-dotted border-dark-dhover dark:border-dark-teal inline-block font-bold px-4 py-2 m-2 rounded-r-lg hover:bg-light-hover dark-hover:bg-dark-dhover"><nuxt-link to="/fun/terminus"><span class="text-pink-700 dark:text-light-lavender">@</span>xf<span class="text-ferrite-display hidden md:inline-block lg:inline-block xl:inline-block">::</span><span class="md:hidden lg:hidden xl:hidden text-julia-regular text-base text-black dark:text-white "></span><span class="block md:inline-block lg:inline-block xl:inline-block text-light-logo dark:text-dark-blue">null[<span class="text-light-red dark:text-dark-logo">?</span>]</span></nuxt-link></div>
            </div>
        </div> 
        <div class="flex items-center mb-6 md:mb-1 lg:mb-1 xl:mb-1"> 
            <span class="text-black dark:text-white text-xl"></span>
            <div id="op0" class="grid grid-cols-1 bg-dark-teal text-white  rounded">
                <div><span class="font-ferrite-light">[ENJOY (^ш^)]</span></div>
            </div>
            <span class="text-black dark:text-white text-xl"></span> 
        </div> 
    </div>
</template>

<script> 

    export default {
        computed: {
            mode() {
                return this.$colorMode.preference;
            },
        }, 
        
    }
</script>

<style lang="scss" scoped>
    
</style>