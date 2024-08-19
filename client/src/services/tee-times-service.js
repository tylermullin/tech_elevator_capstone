import axios from "axios"

export default {
    // search tee time by zip
    getTeeTimesByZip(zipcode) {
        return axios.get(`/tee-times/public?zipcode=${zipcode}`);
    },

    // pull course name to tee time results
    getCourseById(courseId) {
        return axios.get(`/tee-times/public/${courseId}`);
    },

    // select/schedule tee time
    updateTeeTime(teeTimeId) {
        return axios.put(`/tee-times/${teeTimeId}`);
    },

    // view scheduled tee times
    getMyTeeTimes() {
        return axios.get('/tee-times')
    },

    // delete tee time by ID
    deleteTeeTimeById(teeTimeId) {
        return axios.delete(`/tee-times/${teeTimeId}`);
    }

}