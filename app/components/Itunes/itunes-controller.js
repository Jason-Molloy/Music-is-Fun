import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
  console.log(songs)
  //YOUR CODING STARTS HERE
  let template = ''
  songs.forEach(song => {
    template += `
    <div class="container-fluid">
      <div class="row">
        <div class="col card">
          <div class="row">
            <img src="${song.albumArt}">
            <h3>${song.title} - ${song.artist}</h3>
          </div>
          <div class="row">
            <div class="col-10">
              <h5>Album: ${song.collection} - Download Album: ${song.price}</h5>
            </div>
            <div class="col-2">
              <audio controls>
                <source src="${song.preview}">
              </audio>
            </div>
          </div>
        </div>
      </div>  
    </div>
    `
  })
  document.getElementById("songs").innerHTML = template



}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController