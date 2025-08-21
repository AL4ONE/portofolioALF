const listButton = document.querySelectorAll(".list button");
const selectedClass = document.querySelectorAll(".selected");
const btnHome = document.querySelector("#BtnHome");
const btnProject = document.querySelector("#BtnProject");
const btnArticle = document.querySelector("#BtnArticle");
const btnAchievement = document.querySelector("#BtnAchievement");
const btnContact = document.querySelector("#BtnContact");
const btnAbout = document.querySelector("#BtnAbout");

const homePage = document.querySelector("#indexPage");
const aboutPage = document.querySelector("#aboutPage");
const articlePage = document.querySelector("#articlePage");
const contactPage = document.querySelector("#contactPage");
const achievementPage = document.querySelector("#achievementPage");
const projectPage = document.querySelector("#projectPage");
const textContainer = document.querySelector(".text-container");
const footer = document.querySelector(".footer");
const navbar = document.querySelector("#navbar");


let intHome = setInterval(() => {
    homePage.classList.remove("hide");
    footer.classList.remove("hide");
    navbar.classList.remove("hide");
    clearInterval(intHome); // biar gak jalan terus
}, 7000);

setTimeout(() => {
    textContainer.classList.add("hide");
}, 8000);

const gameOne = document.querySelector(".game1")
listButton.forEach((button) => {
    button.addEventListener("click", () => {
        listButton.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");

    })
})

gameOne.addEventListener("click", () => {
    window.location.href = "games/snake.html";
    e.target = "_blank";
})


function createRestartButton() {
    const restartButton = document.querySelector(".reset");
    const textAnimation = document.querySelector(".text-stroke");

    const setAnimationName = (element, animationName) => {
        if (element) {
            element.style.animationName = animationName;
        }
    };

    restartButton.addEventListener("click", () => {
            setAnimationName(textAnimation, "none");
            requestAnimationFrame(() =>
                setTimeout(() => setAnimationName(textAnimation, ""), 0)
            );
        },
        false
    );
}

// createRestartButton();


btnHome.addEventListener("click", e => {
    homePage.classList.remove('hide')
    aboutPage.classList.add('hide')
    contactPage.classList.add('hide')
    achievementPage.classList.add('hide')
    articlePage.classList.add('hide')
    projectPage.classList.add('hide')
    textContainer.classList.add('hide')

    btnHome.classList.add('selected')
    btnAbout.classList.remove('selected')
    btnContact.classList.remove('selected')
    btnAchievement.classList.remove('selected')
    btnArticle.classList.remove('selected')
    btnProject.classList.remove('selected')
});



btnAbout.addEventListener("click", e => {
    homePage.classList.add('hide')
    aboutPage.classList.remove('hide')
    contactPage.classList.add('hide')
    achievementPage.classList.add('hide')
    articlePage.classList.add('hide')
    projectPage.classList.add('hide')
    textContainer.classList.add('hide')



    btnHome.classList.remove('selected')
    btnAbout.classList.add('selected')
    btnContact.classList.remove('selected')
    btnAchievement.classList.remove('selected')
    btnArticle.classList.remove('selected')
    btnProject.classList.remove('selected')
});


btnContact.addEventListener("click", e => {
    homePage.classList.add('hide')
    aboutPage.classList.add('hide')
    contactPage.classList.remove('hide')
    achievementPage.classList.add('hide')
    articlePage.classList.add('hide')
    projectPage.classList.add('hide')
    textContainer.classList.add('hide')

    
    btnHome.classList.remove('selected')
    btnAbout.classList.remove('selected')
    btnContact.classList.add('selected')
    btnAchievement.classList.remove('selected')
    btnArticle.classList.remove('selected')
    btnProject.classList.remove('selected')
});




