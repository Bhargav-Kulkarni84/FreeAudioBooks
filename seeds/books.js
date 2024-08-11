const books = [
    {
        "Title": "To Kill a Mockingbird",
        "Author": "Harper Lee",
        "Year_Of_Publication": 1960,
        "Topic": "Fiction",
        "Price": 10.99
    },
    {
        "Title": "1984",
        "Author": "George Orwell",
        "Year_Of_Publication": 1949,
        "Topic": "Dystopian",
        "Price": 8.99
    },
    {
        "Title": "Pride and Prejudice",
        "Author": "Jane Austen",
        "Year_Of_Publication": 1813,
        "Topic": "Romance",
        "Price": 12.99
    },
    {
        "Title": "The Great Gatsby",
        "Author": "F. Scott Fitzgerald",
        "Year_Of_Publication": 1925,
        "Topic": "Novel",
        "Price": 14.99
    },
    {
        "Title": "Moby-Dick",
        "Author": "Herman Melville",
        "Year_Of_Publication": 1851,
        "Topic": "Adventure",
        "Price": 15.99
    },
    {
        "Title": "War and Peace",
        "Author": "Leo Tolstoy",
        "Year_Of_Publication": 1869,
        "Topic": "Historical Fiction",
        "Price": 16.99
    },
    {
        "Title": "The Catcher in the Rye",
        "Author": "J.D. Salinger",
        "Year_Of_Publication": 1951,
        "Topic": "Fiction",
        "Price": 11.99
    },
    {
        "Title": "The Hobbit",
        "Author": "J.R.R. Tolkien",
        "Year_Of_Publication": 1937,
        "Topic": "Fantasy",
        "Price": 9.99
    },
    {
        "Title": "Brave New World",
        "Author": "Aldous Huxley",
        "Year_Of_Publication": 1932,
        "Topic": "Dystopian",
        "Price": 10.99
    },
    {
        "Title": "Catch-22",
        "Author": "Joseph Heller",
        "Year_Of_Publication": 1961,
        "Topic": "Satire",
        "Price": 13.99
    },
    {
        "Title": "Crime and Punishment",
        "Author": "Fyodor Dostoevsky",
        "Year_Of_Publication": 1866,
        "Topic": "Psychological Fiction",
        "Price": 14.99
    },
    {
        "Title": "The Lord of the Rings",
        "Author": "J.R.R. Tolkien",
        "Year_Of_Publication": 1954,
        "Topic": "Fantasy",
        "Price": 24.99
    },
    {
        "Title": "The Alchemist",
        "Author": "Paulo Coelho",
        "Year_Of_Publication": 1988,
        "Topic": "Adventure",
        "Price": 9.99
    },
    {
        "Title": "The Da Vinci Code",
        "Author": "Dan Brown",
        "Year_Of_Publication": 2003,
        "Topic": "Thriller",
        "Price": 12.99
    },
    {
        "Title": "The Shining",
        "Author": "Stephen King",
        "Year_Of_Publication": 1977,
        "Topic": "Horror",
        "Price": 15.99
    },
    {
        "Title": "The Book Thief",
        "Author": "Markus Zusak",
        "Year_Of_Publication": 2005,
        "Topic": "Historical Fiction",
        "Price": 13.99
    },
    {
        "Title": "The Road",
        "Author": "Cormac McCarthy",
        "Year_Of_Publication": 2006,
        "Topic": "Dystopian",
        "Price": 11.99
    },
    {
        "Title": "The Hunger Games",
        "Author": "Suzanne Collins",
        "Year_Of_Publication": 2008,
        "Topic": "Dystopian",
        "Price": 10.99
    },
    {
        "Title": "Jane Eyre",
        "Author": "Charlotte Brontë",
        "Year_Of_Publication": 1847,
        "Topic": "Romance",
        "Price": 12.99
    },
    {
        "Title": "Wuthering Heights",
        "Author": "Emily Brontë",
        "Year_Of_Publication": 1847,
        "Topic": "Gothic Fiction",
        "Price": 12.99
    },
    {
        "Title": "The Chronicles of Narnia",
        "Author": "C.S. Lewis",
        "Year_Of_Publication": 1950,
        "Topic": "Fantasy",
        "Price": 22.99
    },
    {
        "Title": "Little Women",
        "Author": "Louisa May Alcott",
        "Year_Of_Publication": 1868,
        "Topic": "Classic",
        "Price": 11.99
    },
    {
        "Title": "Gone with the Wind",
        "Author": "Margaret Mitchell",
        "Year_Of_Publication": 1936,
        "Topic": "Historical Fiction",
        "Price": 14.99
    },
    {
        "Title": "A Tale of Two Cities",
        "Author": "Charles Dickens",
        "Year_Of_Publication": 1859,
        "Topic": "Historical Fiction",
        "Price": 13.99
    },
    {
        "Title": "Les Misérables",
        "Author": "Victor Hugo",
        "Year_Of_Publication": 1862,
        "Topic": "Historical Fiction",
        "Price": 16.99
    },
    {
        "Title": "Dracula",
        "Author": "Bram Stoker",
        "Year_Of_Publication": 1897,
        "Topic": "Horror",
        "Price": 10.99
    },
    {
        "Title": "Frankenstein",
        "Author": "Mary Shelley",
        "Year_Of_Publication": 1818,
        "Topic": "Horror",
        "Price": 12.99
    },
    {
        "Title": "The Picture of Dorian Gray",
        "Author": "Oscar Wilde",
        "Year_Of_Publication": 1890,
        "Topic": "Philosophical Fiction",
        "Price": 11.99
    },
    {
        "Title": "The Bell Jar",
        "Author": "Sylvia Plath",
        "Year_Of_Publication": 1963,
        "Topic": "Autobiographical",
        "Price": 14.99
    },
    {
        "Title": "A Clockwork Orange",
        "Author": "Anthony Burgess",
        "Year_Of_Publication": 1962,
        "Topic": "Dystopian",
        "Price": 13.99
    },
    {
        "Title": "The Handmaid's Tale",
        "Author": "Margaret Atwood",
        "Year_Of_Publication": 1985,
        "Topic": "Dystopian",
        "Price": 12.99
    },
    {
        "Title": "The Secret Garden",
        "Author": "Frances Hodgson Burnett",
        "Year_Of_Publication": 1911,
        "Topic": "Children's Fiction",
        "Price": 9.99
    },
    {
        "Title": "Anne of Green Gables",
        "Author": "L.M. Montgomery",
        "Year_Of_Publication": 1908,
        "Topic": "Children's Fiction",
        "Price": 10.99
    },
    {
        "Title": "Charlotte's Web",
        "Author": "E.B. White",
        "Year_Of_Publication": 1952,
        "Topic": "Children's Fiction",
        "Price": 8.99
    },
    {
        "Title": "The Giver",
        "Author": "Lois Lowry",
        "Year_Of_Publication": 1993,
        "Topic": "Dystopian",
        "Price": 11.99
    },
    {
        "Title": "The Maze Runner",
        "Author": "James Dashner",
        "Year_Of_Publication": 2009,
        "Topic": "Dystopian",
        "Price": 12.99
    },
    {
        "Title": "Divergent",
        "Author": "Veronica Roth",
        "Year_Of_Publication": 2011,
        "Topic": "Dystopian",
        "Price": 13.99
    },
    {
        "Title": "The Kite Runner",
        "Author": "Khaled Hosseini",
        "Year_Of_Publication": 2003,
        "Topic": "Drama",
        "Price": 14.99
    },
    {
        "Title": "The Lovely Bones",
        "Author": "Alice Sebold",
        "Year_Of_Publication": 2002,
        "Topic": "Drama",
        "Price": 13.99
    },
    {
        "Title": "The Old Man and the Sea",
        "Author": "Ernest Hemingway",
        "Year_Of_Publication": 1952,
        "Topic": "Literary Fiction",
        "Price": 12.99
    },
    {
        "Title": "The Outsiders",
        "Author": "S.E. Hinton",
        "Year_Of_Publication": 1967,
        "Topic": "Young Adult Fiction",
        "Price": 10.99
    },
    {
        "Title": "Speak",
        "Author": "Laurie Halse Anderson",
        "Year_Of_Publication": 1999,
        "Topic": "Young Adult Fiction",
        "Price": 11.99
    },
    {
        "Title": "The Perks of Being a Wallflower",
        "Author": "Stephen Chbosky",
        "Year_Of_Publication": 1999,
        "Topic": "Young Adult Fiction",
        "Price": 12.99
    },
    {
        "Title": "The Sisterhood of the Traveling Pants",
        "Author": "Ann Brashares",
        "Year_Of_Publication": 2001,
        "Topic": "Young Adult Fiction",
        "Price": 10.99
    },
    {
        "Title": "The Little Prince",
        "Author": "Antoine de Saint-Exupéry",
        "Year_Of_Publication": 1943,
        "Topic": "Children's Fiction",
        "Price": 8.99
    },
    {
        "Title": "Goodnight Moon",
        "Author": "Margaret Wise Brown",
        "Year_Of_Publication": 1947,
        "Topic": "Children's Fiction",
        "Price": 7.99
    },
    {
        "Title": "Where the Wild Things Are",
        "Author": "Maurice Sendak",
        "Year_Of_Publication": 1963,
        "Topic": "Children's Fiction",
        "Price": 9.99
    },
    {
        "Title": "Matilda",
        "Author": "Roald Dahl",
        "Year_Of_Publication": 1988,
        "Topic": "Children's Fiction",
        "Price": 10.99
    }
];

module.exports = books;
