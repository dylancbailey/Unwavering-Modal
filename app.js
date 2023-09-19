const modalEl       = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const modalText     = document.getElementById("modal-text")
const formEl        = document.getElementById("consent-form")

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})

formEl.addEventListener("submit", function(e) {
    e.preventDefault()

    const formData = new FormData(formEl)
    const formName = formData.get("formName")

    modalText.innerHTML = 
    `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>
    ` 
    setTimeout(() => {
        document.getElementById("uploadText").innerText = "Making the sale..."
    }, 1500);

    setTimeout(() => {
        document.getElementById("modal-inner").innerHTML = 
        `
        <h2>Thanks <span class="modal-display-name">${formName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
    }, 3000);

})

setTimeout(function() {
    modalEl.style.display = "inline"
}, 1500)