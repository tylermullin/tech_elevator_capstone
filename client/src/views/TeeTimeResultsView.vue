<template>
    <div>
        <!-- tee Time results section -->
            <section id="results">
                <div id="results-container">
                    <div id="results-banner-item">
                        <h2 id="results-banner">Select Tee Time</h2>
                    </div>

                    <div class="card-container">
                        <div class="card" li v-for="teeTime in teeTimeResults" :key="teeTime.id">
                            <div class="card-content">
                                <GolfCourseName id="course-name" v-bind:courseId="teeTime.courseId"></GolfCourseName>
                                <p>{{ teeTime.dateOfPlay }} {{ teeTime.timeOfPlay }}</p>
                                <p># players: {{ teeTime.numberOfPlayers }}</p>
                                <p># holes: {{ teeTime.numberOfHoles }}</p>
                                <p>green fee per player: ${{ teeTime.greenFeePerPlayer }}</p>
                                <button id="select" v-if="$store.state.token" v-on:click="selectTeeTime(teeTime.teeTimeId)"
                                    type="button">Select</button>




                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
</template>

<script>
import teeTimesService from "../services/tee-times-service";
import GolfCourseName from "../components/GolfCourseName.vue";
import utility from "../services/utility.js";

export default {
    components: {
        GolfCourseName

    },
    data() {
        return {
            teeTimeResults: [],
        }
    },
    created() {
        teeTimesService.getTeeTimesByZip(this.$route.params.zipcode)
        .then(response => {
            if(response.status === 200) {
                this.teeTimeResults = response.data;
            }
        })
        .catch((error) => utility.handleAxiosError(error));

        teeTimesService.updateTeeTime(this.$route.params.teeTimeId); //for scheduling tee times

    },
    methods: {
        selectTeeTime(teeTimeId) {
            teeTimesService.updateTeeTime(teeTimeId)
                .then(response => {
                    if(response.status === 200) {
                        this.$router.push({ name: "my_tee_times" });
                    }
                })
                .catch((error) => utility.handleAxiosError(error));   
        }
    }
}


</script>


<style scoped>

/* tee time results cards */
#results {
    display: flex;
    justify-content: center;
}

#results-container {
    background-color: coral;
    width: 90%;
    border-radius: 10px;
    padding-bottom: 20px;
    margin-bottom: 100px;
}

#results-banner {
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
    margin-top: 20px;
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
    padding: 0px 15px 10px 15px;
    border-style: solid;
}

.card-content {
    text-align: center;
}

#course-name {
    grid-area: course-name;
    font-size: 20px;
    margin-bottom: 0px;
    color: navy;
}
</style>