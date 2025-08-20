const listButton = document.querySelectorAll(".list button");
const selectedClass = document.querySelectorAll(".selected");
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
// const selectedCategory = button.id;

// document.addEventListener("DOMContentLoaded", () => {
//     const path = window.location.pathname.toLowerCase(); // contoh: /about.html
//     const buttons = document.querySelectorAll(".list .button");

//     buttons.forEach(button => {
//         const id = button.id.toLowerCase(); // id tombol: "about", "home", dll

//         // cek apakah URL mengandung id tombol (misal: /about.html cocok sama "about")
//         if (path.includes(id)) {
//             buttons.forEach(btn => btn.classList.remove("selected"));
//             button.classList.add("selected");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.toLowerCase();
    const currentFile = path.split("/").pop(); 

    const navLinks = document.querySelectorAll(".list .button");

    navLinks.forEach(link => {
        const hrefFile = link.getAttribute("href").toLowerCase();
        if (hrefFile === currentFile) {
            link.classList.add("selected");
        } else {
            link.classList.remove("selected");
        }
    });
});

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

createRestartButton();



