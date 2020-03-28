// how to create an object literal
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    numPages: 250,
    genre: ["science fiction", "fiction"],
    hasRead: false
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
