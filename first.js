let username = prompt("lütfen kulanici adinizi giriniz.")
let text = document.querySelector("#info")

function tarihSaat() {
    let date = new Date().toLocaleString();
    document.getElementById("date-id").innerHTML = date;
}
setInterval(tarihSaat , 1000);


text.innerHTML = `Merhaba, <strong>${username}</strong> Hoşgeldin! 
<strong>
Kodluyoruz Frontend Web Development Patikası</strong>'nın <strong>Javascript bölümü</strong> 1. Ödevindesin!`
