const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

const all_new_heroes = [...marvelHeroes, ...dcHeroes]; // This is known as Spread Operator

console.log(all_new_heroes); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]
// Learn Arrays.isArray , Arrays.from and Arrays.of