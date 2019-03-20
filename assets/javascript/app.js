// let's get started!
$(function () {
    makeButtons(topics, "searchButton", "#gif-buttons")
    console.log("First Function: Did it work?")
});
var topics = ["zelda", "nintendo", "video games", "captain america", "marvel", "avengers"];

// function to create a button for each string in topics
//      for loop to append a button
function makeButtons() {
    $("#gif-buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        // Adding a class to our button
        a.addClass("gif-buttons");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Append
        $("#gif-buttons").append(a);
        console.log("Yay! you called makeButtons!!");
    }

    console.log(a);
}

$(document).on('click', '.searchButton', function () {
    var dataType = $(this).data('type');
    var bcApiKey = "Q4S0rOrLTGQHSEql1EOhvcM6Fi2S5UQi";
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${dataType}api_key=${bcApiKey}&limit=10`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < topics.length; i++) {
            var gifresponseDiv = response.data[i].rating;
            var rating = response.data[i].rating;
            var ratingText = $('<p>').text("Rating: " + ratingText);

            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var gifImage = $('<img>');
            gifImage.addClass("clickable-gif");
            gifImage.attr("src", still);
            gifImage.attr("data-still", still);
            gifImage.attr("data-animated", animated);
            gifImage.attr("data-state", "still");
            $("#new-gifs").append(searchDiv);
        }

    });
});

$(document).on('click', '.Image', function () {
    var gifState = $(this).data('state');
    if (gifState === 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

// $(document).on("click", ".gif-button", displayTopicInfo);

// makeButtons();

// 

// on click(button): 10 static, not animated images from giphy API
//      every gif should display: rating
//              ((see movie poster activity))

// on click(gif): play gif
//      if clicked again, stop/pause gif