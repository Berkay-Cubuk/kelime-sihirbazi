//fonksiyon oluşturduk
function goster() {
    //isim değişkeni oluşturup içine id ile aldığımız değeri atadık
    var isim = document.getElementById("isim").value;
    //soyisim değişkeni oluşturup içine id ile aldığımız değeri atadık
    var soyisim = document.getElementById("soyisim").value;
    //sonuc değişkeni oluşturduk ve id ile sonucu yazdırmak istediğimiz id ile değişkene atadık
    var sonuc = document.getElementById("sonuc");
    //sonuc değişkeninin değerini istediğimiz şekilde ayarladık ve ekrana yansıttık
    sonuc.innerHTML = isim + " " + soyisim;
}