<<<<<<< HEAD
function osoba(imie,nazwisko) {
  this.imie = imie;
  this.nazwisko=nazwisko;
  }
osoba.prototype.sayImie=function() {
    console.log(this.imie);
}
var nowaOsoba=new osoba("Daniel","Siwczak");
=======
function osoba(imie,nazwisko) {
  this.imie = imie;
  this.nazwisko=nazwisko;
  }
osoba.prototype.sayImie=function() {
    console.log(this.imie);
}
var nowaOsoba=new osoba("Daniel","Siwczak");
>>>>>>> bc5edb90a978536c1f5739a23b26fe6e2802ec0e
nowaOsoba.sayImie();