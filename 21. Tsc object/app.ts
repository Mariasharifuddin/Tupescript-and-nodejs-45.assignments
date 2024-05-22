interface Item {
    name: string;
    price: number;
}

// Create two objects
const book: Item = {
    name: 'ESSENTIAL TYPESCRIPT',
    price: 450
};

const apple: Item = {
    name: 'apple',
    price: 200
};

console.log(`Book name: ${book.name}, price $${book.price}`);
console.log(`Apple name: ${apple.name}, price $${apple.price}`);

