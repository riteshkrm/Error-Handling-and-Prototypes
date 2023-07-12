function productFilter(products) {
  return function (category) {
    return products.filter((product) => product.category === category);
  };
}

// Example usage
const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "Shoes", category: "Fashion" },
  { name: "TV", category: "Electronics" },
  { name: "Jeans", category: "Fashion" },
  { name: "Headphones", category: "Electronics" },
];

const filterByCategory = productFilter(products);

const electronicsProducts = filterByCategory("Electronics");
console.log(electronicsProducts);
// Output: [{ name: "iPhone", category: "Electronics" },
//          { name: "TV", category: "Electronics" },
//          { name: "Headphones", category: "Electronics" }]

const fashionProducts = filterByCategory("Fashion");
console.log(fashionProducts);