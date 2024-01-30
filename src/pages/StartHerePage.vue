<script>
export default {
    data() {
        return {
            current: 0,
            slides:[
            {
                image: '../../public/course-portal/images/course-02-480x298.jpg',
                title: 'AWAKEN YOUR GIFTS NOW',
                secondtitle:'01 INSPIRING CURRICULUM',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae ut quisquam ex provident unde quam veritatis excepturi, quaerat tenetur!',
            }, {
                image: '../../public/course-portal/images/course-featured-image-01-480x298.jpg',
                title: 'OPEN UP A BRIGHT SKY',
                secondtitle:'02 LIFE CONSULTING',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae ut quisquam ex provident unde quam veritatis excepturi, quaerat tenetur!',
            },{
                image: '../../public/course-portal/images/stock-full-hd-03-480x298.jpg',
                title: 'WRITE YOUR OWN LIFE BOOK',
                secondtitle:'03 SKILL ADVANCEMENT',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae ut quisquam ex provident unde quam veritatis excepturi, quaerat tenetur!',
            },
        ]
        }
    },
    methods: {
        leftSlide: function() {
          this.current++;
          if (this.current >= this.slides.length)
            this.current = 0;
            
        },
        rightSlide: function() {
          this.current--;
          if (this.current < 0)
            this.current = this.slides.length - 1;
        },
    }
}
</script>

<template>
    <main>
        <div class="mycontainer">
            <div class="slider-wrapper">
                <div class="item" v-for="(slide,index) in slides" :class="{visibility:current!=index}"> 
                    <img :src="slide.image" alt="" />
                    <div class="text">
                        <div>
                            <h2>{{slide.title}}</h2>
                        </div>
                        <div>
                            <h4>{{slide.secondtitle}}</h4>
                            <p>
                                {{slide.text}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="thumbs">
                    <div class="right arrow">
                        <i class="fa-solid fa-caret-right" @click="rightSlide"></i>    
                    </div>
                    <div class="left arrow">
                        <i class="fa-solid fa-caret-left" @click="leftSlide"> </i>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.visibility{
    display: none;
}
.mycontainer .slider-wrapper{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    height: 500px;
}
.slider-wrapper .item{
    height: 850px;
    // border: 2px solid red;
    position: relative;
}
.item img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position:top center;
    image-rendering:optimizeQuality;
    filter: blur(5px);
}

.text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.text h2{
    font-size: 4em;
    line-height:70px;
}

.text h4{
    font-size: 2em;
    line-height:70px;
}

.item .text {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); 
    text-align: left; 
    padding: 10px;
    position: absolute;
    padding: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.599);
    color: white;
}

i{
    color: white;
    font-size: 2em;
    text-shadow: 2px 2px 8px #454444;
}

.arrow {
    position: absolute;
    cursor: pointer;
    text-align: center;
}
.right{
    opacity: 1;
    transform: translate(-100px, -35px);
    top: 50%;
    left: 100%;
}
.left{
    opacity: 1;
    transform: translate(30px, -35px);
    top: 50%;
    left: 0px;
}
   
   
   
   
</style>
