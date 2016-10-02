var songs = [];
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
	songsDom.innerHTML += `<div class="dom">${songs[i]}<button class="delete">Delete</button></div>`;
	deleteListener();
}

var songTitle = document.getElementById("title");
var songArtist = document.getElementById("artist");
var songAlbum = document.getElementById("album");
var submitButton = document.getElementById("button");
var counter = 0

function printNewSong(){
	counter += 1;
	var title = songTitle.value;
	var artist = songArtist.value;
	var album = songAlbum.value;
	var newSong = `<div id="${counter}" class="dom">${title}" - by ${artist} on the album ${album}`;
	newSong += `<button class="delete">Delete</button></div>`;
	songsDom.innerHTML += newSong;
	pushNewSong();
	deleteListener();
}
function pushNewSong(){
	var newSong = document.getElementById(counter).innerHTML;
	console.log("newSong", newSong);
	songs.push(newSong);
	console.log("pushed new songs", songs);
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

		var printJson = `<div id="${counter}" class="dom">${currentJson.song_title} - by ${currentJson.band} on the album ${currentJson.album}`;
		printJson += `<button class="delete">Delete</button></div>`;
		songsDom.innerHTML += printJson;
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

function deleteSong() {
	console.log("this", this.parentNode.innerHTML);
	console.log("songs index", indexOf(this));
	var parentDiv = this.parentNode;
	this.parentNode.parentNode.removeChild(parentDiv);
	// songs.splice(0, this.parentNode.innerHTML);
	arrayLook();
}
function arrayLook() {
	console.log("songs", songs);
}

var deleteButton = document.getElementsByClassName("delete");
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", parseJSONSongs);
myRequest.open("GET", "songs.json");
myRequest.send();