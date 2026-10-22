console.log("\n=== Level 4 - Q2: validate(object, schema) ===");
function validate(obj, schema) {
  const errors = [];
 
  for (const prop of Object.keys(schema)) {
    const rules = schema[prop];
    const value = obj[prop];
    const missing = value === undefined || value === null;
 
    if (missing) {
      if (rules.required) {
        errors.push({ property: prop, reason: "is required" });
      }
      continue; 
    }
 
    if (rules.type) {
      const actualType = Array.isArray(value) ? "array" : typeof value;
      if (actualType !== rules.type) {
        errors.push({
          property: prop,
          reason: `must be of type ${rules.type}, got ${actualType}`,
        });
        continue;
      }
    }
 
    if (rules.min !== undefined && typeof value === "number") {
      if (value < rules.min) {
        errors.push({
          property: prop,
          reason: `must be at least ${rules.min}, got ${value}`,
        });
      }
    }
  }
 
  return errors;
}
 
const schema = {
  name: { required: true, type: "string" },
  age: { required: true, type: "number", min: 18 },
  email: { required: true, type: "string" },
  score: { type: "number", min: 0 },
};
 
// valid input
const validUser = { name: "Alice", age: 25, email: "alice@example.com", score: 10 };
console.log("Valid input errors:", validate(validUser, schema)); // []
 
// invalid input (multiple errors at once)
const invalidUser = { name: 123, age: 15, score: -5 };
console.log("Invalid input errors:", validate(invalidUser, schema));
 