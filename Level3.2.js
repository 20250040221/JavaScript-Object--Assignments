console.log("\n=== Level 3 - Q2: Group students by major ===");
function groupByMajor(students) {
  return students.reduce((groups, s) => {
    if (!groups[s.major]) groups[s.major] = [];
    groups[s.major].push(s);
    return groups;
  }, {});
}
 
const students = [
  { name: "Maneesha", major: "Computer Science" },
  { name: "Mandakini", major: "Math" },
  { name: "Ayush", major: "Computer Science" },
  { name: "Aryan", major: "Physics" },
  { name: "vedh", major: "Math" },
];
console.log(groupByMajor(students));
 
