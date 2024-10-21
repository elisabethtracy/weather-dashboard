import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';


// calling the actual weather data

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, _res: Response) => {
  console.log("Request", req.body.cityName);
  // TODO: GET weather data from city name
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial`) //fix url
    .then(response=>{
      return response.json();
    })
    .then(data => {
      console.log(data)
    });
  
_res.send("test");

  // TODO: save city to search history
});

//GET http://localhost:3001/api/history
// TODO: GET search history
// router.get('/history', async (req: Request, res: Response) => {
//   try {
//     const searchHistory = await req.params.history
//   }
// });


// router.get('/', async (_req: Request, res: Response) => {
//   try {
//     const savedStates = await HistoryService.getStates();
//     res.json(savedStates);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//DELETE http://localhost:3001/api/history/:id
// * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req: Request, res: Response) => {});

// export default router;
