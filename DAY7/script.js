

const book={
    title:"My dreams",
    author:"Jyotishmoy",
    year:"2015",
}

console.log(book)

console.log(book.title)
console.log(book.author)



// learnt something new
const obj = {
    title: "My dreams",
    author: "Jyotishmoy",
    year: "2015",
    getInfo: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear){
        this.year=newYear;
        console.log(this)
    }
};

console.log(obj.getInfo());

obj.updateYear("2025")
console.log(obj)


const library = {
    name: "My Awesome Library",
    books: [
        {
            title: "Book One",
            author: "Author One",
            year: 2000
        },
        {
            title: "Book Two",
            author: "Author Two",
            year: 2010
        },
        {
            title: "Book Three",
            author: "Author Three",
            year: 2020
        }
    ]
};

console.log(library);

console.log(library.name)

library.books.forEach(e=>{
    console.log(e.title)
})


const libraryBooks = {
    name: "My Awesome Library",
    books: [
        {
            title: "Book One",
            author: "Author One",
            year: 2000,
            getInfo: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "Book Two",
            author: "Author Two",
            year: 2010,
            getInfo: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "Book Three",
            author: "Author Three",
            year: 2020,
            getInfo: function() {
                return `${this.title} (${this.year})`;
            }
        }
    ]
};


libraryBooks.books.forEach(book => {
    console.log(book.getInfo());
});

for(let i=0;i<libraryBooks.books.length;i++){
    const book=libraryBooks.books[i]
    for(let key in book){
        console.log(`${key}:${book[key]}`)
    }
}


const Mylibrary = {
    name: "My Awesome Library",
    books: [
        {
            title: "Book One",
            author: "Author One",
            year: 2000
        },
        {
            title: "Book Two",
            author: "Author Two",
            year: 2010
        },
        {
            title: "Book Three",
            author: "Author Three",
            year: 2020
        }
    ]
};

library.books.forEach(book => {
    console.log(`Book Info:`);
    Object.keys(book).forEach(key => {
        console.log(`${key}: ${book[key]}`);
    });
    
    console.log(); 
});