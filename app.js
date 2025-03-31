
let content = document.querySelector(".content");
let tab = document.querySelectorAll(".tab");
let side_content = document.querySelectorAll(".side-content");

content.addEventListener('click', (e) => {
    let id = e.target.dataset.id;

    if (id) {
        tab.forEach((btn) => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");

        side_content.forEach((text) => {
            text.classList.remove("active");
        })

        let element = document.getElementById(id);
        element.classList.add("active");
    }
})