btnAchievement.addEventListener("click", e => {
    homePage.classList.add('hide')
    aboutPage.classList.add('hide')
    contactPage.classList.add('hide')
    achievementPage.classList.remove('hide')
    articlePage.classList.add('hide')
    projectPage.classList.add('hide')
    textContainer.classList.add('hide')


    btnHome.classList.remove('selected')
    btnAbout.classList.remove('selected')
    btnContact.classList.remove('selected')
    btnAchievement.classList.add('selected')
    btnArticle.classList.remove('selected')
    btnProject.classList.remove('selected')
});


btnArticle.addEventListener("click", e => {
    homePage.classList.add('hide')
    aboutPage.classList.add('hide')
    contactPage.classList.add('hide')
    achievementPage.classList.add('hide')
    articlePage.classList.remove('hide')
    projectPage.classList.add('hide')
    textContainer.classList.add('hide')


    btnHome.classList.remove('selected')
    btnAbout.classList.remove('selected')
    btnContact.classList.remove('selected')
    btnAchievement.classList.remove('selected')
    btnArticle.classList.add('selected')
    btnProject.classList.remove('selected')
});


btnProject.addEventListener("click", e => {
    homePage.classList.add('hide')
    aboutPage.classList.add('hide')
    contactPage.classList.add('hide')
    achievementPage.classList.add('hide')
    articlePage.classList.add('hide')
    projectPage.classList.remove('hide')
    textContainer.classList.add('hide')


    btnHome.classList.remove('selected')
    btnAbout.classList.remove('selected')
    btnContact.classList.remove('selected')
    btnAchievement.classList.remove('selected')
    btnArticle.classList.remove('selected')
    btnProject.classList.add('selected')
});



const carousel = document.getElementById("carousel");
const cards = carousel.querySelectorAll(".card-contact");
let currentCardIndex = 0;
const totalCards = cards.length;
let rotationInterval = null;
let isPopupOpen = false;

// Dynamische stappen en afstand op basis van scherm
function getResponsiveSettings() {
    const width = window.innerWidth;

    if (width <= 400) return { rotationStep: 45, radius: 160 }; // Zeer compact
    if (width <= 600) return { rotationStep: 50, radius: 200 }; // Mobiel
    if (width <= 768) return { rotationStep: 60, radius: 260 }; // Tablet
    return { rotationStep: 72, radius: 350 }; // Desktop
}

