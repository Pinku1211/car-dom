import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': '435600dc0dmshb8fe7ccba9ab8adp1bcac1jsn41df5dfc43cb',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

export const fetchCars = async () => {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

