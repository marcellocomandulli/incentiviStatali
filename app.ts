//Creazione interfacce
interface IStartup {
  nome: string;
  settoreDiFocus: string;
  descrizione: string;
  servizi: string[];

  riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: number;
  criteriEleggibilita: string;

  assegnaAStartUp(startup: IStartup): void;
}

interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];

  partecipaAttivita(startup: IStartup): void;
}

//Creazione classi
class Startup implements IStartup {
  constructor (public nome: string,
    public settoreDiFocus: string,
    public descrizione: string,
    public servizi: string[]
  ){}
  
  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(`La StartUp ${this.nome} ha ricevuto un incentivo di: €${incentivo.valoreIncentivo}.`);
  }
}

class Incentivo implements IIncentivo {
  constructor (public codiceIdentificativo: string,
    public descrizione: string,
    public valoreIncentivo: number,
    public criteriEleggibilita: string
  ){}
  
  assegnaAStartUp(startup: IStartup): void {
    console.log(`L'incentivo n. ${this.codiceIdentificativo} di €${this.valoreIncentivo} è stato assegnato a questa StartUp: ${startup.nome}.`)
  }
}

class Cittadino implements ICittadino {
  constructor (public nome: string,
    public cognome: string,
    public eta: number,
    public interessiSportivi: string[]){}
  
  partecipaAttivita(startup: IStartup): void {
    console.log(`Il cittadino ${this.nome} ${this.cognome} partecipa all'attività di ${this.interessiSportivi[0]} con questa StartUp: ${startup.nome}.`);
  }
}

//Istanze
const sporter = new Startup ("Sporter", "Tech", "Nuova azienda tecnologica di sport italiana", ["Attrezzi sportivi", "Integratori", "Sensori"])

const salewa = new Startup ("Salewa", "sport", "azienda numero uno per la montagna", ["Scarponi", "Abbigliamento tecnico", "Zaini"])


const incentivoTecnico = new Incentivo("INC503", "supporto tecnico per l'integrazione di nuove funzionalità", 1000, 'app per il fitness');

const incentivoFiscale = new Incentivo("INC429", "Innovazioni fiscali per l'innovazione nel settore sportivo", 3000, "attrezzature sportive innovative")


const mario = new Cittadino("Mario", "Rossi", 40, ["calcio", "rugby", "pallavolo"])
const serena = new Cittadino("Serena", "Blu", 30, ["paracadutismo", "sci", "arrampicata"])

sporter.riceviIncentivo(incentivoTecnico)
salewa.riceviIncentivo(incentivoFiscale)

incentivoTecnico.assegnaAStartUp(sporter)
incentivoFiscale.assegnaAStartUp(salewa)

mario.partecipaAttivita(sporter)
serena.partecipaAttivita(salewa)