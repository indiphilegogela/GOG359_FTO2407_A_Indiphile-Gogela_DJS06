// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
console.log(provinces.map((province) => province.toUpperCase()));

// 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
console.log(names.map((name) => name.length));

 4. **Sorting**: Use `sort` to alphabetically sort the provinces.
console.log(provinces.sort());

// 5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
console.log(provinces.filter((province) => !province.includes(`Cape`)));

// 6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
const nameHasS = (name) => name.toUpperCase().includes(`S`);
console.log(names.map(nameHasS));
console.log(names.some(nameHasS));

// 7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.
console.log(
  names.reduce((acc, name, index) => {
    return {
      ...acc,
      [name]: provinces[index],
    };
  }, {})
);

// Advanced Exercises 
// 1. **Log Products**: Iterate over the products array, logging each product name.
products.forEach((product) => console.log(product.product));

// 2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
console.log(products.filter((product) => product.product.length <= 5));

// 3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
console.log(
  products
    .filter((product) => Number(product.price)) // filter out missing prices
    .map((product) => Number(product.price)) // convert string to numbers
    .reduce((total, price) => total + price) // calculate total
);
