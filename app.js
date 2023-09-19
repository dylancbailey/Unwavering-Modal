const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const modalText = document.getElementById("modal-text")
const formEl = document.getElementById("consent-form")

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})

formEl.addEventListener("submit", function(e) {
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
` 
})

setTimeout(function() {
    modalEl.style.display = "inline"
}, 1500)