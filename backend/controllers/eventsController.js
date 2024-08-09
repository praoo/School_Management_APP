import {  Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";



export const createEvents = async (req, res, next) => {
  const { events } = req.body;
  console.log(events);
  
  try {
    if (!events) {
      return res.status(400).json({ error: "Please Fill Form!" });
    }

    const newEvent = await Events.create({ events });

    res.status(201).json({
      success: true,
      event: newEvent, // Return the created event
    });
  } catch (err) {
    next(err);
  }
};
export const getAllEvents = async (req, res, next) => {
  try {
   const event = await Events.find();
  res.status(200).json({
    success: true,
    event,
  });   
}  catch (err) {
  next(err);
}
};
 