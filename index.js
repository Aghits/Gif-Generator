function getGiphydata() {

    var query = document.querySelector('#search').value

    var url = "http://api.giphy.com/v1/gifs/search?&api_key=FxnRpt0JiTX9a5NlgogWUxlgQ7zfjs14&q="+query;

    fetch(url)
    .then( data => data.json() )
    .then( res => {
        console.log(res);

        var arrayOfGifs = res.data
        var rand = Math.floor(Math.random() * arrayOfGifs.length)
        var firstItem = arrayOfGifs[rand]
        var giphyData = firstItem.images.original.url

        document.querySelector('#pilik').setAttribute('src', giphyData);
    })
    .catch( error => console.log(error) )
}

document.onkeydown = function(e) {
    if (window.event.keyCode == 13){
        getGiphydata();
    }
}
