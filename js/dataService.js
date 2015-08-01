var app = angular.module('quoteBook');
app.service('quoteService', function(){
	var quotes = [];
	if(localStorage.quotes){
		 quotes = JSON.parse(localStorage.quotes)
	} else {
		quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse', category: 'inspirational'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill', category: 'inspirational'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein', category: 'thought provoking'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost', category: 'inspirational'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart', category: 'inspirational'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon', category: 'inspirational'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis', category: 'though provoking'}
	  ];
	}
	
	  
	this.getData = function(){
		return quotes;		
	}
	this.addData = function(newQuote){
		if (newQuote.text && newQuote.author){
			quotes.push(newQuote);
			localStorage.quotes = JSON.stringify(quotes)
		}
		return quotes;		
	}
	this.removeData = function(text){
		for(var i = 0; i < quotes.length; i++){
			if (quotes[i].text === text){
				quotes.splice(i, 1);
				localStorage.quotes = JSON.stringify(quotes)
			}
		}		
	}
})
