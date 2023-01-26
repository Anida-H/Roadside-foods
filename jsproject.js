
//ndryshimi i navbarit gjate scroll//
//let header = document.querySelector('header');
//let navbar=document.querySelector('.navbar');


//window.addEventListener('scroll' , () => {
    //header.classList.toggle('active', window.scrollY > 0);
//});



//navbari aktiv
//const li=document.querySelectorAll(".links");
//const sec=document.querySelectorAll("section");

//function activeMenu(){
   // let len=sec.length;
   // while(--len && window.scrollY +97 < sec[len].offsetTop){}
       // li.forEach(ltx => //ltx.classList.remove("active"));
       // li[len].classList.add("active");
//}
//activeMenu();
//window.addEventListener("scroll", activeMenu);



//navbar = document.querySelector(".navbar").querySelectorAll("a");
//console.log(navbar);

//navbar.forEach(element => {
    //element.addEventListener("click" , function(){
        //navbar.forEach(nav=>nav.classList.remove("active"))
        
        //this.classList.add("active");
    //})
    
//});

//ora//
function realtimeora() {
    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    
    var amPm = ( hours < 12 ) ? "AM" : "PM";
    
    hours = (hours > 12) ? hours - 12 : hours;
    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    
    document.getElementById('ora').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeora, 500);
       
}



//search boxi//
const search = document.getElementById("search");
const tedhenateproduktit = document.querySelectorAll(".ah-filtrimi-produkteve h3");

search.addEventListener("keyup", filtroproduktet);

function filtroproduktet(e) {
    const text = e.target.value.toLowerCase();
    tedhenateproduktit.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        };
    });
};


