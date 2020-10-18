<template>
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg block">
            <div  class="absolute pointer-events-none flex items-center justify-center w-screen h-screen overflow-y-auto pb-10 pt-5">
                <div id="fun" class="rounded pointer-events-auto border-dotted border-dark-dhover bg-light-lavender dark:bg-black"> 
                    <div class="grid grid-cols-1"> 
                       <img id="xavier" alt="a gif of me" style="width:250px" src="~static/images/me.gif"/>
                        <div>
                            <span class="text-xl"> Xavier Fernandez</span>
                            <span class="text-xxs block">UUID: 89c0906b-8116-4279-acb7-e084af44006c <span class="text-red-400 dark:text-green-300"> ⬢ v23.00.1 </span></span>
                            <span id="pt" class="text-sm block text-pink-800"> present day... present time... </span> 
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            <span id="lang" class="block md:pb-2 lg:pb-2 xl:pb-2">[<span class="text-indigo-800 dark:text-red-800">About</span>]: 
                                <span class="text-xs"> aspiring software engineer with an
                                    <p>interest in backend work 
                                        and systems programming</p>
                                </span>
                            </span> 
                            <span id="lang" class="block md:pb-2 lg:pb-2 xl:pb-2">[<span class="text-indigo-800 dark:text-red-800">Languages</span>]:<span class="text-xs">learning Elixir and Rust...</span>
                                <div class="grid grid-cols-2 text-sm "> 
                                    <ul class="dashed"> 
                                        <li>Go</li>
                                        <li>Python</li>
                                    </ul>
                                    <ul class="dashed"> 
                                        <li>Javascript</li> 
                                        <li>C++</li>  
                                    </ul>
                                </div>
                            </span> 
                            <span id="lang" class="block  md:pb-2 lg:pb-2 xl:pb-2">[<span class="text-indigo-800 dark:text-red-800">Frameworks</span>]:<span class="text-xs">learning React...</span> 
                                <div class="grid grid-cols-2 text-sm"> 
                                    <ul class="dashed"> 
                                        <li>VueJs/NuxtJs</li>
                                    </ul>
                                </div>
                            </span> 
                            <span id="lang" class="block  md:pb-2 lg:pb-2 xl:pb-2">[<span class="text-indigo-800 dark:text-red-800">Tools</span>]:<span class="text-xs">learning faunaDb, maybe mongo...</span> 
                                <div class="grid grid-cols-3 text-sm"> 
                                    <ul class="dashed"> 
                                        <li>postgresql</li>
                                        <li>mysql</li>
                                    </ul>
                                    <ul class="dashed"> 
                                        <li>sqlite</li> 
                                        <li>docker</li>  
                                    </ul> 
                                    <ul class="dashed"> 
                                        <li>docker-compose</li> 
                                         <li>git</li>   
                                    </ul>
                                </div>
                            </span> 
                            <span id="lang" class="block pb-2 md:pb-10 lg:pb-10 xl:pb-10">[<span class="text-indigo-800 dark:text-red-800">Contact</span>]: <span class="text-sm text-red-500 dark:text-green-300">please dont spam me ok ?</span>
                                <div class="grid grid-cols-1 text-sm"> 
                                    <ul class="dashed"> 
                                        <li>xavier.fernandez92@myhunter.cuny.edu</li>
                                        <li>xf@exef.dev</li> 
                                        <li>dream palette#7777 (discord)</li>
                                    </ul>
                                </div>
                            </span>
                            </div>
                        </div>  
                        <span class="text-pink-700 dark:text-light-lavender pt-2 md:pt-10 lg:pt-10 xl:pt-10 text-xxs">©Xavier Fernandez 2020<span class="hidden md:inline-block lg:inline-block xl:inline-block">,</span><span class="inline-block md:hidden lg:hidden xl:hidden"> ↓ </span><span class="block md:inline-block lg:inline-block xl:inline-block">fonts[<span class="text-ferrite-light text-black dark:text-white hover:bg-light-hover dark-hover:bg-dark-dhover"><a href="https://github.com/froyotam/ferrite-core">FerriteCore(<span class="text-julia-regular text-light-red text-base">♡</span>)</a></span><span class="text-julia-light text-black dark:text-white hover:bg-light-hover dark-hover:bg-dark-dhover" ><a href="https://juliamono.netlify.app/">, JuliaMono</a></span>]</span></span>
                    </div>
             </div>
            </div>
    </div> 
</div>
</template>

<script>
    export default {
        layout(context) {
            return 'aboutme'
        },
    }
</script>

<style lang="scss" scoped>

</style>