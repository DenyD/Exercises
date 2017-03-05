function osoba(imie,nazwisko) {
  this.imie = imie;
  this.nazwisko=nazwisko;
  }
osoba.prototype.sayImie=function() {
    console.log(this.imie);
}
var nowaOsoba=new osoba("Daniel","Siwczak");
nowaOsoba.sayImie();