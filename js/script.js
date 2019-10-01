$( "document" ).ready(function() {

$("#button").click(function(){
    $(".output").text('');
    let input = $("input").val();
    let split = input.split(' ');

    split.forEach(function(word) {
        let firstLetter = word.toLowerCase().charAt(0);
        if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
            $(".output").append(`${word}ay `);
        } else if (firstLetter === '') {
            $(".output").append(`Input text`);
        } else {
            let newMessage = word.slice(1);
            $(".output").append(`${newMessage}${firstLetter}ay `);
        }
    });
    $("input").val('');
});







});