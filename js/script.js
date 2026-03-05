function showPage(id){

let pages = document.querySelectorAll(".page")

pages.forEach(page => {

page.classList.remove("active")

})

document.getElementById(id).classList.add("active")

}

showPage("home")