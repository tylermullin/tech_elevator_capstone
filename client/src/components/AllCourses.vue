<template>
    <!-- All courses section -->
    <section id="all_courses">
        <div id="all-courses-container">
            <div id="all-courses-banner-item">
                <h2 id="all-courses-banner">All Courses</h2>
            </div>

            <!-- card 1 -->
            <div class="card-container">
                <div class="card">
                    <img src="https://placehold.jp/300x300.png">
                    <div class="card-content">
                        <h3>Torrey Pines</h3>
                        <p>San Diego, CA</p>
                    </div>
                </div>

                <!-- card 2 -->
                <div class="card">
                    <img src="https://placehold.jp/300x300.png">
                    <div class="card-content">
                        <h3>Half Moon Bay Golf Links</h3>
                        <p>Half Moon Bay, CA</p>
                    </div>
                </div>


                <!-- card 3 -->
                <div class="card">
                    <img src="https://placehold.jp/300x300.png">
                    <div class="card-content">
                        <h3>Whistling Straits</h3>
                        <p>Sheboygan, WI</p>
                    </div>
                </div>


                <!-- card 4 -->
                <div class="card">
                    <img src="https://placehold.jp/300x300.png">
                    <div class="card-content">
                        <h3>TPC Scottsdale</h3>
                        <p>Scottsdale, AZ</p>
                    </div>
                </div>

                <!-- card 5 -->
                <div class="card">
                    <img src="https://placehold.jp/300x300.png">
                    <div class="card-content">
                        <h3>Course 5</h3>
                        <p>Scottsdale, AZ</p>
                    </div>
                </div>

                     <!-- card 6 -->
                     <div class="card">
                    <img src="https://placehold.jp/300x300.png">
                    <div class="card-content">
                        <h3>Course 6</h3>
                        <p>Scottsdale, AZ</p>
                    </div>
                </div>




            </div>

        </div>
    </section>
</template>


<style scoped>
/* all courses */
#all_courses {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

#all-courses-container {
    background-color: whitesmoke;
    width: 90%;
    border-radius: 10px;
    padding-bottom: 20px;
    margin-bottom: 100px;
}

#all-courses-banner {
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    margin-top: 20px;
    color: navy;
}

.card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    width: 300px;
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    border-style: solid;
}

.card img {
    width: 100%;
    height: auto;
}

.card-content {
    text-align: center;
}

h3 {
    font-size: 20px;
    margin-bottom: 0px;
    color: navy;
}

</style>

<script>
    export default {
        
    }

</script>