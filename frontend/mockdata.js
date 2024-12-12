
export const books = [
    {
        id: 1,
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: ["Fiction", "Horror"],
        publishDate: "1960-07-11",
        pages: 281,
        volume: 1,
        total: 4,
        averageRating: 4.8,
        userRatings: [5, 4, 5, 4, 5],
        description: "A gripping, heart-wrenching tale of racial injustice and moral growth in the Deep South.",
        image: "https://example.com/images/to-kill-a-mockingbird.jpg",
        reviews: [
            {
                user: "John Doe",
                comment: "A timeless classic!",
                rating: 5,
            },
            {
                user: "Jane Smith",
                comment: "Beautifully written and thought-provoking.",
                rating: 4,
            },
        ],
    },
    {
        id: 2,
        name: "1984",
        author: "George Orwell",
        genre: ["Science Fiction", "Dystopian"],
        publishDate: "1949-06-08",
        pages: 328,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.7,
        userRatings: [5, 5, 4, 5, 4],
        description: "A chilling dystopian novel that explores the dangers of totalitarianism and extreme surveillance.",
        image: "https://example.com/images/1984.jpg",
        reviews: [
            {
                user: "Alice Johnson",
                comment: "Chillingly relevant even today.",
                rating: 5,
            },
            {
                user: "Bob Brown",
                comment: "A masterpiece in every sense.",
                rating: 4,
            },
        ],
    },
    {
        id: 3,
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: ["Classic", "Tragedy"],
        publishDate: "1925-04-10",
        pages: 180,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.6,
        userRatings: [4, 5, 4, 5, 4],
        description: "A tragic story of love, ambition, and the American Dream set in the Jazz Age.",
        image: "https://example.com/images/the-great-gatsby.jpg",
        reviews: [
            {
                user: "Emily White",
                comment: "Captures the essence of the roaring twenties.",
                rating: 5,
            },
            {
                user: "David Green",
                comment: "A bit overrated, but still good.",
                rating: 4,
            },
        ],
    },
    {
        id: 4,
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: ["Fantasy", "Adventure"],
        publishDate: "1937-09-21",
        pages: 310,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.8,
        userRatings: [5, 5, 5, 4, 4],
        description: "A thrilling adventure of Bilbo Baggins, a hobbit who discovers courage and friendship on an epic quest.",
        image: "https://example.com/images/the-hobbit.jpg",
        reviews: [
            {
                user: "Chris Lee",
                comment: "An enchanting tale of adventure and bravery!",
                rating: 5,
            },
            {
                user: "Samantha Ray",
                comment: "A delightful read with memorable characters.",
                rating: 4,
            },
        ],
    },
    {
        id: 5,
        name: "Pride and Prejudice",
        author: "Jane Austen",
        genre: ["Classic", "Romance"],
        publishDate: "1813-01-28",
        pages: 279,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.7,
        userRatings: [5, 4, 4, 5, 5],
        description: "A witty exploration of manners, marriage, and society in Regency-era England.",
        image: "https://example.com/images/pride-and-prejudice.jpg",
        reviews: [
            {
                user: "Laura White",
                comment: "A perfect blend of romance and satire!",
                rating: 5,
            },
            {
                user: "James Carter",
                comment: "Timeless characters and engaging dialogue.",
                rating: 4,
            },
        ],
    },
    {
        id: 6,
        name: "Educated: The international bestselling memoir",
        author: "Tara Westover",
        genre: ["Memoir"],
        publishDate: "2018-03-01",
        pages: 352,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.0,
        userRatings: [5, 4, 4, 5, 4],
        description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
        image: "https://example.com/images/educated.jpg",
        reviews: [
            {
                user: "Alex Brown",
                comment: "An inspiring memoir that shows resilience.",
                rating: 4,
            },
            {
                user: "Maria Lee",
                comment: "A unique perspective on self-education.",
                rating: 5,
            },
        ],
    },
    {
        id: 7,
        name: "The Republic",
        author: "Plato",
        genre: ["Philosophy"],
        publishDate: "380 BC",
        pages: 416,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.2,
        userRatings: [5, 4, 4, 5, 4],
        description: "A philosophical dialogue exploring justice and politics.",
        image: "https://example.com/images/the-republic.jpg",
        reviews: [
            {
                user: "Sophia Clark",
                comment: "A timeless work of philosophy.",
                rating: 5,
            },
            {
                user: "John White",
                comment: "Challenging yet enlightening.",
                rating: 4,
            },
        ],
    },
    {
        id: 8,
        name: "Good Energy",
        author: "Casey Means MD",
        genre: ["Health"],
        publishDate: "2022-05-15",
        pages: 288,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.8,
        userRatings: [5, 5, 4, 5, 4],
        description: "Discover the surprising connection between metabolism and health.",
        image: "https://example.com/images/good-energy.jpg",
        reviews: [
            {
                user: "Nina Wilson",
                comment: "Great insights into health management.",
                rating: 5,
            },
            {
                user: "Mark Daniels",
                comment: "Eye-opening content.",
                rating: 4,
            },
        ],
    },
    {
        id: 9,
        name: "Harry Potter and the Cursed Child",
        author: "J. K. Rowling",
        genre: ["Fantasy"],
        publishDate: "2016-07-31",
        pages: 320,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.1,
        userRatings: [4, 4, 5, 4, 3],
        description: "A continuation of Harry Potter's story through his children.",
        image: "https://example.com/images/harry-potter.jpg",
        reviews: [
            {
                user: "Emma Green",
                comment: "Nostalgic but different.",
                rating: 4,
            },
            {
                user: "Liam Brown",
                comment: "A magical journey revisited.",
                rating: 5,
            },
        ],
    },
    {
        id: 10,
        name: "Hamilton: The Revolution",
        author: "Lin-Manuel Miranda",
        genre: ["History"],
        publishDate: "2016-04-12",
        pages: 288,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.1,
        userRatings: [5, 4, 4, 5, 3],
        description: "The story behind the groundbreaking musical Hamilton.",
        image: "https://example.com/images/hamilton.jpg",
        reviews: [
            {
                user: "Olivia Smith",
                comment: "Inspiring story behind a revolution.",
                rating: 5,
            },
            {
                user: "Noah Brown",
                comment: "Great companion to the musical.",
                rating: 4,
            },
        ],
    },
    {
        id: 11,
        name: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        genre: ["Memoir"],
        publishDate: "2016-01-12",
        pages: 256,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.1,
        userRatings: [5, 5, 4, 4, 4],
        description: "A memoir on the journey of life, death, and what makes life meaningful.",
        image: "https://example.com/images/when-breath-becomes-air.jpg",
        reviews: [
            {
                user: "Grace Lee",
                comment: "Deeply moving and reflective.",
                rating: 5,
            },
            {
                user: "Ethan White",
                comment: "A profound read on life.",
                rating: 4,
            },
        ],
    },
    {
        id: 12,
        name: "Are We Smart Enough",
        author: "Frans de Waal",
        genre: ["Science"],
        publishDate: "2016-04-25",
        pages: 352,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.1,
        userRatings: [5, 4, 4, 5, 4],
        description: "A scientific exploration of animal intelligence and cognition.",
        image: "https://example.com/images/are-we-smart-enough.jpg",
        reviews: [
            {
                user: "Zoe Green",
                comment: "Fascinating insights into animal minds.",
                rating: 5,
            },
            {
                user: "Leo Brown",
                comment: "Thought-provoking and engaging.",
                rating: 4,
            },
        ],
    },
    {
        id: 13,
        name: "Say Thank You for Everything",
        author: "Jim Edwards",
        genre: ["Business"],
        publishDate: "2020-11-10",
        pages: 224,
        volume: 1,
        totalVolume: 1,
        averageRating: 4.1,
        userRatings: [4, 5, 4, 4, 3],
        description: "Practical strategies for effective management.",
        image: "https://example.com/images/say-thank-you.jpg",
        reviews: [
            {
                user: "Hannah White",
                comment: "Helpful for management strategies.",
                rating: 5,
            },
            {
                user: "Lucas Green",
                comment: "Great tips for leadership.",
                rating: 4,
            },
        ],
    },
];


