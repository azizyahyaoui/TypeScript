// Union Type and Intersection  Exercises

type Book ={
  id: number;
  title: string;
  genre: string;
  price: number;
}

type ebook = Book & { // Intersection type
  id: number;
}

const book1: Book = {
  id: 1,
  title: "The Great Gatsby",
  genre: "Fiction",
  price: 10.99
}

const book2: Book = {
  id: 2,
  title: "To Kill a Mockingbird",
  genre: "Fiction",
  price: 12.99
}

const book3: Book & ebook = { // Intersection type
  id: 3,
  title: "1984",
  genre: "Dystopian",
  price: 15.99
}

const book4: Book & ebook = {
  id: 4,
  title: "The Catcher in the Rye",
  genre: "Fiction",
  price: 9.99
}

const displayBookDetails = (book: Book | ebook): void => {
  if ('title' in book) {
    console.log(`Book ID: ${book.id}, Title: ${book.title}, Genre: ${book.genre}, Price: $${book.price}`);
  }
}

displayBookDetails(book1);
displayBookDetails(book2);
displayBookDetails(book3);
displayBookDetails(book4);