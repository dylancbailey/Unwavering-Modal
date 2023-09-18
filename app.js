const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})

setTimeout(function() {
    modalEl.style.display = "inline"
}, 1500)