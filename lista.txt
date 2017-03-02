var lista = '{"osoba": [{"osoba_imie": "Daniel", "osoba_nazwisko": "Siwczak", "osoba_wiek": "26" }, { "osoba_imie": "Anna", "osoba_nazwisko": "Wysocka", "osoba_wiek": "24" }, { "osoba_imie": "Jacek", "osoba_nazwisko": "Szary", "osoba_wiek": "33" }, { "osoba_imie": "Jan", "osoba_nazwisko": "Kowalski", "osoba_wiek": "66" }, { "osoba_imie": "Beata", "osoba_nazwisko": "Nowak", "osoba_wiek": "44" } ] }';
var jsonData = JSON.parse(lista);
for (var i = 0; i < jsonData.osoba.length; i++) {
    var osoba = jsonData.osoba[i];
    console.log(counter.osoba_imie); 
}