<script>
export default {
    data() {
        return {
            navbar:[
            {
                name:"Home",
                list:[
                    {
                    link:'MaxCoach Education',
                    },
                    {
                    link:'Course Portal',
                    },
                    {
                    link:'Distant Learning',
                    },
                ]
            }, 
            {
                name:"Pages",
                list:[
                    {
                    link:'Start Here',
                    },
                    {
                    link:'Course Portal',
                    },
                ]
            },
            {
                name:"Courses",
                list:[
                    {
                    link:'Start Here',
                    },
                    {
                    link:'Course Portal',
                    },
                ]
            },
            {
                name:"Blog",
                list:[
                    {
                    link:'Start Here',
                    },
                    {
                    link:'Course Portal',
                    },
                ]
            },
            {
                name:"Shop",
                list:[
                    {
                    link:'Start Here',
                    },
                    {
                    link:'Course Portal',
                    },
                ]
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
                    <div v-for="(elem,index) in navbar">
                        <nav>
                            <ul class="dropdown" id="dropdown1">
                                <li class="dropbtn">{{ elem.name }}</li>
                                <span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                                <div v-for="(elem,index) in elem.list" class="dropdown-content">
                                    <a href="#">{{ elem.link }}</a>
                                </div>
                            </ul>
                            <ul class="dropdown" id="dropdown2">
                                <li class="dropbtn"></li>
                                <div class="dropdown-content">
                                    <a href="#"></a>
                                </div>
                            </ul>
                            <!-- <ul class="dropdown">
                                <li class="dropbtn">Courses</li>
                                <span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                                <div class="dropdown-content">
                                    <a href="#">we</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </ul>
                            <ul class="dropdown">
                                <li class="dropbtn">Features</li>
                                <span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                                <div class="dropdown-content">
                                    <a href="#">we</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </ul>
                            <ul class="dropdown">
                                <li class="dropbtn">Blog</li>
                                <span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                                <div class="dropdown-content">
                                    <a href="#">we</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </ul>
                            <ul class="dropdown">
                                <li class="dropbtn">Shop</li>
                                <span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                                <div class="dropdown-content">
                                    <a href="#">we</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </ul> -->
                        </nav>
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
    li{
        display: inline-block;
        margin: 10px;
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
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown-content a:hover {
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
