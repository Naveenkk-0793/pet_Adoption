
        // Fetch and process the pet data
        async function loadPets() {
            try {
                const response = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const pets = await response.json();

                const template = document.querySelector("#animal-card");
                const animalsContainer = document.querySelector(".animals");
                
                // Clear loading message
                animalsContainer.innerHTML = "";

                function decideAgeText(age) {
                    if (!age || age < 1) {
                        return "Less than a year old";
                    }
                    return age === 1 ? "1 year old" : `${age} years old`;
                }

                pets.forEach(pet => {
                    const clone = template.content.cloneNode(true);
                    
                    // Set pet name
                    clone.querySelector("h3").textContent = pet.name;
                    clone.querySelector(".name").textContent = pet.name;

                    // Set image
                    const img = clone.querySelector("img");
                    img.src = pet.photo;
                    img.alt = `A ${pet.species} named ${pet.name}`;

                    // Calculate and set age
                    const age = new Date().getFullYear() - pet.birthYear;
                    const ageText = decideAgeText(age);
                    clone.querySelector(".age").textContent = ageText;

                    // Set other details
                    clone.querySelector(".species").textContent = pet.species;
                    clone.querySelector(".description").textContent = pet.description;
                    
                    // Set adoption link
                    const adoptBtn = clone.querySelector(".primary-btn");
                    adoptBtn.href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`;

                    animalsContainer.appendChild(clone);
                });

                // Set up filter functionality after pets are loaded
                setupFilters();
                
            } catch (error) {
                console.error("Error loading pets:", error);
                document.querySelector(".animals").innerHTML = 
                    `<div class="loading" style="color: #d32f2f;">Sorry, we couldn't load our pets right now. Please try again later.</div>`;
            }
        }

        function setupFilters() {
            const filterButtons = document.querySelectorAll(".filter-nav a");
            
            filterButtons.forEach(button => {
                button.addEventListener("click", handleFilterClick);
            });

            // Set initial active state
            document.querySelector('[data-filter="all"]').classList.add("active");
        }

        function handleFilterClick(e) {
            e.preventDefault();
            
            let target = e.target;

            // If clicked on the span inside the link, get the parent link
            if (target.classList.contains("only-large-screen")) {
                target = target.closest("a");
            }

            // Remove active class from all buttons
            document.querySelectorAll(".filter-nav a").forEach(button => {
                button.classList.remove("active");
            });
            
            // Add active class to clicked button
            target.classList.add("active");

            // Filter the pets
            filterPets(target.dataset.filter);
        }

        function filterPets(filterType) {
            const allPets = document.querySelectorAll(".animal-card");
            
            allPets.forEach(petCard => {
                const petSpecies = petCard.querySelector(".species").textContent.toLowerCase();
                
                if (filterType === "all" || petSpecies === filterType) {
                    petCard.style.display = "";
                } else {
                    petCard.style.display = "none";
                }
            });
        }

        // Load pets when page loads
        document.addEventListener("DOMContentLoaded", loadPets);
    