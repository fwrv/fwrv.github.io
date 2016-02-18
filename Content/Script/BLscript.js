window.onload = function() {
	document.getElementById("myBtn").onclick = myFunction;

	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];

	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function myFunction() {
  	alert("Nice! You clicked on the button!");
}

/* YouTube iFrame fooling around */

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

}

/* Method for blog Posts */
function blogPost(title,tag,summary,content,datePosted,author) {
	this.title = title;
	this.tag = tag;
	this.summary = summary;
	this.content = content;
	this.datePosted = datePosted;
	this.author = author;
};

/* how to input new blog posts */
var Post1 = new blogPost("Post1");
