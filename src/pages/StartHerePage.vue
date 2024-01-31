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
        ],
        cardsteam:[
            {
                imgteam:'../../public/course-portal/images/bottompages1.jpg',
                nameteam:'Lonnie Marks',
                profession:'Tutor',
            },
            {
                imgteam:'../../public/course-portal/images/bottompages2.jpg',
                nameteam:'Britney Salker',
                profession:'Educator',
            },
            {
                imgteam:'../../public/course-portal/images/bottompages3.jpg',
                nameteam:'Bronnies Wallz',
                profession:'Alumnis',
            },
            {
                imgteam:'../../public/course-portal/images/bottompages4.jpg',
                nameteam:'Mia Paulo',
                profession:'Writer',
            },
            {
                imgteam:'../../public/course-portal/images/bottompages5.jpg',
                nameteam:'Lina Esthers',
                profession:'Author',
            },
            {
                imgteam:'../../public/course-portal/images/bottompages6.jpg',
                nameteam:'Lorean McPhils',
                profession:'Designer',
            },
            {
                imgteam:'../../public/course-portal/images/bottompages7.jpg',
                nameteam:'Anna Muray',
                profession:'Writer',
            },
        ],
        // faq:[
        //     {
        //         question:'How to register online?',
        //         answer:'Enrolling in an online class is easy. At MaxCoach, we serve several categories of online learners. Select the student category that you identify with to get started.',
        //     },
        //     {
        //         question:'How do I contact support?',
        //         answer:'You can contact our help center or any contact method (phone call, email or appear at our office) to get help. ',
        //     },
        //     {
        //         question:'How do I customize my account?',
        //         answer:'In order to customize your account’s information, just log in with the provided passcode and change the info.',
        //     },
        //     {
        //         question:'How to cancel my membership?',
        //         answer:'You just need to submit a membership termination request, we’ll proceed within 24 hours.',
        //     },
        //     {
        //         question:'How do you process my information?',
        //         answer:'Your data will be kept private and secure on our database. No illegal use without prior notice.',
        //     },
        //     {
        //         question:'How can I get a discount?',
        //         answer:'Learners can get a discount by coupon or voucher. If you have one, fill in the code box before making any payment.',
        //     },
        // ]
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
        <!-- START TIMELINE -->
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
                <button class="button mb-4 mt-4"><strong>Get started for free</strong></button>
            </div>
        </div>
        <!-- FINE TIMELINE -->
        <!-- INIZIO SEZIONE FOTO TEAM -->
            <div class="sectioncards">
                <div v-for="(card,index) in cardsteam" class="card">
                    <img :src="card.imgteam" alt="" />
                    <div class="info_card">
                        <h3>{{card.nameteam}}</h3>
                        <h6>{{card.profession}}</h6>
                    </div>
                </div>
            </div>
        <div class="container text-center mt-5 mb-5">
            <h5>SUCCEED WITH <strong>MAXCOACH</strong></h5>
            <h2>Frequently asked questions</h2>
            <div class="Faq">
                <div class="accordation">
                    <div>
                        <h2>
                            <button>

                            </button>
                        </h2>
                        <div>
                            
                        </div>
                    </div>

                </div>
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

// INIZIO STILE PAGINA TIMELINE
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
// FINE SEZIONE TIMELINE
// INIZIO SEZIONE FOTO TEAM
.sectioncards{
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    overflow: hidden;
    // border: 2px solid red;
}

.card{
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info_card {
    position: absolute;
    padding: 60px; 
    text-align: center;
    background-color: rgba(0, 0, 0, 0.101);
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    font-size: 1.4em;
    display: none;
    color: white;
}

.card:hover .info_card{
    display: block;
}
// FINE FOTO template
// INIZIO FAQ
// .Faq{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 30px;
// }


</style>
