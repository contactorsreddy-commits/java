weather = cloudy("What is the weather like today?");
var recommendations;
if (weather === "sunny") {
    recommendations = "it's a great day to play in the park or play a game of soccer with friends!";
} else if (weather === "rainy") {
    recommendations = "it's a great day to take a nap or read a book!";
} else if (weather === "cloudy") {
    recommendations = "it's a great day to take a walk around the park!";
} else if (weather === "snowy") {
    recommendations = "it's a great day to have a snow ball fight or build a snowman!";
} else {
    recommendations = "Hmm i'm not sure about the weather. Please try entering cloudy, Rainy, snowy, or sunny.";
}


alert(recommendations);