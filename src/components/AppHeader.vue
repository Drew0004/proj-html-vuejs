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
                                    badgehot:'HOT',
                                },
                                {
                                    linkname: 'Course Portal',
                                    link: 'home',
                                },
                                {
                                    linkname: 'Distant Learning',
                                    link: 'home',
                                    badgehot:'HOT',
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
                            ]
                        },
                        {
                            items: [
                                {
                                    linkname: 'Kitchen Coach',
                                    link: 'home',
                                },
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
                                    badgenew:'NEW',
                                },
                                {
                                    linkname: 'Mental Therapy',
                                    link: 'home',
                                    badgenew:'NEW',

                                },
                            ],
                        },
                        {
                            items: [
                                {
                                    linkname: '',
                                    link: '',
                                    img: '../../public/course-portal/images/homepages-mega-menu-image-alt.jpg',
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
                            items: [
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
                                linkname: 'Single Layout >',
                                link: '',
                                dropdownhover:[
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
                            items: [
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
                            items: [
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
                            items: [
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
                            <a href="http://">
                                {{ elem.name }}
                            </a>
                            <span class="p-2 iconangle">
                                <i class="fa-solid fa-angle-down"></i>
                            </span>
                            <div class="dropdown-content" :class="{'w-1000': elem.dropdown.length>1}">
                                <div class="dropdown-column" v-for="(column,col_index) in elem.dropdown" :key="col_index">
                                    <ul>
                                        <li v-for="(item,item_index) in column.items" :key='item_index' class="listitem" >
                                            <RouterLink :to="{name: item.link }">
                                                {{ item.linkname }}
                                            </RouterLink> 
                                            <span v-if="item.badgehot" class="badge badgehot">
                                                <strong>
                                                    {{ item.badgehot }}
                                                </strong>
                                            </span>
                                            <span v-if="item.badgenew" class="badge badgenew">
                                                <strong>
                                                    {{ item.badgenew }}
                                                </strong>
                                            </span>
                                            <div>
                                                <img v-if="item.img" :src="item.img" alt="">
                                            </div>
                                            <div v-if="item.dropdownhover" class="dropdownhover_content">
                                                <ul>
                                                    <li v-for="(drop,index) in item.dropdownhover">
                                                        <RouterLink :to="{name: drop.link }">
                                                            {{ drop.linkname }}
                                                        </RouterLink> 
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="iconaccount">
                        <i class="fa-regular fa-circle-user"></i> 
                    </div>
                    <div>
                        <input v-model="search" @keyup.enter="search" type="text" placeholder="Search..." >
                        <span class="iconsearch">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

// HEADER REGOLE BASI

.bg_header{
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
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
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

ul{
    list-style: none;
    padding: 10px;

    li{
        margin: 9px;
    }

    li a{
       color: grey;
       padding: 20px;
       font-size: 15px;
    //    border: 1px solid red;
    }
}

.iconangle{
        font-size: 10px;
}

// FINE REGOLE BASE
// REGOLE PER MENU A DISCESA

.singlemenu{
    display: inline-block;
    padding: 20px;
    font-size: 1.2em;

    &:after{
        content: ' ';
        height: 2px;
        width: 0;
        background-color: #20ad96;
        display: block;
        transition: all .3s ease-in-out;

    }

    &:hover{
        &:after{
            width: 100%;
        }
    }

}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 100;
  margin-top: 20px;
  border-bottom: 5px solid #20ad96 ;
}

.singlemenu:hover .dropdown-content {
  display: flex;
  justify-content: space-between;
}

.dropdown-column{
    display: flex;
    // border: 1px solid red;
}

.w-1000{
    width: 1200px;
    right: -30%;
}

.dropdownhover_content{
    position: absolute;
    left: 210px;
    right: 10%;
    background-color: #f9f9f9;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    display: none;
    border-bottom: 5px solid #20ad96 ;
    text-align: left;
}

.listitem{
    position: relative;

    &:hover{
        .dropdownhover_content{
            display: block;
        }
    }
}
.badge{
   color: white;
   padding: 3px 4px;
   font-size: 12px;
}

.badgehot{
   background-color: transparent;
   background-image: linear-gradient(45deg, #FE378C 0%, #FE5B34 100%);
} 

.badgenew{
   background-color: #20ad96;
} 

// FINE REGOLE MENU A DISCESA
// INIZIO INPUT SEARCH

input[type=text] {
  border-radius: 4px;
  background-color: #F5F5F5;
  border: none;
  padding: 12px;
  color: black;
  position: relative;
}

input[type=text]:hover {
    border: 1px solid #20ad96;
}


.iconsearch{
    background-color: #F5F5F5;
    padding: 12px;
    color: #20ad96 ;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid #F5F5F5;
}

.iconaccount{
    font-size: 1.2em;
}

.iconaccount:hover{
    color: #20ad96 ;   
}



</style>
