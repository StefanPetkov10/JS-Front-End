function addMovie(movieName) {
    let movies = [];

    for (let command of movieName) {
        if (command.includes('addMovie')) {
            let movie = {};
            let name = command.split('addMovie ')[1];
            movie.name = name;
            movies.push(movie);
        } else if (command.includes('directedBy')) {
            let [name, director] = command.split(' directedBy ');
            let movie = movies.find(m => m.name === name);
            if (movie !== undefined) {
                movie.director = director;
            }
        } else if (command.includes('onDate')) {
            let [name, date] = command.split(' onDate ');
            let movie = movies.find(m => m.name === name);
            if (movie !== undefined) {
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    }
}

addMovie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );