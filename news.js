(function(){
    document.addEventListener("DOMContentLoaded",function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=a10abf8719cb4d5bbe749a07ab9ba38b', false);
        xhr.send();
        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {

            var otvet=JSON.parse( xhr.responseText);
            var articles=otvet.articles;
            var img=document.getElementById("services-img");
            var title=document.getElementById("services-title");
            var text=document.getElementById("services-text");

            var img1=document.getElementById("services-img1");
            var title1=document.getElementById("services-title1");
            var text1=document.getElementById("services-text1");

            var img2=document.getElementById("services-img2");
            var title2=document.getElementById("services-title2");
            var text2=document.getElementById("services-text2");

            title.innerHTML=articles[0].title;
            img.src = articles[0].urlToImage;
            text.innerHTML=articles[0].description;

            title1.innerHTML=articles[1].title;
            img1.src = articles[1].urlToImage;
            text1.innerHTML=articles[1].description;

            title2.innerHTML=articles[2].title;
            img2.src = articles[2].urlToImage;
            text2.innerHTML=articles[2].description;
        }
    });
})();