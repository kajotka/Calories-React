function calculatePPM(height: number, weight: number, age: number, gender: string) {
    let ppm = 0;
    if (gender === "male") {
      ppm = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      ppm = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return ppm;
  }

export default calculatePPM;