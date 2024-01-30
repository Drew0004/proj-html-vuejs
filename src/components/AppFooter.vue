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
    <footer>
       <div class="container">

        <section class="Second">
            <p><h5>Address</h5></p>
            <div>
                382 NE 191st St # 87394 Miami, FL 33179-3899
            </div>
            <div class="ab">
                +1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)
            </div>
            <div class="ab"></div>
            <a class="ab">
                support@maxcoach.com
            </a>
        </section>

        <section class="First">
            <p><h5>Explore</h5></p>
            <a class="ab" href="http://localhost:5173/QuickStart">Start here</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">Blog</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">About us</a>
        </section>

        <section class="Third">
            <div class="ab"></div>
            <a href="#nogo" class="ab">Membership</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">Privacy policy</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">Terms of services</a>
        </section>

        <section class="First">
            <p><h5>Information</h5></p>
            <a class="ab" href="http://localhost:5173/QuickStart">Start here</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">Membership</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">Privacy policy</a>
            <div class="ab"></div>
            <a href="#nogo" class="ab">Terms of services</a>
        </section>
       </div>

    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: lightgray;
    height: 300px;
    padding-left: 120px;
    padding-top: 50px;
}

.container {
    display: flex;
}

.First {
    padding-left: 70px;
}

.Second {
    width: 650px;
}

.Third {
    padding-left: 70px;
    padding-top: 42px;
}

.ab {
    padding-top: 15px;
}

a {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    color: green;
}
</style>