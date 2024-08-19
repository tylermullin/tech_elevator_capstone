<template>
    <div>
        <h3>{{ course.courseName }}</h3>
    </div>
</template>

<script>
import teeTimesService from '../services/tee-times-service';

export default {
    props: {
        courseId:Number
    },
    data() {
        return{
            course:{},
        }
    },
    created() {
            teeTimesService.getCourseById(this.courseId)
            .then((response) => {
                this.course = response.data;
            })
        } 
    }
</script>