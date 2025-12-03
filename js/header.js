// 1. ARRAYS og OBJEKTER
const menuItems = [
    { name: "Glamping" },
    { 
        name: "Fællessalen", 
        // Array inde i et objekt
        dropdown: ["Aktiviteter", "Priser", "Udlejning"] 
    },
    { name: "Det sker" },
    { name: "Om os" },
    { name: "Kontakt" }
];

document.addEventListener("DOMContentLoaded", function() {
    // 3. VARIABLER og DOM
    const nav = document.querySelector("#navbar");
    let htmlContent = ""; // 4. VARIABLE SCOPE (lokal variabel)

    // 7. KONTROLSTRUKTUR (Loop til at bygge HTML)
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];

        // 7. KONTROLSTRUKTUR (If/Else)
        if (item.dropdown) {
            
            // Byg undermenuen (loop)
            let subMenuHTML = "";
            for (let j = 0; j < item.dropdown.length; j++) {
                // 6. OPERATORER (+)
                subMenuHTML = subMenuHTML + '<a href="#">' + item.dropdown[j] + '</a>';
            }

            // Byg knappen (Brug de klasser din CSS kender: nav-item, has-dropdown, nav-toggle)
            htmlContent = htmlContent + '<div class="nav-item has-dropdown">';
            htmlContent = htmlContent + '<button class="nav-toggle">' + item.name + ' </button>';
            htmlContent = htmlContent + '<div class="dropdown">' + subMenuHTML + '</div>';
            htmlContent = htmlContent + '</div>';
            
        } else {
            // Almindeligt punkt uden dropdown
            htmlContent = htmlContent + '<div class="nav-item"><a href="#" class="nav-link">' + item.name + '</a></div>';
        }
    }
    
    // Indsæt HTML på siden
    nav.innerHTML = htmlContent;


    // --- HER GØR VI KNAPPERNE LEVENDE (Specifikt for hver knap) ---

    // 1. Find alle knapperne
    const buttons = document.querySelectorAll(".nav-toggle");

    // 5. DEBUGGING
    console.log("Antal knapper fundet: " + buttons.length);

    // 2. Sæt en lytter på HVER knap (Loop)
    for (let i = 0; i < buttons.length; i++) {
        
        // Her gemmer vi den specifikke knap i en variabel
        const specificButton = buttons[i];

        specificButton.addEventListener("click", function() {
            
            // 5. DEBUGGING (Viser præcis hvilken knap der blev trykket på)
            console.log("Du trykkede specifikt på: " + specificButton.innerText);

            // Find menuen lige ved siden af knappen (Next Sibling)
            const dropdownMenu = specificButton.nextElementSibling;

            // 6. OPERATORER (!) - Tjekker om menuen IKKE har klassen 'open'
            if (!dropdownMenu.classList.contains("open")) {
                dropdownMenu.classList.add("open");
            } else {
                dropdownMenu.classList.remove("open");
            }
        });
    }
});