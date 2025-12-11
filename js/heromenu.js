// Hej dette er min kode til hero'en på forsiden, jeg refererer til kildereferencen/promtbilag som er vedhæftet i zip-filen. 

console.log("Script start: heromenu.js indlæst");

let heroSection = document.querySelector('.hero');
let leftItem = document.querySelector('.hero-item:first-child');
let rightItem = document.querySelector('.hero-item:last-child');


let alleItems = [leftItem, rightItem];


let styles = {
    venstreStor: 'polygon(0 0, 62% 0, 52% 100%, 0% 100%)', 
    venstreLille: 'polygon(0 0, 48% 0, 38% 100%, 0% 100%)', 
    standard: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)'    
};

for (let i = 0; i < alleItems.length; i++) {

    let aktueltItem = alleItems[i]; 

    aktueltItem.addEventListener('mouseover', function() {

        if (window.innerWidth <= 768) {
            console.log("Mobil-visning: Animation deaktiveret");
            return; 
        }
        
        if (i === 0) {
            console.log("If- kører: Mus på venstre side"); 
            
            alleItems[0].style.clipPath = styles.venstreStor;

        } else {
            console.log("Else- kører: Mus på højre side"); 
            
        
            alleItems[0].style.clipPath = styles.venstreLille;
        }
    });
}


heroSection.addEventListener('mouseleave', function() {
    console.log("Resetter layout"); 
    
   
    alleItems[0].style.clipPath = styles.standard;
});