var SmartphoneImpl = /** @class */ (function () {
    function SmartphoneImpl() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    SmartphoneImpl.prototype.ricarica = function (euro) {
        this.carica += euro;
        console.log("Ricasrica effettuata. Credito residuo: ".concat(this.carica, " euro."));
    };
    SmartphoneImpl.prototype.numero404 = function () {
        return "Credito residuo: ".concat(this.carica, " euro.");
    };
    SmartphoneImpl.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SmartphoneImpl.prototype.chiamata = function (min) {
        var costoChiamata = min * this.costoMinuto;
        if (costoChiamata > this.carica) {
            console.log("Credito insufficiente per effettuare la chiamata.");
            return;
        }
        this.carica -= costoChiamata;
        this.numeroChiamate++;
        var id = this.numeroChiamate;
        var durata = min;
        var dataOra = new Date();
        this.registroChiamate.push({ id: id, durata: durata, dataOra: dataOra });
        console.log("Chiamata effettuata. Durata: ".concat(min, " minuti. Credito residuo: ").concat(this.carica, " euro."));
    };
    SmartphoneImpl.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Contatore delle chiamate azzerato.");
    };
    // EXTRA
    SmartphoneImpl.prototype.mostraRegistroChiamate = function () {
        console.log("Registro delle chiamate:");
        this.registroChiamate.forEach(function (chiamata) {
            console.log("ID: ".concat(chiamata.id, ", Durata: ").concat(chiamata.durata, " minuti, Data e ora: ").concat(chiamata.dataOra));
        });
    };
    SmartphoneImpl.prototype.filtraChiamatePerDataOra = function (dataOra) {
        var chiamateFiltrate = this.registroChiamate.filter(function (chiamata) { return chiamata.dataOra.getTime() === dataOra.getTime(); });
        console.log("Chiamate effettuate in data e ora ".concat(dataOra, ":"));
        chiamateFiltrate.forEach(function (chiamata) {
            console.log("ID: ".concat(chiamata.id, ", Durata: ").concat(chiamata.durata, " minuti, Data e ora: ").concat(chiamata.dataOra));
        });
    };
    return SmartphoneImpl;
}());
// Test del funzionamento Smartphone 1
var smartphone1 = new SmartphoneImpl();
smartphone1.ricarica(10);
smartphone1.chiamata(5);
console.log(smartphone1.numero404());
console.log(smartphone1.getNumeroChiamate());
smartphone1.mostraRegistroChiamate();
smartphone1.azzeraChiamate();
smartphone1.filtraChiamatePerDataOra(new Date());
// Test del funzionamento Smartphone 2
var smartphone2 = new SmartphoneImpl();
smartphone2.ricarica(50);
smartphone2.chiamata(15);
console.log(smartphone2.numero404());
console.log(smartphone2.getNumeroChiamate());
smartphone2.mostraRegistroChiamate();
smartphone2.azzeraChiamate();
smartphone2.filtraChiamatePerDataOra(new Date());
// Test del funzionamento Smartphone 3
var smartphone3 = new SmartphoneImpl();
smartphone3.ricarica(15);
smartphone3.chiamata(20);
console.log(smartphone3.numero404());
console.log(smartphone3.getNumeroChiamate());
smartphone3.mostraRegistroChiamate();
smartphone3.azzeraChiamate();
smartphone3.filtraChiamatePerDataOra(new Date());
