var balance = Number(prompt("Hisobingizda qancha pul borligini sumda kiriting!"));
var dollar =  9433.34;
var euro = 10354.03;
var costTour = dollar * 500 + dollar * 250 + euro * 120;
if (balance >= costTour) {
    alert("Oq yo'l Alisher!")
} else {
    alert(`Siznging hisobingizdagi mablag' ${balance} sum. \nSayohatga borishingiz uchun ${costTour} sum kerak!`)
}