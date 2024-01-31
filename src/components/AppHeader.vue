<script>
import { bottom } from '@popperjs/core';


export default {
    data() {
        return {
            navbar: [
                {
                    name: 'Home',
                    link: 'home',
                    dropdown: [
                        {
                            items: [
                            {
                            linkname: 'MaxCoach Education',
                            link: 'home',
                        },
                        {
                            linkname: 'Course Portal',
                            link: 'home',
                        },
                        {
                            linkname: 'Distant Learning',
                            link: 'home',
                        },
                        {
                            linkname: 'Multimedia Pedagogy',
                            link: 'home',
                        },
                        {
                            linkname: 'Modern Schooling',
                            link: 'home',
                        },
                        {
                            linkname: 'Remote Training',
                            link: 'home',
                        },
                            ]
                        },
                        {
                            items: [
                            {
                                linkname: 'MaxCoach Education',
                                link: 'home',
                            },
                            {
                                linkname: 'Course Portal',
                                link: 'home',
                            },                        
                            {
                                linkname: 'Gym Coaching',
                                link: 'home',
                            },
                            {
                                linkname: 'Business',
                                link: 'home',
                            },
                            {
                                linkname: 'Artist',
                                link: 'home',
                            },
                            {
                                linkname: 'Kitchen Coach',
                                link: 'home',
                            },

                            ]
                        },
                        {
                            items: [
                            {
                            linkname: 'Motivation',
                            link: 'home',
                        },
                        {
                            linkname: 'Dancing',
                            link: 'home',
                        },
                        {
                            linkname: 'Guitar',
                            link: 'home',
                        },
                        {
                            linkname: 'Photography',
                            link: 'home',
                        },
                        {
                            linkname: 'Personal Finance',
                            link: 'home',
                        },
                        {
                            linkname: 'Sales Coaching',
                            link: 'home',
                        },
                        {
                            linkname: 'Mental Therapy',
                            link: 'home',
                        },
                            ]
                        }
                    ],
                    },
                    {
                        name: 'Pages',
                        link: '#',
                        dropdown: [
                            {
                                items: [
                                {
                                    linkname: 'Start Here',
                                    link: 'StartHerePage',
                                },
                                {
                                    linkname: 'Success Story',
                                    link: '',
                                },
                                {
                                    linkname: 'About me',
                                    link: '',
                                },
                                {
                                    linkname: 'About us 01',
                                    link: '',
                                },
                                {
                                    linkname: 'About us 02',
                                    link: '',
                                },
                                {
                                    linkname: 'About us 03',
                                    link: '',
                                },
                                {
                                    linkname: 'Contact me',
                                    link: '',
                                },
                                {
                                    linkname: 'Contact us',
                                    link: '',
                                },
                                {
                                    linkname: 'Purchase Guide',
                                    link: '',
                                },
                                {
                                    linkname: 'Privacy Policy',
                                    link: '',
                                },
                                {
                                    linkname: 'Terms of Service',
                                    link: '',
                                },
                                ]
                            },
                        ]
                        },
                        {
                            name: 'Course',
                            link: '#',
                            dropdown: [
                                {
                                    items:[
                                    {
                                        linkname: 'Courses Grid 01',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Courses Grid 02',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Courses Grid 03',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Membership Levels',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Become a Teacher',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Profile',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Checkout',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Single Layout',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Free Course',
                                        link: 'CustomerPage',
                                    },
                                    {
                                        linkname: 'Sticky Features Bar',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Standard Sidebar',
                                        link: '',
                                    },
                                    {
                                        linkname: 'No Sidebar',
                                        link: '',
                                    },
                                    ]
                                }
                            ]
    
                        },
                        {
                            name: 'Features',
                            link: '#',
                            dropdown: [
                                {
                                    items:[
                                    {
                                        linkname: 'Events',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Zoom Meetings',
                                        link: '',
                                    },
                                    ]
                                }
                            ]
    
                        },
                        {
                            name: 'Blog',
                            link: '#',
                            dropdown: [
                                {
                                    items:[
                                                {
                                        linkname: 'Blog Grid',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Blog Masonry',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Blog Classic',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Blog List',
                                        link: '',
                                    },
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'Shop',
                            link: '#',
                            dropdown: [
                                {
                                    items:[
                                    {
                                        linkname: 'Shop Left Sidebar',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Shop Right Sidebar',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Cart',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Wishlist',
                                        link: '',
                                    },
                                    {
                                        linkname: 'Single Product',
                                        link: '',
                                    },
                                    ]
                                }
                            ]
    
                        },
            ],
        };
    },
    methods: {
    // search(){
    // }
    },
    components: { bottom }
}
</script>

<template>
    <header>
        <div class="bg_header">
            <div class="container mycontainer">
                <div class="nav_container">
                    <div class="container_img_header">
                        <img src="../../public/course-portal/images/dark-logo.png" alt="">
                    </div>
                    <div class="dropdown">
                        <div v-for="(elem,index) in navbar" :key='index' class="singlemenu">
                            <a href="http://">{{ elem.name }}</a>
                            <span class="p-2"><i class="fa-solid fa-angle-down"></i></span>
                            <div class="dropdown-content">
                                <div class="dropdown-column" v-for="(column,col_index) in elem.dropdown" :key="col_index">
                                    <ul>
                                        <li v-for="(item,item_index) in column.items" :key='item_index'>
                                            <RouterLink :to="{name: item.link }">
                                            {{ item.linkname }}
                                            </RouterLink> 
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- <div class="dropdown-content" id="seconddropdown">
                            <div v-for="(elem,index) in seconddropdown" :key='index'>
                                <ul>
                                    <li>
                                        <RouterLink :to="{name: elem.link }">
                                        {{ elem.linkname }}
                                        </RouterLink> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown-content" id="thirddropdown">
                            <div v-for="(elem,index) in thirddropdown" :key='index'>
                                <ul>
                                    <li>
                                        <RouterLink :to="{name: elem.link }">
                                         {{ elem.linkname }}
                                        </RouterLink> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown-content" id="fifthdropdown">
                            <div v-for="(elem,index) in fifthdropdown" :key='index'>
                                <ul>
                                    <li>
                                        <RouterLink :to="{name: elem.link }">
                                            {{ elem.linkname }}
                                        </RouterLink> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown-content" id="sixdropdown">
                            <div v-for="(elem,index) in sixdropdown" :key='index'>
                                <ul>
                                    <li>
                                        <RouterLink :to="{name: elem.link }">
                                            {{ elem.linkname }}
                                        </RouterLink> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
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
                        <span class="iconsearch"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input v-model="search" @keyup.enter="search" type="text" placeholder="Search..." >
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

a{
    text-decoration: none;
    color: black;
}

ul{
    list-style: none;
    padding: 10px;

    li{
        margin: 9px;
    }

    li a{
       color: grey;
    }

}

i{
    font-size: 1.2em;
}

input[type=text] {
  border-radius: 4px;
  background-color: #F5F5F5;
  border: none;
  padding: 12px;
  color: black;
}

.iconsearch{
    background-color: #F5F5F5;
    padding: 12px;
    color: #20ad96 ;
}
.singlemenu{
    display: inline-block;
    padding: 20px;
    font-size: 1.2em;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 100;
}

.singlemenu:hover .dropdown-content {
  display: block;
}


</style>
