var plusbtn = document.querySelector(".plus-btn")
var pageoverlay = document.querySelector(".page-overlay")
var creatbook = document.querySelector(".creatbook")
var bookcancle = document.querySelector(".book-cancle")


plusbtn.addEventListener("click",function(){
    pageoverlay.style.display="block"
    creatbook.style.display="block"
})

bookcancle.addEventListener("click", function(event){
    event.preventDefault()
    pageoverlay.style.display="none"
    creatbook.style.display="none"
})

var continer= document.querySelector(".continer")
var bookadd = document.querySelector(".book-add")
var title = document.querySelector(".crt-book-title")
var author = document.querySelector(".crt-book-author")
var description = document.querySelector(".crt-book-description")

bookadd.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-continer")
    div.innerHTML = `<h2 id="book-header">${title.value}</h2>
    <h3 id="book-author">${author.value}</h3>
    <p id="book-description">${description.value}</p>
    <button id="book-delete-btn" onclick="dlt(event)">delete</button>`
    continer.append(div)
    pageoverlay.style.display="none"
    creatbook.style.display="none"

})

function dlt(event){
    event.target.parentElement.remove()

}