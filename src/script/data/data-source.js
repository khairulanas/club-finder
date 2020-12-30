
class DataSource {
  static searchClub(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ea4f9b27c626dd84c373b936afeaf7a8&language=en-US&query=${keyword}&page=1&include_adult=true`)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`)
        }
      })
  }
}

export default DataSource;