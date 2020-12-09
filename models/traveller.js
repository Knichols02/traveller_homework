const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
  return this.journeys.some((journey) => {
    return journey.startLocation === startLocation;
});
};

Traveller.prototype.getJourneyEndLocations = function (endLocation) {
  return this.journeys.find((journey) => {
    return journey.endLocation === endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.every((journey) => {
    return journey.minDistance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.length;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.filter((journey) => {
    return journey[transport] === value;
  });
};


module.exports = Traveller;
