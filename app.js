quote = ""

function fetchQuote () {
        fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then((data) => {
            quote = data.quote

            $(".quote").text(quote)
            console.log(quote)
        })
}

fetchQuote()

$(document).ready(fetchQuote);
$("button").click(fetchQuote)