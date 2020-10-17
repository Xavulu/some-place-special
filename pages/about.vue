<template>
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg ">
            <div  class="absolute pointer-events-none flex items-center justify-center w-screen h-screen overflow-y-auto">
                <div id="fun" class="rounded pointer-events-auto border-dotted border-dark-dhover bg-light-lavender dark:bg-black"> 
                    <div class="grid grid-cols-1"> 
                       <img id="xavier" alt="a gif of me" style="width:400px" src="~static/images/me.gif"/>
                        <div>
                            <span class="text-xl"> Xavier Fernandez</span>
                            <span class="text-xxs block">UUID: 89c0906b-8116-4279-acb7-e084af44006c</span>
                            <span id="pt" class="text-sm block text-pink-800"> present day... present time... </span>
                            <span id="lang" class="block">[<span class="text-indigo-800 dark:text-red-800">About</span>]: 
                                <span class="text-xs"> aspiring backend software engineer </span>
                            </span> 
                            <span id="lang" class="block">[<span class="text-indigo-800 dark:text-red-800">Languages</span>]: 
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
                            <span id="lang" class="block">[<span class="text-indigo-800 dark:text-red-800">Frameworks</span>]: 
                                <div class="grid grid-cols-2 text-sm"> 
                                    <ul class="dashed"> 
                                        <li>VueJs</li>
                                        <li>NuxtJs</li>
                                    </ul>
                                    <ul class="dashed"> 
                                        <li>Flask</li> 
                                        <li>Fastapi</li>  
                                    </ul>
                                </div>
                            </span> 
                            <span id="lang" class="block">[<span class="text-indigo-800 dark:text-red-800">Tools</span>]: 
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

                        </div>
                    </div>
             </div>
            </div>
    </div>
</div>
</template>

<script>
    export default {
        layout(context) {
            return 'default'
        },
    }
</script>

<style lang="scss" scoped>

</style>