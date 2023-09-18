const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const formEl = document.getElementById("consent-form")

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})

formEl.addEventListener("submit", function(e) {
    e.preventDefault()
})

setTimeout(function() {
    modalEl.style.display = "inline"
}, 1500)