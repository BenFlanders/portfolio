const sliderContainer = document.querySelector(".test-slider");
const slides = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;
const margin = 30;
let itemPerSlide = 0;

const responsive = [
    {breakPoint:{width:0, item:1}},
    {breakPoint:{width:991, item:2}},
]

function load(){
    for(let i=0; i<responsive.length; i++){
        if(window.innerWidth > responsive[i].breakPoint.width){
            itemPerSlide = responsive[i].breakPoint.item;
        }
    }
    start();
}

function start(){
    totalWidth = 0;
    for(let i=0; i<slides.length; i++){
        slides[i].style.width = (containerWidth / itemPerSlide) - margin + "px";
        slides[i].style.margin = margin / 2 + "px";
        totalWidth += containerWidth / itemPerSlide;
    }

    sliderContainer.style.width = totalWidth + "px";
    const slideDots = Math.ceil(slides.length/itemPerSlide);

    for(let i=0; i<slideDots; i++){
        const div = document.createElement("div");
        div.id=i;
        div.setAttribute("onclick", "controlSlide(this)");
        if(i==0){
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }
}

let currentSlide = 0;

function controlSlide(element){
    currentSlide = element.id;
    changeSlide(currentSlide)
}

function changeSlide(currentSlide){
    controlButtons = document.querySelector(".slide-controls").children;

    for(let i = 0; i < controlButtons.length; i++){
        if(controlButtons[i].id==currentSlide){
            controlButtons[i].classList.add("active");
        }
        else{
            controlButtons[i].classList.remove("active");
        }
    }
    sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}

window.onload = load();

window.onscroll = function(){
    const docScrollTop = document.documentElement.scrollTop;

    if(window.innerWidth>767){
        if (docScrollTop>100){
            document.querySelector(".navbar").classList.add("fixed");
        }
        else{
            document.querySelector(".navbar").classList.remove("fixed");
        }
    }
}

const navbar = document.querySelector(".primary-nav");
    a = navbar.querySelectorAll("a");

    a.forEach(function(element){
        element.addEventListener("click", function(){
            for(let i = 0; i < a.length; i++){
                a[i].classList.remove("active")
            }
            this.classList.add("active");
            document.querySelector(".primary-nav").classList.toggle("show");
        })
    })


const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
    document.querySelector(".primary-nav").classList.toggle("show");
})
    

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for(let i = 0; - i < filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function(){
        for(let j = 0; j < filterButtons.length; j++){
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");

        const target = this.getAttribute("data-target");

        for(let k = 0; k < items.length; k++){
            items[k].style.display = "none";
            if(target == items[k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if(target == "all"){
                items[k].style.display = "block";
            }
        }
    })
}