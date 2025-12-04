 //hjælp fra GEMINI //se promt bilag 

const menuItems = [
    { name: "Glamping" },
    { 
        name: "Fællessalen", 
        
        dropdown: ["Aktiviteter", "Priser", "Udlejning"] 
    },
    { name: "Det sker" },
    { name: "Om os" },
    { name: "Kontakt" }
];


    // variabler og DOM
    const nav = document.querySelector("#navbar");
    let htmlContent = ""; // variable scoope(lokal variabel)

    // kontrolstruktur (loop til at bygge HTML)
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];

        // kontrolstruktur(If/Else)
        if (item.dropdown) {
            
            // undermenuen (loop)
            let subMenuHTML = "";
            for (let j = 0; j < item.dropdown.length; j++) {
                //  operatorer (+)
                subMenuHTML = subMenuHTML + '<a href="#">' + item.dropdown[j] + '</a>';
            }

           
            htmlContent = htmlContent + '<div class="nav-item has-dropdown">'; // åbner containeren
            htmlContent = htmlContent + '<button class="nav-toggle">' + item.name + ' </button>'; // indsætter knappen dynamisk
            htmlContent = htmlContent + '<div class="dropdown">' + subMenuHTML + '</div>'; // indsætter den færdige undermenu
            htmlContent = htmlContent + '</div>'; // lukker containeren
            
        } else {
            
            htmlContent = htmlContent + '<div class="nav-item"><a href="#" class="nav-link">' + item.name + '</a></div>';
        }
    }
    nav.innerHTML = htmlContent;


    // --- her gør jeg knapperne levende 

    const buttons = document.querySelectorAll(".nav-toggle");

    // debugging
    console.log("Antal knapper fundet: " + buttons.length);

    for (let i = 0; i < buttons.length; i++) {
        
        const specificButton = buttons[i];

        specificButton.addEventListener("click", function() {
            
            // debugging (viser præcis hvilken knap der blev trykket på)
            console.log("Du trykkede specifikt på: " + specificButton.innerText);

            // finder menuen lige ved siden af knappen (Next Sibling)
            const dropdownMenu = specificButton.nextElementSibling;

            // operatorer (!) - tjekker menuen IKKE har klassen 'open'
            if (!dropdownMenu.classList.contains("open")) {
                dropdownMenu.classList.add("open");
            } else {
                dropdownMenu.classList.remove("open");
            }
        });
    }
