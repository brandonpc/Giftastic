// let's get started!
$(function)() {

}
var topics = ["zelda", "nintendo", "video games", "captain america", "marvel", "avengers"];

// function to create a button for each string in topics
//      for loop to append a button
function makeButtons() {
    for (var i = 0; i < topics.length; i++)
        var a = $("<button>");
    // Adding a class to our button
    a.addClass("gif-button");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Append
    $("#buttons-view").append(a);
}

// function topicInfo() {
//     var bcApiKey = "Q4S0rOrLTGQHSEql1EOhvcM6Fi2S5UQi";
//     var topicVar = $(this).attr("data-name");
//     var queryURL = `https://api.giphy.com/v1/gifs/search/random?api_key=${bcApiKey}&limit=10&offset=0&rating=G&lang=en`;

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log("Something should be here")
//         console.log(response);
//         var buttonDiv = $("<div class='button'>");
//         //      ***MAKE DA GIF IMG***
//         // var gifURL = response.????
//         // var gifPic = $("<img>").attr("src", )

//         //      ***MAKE DA RATING***
//         // var rating = response.(what???)
//         // var ratingText = $("<p>").text("Rating: " + rating);
//         // movieDiv.append(ratingText);
//         $("#buttons-view").prepend(movieDiv);


//     })

// }
// topicInfo();

// on click(button): 10 static, not animated images from giphy API
//      every gif should display: rating
//              ((see movie poster activity))

// on click(gif): play gif
//      if clicked again, stop/pause gif