/**
 * This JavaScript file contains common functions used across components.
 */
export default {
  handleAxiosError(error){
    const response = error.response;
    if (!response) {
        alert(error);
    } else if (response.status === 400) {
        alert("Request could not be completed");
    } else if (response.status === 404) {
      alert("Page not found")
    } else if (response.status === 500) {
        alert("Server error")
    }
  }
}
  

