<script>
export default {
    data() {
        return {
            current: 0,
            slides:[
            {
                image: '../../public/course-portal/images/corousel1.jpg',
                title: 'AWAKEN YOUR GIFTS NOW',
                secondtitle:'01 INSPIRING CURRICULUM',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae ut quisquam ex provident unde quam veritatis excepturi, quaerat tenetur!',
            }, {
                image: '../../public/course-portal/images/corousel2.jpg',
                title: 'OPEN UP A BRIGHT SKY',
                secondtitle:'02 LIFE CONSULTING',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae ut quisquam ex provident unde quam veritatis excepturi, quaerat tenetur!',
            },{
                image: '../../public/course-portal/images/corousel3.jpg',
                title: 'WRITE YOUR OWN LIFE BOOK',
                secondtitle:'03 SKILL ADVANCEMENT',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestiae ut quisquam ex provident unde quam veritatis excepturi, quaerat tenetur!',
            },
        ],
        timeline:[
            {
                sectiontimeline:'BROADENING',
                imgtimeline:'../../public/course-portal/images/toppages1.jpg',
                titletimeline:'#1 Career advancement and hobbies',
                texttimeline:'Studying online gives you more flexibility. You can work and fit your work schedule around your coursework more easily; even more so if you are taking an asynchronous class: an online class where you can study and interact with your instructor and fellow classmates at your own pace.',
            },
            {
                sectiontimeline:'SCHEDULING',
                imgtimeline:'../../public/course-portal/images/toppages2.jpg',
                titletimeline:'#2 Flexible schedule & environment',
                texttimeline:'Taking an online course also means that you don’t have to commute to class, which means less time spent on the bus and more study time sitting on your couch, the sound of a crackling fireplace in the background. You no longer have to worry about missing an important class!',
            },
            {
                sectiontimeline:'SELF-DISCIPLINE',
                imgtimeline:'../../public/course-portal/images/toppages3.jpg',
                titletimeline:'#3 Self-discipline & responsibility',
                texttimeline:'Who says that having to be more self-disciplined is a disadvantage? It is true that studying online requires more time-management skills, because you will spend a lot of time on your own without someone physically close to keep you focused on deadlines. ',
            },

            {
                sectiontimeline:'INVESTMENT',
                imgtimeline:'../../public/course-portal/images/toppages4.jpg',
                titletimeline:'#2 Flexible schedule & environment',
                texttimeline:'Studying online means that you pay the tuition fee, possibly book supplies, an online application fee, and few other items. You don’t, however, incur the costs of housing (which can range up to $12,000 per year) and transportation, which translates to lower debts and more savings.',
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
    },
    mounted(){
        setInterval(this.leftSlide, 4000);
    }

}
</script>

<template>
    <main>
        
        <!-- INIZIO CAROSELLO -->
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
        <!-- FINE CAROSELLO-->
        <!-- START PAGE -->
        <div class="container">
            <div class="text-center">
                <h4>FOUR MAJOR STEPS TO SUCCESS</h4>
                <h2>Best chances for expanding your success to the max</h2>
            </div>
            <div v-for="(elem,index) in timeline" class="timelinecontainer">
                <div class="top-container-text">
                    <h3> {{elem.sectiontimeline}} </h3>
                    <div class="container-img">
                        <img :src="elem.imgtimeline" alt="">
                    </div>
                </div>
                <div class="time_line"></div>
                <div class="container-text">
                    <h4>{{elem.titletimeline}}</h4>
                    <p>{{elem.texttimeline}}</p>
                </div>
            </div>
            <div class="text-center p-4 mb-4">
                <h4>GET YOURSELF A MAXCOACH ID?</h4>
                <h2>Take your interest and register an online class today to enjoy life fully</h2>
                <button class="button"><strong>Get started for free</strong></button>
            </div>
            <div class="sectioncards">

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
// STILE CAROSELLO
.visibility{
    display: none;
}
.slider-wrapper .item{
    height: 850px;
    // border: 2px solid blue;
    position: relative;
    margin-bottom: 40px;
}
.item img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: center;
    image-rendering:optimizeQuality;
    filter: blur(2px);
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
// FINE STILE CAROSELLO

// INIZIO STILE PAGINA
.timelinecontainer{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 20px;
    position: relative;
    flex-direction: row-reverse;
}

.timelinecontainer:nth-child(2n){
    flex-direction: row;
    
}

   
.container-text, .top-container-text{
    width: 50%;
    // border: 2px solid blue;
    padding: 30px;
}   

.container-text{
    margin-top: 70px;
    line-height: 30px
}

.top-container-text h3{
    margin-bottom: 40px;
    text-align: right;
    color:#20AD96 ;
    margin-right: 40px;
}
.time-line{
    position: absolute;
    left: 50%;
    margin-left: -1px;
    height: 100%;
    border-left: 2px solid #e2e2e8;
}

.button {
  background-color: #20AD96;
  border: none;
  color: white;
  padding: 16px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
}

.button:hover {
  background-color: #3F3A64;
  color: white;
}
</style>
