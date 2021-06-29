// nav
const toggleNav = document.querySelector(".nav-toggle");
toggleNav.addEventListener('click', togglerNav)
function togglerNav(){
    toggleNav.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open")

}
document.addEventListener('click', (e)=>{
    if(e.target.closest(".nav-item")){
        togglerNav()
    }
})


// sticky header

window.addEventListener('scroll', ()=>{
    // console.log(this.pageYOffset);
    if(this.pageYOffset>60){
        document.querySelector(".header").classList.add("sticky")
    }
    else{
        document.querySelector(".header").classList.remove("sticky")

    }
})

// menu tabs

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener('click', (e)=>{
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
        const target =e.target.getAttribute('data-target');
        document.querySelector(".menu-tab-item.active").classList.remove("active");
        e.target.classList.add("active");
       const menuSection = document.querySelector(".menu-section");
       menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
       menuSection.querySelector(target).classList.add("active")
       
    }
})