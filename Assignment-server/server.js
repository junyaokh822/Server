const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to the flight Application Tracker API!");
});





// List all flight
app.get("/flights", (req, res) => {
  res.send(flights);
});

// Get a specific flight
app.get("/flights/:id", (req, res) => {
  const flightId = parseInt(req.params.id);
  const flight = flights.find((flight) => flight.id === flightId);
  if (flight) {
    res.send(flight);
  } else {
    res.status(404).send({ message: "flight not found" });
  }
});

// Create a new flight
app.post("/flights", (req, res) => {
  const newFlight = req.body;
  jobs.push(newFlight);
  res.status(201).send(newFlight);
});

// Update a specific flight
app.patch("/flights/:id", (req, res) => {
  const flightId = parseInt(req.params.id, 10);
  const flightUpdates = req.body;
  const flightIndex = flights.findIndex((flight) => flight.id === flightId);
  const updatedFlight = { ...flights[flightIndex], ...flightUpdates };
  if (flightIndex !== -1) {
    flights[flightIndex] = updatedFlight;
    res.send(updatedFlight);
  } else {
    res.status(404).send({ message: "Flight not found" });
  }
});

// Delete a specific flight
app.delete("/flights/:id", (req, res) => {
  const flightId = parseInt(req.params.id, 10);
  const flightIndex = flights.findIndex((flight) => flight.id === flightId);
  if (flightIndex !== -1) {
    flights.splice(flightIndex, 1);
    res.send({ message: "Flight deleted successfully" });
  } else {
    res.status(404).send({ message: "Flight not found" });
  }
});





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});





const flights = [
{
  id: 1,
  company: "Spirit Airlines",
  departure_location: "NY",
  departure_Date: "jul 23, 2023",
  departure_Time: "7:00 AM",
  arrival_location: "Fl", 
  arrival_Date: "jul 23, 2023",
  arrival_DateTime: "10:00 AM",
  price: "$120",

},
{
  id: 2,
  company: "United Airlines",
  departure_location: "IL",
  departure_Date: "jul 11, 2023",
  departure_Time: "10:00 AM",
  arrival_location: "CA", 
  arrival_Date: "jul 11, 2023",
  arrival_DateTime: "14:00 PM",
  price: "$258"
},
{
  id: 3,
  company: "Delta Air Lines",
  departure_location: "GA",
  departure_Date: "Aug 01, 2023",
  departure_Time: "18:00 PM",
  arrival_location: "CA", 
  arrival_Date: "Aug 01, 2023",
  arrival_DateTime: "22:40 PM",
  price: "$107"
},
];