function clickKonversi()
{
    // ketika tombol konversi di klik akan menjalankan fungsi ini
    var celcius = document.getElementById("celcius");
    var valuecelcius = celcius.value; // mendapatkan value dari form celcius
    var fahrenheit = document.getElementById("fahrenheit");
    var hasil = valuecelcius * 1.8 + 32; // mengkonversikan value dari celcius sesuai rumus konversi ke fahrenheit  
    fahrenheit.innerHTML = hasil; // mendapatkan value untuk fahrenheit dari hasil konversi 
    var cara = document.getElementById("cara");
    cara.innerHTML = (`${valuecelcius} * (9/5) + 32 : ${hasil}`) // menampilkan value dari hasil konversi
};
function clickReset(){
    // mereset semua
    window.location.reload();
}