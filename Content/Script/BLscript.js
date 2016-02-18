window.onload = function() {
	document.getElementById("myBtn").onclick = myFunction;
}
	
/* Button function */
function myFunction() {
  	alert("Nice! You clicked on the button!");
}


/* Method for blog Posts NOT IN USE*/
function blogPost(title,tag,summary,content,datePosted,author) {
	this.title = title;
	this.tag = tag;
	this.summary = summary;
	this.content = content;
	this.datePosted = datePosted;
	this.author = author;
};

/* how to input new blog posts NOT IN USE*/
var Post1 = new blogPost("Post1");


/* YouTube iFrame novistry NOT IN USE*/
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
