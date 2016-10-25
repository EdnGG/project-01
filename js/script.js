// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Creating the Array of Objects

var quotes = [
    {
        quote : "You can't blame gravity for falling in love.",
        source : " http://www.brainyquote.com/quotes/authors/a/albert_einstein.html",
        citation : "- Albert Einstein.",
        year : "Unknown, ",
        category : "Science"
    },
    {
        quote : "The true sign of intelligence is not knowledge but imagination",
        source : "http://www.brainyquote.com/quotes/authors/a/albert_einstein.html",
        citation : "- Albert Einstein.",
        year : "Unknown, ",
        category : "Science"
    },
    {
        quote : "What we think, we become",
        source : "http://www.brainyquote.com/quotes/authors/b/buddha.html",
        citation : "- Budda.",
        year : "Unknown, ",
        category : "Religion"
    },
    {
        quote : "Even if you are a minority of one, the truth is the truth",
        source : "http://www.brainyquote.com/quotes/authors/m/mahatma_gandhi.html",
        citation : "- Mahatma Gandhi.",
        year : "Unknown, ",
        category : "Religion"
    },
    {
        quote : "No man has a good enough memory to be a successful liar",
        source : "http://www.brainyquote.com/quotes/authors/a/abraham_lincoln.html",
        citation : "- Abraham Lincoln.",
        year : "Unknown, ",
        category : "Politics"
    },
    {
        quote : "We must accept finite disappointment, but never lose infinite hope",
        source : "http://www.brainyquote.com/quotes/authors/m/martin_luther_king_jr.html",
        citation : "- Martin Luther King Jr",
        year : "Unknow, ",
        category : "Hope"
    }
];

// Creating a Funcion "getRandomQuote" 

function getRandomQuote(){
   
// Creating the random number of the array "quotes"

var randomNumber = Math.floor(Math.random() * quotes.length);
var i;
// Creating the loop for the Array

    for ( i = 0; i < quotes.length; i+1){
    var printQuote = quotes[randomNumber].quote;
    var printSource = quotes[randomNumber].source;
    var printCitation = quotes[randomNumber].citation;
    var printYear = quotes[randomNumber].year;
    var printCategory = quotes[randomNumber].category;


    document.getElementById("quote-box").innerHTML = 
    '<p class="quote">' + printQuote + '</p> <p class="source">' + printSource + 
    '<span class="citacion">' + printCitation + '</span> <span class="year">' +
    printYear + '</span> <span class ="category">' + printCategory + '</span> </p>';
    
return quotes;     
     }
}

// Creating a Funcion "printQuote", this function set the time that the color and the quote change 

function printQuote(){
    getRandomQuote();
    setInterval(getRandomQuote, 20000);

var pageColor = ["pink","orange","red","purple","yellow","black"];
    document.body.style.backgroundColor = pageColor [Math.floor(Math.random()* pageColor.length)];
    window.setInterval(pageColor, 20000);

}


