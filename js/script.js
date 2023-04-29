const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener('click',(()=>{
    headerEl.classList.toggle("nav-open");
}))

const allLinks = document.querySelectorAll("a:link");

// close nav when clicked on the nav item links
allLinks.forEach((link)=> {
    link.addEventListener("click", function (e) {
        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
          headerEl.classList.toggle("nav-open");
      });

    })
// sticky navigation
// make the navigation STICKY only after the HERO SECTION
// 

const sectionHeroEl = document.querySelector(".section-hero")
const obs = new IntersectionObserver( function(entries){
    const ent = entries[0];
    // add sticky class when its out of viewport and not itersecting
    if(!ent.isIntersecting){
        document.body.classList.add("sticky")
    }

    if(ent.isIntersecting){
        document.body.classList.remove("sticky")
    }

},{
    //in the viewport
    root:null,
    threshold: 0
});

obs.observe(sectionHeroEl)