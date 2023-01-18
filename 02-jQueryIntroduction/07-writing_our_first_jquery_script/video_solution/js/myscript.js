// bad practice to use jQuery before the page has fully loaded
// this function stops anything happenning until the page has fully loaded
// all js code that needs to happen from the start to go inside this
$(document).ready(function() {
    $('h2').addClass('underline'); // adds a class of underline to all h2 elements
    $('ul').addClass('border');    // adds a class of border to all ul elements
});