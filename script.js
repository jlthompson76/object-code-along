// how to create an object literal

const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    numPages: 250,
    genre: ["science fiction", "fiction"],
    hasRead: true,
    iLoveBook: function() {
        console.log(`I love ${this.title}!`);
    }
}

// how to create an object constructor

function song(name, isPopular) {
    this.name = "Happy Birthday";
    this.isPopular = true;
}

// access book object using dot notation

console.log(book.author);

// access song object using bracket notation

console.log(song["name"]);

// add a new key/value pair

console.log(book.howManyCopiesSold = 500000000);

// update a value

console.log(book.hasRead = false);

// delete a key/value

delete book.numPages;
console.log(book);

// create a method

book.sayHello = function() {
    console.log(`Hello ${book.author}`);
    console.log(`Hello ${this.author}`); // both work
}

book.sayHello();

// initialize a method

book.iLoveBook();
