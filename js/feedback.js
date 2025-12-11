
let personer = [
  { navn: "Josefine Rasmussen", tekst: "Efter min første time følte jeg mig både afslappet og fyldt med energi – kan varmt anbefales!", billede: "images/p3.jpg", alt:"profilbillede af Josefine"},
  { navn: "Oskar Petersen", tekst:"Stemningen her er helt unik, man føler sig straks velkommen.", billede: "images/p2.jpg" , alt:"profilbillede af Oskar"},
  { navn: "Mathilde Alison", tekst: "Et sted, man bare vil blive ved med at besøge, da der er en indre ro på det dejlige sted.", billede: "images/p1.jpg", alt:"profilbillede af Mathilde" }
];

let boks = document.getElementById("slider-container"); 

if (personer.length>0){

    for (let i = 0; i < personer.length; i++) { 
      let person = personer[i]; 
// Fået hjælp af CHAT GPT og W3-SCHOOL SE JANNES BILAG //
      boks.innerHTML += 
        '<div class="slides">' +
          '<div class="sliderContent">' +
            '<div class="content__profil">' +
              '<img src="' + person.billede + '" alt="'+person.alt+'">' +
            '</div>' +
            '<div class="content__tekst-boks">' +
                '<h3>' + person.navn + '</h3>' +
                '<div class="stars">★★★★★</div>' +
                '<p>' + person.tekst + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
    } 
}

// Fået hjælp af CHAT GPT og W3-SCHOOL SE JANNES BILAG //
function right() {
  let bredde = boks.clientWidth;
  boks.scrollBy({ left: bredde, behavior: 'smooth' });
}

function left() {
  let bredde = boks.clientWidth;
  boks.scrollBy({ left: -bredde, behavior: 'smooth' });
}














// --- HJLÆLP FRA CHAT- GPT & W3 SCHOOL, SE BILAG FOR JANNE ---//