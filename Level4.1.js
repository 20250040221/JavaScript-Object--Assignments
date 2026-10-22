console.log("\n=== Level 4 - Q1: deepClone ===");
function deepClone(value) {
    if (value === null || typeof value !=="object") return value;
    if (Array.isArray(value)) {
        return value.map((item) => deppClone(item));

    }
    const copy = {};
    for (const key of Object.keys(value)) {
        copy[key] = deepClone(value[key]);
    }
    return copy;

}
const original = {
    name:"Alice",
    scores: [90,85, { bonus: 5}],
    address: {city: "Jakarta", geo: { lat: 1,lng: 2}},

};
const clone = deepClone(original);
clone.name = "Changed";
clone.scores[0] = 0;
clone.scores[2].bonus = 999;
clone.address.city = "Bandung";
clone.address.geo.lat = 100;

console.log("Original:", JSON.stringify(original));
console.log("Clone   :", JSON.stringify(clone));
console.log("Different objects?", original !== clone);
console.log("Nested separate?", original.address!==clone.address);
