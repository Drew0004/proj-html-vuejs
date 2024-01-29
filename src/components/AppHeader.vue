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
                    {
                    link:'Multimedia Pedagogy',
                    },
                    {
                    link:'Modern Schooling',
                    },
                    {
                    link:'Remote Training',
                    },
                    {
                    link:'Health Coaching',
                    },
                    {
                    link:'Gym Coaching',
                    },
                    {
                    link:'Business',
                    },
                    {
                    link:'Artist',
                    },
                    {
                    link:'Kitchen Coach',
                    },
                    {
                    link:'Motivation',
                    },
                    {
                    link:'Dancing',
                    },
                    {
                    link:'Guitar',
                    },
                    {
                    link:'Yoga',
                    },
                    {
                    link:'Photography',
                    },
                    {
                    link:'Personal Finance',
                    },
                    {
                    link:'Sales Coaching',
                    },
                    {
                    link:'Mental Therapy',
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
                    link:'Success Story',
                    },
                    {
                    link:'About me',
                    },
                    {
                    link:'About us 01',
                    },
                    {
                    link:'About us 02',
                    },
                    {
                    link:'About us 03',
                    },
                    {
                    link:'Contact me',
                    },
                    {
                    link:'Contact us',
                    },
                    {
                    link:'Purchase Guide',
                    },
                    {
                    link:'Privacy Policy',
                    },
                    {
                    link:'Terms of Service',
                    },
                ]
            },
            {
                name:"Courses",
                list:[
                {
                    link:'Courses Grid 01',
                    },
                    {
                    link:'Courses Grid 02',
                    },
                    {
                    link:'Courses Grid 03',
                    },
                    {
                    link:'Membership Levels',
                    },
                    {
                    link:'Become a Teacher',
                    },
                    {
                    link:'Profile',
                    },
                    {
                    link:'Checkout',
                    },
                    {
                    link:'Single Layout',
                    },
                ]
            },
            {
                name:"Features",
                list:[
                    {
                    link:'Events',
                    },
                    {
                    link:'Zoom Meetings',
                    },
                ]
            },
            {
                name:"Blog",
                list:[
                    {
                    link:'Blog Grid',
                    },
                    {
                    link:'Blog Masonry',
                    },
                    {
                    link:'Blog Classic',
                    },
                    {
                    link:'Blog List',
                    },
                ]
            },
            {
                name:"Shop",
                list:[
                    {
                    link:'Shop Left Sidebar',
                    },
                    {
                    link:'Shop Right Sidebar',
                    },
                    {
                    link:'Cart',
                    },
                    {
                    link:'Wishlist',
                    },
                    {
                    link:'Single Product',
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
                    <div v-for="(elem,index) in navbar" :key='index'>
                        <nav>
                            <ul class="dropdown">
                                <li class="dropbtn">
                                    {{ elem.name }}
                                </li>
                                <span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                                <div class="dropdown-content">
                                    <ul>
                                        <li v-for="(elem2,index2) in elem.list" :key='index2'>
                                            <a href="#"> {{ elem2.link }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
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