export const mockUsers = [
    {
        username: "booklover123",
        firstName: "Alex",
        lastName: "Smith",
        age: 25,
        email: "alex.smith@example.com",
        image: "https://example.com/images/user1.jpg",
        books: [
            {
                bookName: "To Kill a Mockingbird",
                bookStatus: "Read",
                bookReviewed: true,
                bookReview: "A deeply impactful story that resonates even today.",
            },
            {
                bookName: "1984",
                bookStatus: "Want to Read",
                bookReviewed: false,
                bookReview: "",
            },
        ],
    },
    {
        username: "readerqueen",
        firstName: "Emily",
        lastName: "Johnson",
        age: 30,
        email: "emily.johnson@example.com",
        image: "https://example.com/images/user2.jpg",
        books: [
            {
                bookName: "Pride and Prejudice",
                bookStatus: "Currently Reading",
                bookReviewed: true,
                bookReview: "A classic romance with sharp wit and brilliant characters.",
            },
            {
                bookName: "The Hobbit",
                bookStatus: "Read",
                bookReviewed: true,
                bookReview: "An epic adventure that captures the imagination.",
            },
        ],
    },
];

export const genres = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Mystery",
    "Fantasy",
    "Biography",
    "Adventure",
    "Crime",
    "Horror",
    "Classic",
    "Tragedy",
    "Dystopian",
    "Romance",
    "Historical Fiction",
    "Thriller",
];