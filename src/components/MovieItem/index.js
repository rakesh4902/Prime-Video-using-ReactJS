// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {id, thumbnailUrl, videoUrl} = movieDetails
  console.log(movieDetails)
  return (
    <div className="movie-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt={id} className="movie-image" />}
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              aria-label="close"
              onClick={() => close()}
            >
              <IoMdClose size={25} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
