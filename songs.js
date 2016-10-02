var songs = [];
var counter = 0
var songsDom =  document.getElementById("output");
var deleteButton = document.getElementsByClassName("delete");

songs[songs.length] = "Long Distance Call - by Phoenix on the album It's Never Been Like That"
songs[songs.length] = "Legs - by Z ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Something Good Can Work - by Two Door Cinema Club on the album Winter";


for (var i = 0; i < songs.length; i++) {
	counter += 1;
	var songsArray = `<div id="${counter}" class="dom">${songs[i]}</div><button class="delete">Delete</button>`;
	songsDom.innerHTML += `<div id="songWrap">${songsArray}</div>`;
	deleteListener();
}

var songTitle = document.getElementById("title");
var songArtist = document.getElementById("artist");
var songAlbum = document.getElementById("album");
var submitButton = document.getElementById("button");

function printNewSong(){
	counter += 1;
	var title = songTitle.value;
	var artist = songArtist.value;
	var album = songAlbum.value;
	var newSong = `<div id="${counter}" class="dom">${title} - by ${artist} on the album ${album}</div><button class="delete">Delete</button>`;
	songsDom.innerHTML += `<div id="songWrap">${newSong}</div>`;
	pushNewSong();
	deleteListener();
}
function pushNewSong(){

	var newSong = document.getElementById(counter).innerText;
	// console.log("newSong line 40", newSong);
	songs.push(newSong);
}

function enterKeyPressed(keypress){
	if (keypress.which === 13) {
		printNewSong();
		songTitle.value = "";
		songArtist.value = "";
		songAlbum.value = "";
	}
}

document.addEventListener("keypress", enterKeyPressed);
submitButton.addEventListener("click", printNewSong);

var jsonSongs;
function parseJSONSongs() {
	jsonSongs = JSON.parse(this.responseText);
	var currentJson;
	for (var i = 0; i < jsonSongs.songs.length; i++) {
		counter += 1;
		currentJson = jsonSongs.songs[i];

		var printJson = `<div id="${counter}" class="dom">${currentJson.song_title} - by ${currentJson.band} on the album ${currentJson.album}</div><button class="delete">Delete</button>`;
		songsDom.innerHTML += `<div id="songWrap">${printJson}</div>`;
		pushJsonSong();
		deleteListener();
	};
}

function pushJsonSong(){
	var newJsonSong = document.getElementById(counter).innerHTML;
		// console.log("newJsonSong", newJsonSong);
		songs.push(newJsonSong);
}

function deleteListener() {
	for (var i = 0; i < deleteButton.length; i++) {
		deleteButton[i].addEventListener("click", deleteSong);
	}
}

function deleteSong(event) {
	// console.log("this.parentNode.innerText", this.previousSibling.innerText);
	// console.log("this.previousSibling.id", this.previousSibling.id);
	var deleteButt = this.parentNode;
	deleteButt.parentNode.removeChild(deleteButt);
	var arrayIndex = songs.indexOf(this.previousSibling.innerText);
	// console.log("arrayIndex", arrayIndex);
	songs.splice(arrayIndex, 1);
	// console.log("songs", songs);
}

var deleteButton = document.getElementsByClassName("delete");
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", parseJSONSongs);
myRequest.open("GET", "songs.json");
myRequest.send();