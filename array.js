// TODO: define addFavoriteBook(..) function
function addFavoriteBook(book) {
    if (!book.includes("great"))
        favoriteBooks.push(book);
}
// TODO: define printFavoriteBooks() function
function printFavoriteBooks(favoriteBooks) {
    for (let book of favoriteBooks) {
        console.log(book);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks(favoriteBooks);