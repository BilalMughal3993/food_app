import axios from "axios"; 
 

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer 1p9tPS2wek3h-T7fnXGkVRNdAM6mDCMjjclLjPLBfFGaGFFu3UWYePNzd1SHgongBNNd-FlrrW-VxscLIgInmt8YVmZpdUxC46oE9-TIHw2259IIuuqptJdR9dWcYnYx"
        
    }
}) 