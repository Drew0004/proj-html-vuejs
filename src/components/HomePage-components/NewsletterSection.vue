<script>
export default {
    data() {
        return {
        };
    },
    methods: {

    }
}
</script>

<template>
    <section class="newsletter-section py-5 position-relative">

        <div class="row justify-content-center">
            <div class="col-5 p-4 text-center">
                <h2 class="fw-bold mb-3">Subscribe <span class="fw-light">Newsletters</span></h2>
                <p class="mb-4">
                    Enter your email address to 
                    register to our newsletter subscription
                    delivered on a regular basis!
                </p>
                <form>
                    <div class="input-group">
                        <input type="email" class="my-input fw-light form-control" placeholder="Enter your email" aria-label="" aria-describedby="button-addon1" required minlength="5">
                        <button class="my-button text-white btn btn-outline-secondary" id="button-addon1">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
        
        <div class="element-1">
            <img class="w-100" src="../../../public/course-portal/images/maxcoach-shape-02.png" alt="Element 1">
        </div>

        <div class="element-2">
            <img class="w-100" src="../../../public/course-portal/images/maxcoach-shape-09.png" alt="Element 2">
        </div>

        <div class="green-circle"></div>
  
    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables.scss' as*;

h2{
    color: $main-purple-color;

    span{
        color: $main-green-color;
    }
}

p{
    color: $main-gray-color;
    line-height: 2rem;
}

.my-input{
    background-color: #F5F5F5;
    &:focus {
    border-color: $main-green-color;
    box-shadow: none;
}
}

.my-button{
    background-color: $main-green-color;
    border: 0;
    padding: 15px 15px;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: $main-purple-color;
    }
}

.element-1{
    width: 130px;
    height: 130px;
    position: absolute;
    right: 120px;
    bottom: 100px;

}

.element-2{
    width: 170px;
    height: 170px;
    position: absolute;
    right: 210px;
    bottom: 120px; 
}

.green-circle{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 7px solid #90D6CA;
    background-color: none;
    position: absolute;
    bottom: 140px;
    left: 120px;

}

</style>
