function  createPost() {
    post = (
        {
            heading : document.getElementById('head').value,
            date : new Date(),
            text : document.getElementById('text').value
        }
    )
    console.log(post.heading);

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:5000';

    Http.open("POST", url + '/post');
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(post));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
   //     document.getElementById('response').innerHTML = Http.responseText;
    }



    
        // console.log(Http.responseText);

return false;
}