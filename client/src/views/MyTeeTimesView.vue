<template>
   
    <!-- tee Time cards -->
    <div id="page">
        <div id="results-container">
            <div id="me-tee-times-title-container">
                <h2 id="my-tee-times-title">My Tee Times</h2>
            </div>

            <!-- tee time deleted popup -->
            <dialog ref="popupRef">
                <div id="pop-up" v-show="isTeeTimeDeleted">
                    <p id="message">Tee Time Deleted</p>
                    <i id="check-icon" class="fa-solid fa-check"></i>
                </div>
            </dialog>

            <!-- my tee time cards -->
            <div class="card-container">
                <div class="card" li v-for="teeTime in myTeeTimeResults" :key="teeTime.teeTimeId">
                    <div class="card-content">
                        <GolfCourseName id="course-name" v-bind:courseId="teeTime.courseId"></GolfCourseName>
                        <p>{{ teeTime.dateOfPlay }} {{ teeTime.timeOfPlay }}</p>
                        <p># players: {{ teeTime.numberOfPlayers }}</p>
                        <p># holes: {{ teeTime.numberOfHoles }}</p>
                        <p>green fee per player: ${{ teeTime.greenFeePerPlayer }}</p>
                        <button id="edit-tee-time">
                            <i class="fa-solid fa-pencil"></i>
                        </button>

                        <button id="delete-tee-time" v-on:click="deleteTeeTime(teeTime.teeTimeId)">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>

                    </div>

                </div>

            </div>
        </div>
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
            myTeeTimeResults: [], //scheduled tee times
            isTeeTimeDeleted: false,
        }

    },
    created() {
        teeTimesService.getMyTeeTimes().then(response => { 
            if (response.status === 200) {
                this.myTeeTimeResults = response.data;
            }
        })
            .catch((error) => utility.handleAxiosError(error));
    },

    methods: {
        deleteTeeTime(teeTimeId) {
            teeTimesService.deleteTeeTimeById(teeTimeId)
                .then(response => {
                    if (response.status === 204) {
                        this.isTeeTimeDeleted = true;
                        this.$refs.popupRef.showModal();
                        setTimeout(() => {
                            this.$refs.popupRef.close();
                        }, 3000);
                    }
                })
                .then(() => {
                    teeTimesService.getMyTeeTimes().then(response => {
                        this.myTeeTimeResults = response.data;
                    })
                })
                .catch((error) => utility.handleAxiosError(error));
        }, 
    
    },

}



</script>

<style scoped>

#page {
    display: flex;
    justify-content: center;
}

/* tee time cards */

button {
    margin: 0px 5px 0px 5px;
    cursor: pointer;
}

#results-container {
    background-color: coral;
    width: 90%;
    border-radius: 10px;
    padding-bottom: 20px;
    margin-bottom: 100px;
}

#my-tee-times-title {
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

/* pop-up */

dialog {
    width: 25%;
    padding: 0px
}

#pop-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
}

#message {
    font-size: 25px;
    margin-bottom: 10px;
}

#check-icon {
    font-size: 40px;
    color: green;
    margin-bottom: 10px;
}

@media only screen and (max-width: 425px) {
    dialog {
    width: 50%;
    padding: 0px
}
}

</style>

