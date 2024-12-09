//window.addEventListener("load", function () {

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

const jobSearcher = function (jobTitle, jobLocation) {

  let risultatiDiRicerca = {  // al'inizio creo il mio oggetto vuoto
    results: [],
    counts: 0,
  }

  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i]                   //visto che la mia ricerca va fatta su un array di oggetti, per poter usare for devo "raggruppare" l'oggetto in una variabile singola
    if (job.title.toLowerCase().includes(jobTitle.toLowerCase()) && job.location.toLowerCase().includes(jobLocation.toLowerCase())) {
      risultatiDiRicerca.results.push(job)
      risultatiDiRicerca.counts++

    }       //così controllo che la posizione e la località che cerco, devono essere contenuti entrambi all'interno dei singoli oggetti all'interno di jobs.

  }
  console.log(risultatiDiRicerca) // il console log prima del return
  
  return risultatiDiRicerca

}

//AggiungiRecord Lista
const aggiungiRecord = function () {

  let posizione = document.querySelector('#jobTitle').value
  let localita = document.querySelector('#location').value

  //console.log(" stiamo guardando" +"  " + posizione + " " + localita)

  let listaRisultati = document.querySelector('#listaRisultati')

  const jobSearcherResults = jobSearcher(posizione, localita)
  console.log(jobSearcherResults)//accorpo il risultato di jobSearcher in una variabile per comodità

  for (let i = 0; i < jobSearcherResults.results.lenght; i++) {

    const lavoro = jobSearcherResults.results[i] // accorpo l'indice di jobSearcherResults in una variabile per comodità

    let recordRisultato = document.createElement('li')
    recordRisultato.innerText = lavoro.title + " " + lavoro.location   // le popolo con il risultato della ricerca
    
    console.log(lavoro.title + " " + lavoro.location)


    listaRisultati.appenChild(recordRisultato)     // le inserisco una dopo l'altra
  }
}

const cerca = document.querySelector('#submit')
cerca.addEventListener('click', aggiungiRecord)



/* aggiungiRecord Tabella
const aggiungiRecord = function () {

  let posizione = document.querySelector('#jobTitle').value
  let localita = document.querySelector('#location').value

  console.log(" stiamo guardando" +"  " + posizione + " " + localita)

  let rigaRisultati = document.querySelector('#rigaRisultati')

  const jobSearcherResults = jobSearcher(posizione, localita)
  console.log(jobSearcherResults)//accorpo il risultato di jobSearcher in una variabile per comodità

  for (let i = 0; i < jobSearcherResults.results.lenght; i++) {

    const lavoro = jobSearcherResults.results[i] // accorpo l'indice di jobSearcherResults in una variabile per comodità

    let cellaLavoro = document.createElement('td')
    let cellaLocalita = document.createElement('td') // creo le celle
    

    cellaLavoro.innerText = lavoro.title
    cellaLocalita.innerText = lavoro.location   // le popolo con il risultato della ricerca
    console.log(lavoro.title + " " + lavoro.location)


    rigaRisultati.appenChild(cellaLavoro)     // le inserisco una dopo l'altra
    rigaRisultati.appenChild(cellaLocalita)
  }
}*/


