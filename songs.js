var songs = [];

songs[songs.length] = "Long Distance Call - by Phoenix on the album It's Never Been Like That"
songs[songs.length] = "Legs - by Z ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Something Good Can Work - by Two Door Cinema Club on the album Winter";

var songsDom =  document.getElementById("output");

for (var i = 0; i < songs.length; i++) {
	songsDom.innerHTML += "<div>"+songs[i]+"</div></br>";
}