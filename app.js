//Creazione classi
var Startup = /** @class */ (function () {
    function Startup(nome, settoreDiFocus, descrizione, servizi) {
        this.nome = nome;
        this.settoreDiFocus = settoreDiFocus;
        this.descrizione = descrizione;
        this.servizi = servizi;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("La StartUp ".concat(this.nome, " ha ricevuto un incentivo di: \u20AC").concat(incentivo.valoreIncentivo, "."));
    };
    return Startup;
}());
var Incentivo = /** @class */ (function () {
    function Incentivo(codiceIdentificativo, descrizione, valoreIncentivo, criteriEleggibilita) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valoreIncentivo = valoreIncentivo;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    Incentivo.prototype.assegnaAStartUp = function (startup) {
        console.log("L'incentivo n. ".concat(this.codiceIdentificativo, " di \u20AC").concat(this.valoreIncentivo, " \u00E8 stato assegnato a questa StartUp: ").concat(startup.nome, "."));
    };
    return Incentivo;
}());
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttivita = function (startup) {
        console.log("Il cittadino ".concat(this.nome, " ").concat(this.cognome, " partecipa all'attivit\u00E0 di ").concat(this.interessiSportivi[0], " con questa StartUp: ").concat(startup.nome, "."));
    };
    return Cittadino;
}());
//Istanze
var sporter = new Startup("Sporter", "Tech", "Nuova azienda tecnologica di sport italiana", ["Attrezzi sportivi", "Integratori", "Sensori"]);
var salewa = new Startup("Salewa", "sport", "azienda numero uno per la montagna", ["Scarponi", "Abbigliamento tecnico", "Zaini"]);
var incentivoTecnico = new Incentivo("INC503", "supporto tecnico per l'integrazione di nuove funzionalità", 1000, 'app per il fitness');
var incentivoFiscale = new Incentivo("INC429", "Innovazioni fiscali per l'innovazione nel settore sportivo", 3000, "attrezzature sportive innovative");
var mario = new Cittadino("Mario", "Rossi", 40, ["calcio", "rugby", "pallavolo"]);
var serena = new Cittadino("Serena", "Blu", 30, ["paracadutismo", "sci", "arrampicata"]);
sporter.riceviIncentivo(incentivoTecnico);
salewa.riceviIncentivo(incentivoFiscale);
incentivoTecnico.assegnaAStartUp(sporter);
incentivoFiscale.assegnaAStartUp(salewa);
mario.partecipaAttivita(sporter);
serena.partecipaAttivita(salewa);
