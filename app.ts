//Creo le tre interfacce per mezzi, utenti, città
interface IMezzo{
  tipo:string;
  id:number;
  stato:string;

  assegnaUtente(utente:IUtente):void;
}

interface IUtente{
  nome:string;
  cognome:string;
  email:string;
  metodoPagamento:string;

  prenotaMezzo(mezzo:IMezzo):void;
}

interface ICitta{
  nome:string;
  mezziDisponibili:IMezzo[];

  aggiungiMezzo(mezzo:IMezzo):void;
}

//Creo le tre classi che implementano le rispettive interfacce per mezzi, utenti, città
class Mezzo implements IMezzo{
  
  tipo:string;
  id:number;
  stato:string;

  constructor(tipo:string, id:number, stato:string){
    this.tipo = tipo;
    this.id = id;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    console.log(`${this.tipo}, id:${this.id} assegnata a ${utente.nome} ${utente.cognome}`)
    this.stato = 'in uso';   
  }
}

class Utente implements IUtente{
  nome:string;
  cognome:string;
  email:string;
  metodoPagamento:string;

  constructor(nome:string, cognome:string, email:string, metodoPagamento:string){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if(mezzo.stato === 'in uso'){
      console.log('Il mezzo richiesto è già in uso')
    }else{
      mezzo.assegnaUtente(this);
    }
  }
}

class Citta implements ICitta{
  nome:string;
  mezziDisponibili:IMezzo[];

  constructor(nome:string){
    this.nome = nome
    this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
  }
}
//Genero le istanze per ogni città
const roma:ICitta = new Citta('Roma');
const berlino = new Citta('Berlino');
const madrid = new Citta('Madrid');

//Genero le istanze per ogni mezzo
// Leggenda id:
// Id bici = 1xx
// Id monopattino = 2xx
// Id scooter = 3xx

const bici1_roma:IMezzo = new Mezzo('bici', 101 , 'disponibile');                           
const bici2_roma:IMezzo = new Mezzo('bici', 102 , 'disponibile');
const monopattino1_roma:IMezzo = new Mezzo('monopattino', 201, 'disponibile');
const scooter1_roma:IMezzo = new Mezzo('scooter', 301, 'disponibile');

const bici1_berlino:IMezzo = new Mezzo('bici', 103 , 'disponibile');
const bici2_berlino:IMezzo = new Mezzo('bici', 104 , 'disponibile');
const monopattino1_berlino:IMezzo = new Mezzo('monopattino', 202, 'disponibile');
const scooter1_berlino:IMezzo = new Mezzo('scooter', 302, 'disponibile');

const bici1_madrid:IMezzo = new Mezzo('bici', 105 , 'disponibile');
const bici2_madrid:IMezzo = new Mezzo('bici', 106 , 'disponibile');
const monopattino1_madrid:IMezzo = new Mezzo('monopattino', 203, 'disponibile');
const scooter1_madrid:IMezzo = new Mezzo('scooter', 303, 'disponibile');


//Genero le istanze per ogni utente
const user1:IUtente = new Utente('Federica', 'Ascia', 'federicaas@gmail.com', 'PayPal');
const user2:IUtente = new Utente('Nicolò', 'Sanzo', 'sanzo.nico03@libero.com', 'Carta di credito');
const user3:IUtente = new Utente('Carlos', 'Vasquez', 'carlos99@gmail.com', 'Carta di credito');
const user4:IUtente = new Utente('Finn', 'Muller', 'finn_muller@hotmail.com', 'PayPal');
const user5:IUtente = new Utente('Theo', 'Can', 'can.can@gmail.com', 'Carta di credito');


//assegno i veicoli ad ogni città
roma.aggiungiMezzo(bici1_roma);
roma.aggiungiMezzo(bici2_roma);
roma.aggiungiMezzo(monopattino1_roma);
roma.aggiungiMezzo(scooter1_roma);

berlino.aggiungiMezzo(bici1_berlino);
berlino.aggiungiMezzo(bici2_berlino);
berlino.aggiungiMezzo(monopattino1_berlino);
berlino.aggiungiMezzo(scooter1_berlino);

madrid.aggiungiMezzo(bici1_madrid);
madrid.aggiungiMezzo(bici2_madrid);
madrid.aggiungiMezzo(monopattino1_madrid);
madrid.aggiungiMezzo(scooter1_madrid);

//Testo le logiche di prenotazione
user1.prenotaMezzo(bici1_roma);
user2.prenotaMezzo(scooter1_madrid);
user5.prenotaMezzo(monopattino1_madrid);
