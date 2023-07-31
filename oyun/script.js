let harf;

let isim,sehir,hayvan,bitki,esya;
    
isim = document.getElementById("isim");
sehir = document.getElementById("sehir");
hayvan = document.getElementById("hayvan");
bitki = document.getElementById("bitki");
esya = document.getElementById("esya");
function baslat(){
    setTimeout(function(){
        alert("1 dk Doldu");
        isim.value= "";
        sehir.value= "";
        hayvan.value= "";
        esya.value= "";
        bitki.value= "";
        document.getElementsByTagName("h3")[1].innerHTML="Oyna";
      
    },60000);
    
    const harfler=["A","B","C","D","E"];
    let random=Math.round(Math.random()*4);
    
    harf=harfler[random];
    
     document.getElementById("s1").innerHTML=harf;

    
}

  function bitir(){
      if (!harf==""){
      let puan=0;
       let isim1,sehir1,hayvan1,esya1,bitki1;
       isim1=isim.value; sehir1=sehir.value; hayvan1=hayvan.value; esya1=esya.value; bitki1=bitki.value;
       fetch("veri.json")
       .then(response => response.json())
       .then(veri => {
           var jsnesne = veri;
         var dizi=jsnesne[harf];
           if (dizi.includes(isim1)){
               puan=puan+10;
               console.log(puan);
           }
          if (dizi.includes(sehir1)){
               puan=puan+10;
               console.log(puan);
           }
         if (dizi.includes(hayvan1)){
               puan=puan+10;
               console.log(puan);
           }
         if (dizi.includes(esya1)){
               puan=puan+10;
               console.log(puan);
           }
            if (dizi.includes(bitki1)){
               puan=puan+10;
               console.log(puan);
           }
           alert(puan +  "   puan Aldın");
           isim.value= "";
           sehir.value= "";
           hayvan.value= "";
           esya.value= "";
           bitki.value= "";
           document.getElementsByTagName("h3")[1].innerHTML="Oyna";
      
       })
    }
    else{
        alert("Başlatınız.");
    }
  }

