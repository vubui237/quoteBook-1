angular.module("myApp").service("service", function() {
    var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

    this.quota = function () {
        return quotes;
    }
    this.deleteQuote = function(index) {
        return quotes.splice(index,1)
    }
    this.addQuote = function(quote,author) {
        if(quote!="" && author!="") {
            quotes.push({text: quote, author: author})
        }
        else {
            alert("ERR0R nada, squat, zero entered")
        }
        
    }






})