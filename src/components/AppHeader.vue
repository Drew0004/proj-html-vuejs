<script>
export default {
    data() {
        return {
        navbar:[
            {
                name:'Home',
                link:'#',
            },
            {
                name:'Pages',
                link:'#',
            },
            {
                name:'Course',
                link:'#',
            }
        ],
        firstdropdown:[
            {
                linkname:'MaxCoach Education:',
                link:'home',   
            },
            {
                linkname:'Course Portal:',
                link:'home',   
            },
        ],
        seconddropdown:[
            {
                linkname:'Start Here',
                link:'StartHerePage',   
            },
            {
                linkname:'Course Portal:',
                link:'',   
            },
        ]



        };
    },
    methods: {
        // search(){

        // }

    }
}
</script>

<template>
    <header>
        <div class="bg_header">
            <div class="container">
                <div class="nav_container">
                    <div class="container_img_header">
                        <img src="../../public/course-portal/images/dark-logo.png" alt="">
                    </div>
                    <div >
                        <nav>
                            <ul class="dropdown" id="firstdropdown">
                                <li v-for="(elem,index) in navbar" :key='index' class="dropbtn">
                                    {{ elem.name }}
                                    <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </span>
                                </li>
                                <ul class="dropdown-content" id="firstdropdown" >
                                    <li v-for="(elem,index) in firstdropdown" :key='index'>
                                        <RouterLink :to="{name: elem.link }">
                                            {{ elem.linkname }}
                                        </RouterLink> 
                                    </li>
                                </ul>
                                <ul class="dropdown-content" id="seconddropdown" >
                                    <li v-for="(elem,index) in seconddropdown" :key='index'>
                                        <RouterLink :to="{name: elem.link }">
                                            {{ elem.linkname }}
                                        </RouterLink> 
                                    </li>
                                </ul>
                            </ul>
                        </nav>
                    </div>

                        <!-- <nav>
                            <ul>
                                <li> 
                                    <RouterLink :to="{name:'home'}">Home</RouterLink> 
                                </li>
                                <li> 
                                    <RouterLink :to="{name:'StartHerePage'}">Start Here</RouterLink> 
                                </li>
                                <li> 
                                    <RouterLink :to="{name:'CustomerPage'}">Customer</RouterLink> 
                                </li>
                                <li> 
                                    <RouterLink :to="{name:'not-found'}">Errore</RouterLink> 
                                </li>
                                <li>
                                    <i class="fa-regular fa-circle-user"></i>
                                </li>
                                <li>
                                    <input v-model="search" @keyup.enter="search" type="text" >
                                </li>
                            </ul>
                        </nav> -->
                    
                    <div>
                        <i class="fa-regular fa-circle-user"></i> 
                    </div>
                    <div>
                        <input v-model="search" @keyup.enter="search" type="text" >
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.bg_header{
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
}

.nav_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container_img_header{
    height: 40%;
    img{
        height: 30px;
    }
}

ul{
    list-style: none;
    padding: 10px;

    li{
        display: inline-block;
        margin: 9px;
    }
}

input[type=text] {
  border-radius: 4px;
  background-color: #F5F5F5;
  border: none;
  padding: 12px;
  color: black;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content li:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}

 .dropdown:hover .dropbtn {
     color: #20AD96;
     text-decoration : underline;
 }
</style>
