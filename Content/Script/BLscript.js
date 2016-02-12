window.onload = function() {
	document.getElementById("myBtn").onclick = myFunction;
}

function myFunction() {
  	alert("Nice! You clicked on the button!");
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
