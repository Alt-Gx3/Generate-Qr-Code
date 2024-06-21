
const urlBase = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let qrImg = document.getElementById("qrImg")
let qrBox = document.getElementById("imgBox")
let qrText = document.getElementById("qrText")

function createQr() {
    qrImg.src = urlBase + qrText.value
    qrBox.classList.add("show-img")
}
