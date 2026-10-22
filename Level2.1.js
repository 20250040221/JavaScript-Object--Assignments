console.log("\n=== Level 2 - Q1: Rectangle calculator ===");
const rectangle = {
  width: 5,
  height: 10,
  getArea() {
    return this.width * this.height;
  },
  getPerimeter() {
    return 2 * (this.width + this.height);
  },
};
console.log("Area:", rectangle.getArea()); 
console.log("Perimeter:", rectangle.getPerimeter()); 