function setCardPositions() {
    const { rotationStep, radius } = getResponsiveSettings();
    cards.forEach((card, i) => {
        const rotateY = i * rotationStep;
        const angleRad = (rotateY * Math.PI) / 180;
        const x = Math.sin(angleRad) * radius;
        const z = Math.cos(angleRad) * radius;
        card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`;
    });
    rotateCarousel(); // herbereken rotatiehoek bij aanpassing
    updateCardSize();
}

function updateCardSize() {
    cards.forEach((card, i) => {
        if (i === currentCardIndex) {
            card.style.transform += " scale(1.2)";
            card.style.zIndex = "1";
        } else {
            card.style.transform = card.style.transform.replace(" scale(1.2)", "");
            card.style.zIndex = "0";
        }
    });
}

function rotateCarousel() {
    const { rotationStep } = getResponsiveSettings();
    const rotateDeg = -rotationStep * currentCardIndex;
    carousel.style.transform = `rotateY(${rotateDeg}deg)`;
}

function startRotation() {
    if (rotationInterval || isPopupOpen) return;
    rotationInterval = setInterval(() => {
        currentCardIndex = (currentCardIndex + 1) % totalCards;
        setCardPositions();
    }, 1400);
}

function stopRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
    }
}

carousel.addEventListener("mouseover", () => {
    if (!isPopupOpen) stopRotation();
});

carousel.addEventListener("mouseout", () => {
    if (!isPopupOpen) startRotation();
});

carousel.addEventListener("touchstart", () => {
    if (!isPopupOpen) stopRotation();
});

carousel.addEventListener("touchend", () => {
    if (!isPopupOpen) startRotation();
});

function showPopup(cardId) {
    const popup = document.getElementById(`popup-${cardId}`);
    if (popup) {
        popup.classList.add("show");
        isPopupOpen = true;
        stopRotation();
    }
}

function closePopup() {
    document.querySelectorAll(".popup").forEach((popup) => {
        popup.classList.remove("show");
    });
    isPopupOpen = false;
    startRotation();
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const cardId = card.dataset.id;
        showPopup(cardId);
    });
});

// Init + resize support
setCardPositions();
startRotation();

window.addEventListener("resize", () => {
    setCardPositions(); // opnieuw positioneren bij vensterverandering
});





// project

        // ====== Data Projects (EDIT DI SINI) =====
    const projects = [
    {
        title: "Pixel Runner",
    image: "images/posterSnakeGame.png",
    languages: ["JavaScript", "HTML", "CSS"],
    link: "#"
            },
    {
        title: "Space Invader Clone",
    image: "https://via.placeholder.com/800x500?text=Space+Invader+Clone",
    languages: ["JavaScript", "Canvas"],
    link: "#"
            },
    {
        title: "2048 Remix",
    image: "https://via.placeholder.com/800x500?text=2048+Remix",
    languages: ["TypeScript", "Vite"],
    link: "#"
            },
    {
        title: "Snake Classic",
    image: "https://via.placeholder.com/800x500?text=Snake+Classic",
    languages: ["C#", ".NET"],
    link: "#"
            },
    {
        title: "Flappy Block",
    image: "https://via.placeholder.com/800x500?text=Flappy+Block",
    languages: ["JavaScript", "HTML"],
    link: "#"
            },
    {
        title: "Chess AI Mini",
    image: "https://via.placeholder.com/800x500?text=Chess+AI+Mini",
    languages: ["Python"],
    link: "#"
            }
    ];

        // ====== Util ======
        const $ = (sel, scope = document) => scope.querySelector(sel);
        const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

    const grid = $('#grid');
    const searchInput = $('#searchInput');
    const languageFilter = $('#languageFilter');
    const resetBtn = $('#resetBtn');
    const projectCount = $('#projectCount');

    function renderCards(list) {
        grid.innerHTML = list.map(p => `
        <article class="card-project">
          <img class="thumb" src="${p.image}" alt="Thumbnail ${p.title}" loading="lazy" />
          <div class="contentProject">
            <div class="row">
              <h3 class="name">${p.title}</h3>
              ${p.link ? `<a class="link" href="${p.link}" target="_blank" rel="noopener">Lihat</a>` : ''}
            </div>
            <div class="meta">${p.languages.map(l => `<span class="badge">${l}</span>`).join('')}</div>
          </div>
        </article>
      `).join('');
    projectCount.textContent = `${list.length} project${list.length !== 1 ? 's' : ''}`;
        }

    function uniqueLanguages(items) {
            return Array.from(new Set(items.flatMap(p => p.languages))).sort((a, b) => a.localeCompare(b));
        }

    function populateLanguageFilter() {
            const langs = uniqueLanguages(projects);
            langs.forEach(l => {
                const opt = document.createElement('option');
    opt.value = l; opt.textContent = l; languageFilter.appendChild(opt);
            });
        }

    function applyFilters() {
            const q = searchInput.value.trim().toLowerCase();
    const lang = languageFilter.value;
            const filtered = projects.filter(p => {
                const matchesText = !q || p.title.toLowerCase().includes(q);
    const matchesLang = !lang || p.languages.includes(lang);
    return matchesText && matchesLang;
            });
    renderCards(filtered);
        }

    // Events
    searchInput.addEventListener('input', applyFilters);
    languageFilter.addEventListener('change', applyFilters);
        resetBtn.addEventListener('click', () => {
        searchInput.value = '';
    languageFilter.value = '';
    applyFilters();
    searchInput.focus();
        });

    // Init
    populateLanguageFilter();
    renderCards(projects);

// ====== Integrasi ke SPA kamu ======
// Pasang id="projects-section" di section ini. Untuk menyembunyikan:
// document.getElementById('projects-section').classList.add('hide')
// Untuk menampilkan: classList.remove('hide')

    // Scroll animation handler
const items = document.querySelectorAll('.timeline-content');

const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add('show');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

