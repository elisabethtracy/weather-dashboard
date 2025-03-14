import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';


// calling the actual weather data

// POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  console.log("Request", req.body.cityName);
  try {
    const cityName = req.body.cityName;

    WeatherService.getWeatherForCity(cityName).then((data) => {
      HistoryService.addCity(cityName);
      res.json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});




//GET http://localhost:3001/api/history
// GET search history
router.get('/history', async (_req: Request, res: Response) => {
  HistoryService.getCities()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


//DELETE http://localhost:3001/api/history/:id
//DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: 'City ID is required.' });
      return;
    } await HistoryService.removeCity(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
