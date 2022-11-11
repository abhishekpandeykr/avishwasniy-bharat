import { Router } from 'express';
import { body } from 'express-validator';
import { createCity, deleteCity, getAllCities, getOneCity, updateCity } from './handlers/cities';
import { createDestination, deleteDestination, getDestinations, getOneDestination, getPlacesBasedOnDestination, updateDestination } from './handlers/destinations';
import { createPlace, getAllPlaces, getPlace } from './handlers/places';
import { protect } from './modules/auth';
import { handleValidationError } from './modules/middlewares';

const router = Router()


/**
 * Destinations api for handling api
 */
router.get("/destinations", getDestinations)
router.get("/destination/:id", getOneDestination)
router.get("/destination/places/:id", getPlacesBasedOnDestination)
router.put("/destination/:id",protect, body("label").isString(), body("image").isString(), handleValidationError, deleteDestination)
router.post("/destination",protect, body("label").isString(), 
            body("image").isString(), 
            body("city").optional().isArray(), 
            handleValidationError, 
            createDestination
)
router.delete("/destination/:id",protect, deleteDestination)


/**
 * City API's
 */
router.get("/cities", getAllCities)
router.get("/city/:id", getOneCity)
router.post("/city", protect, body("label").isString(),
                    body("description").isString(),
                    handleValidationError, 
                    createCity
)
router.put("/city/:id", protect, body("label").isString(),
                    body("description").isString(),
                    handleValidationError, 
                    updateCity
)
router.delete("/city/:id",protect,  deleteCity)


/**
 * API Handlers for Places
 */
router.get("/places", getAllPlaces)
router.get("/place/:id", getAllPlaces)
router.post("/place",protect, body("name").isString(),
                     body("description").isString(),
                     body("address").isString(), 
                     body("image").isString(),
                     body("belongsToCity").isString(),
                     handleValidationError, 
                     createPlace
)


export default router
