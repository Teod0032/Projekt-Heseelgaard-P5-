const menuItems = [
    { name: "Glamping" },
    { 
        name: "Fællessalen",
        dropdown: ["Aktiviteter", "Priser", "Udlejning"]
    },
    { 
        name: "Det sker",
        dropdown: ["Events", "Workshops"]
    },
    { name: "Om os" },
    { name: "Kontakt" }
];

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#navbar");

    // 1. Byg menuen
    menuItems.forEach(item => {
        const li = document.createElement("div");
        li.classList.add("nav-item");

        const btn = document.createElement("button");
        btn.textContent = item.name;
        btn.setAttribute("aria-expanded", "false");
        
        // Gør knappen klikbar selvom den ikke har dropdown (valgfrit)
        // Hvis knappen uden dropdown skal være et link, skal vi ændre logikken lidt.
        // Men som det er nu, virker det fint.
        
        li.appendChild(btn);

        // Hvis dropdown findes, lav den
        if (item.dropdown) {
            const drop = document.createElement("div");
            drop.classList.add("dropdown");

            item.dropdown.forEach(text => {
                const a = document.createElement("a");
                a.href = "#"; // Tilføjer dummy link, så det ligner et link
                a.textContent = text;
                drop.appendChild(a);
            });

            li.appendChild(drop);
        }

        nav.appendChild(li);
    });

    // 2. Dropdown funktion (Klik på knapper)
    nav.addEventListener("click", (e) => {
        if (!e.target.matches("button")) return;

        const item = e.target.closest(".nav-item");
        const dropdown = item.querySelector(".dropdown");

        // Hvis der ikke er en dropdown, skal vi måske navigere et sted hen?
        // (Lige nu gør knapper uden dropdown ingenting)
        if (!dropdown) return; 

        // Tjek om den aktuelle menu ALLEREDE er åben, før vi lukker alt
        const isAlreadyOpen = dropdown.classList.contains("open");

        // Luk ALLE åbne menuer først
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
        document.querySelectorAll(".nav-item button").forEach(b => b.setAttribute("aria-expanded", "false"));

        // Hvis den IKKE var åben før, så åbn den nu (toggle effekt)
        if (!isAlreadyOpen) {
            dropdown.classList.add("open");
            e.target.setAttribute("aria-expanded", "true");
        }
    });

    // 3. Luk menuen, hvis man klikker ude på siden (Ekstra luksus)
    document.addEventListener("click", (e) => {
        // Hvis man klikker inde i navbaren, gør ingenting
        if (e.target.closest("#navbar")) return;

        // Ellers luk alt
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
        document.querySelectorAll(".nav-item button").forEach(b => b.setAttribute("aria-expanded", "false"));
    });
});