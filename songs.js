//===Songs added from orginal array============================
var songs = [];
var counter = 0
var songsDom =  document.getElementById("output");
var deleteButton = document.getElementsByClassName("delete");

songs[songs.length] = "Long Distance Call - by Phoenix on the album It's Never Been Like That"
songs[songs.length] = "Eat That Up, Its Good for You - by Two Door Cinema Club on the album Tourist History";
songs[songs.length] = "Cigarettes In the Theatre - by Two Door Cinema Club on the album Tourist History";
songs[songs.length] = "Undercover Martyn - by Two Door Cinema Club on the album Tourist History";
songs[songs.length] = "Shooting Stars - by Bag Raiders on the album Bag Raiders";
songs[songs.length] = "The Night Out - by Martin Solveig on the album The Night Out";
songs[songs.length] = "Stolen Dance - by Milky Chance on the album Sadnecessary";


for (var i = 0; i < songs.length; i++) {
	counter += 1;
	var songsArray = `<div id="${counter}" class="dom">${songs[i]}</div><button class="delete">Delete</button>`;
	songsDom.innerHTML += `<div id="songWrap">${songsArray}</div>`;
	deleteListener();
}

//===Songs added by user and then added to array==================
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
	var newSong = document.getElementById(counter).innerText;
	songs.push(newSong);
	deleteListener();
	// console.log("songs", songs);
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

//===Songs added from JSON and then added to array===============
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

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", parseJSONSongs);
myRequest.open("GET", "songs.json");
myRequest.send();

//===Songs added from songs2.json and then added to array===============
var json2Songs;
function parseJson2Songs() {
	json2Songs = JSON.parse(this.responseText);
	var currentJson;
	for (var i = 0; i < json2Songs.songs.length; i++) {
		counter += 1;
		currentJson = json2Songs.songs[i];

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

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", parseJson2Songs);
myRequest.open("GET", "songs2.json");
myRequest.send();

//===Delete from DOM/array function for all songs==============
var deleteButton = document.getElementsByClassName("delete");
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
