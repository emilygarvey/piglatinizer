$( "document" ).ready(function() {

$("#button").click(function(){
    let input = $("input").val();
    let split = input.split(' ');

    split.forEach(function(word) {
        let firstLetter = word.charAt(0);
        if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
            $(".output").append(`${word}ay `);
        } else {
            let newMessage = word.slice(1);
            $(".output").append(`${newMessage}${firstLetter}ay `);
        }
    });

});







});