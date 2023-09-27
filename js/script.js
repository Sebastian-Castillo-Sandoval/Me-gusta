function likes(elemento){
    let num = document.querySelector("#valor");
    let likes = parseInt(num.innerHTML);
    likes++;
    num.innerHTML = likes;
}