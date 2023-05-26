interface Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
  
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }
  
  class SmartphoneImpl implements Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: { id: number, durata: number, dataOra: Date }[];
  
    constructor() {
      this.carica = 0;
      this.numeroChiamate = 0;
      this.costoMinuto = 0.20;
      this.registroChiamate = [];
    }
  
    ricarica(euro: number): void {
      this.carica += euro;
      console.log(`Ricasrica effettuata. Credito residuo: ${this.carica} euro.`);
    }
  
    numero404(): string {
      return `Credito residuo: ${this.carica} euro.`;
    }
  
    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }
  
    chiamata(min: number): void {
      const costoChiamata = min * this.costoMinuto;
      if (costoChiamata > this.carica) {
        console.log("Credito insufficiente per effettuare la chiamata.");
        return;
      }
  
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      const id = this.numeroChiamate;
      const durata = min;
      const dataOra = new Date();
      this.registroChiamate.push({ id, durata, dataOra });
  
      console.log(`Chiamata effettuata. Durata: ${min} minuti. Credito residuo: ${this.carica} euro.`);
    }
  
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
      console.log("Contatore delle chiamate azzerato.");
    }

    
    // EXTRA
    mostraRegistroChiamate(): void {
      console.log("Registro delle chiamate:");
      this.registroChiamate.forEach(chiamata => {
        console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data e ora: ${chiamata.dataOra}`);
      });
    }
  
    filtraChiamatePerDataOra(dataOra: Date): void {
      const chiamateFiltrate = this.registroChiamate.filter(chiamata => chiamata.dataOra.getTime() === dataOra.getTime());
      console.log(`Chiamate effettuate in data e ora ${dataOra}:`);
      chiamateFiltrate.forEach(chiamata => {
        console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data e ora: ${chiamata.dataOra}`);
      });
    }
  }
  
  // Test del funzionamento Smartphone 1
  const smartphone1 = new SmartphoneImpl();
  smartphone1.ricarica(10);
  smartphone1.chiamata(5); 
  console.log(smartphone1.numero404()); 
  console.log(smartphone1.getNumeroChiamate());
  smartphone1.mostraRegistroChiamate();
  smartphone1.azzeraChiamate(); 
  smartphone1.filtraChiamatePerDataOra(new Date()); 

  // Test del funzionamento Smartphone 2
  const smartphone2 = new SmartphoneImpl();
  smartphone2.ricarica(50);
  smartphone2.chiamata(15);
  console.log(smartphone2.numero404()); 
  console.log(smartphone2.getNumeroChiamate()); 
  smartphone2.mostraRegistroChiamate(); 
  smartphone2.azzeraChiamate(); 
  smartphone2.filtraChiamatePerDataOra(new Date()); 

  // Test del funzionamento Smartphone 3
  const smartphone3 = new SmartphoneImpl();
  smartphone3.ricarica(15); 
  smartphone3.chiamata(20); 
  console.log(smartphone3.numero404()); 
  console.log(smartphone3.getNumeroChiamate()); 
  smartphone3.mostraRegistroChiamate(); 
  smartphone3.azzeraChiamate();
  smartphone3.filtraChiamatePerDataOra(new Date());
  

  