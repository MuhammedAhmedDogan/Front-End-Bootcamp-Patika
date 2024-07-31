const nameModal = new bootstrap.Modal(document.getElementById("nameModal"));
const submitButton = document.getElementById("submitButton");
const customTexts = document.getElementById("customTexts");

// Sayfa yüklendiğinde modalı görüntüle
window.onload = function () {
    nameModal.show();
    showTime();
    customTexts.style.opacity = "0";
}

// Ekrana tıklandığında modalı görüntüle
document.body.addEventListener("click", function () {
    nameModal.show();
})

// Girilen ismi kaydet
submitButton.addEventListener("click", function (event) {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput) {
        document.getElementById("myName").textContent = nameInput;
    }
    customTexts.style.opacity = "1";
    event.stopPropagation(); // Onayla butonuna tıklandığında body click listener fonksiyonu durduruldu.
});

// Tarihi 1 saniye aralıkla güncelle
setInterval(showTime, 1000)

// Tarihi ayarlayan fonksiyon
function showTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');     // saat
    const minutes = now.getMinutes().toString().padStart(2, '0'); // dakika
    const seconds = now.getSeconds().toString().padStart(2, '0'); // saniye

    // gün
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = daysOfWeek[now.getDay()];

    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("myClock").textContent = time + " " + day;
}

