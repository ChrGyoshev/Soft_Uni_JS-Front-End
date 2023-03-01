function movie(input) {
  moviesCollection = [];

  for (const lines of input) {
    if (lines.includes("addMovie")) {
      moviesCollection.push({ name: lines.split("addMovie")[1].trim() });
    } else if (lines.includes("directedBy")) {
      let information = lines.split("directedBy ");
      let name = information[0].trim();
      let director = information[1];
      let movie = moviesCollection.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (lines.includes("onDate")) {
      let information = lines.split("onDate ");
      let name = information[0].trim();
      let date = information[1];
      let movie = moviesCollection.find(
        (movieObject) => movieObject.name === name
      );
      if (movie) {
        movie.date = date;
      }
    }
  }

  for (const element of moviesCollection) {
    if (element.name && element.director && element.date) {
      console.log(JSON.stringify(element));
    }
  }
}
