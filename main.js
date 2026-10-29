const movieName = ''
const Balance = ''
const age = ''


const movies = [
    {
        title: 'one',
        genre: 'horor',
        rating: 1,
        price: '$11',
        ageLimit: 18,
        availableSeats: 12
    },
    {
        title: 'two',
        genre: 'horor',
        rating: 1,
        price: '$11',
        ageLimit: 18,
        availableSeats: 12
    },
    {
        title: 'three',
        genre: 'horor',
        rating: 1,
        price: '$11',
        ageLimit: 18,
        availableSeats: 12
    },
    {
        title: 'four',
        genre: 'horor',
        rating: 1,
        price: '$11',
        ageLimit: 18,
        availableSeats: 12
    },
    {
        title: 'five',
        genre: 'horor',
        rating: 1,
        price: 11,
        ageLimit: 18,
        availableSeats: 12
    }

]

function checkAccess(movie, userAge) {
    if (userAge >= movie.ageLimit) {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
}

for (let i = 0; i < movies.length; i++) {
    console.log(
        movies[i].title +
        " | Жанр: " + movies[i].genre +
        " | Рейтинг: " + movies[i].rating +
        " | Цена: " + movies[i].price +
        " | Возраст: " + movies[i].ageLimit +
        " | Свободные места: " + movies[i].availableSeats
    );
}

for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > 8) {
        console.log(movies[i].title + " — " + movies[i].rating);
    }
}



let totalSeats = 0;

for (let i = 0; i < movies.length; i++) {
    totalSeats = totalSeats + movies[i].availableSeats;
}

console.log("Общее количество свободных мест:", totalSeats);


function showMovie(movie) {
    console.log('Название: ' + movie.title);
    console.log('Жанр: ' + movie.genre);
    console.log('Рейтинг: ' + movie.rating);
    console.log('Цена: $' + movie.price);
    console.log('Возраст: ' + movie.ageLimit);
    console.log('Свободные места: ' + movie.availableSeats);
}


function calculatePrice(movie, count) {
    return movie.price * count;
}


function findMovieByName(name) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === name) {
            return movies[i];
        }
    }

    return null;
}

const cinema = {
    name: 'My Cinema',
    movies: movies,

    showInfo: function () {
        console.log('Кинотеатр: ' + this.name);
        console.log('Количество фильмов: ' + this.movies.length);
    },

    showMovies: function () {
        for (let i = 0; i < this.movies.length; i++) {
            showMovie(this.movies[i]);
        }
    },

    addMovie: function (movie) {
        this.movies.push(movie);
    },

    removeLastMovie: function () {
        if (this.movies.length > 0) {
            this.movies.pop();
        }
    }
};


cinema.showInfo();
cinema.showMovies();

console.log('Стоимость 3 билетов: $' + calculatePrice(movies[0], 3));

let result = findMovieByName('three');

if (result !== null) {
    showMovie(result);
} else {
    console.log('Фильм не найден');
}



movies.forEach(function (movie) {
    console.log(movie.title);
});


const movieTitles = movies.map(function (movie) {
    return movie.title;
});

console.log(movieTitles);


const highRatingMovies = movies.filter(function (movie) {
    return movie.rating > 8;
});

console.log(highRatingMovies);


const foundMovie = movies.find(function (movie) {
    return movie.title === 'three';
});

console.log(foundMovie);

function buyTicket(movieName, userAge, tickets, balance) {

    const movie = movies.find(function (movie) {
        return movie.title === movieName;
    });

    if (!movie) {
        console.log('Фильм не найден');
        return;
    }

    if (tickets <= 0 || !Number.isInteger(tickets)) {
        console.log('Укажите правильное количество билетов');
        return;
    }

    if (userAge < movie.ageLimit) {
        console.log('Покупка запрещена: возрастное ограничение ' + movie.ageLimit + '+');
        return;
    }

    if (movie.availableSeats < tickets) {
        console.log('Недостаточно свободных мест');
        return;
    }

    const totalPrice = movie.price * tickets;

    console.log('Общая стоимость: $' + totalPrice);

    if (balance < totalPrice) {
        console.log('Недостаточно средств');
        return;
    }

    movie.availableSeats -= tickets;

    console.log('Покупка успешна!');
    console.log('Фильм: ' + movie.title);
    console.log('Куплено билетов: ' + tickets);
    console.log('Оплачено: $' + totalPrice);
    console.log('Осталось мест: ' + movie.availableSeats);
}