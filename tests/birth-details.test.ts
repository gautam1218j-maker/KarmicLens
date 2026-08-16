import type { BirthDetails } from "../shared/types/birth-details.ts";

const birthDetails: BirthDetails = {
    date: "2008-01-12",
    time: "19:30:00",
    placeName: "Junagadh",
    latitude: 21.5222,
    longitude: 70.4579,
    timezone: "Asia/Kolkata",
};

console.log("Birth details model test:");
console.log(birthDetails);