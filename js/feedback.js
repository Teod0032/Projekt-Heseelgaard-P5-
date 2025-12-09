
let personer = [
  { navn: "Josefine Rasmussen", tekst: "Efter min første time følte jeg mig både afslappet og fyldt med energi – kan varmt anbefales!", billede: "images/p3.jpg", alt:"profilbillede af Josefine"},
  { navn: "Oskar Petersen", tekst:"Stemningen her er helt unik, man føler sig straks velkommen.", billede: "images/p2.jpg" , alt:"profilbillede af Oskar"},
  { navn: "Mathilde Alison", tekst: "Et sted, man bare vil blive ved med at besøge, da der er en indre ro på det dejlige sted.", billede: "images/p1.jpg", alt:"profilbillede af Mathilde" }
];

let boks = document.getElementById("slider-container"); // er dette en global ... ? tager tager først fat i dette scope//

if (personer.length>0){

    for (let i = 0; i < personer.length; i++) { // for så er dette ... //
      let person = personer[i]; //lokal//

      boks.innerHTML += // hernede putter jeg så det indhold i min tidliger letboks? derfor skriver jeg boks for ellers ved jeg ikke hvor jeg skal putte mit HTML dokument ned i //
        '<div class="slides">' +
          '<div class="sliderContent">' +
            '<div class="content__profil">' +
              '<img src="' + person.billede + '" alt="'+person.alt+'">' + // skal jeg bruge alt//
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



// --- HJLÆLP FRA CHAT- GPT & W3 SCHOOL, SE BILAG ---//
function right() {
  let bredde = boks.clientWidth;
  boks.scrollBy({ left: bredde, behavior: 'smooth' });
}

function left() {
  let bredde = boks.clientWidth;
  boks.scrollBy({ left: -bredde, behavior: 'smooth' });
}