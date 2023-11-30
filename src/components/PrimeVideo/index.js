// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  console.log(moviesList)
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  console.log(actionMovies)
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="prime-movie-container">
        <h1 className="genre-header">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="genre-header">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
