function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function emptyEducationalExperience() {
  return {
    id: getRandomArbitrary(1, 10000),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  };
}

export { emptyEducationalExperience, getRandomArbitrary };
