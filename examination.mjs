import {topics} from './data.mjs';

// Examinatorns besked, återgivet av användaren 2026-09-28. Originalmejlet publiceras inte.
export const examInfo={date:'2026-11-05',time:'08.15–10.00',room:'1103N2',source:'Examinatorns information: Moment 5:8 EXAMINATION',received:'2026-09-28'};
export const examParts=[
 {id:'fragor',title:'Frågedel',threshold:80,count:12,description:'12 slumpade frågor: begrepp, kunskap, handhavande och scenarier.'},
 {id:'nationell',title:'Nationell bokstavering',threshold:100,count:29,description:'Alla 29 bokstäver, A–Ö, i slumpad ordning.'},
 {id:'internationell',title:'Internationell bokstavering',threshold:100,count:29,description:'Alla 29 bokstäver, inklusive kursens Å, Ä och Ö, i slumpad ordning.'},
 {id:'trafikuttryck',title:'Användning av trafikuttryck',threshold:100,count:9,description:'9 situationer där du väljer och använder rätt trafikuttryck.'},
];
export const partById=id=>examParts.find(p=>p.id===id);
const characters=[...'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'];
const national='Adam Bertil Cesar David Erik Filip Gustav Helge Ivar Johan Kalle Ludvig Martin Niklas Olof Petter Qvintus Rudolf Sigurd Tore Urban Viktor Wilhelm Xerxes Yngve Zäta Åke Ärlig Östen'.split(' ');
const international=['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','X-ray','Yankee','Zulu','Alpha Alpha','Alpha Echo','Oscar Echo'];
const alphabet=(part,words,prefix,page)=>characters.map((character,i)=>({
 id:`${prefix}-${String(i+1).padStart(2,'0')}`,topic:'04',part,kind:'bokstavering',
 prompt:`Skriv bokstaveringsordet för ${character} med ${part==='nationell'?'nationell':'internationell'} bokstavering.`,
 answer:[words[i]],sources:[{title:'Bokstavering.pdf',location:`s. ${page}: ${part}a bokstaveringsalfabetet`}],
}));
const traffic=[
 ['kom','Du har talat klart för tillfället och väntar på svar. Vilket trafikuttryck avslutar ditt meddelande? Skriv ett kort exempel med platshållare.',
  ['KOM lämnar över ordet när du väntar på svar och kommunikationen kan fortsätta.','Exempel: ”[Mottagare] från [egen anropssignal]. Kan ni bekräfta mötesplatsen, kom?”'],2],
 ['slut-kom','Du har själv initierat ett individsamtal med RLC och har inget mer att tillföra. Hur avslutar du din rapport, och vem avslutar samtalet?',
  ['Du avslutar din rapport med SLUT KOM. Det signalerar att du inte har mer att tillföra.','RLC avslutar samtalet med KLART SLUT. Exempel på din sista mening: ”[Egen anropssignal], vi är klara på plats, slut kom.”'],2],
 ['klart-slut','Ett samtal ska avslutas. Vem använder det avslutande trafikuttrycket i ett samtal med RLC respektive mellan två patruller? Skriv uttrycket.',
  ['KLART SLUT avslutar samtalet. Vid samtal med RLC är det alltid RLC som säger det enligt kursmaterialet.','Mellan patruller avslutar den som initierade samtalet med KLART SLUT.'],2],
 ['uppfattat','Du har förstått meddelandet klart och tydligt. Hur bekräftar du detta så att det framgår vem som förstått?',
  ['UPPFATTAT bekräftar att informationen har förståtts. Ange alltid vem som uppfattat den.','Exempel: ”[Egen anropssignal], uppfattat, kom.”'],3],
 ['repetera','Du hörde platsnamnet men missade mötestiden. Formulera en begäran så att bara det oklara upprepas.',
  ['Använd REPETERA och precisera att det är mötestiden du behöver höra igen.','Exempel: ”[Egen anropssignal], repetera mötestiden, kom.”'],3],
 ['vanta','Du behöver ett kort ögonblick för att kontrollera en uppgift med kollegan. Uppehållet är så kort att inget nytt anrop behövs. Vad säger du?',
  ['VÄNTA markerar ett kort uppehåll när du behöver lite tid.','Återkom därefter med uppgiften. Exempel: ”[Egen anropssignal], vänta.”'],3],
 ['fran','Du anropar en annan patrull. Skriv inledningen med platshållare och det trafikuttryck som visar vem meddelandet kommer från.',
  ['Mottagaren kommer först, därefter FRÅN och avsändaren.','Exempel: ”[Mottagarens anropssignal] från [egen anropssignal], kom.” Ordningen gäller även på samverkanstalgrupper.'],4],
 ['fortur','På en insatstalgrupp pågår ett samtal. Du behöver bryta in med information som är mer brådskande än det som avhandlas. Vilket talat uttryck använder du, och hur inleder du?',
  ['Använd det talade trafikuttrycket FÖRTUR. Exempel: ”Förtur, [mottagare] från [egen anropssignal], [brådskande information], kom.”','Här avses att bryta in i pågående radiotrafik. Det är inte samma handgrepp som terminalens förtursbegäran till RLC.'],4],
 ['mittat','Du råkade säga ”östra infarten”, men menade ”västra infarten”. Rätta ditt eget meddelande med ett trafikuttryck.',
  ['Använd MITTÅT eller FEL och säg därefter den korrekta uppgiften.','Exempel: ”[Egen anropssignal], östra infarten, mittåt, västra infarten, kom.”'],4],
];
export const focusedQuestions=[...alphabet('nationell',national,'bn',3),...alphabet('internationell',international,'bi',4),...traffic.map(([id,prompt,answer,page])=>({id:`tu-${id}`,topic:'01',part:'trafikuttryck',kind:'trafikuttryck',prompt,answer,sources:[{title:'Trafikuttryck.pdf',location:`s. ${page}`}]}))];

const practical=(id,title,ids,task,checks,exercise)=>({id,title,topics:ids,task,checks,exercise,sources:ids.flatMap(id=>topics.find(t=>t.id===id).sources)});
export const practicalTasks=[
 practical('p1','Knappars funktioner och programmering',['06','15','27'],
  'Utgå från handterminalens normalläge. Visa knapparnas funktioner och skilj mellan kort och långt tryck enligt den terminal och programmering som används i utbildningen.',
  ['Förklara PTT, navigering, val och återgång samt relevanta snabbfunktioner.','Visa vilka knappar eller direktval som får programmeras och hur du kontrollerar tilldelningen.','Beskriv förtursfunktionen utan att skicka en skarp begäran; följ lärarens övningsanvisning.'],null),
 practical('p2','Programmering direktval',['15'],
  'Programmera ett av läraren anvisat direktval på handterminalen. Kontrollera därefter att det öppnar avsedd funktion eller talgrupp.',
  ['Kontrollera vilka direktval som är programmerbara och vilka begränsningar som gäller.','I kursunderlaget: DV1 skanninglista, DV9 RAPS, DV7 talgrupp eller Egen. Lokal programmering har företräde.','Prova valet i övningsmiljön och återställ enligt lärarens instruktion.'],'e4'),
 practical('p3','Hitta information i terminalerna',['06','12','27'],
  'Hitta terminalens ISSI i informationsmenyn och förklara vad numret identifierar. Förklara också skillnaden mot MSISDN.',
  ['Kursens menyväg: öppna Meny med nedåtpilen, navigera till Info-meny och välj.','Alternativ i kursens programmering: DV # öppnar Smartmeny, där du väljer infomeny.','Visa informationen på övningsterminalen. Skriv inte in något verkligt terminalnummer på webbplatsen.'],null),
 practical('p4','Navigering bland talgrupper och skanninglistan',['07','08','09','14'],
  'Hitta en av läraren angiven talgrupp via grupper/mode och via index. Hitta därefter skanninglistan och kontrollera passningen.',
  ['Kontrollera i displayen att avsedd talgrupp är vald.','Visa skillnaden mellan vald talgrupp och de talgrupper som skannas.','Visa var du ser vald lista och om skanning är aktiv. Återgå till anvisad passning.'],'e3'),
 practical('p5','Skapa kontakter',['20','12'],
  'Skapa en kontakt med lärarens fiktiva övningsuppgifter. Välj rätt nummertyp och kontrollera den sparade kontakten.',
  ['Öppna kontakter och funktionen för att skapa en kontakt.','Ange övningsnamn och övningsnummer samt rätt symbol/nummertyp för ISSI eller MSISDN.','Spara, hitta kontakten igen och kontrollera uppgifterna. Ta bort övningskontakten om läraren anvisar det.'],'e6'),
 practical('p6','Mappen EGEN',['16','15'],
  'Lägg till en anvisad talgrupp i mappen Egen och visa hur du använder den.',
  ['I kursens meny: Meny → Talgrupper → Mappar → Egen → Ny grupp.','Välj en anvisad grupp, hitta den i Egen och visa hur du bläddrar mellan grupper.','Koppla till DV7 om övningen kräver det och återställ enligt instruktion.'],'e5'),
 practical('p7','Programmera skanninglistor',['14'],
  'Programmera en anvisad skanninglista, välj den och kontrollera att rätt grupper passas.',
  ['Välj en programmerbar lista och lägg in anvisade talgrupper.','Kontrollera prioritet och displaylagd talgrupp enligt kursmaterialet och aktuell sambandstablå.','Spara, välj listan och kontrollera att skanning är aktiverad.'],'e3'),
];
practicalTasks.find(t=>t.id==='p3').sources.push({title:'Menyn-1.pdf',location:'s. 2: Meny och Info-meny'},{title:'Smartmeny.pdf',location:'s. 1: DV #'},{title:'ISSI-1.pdf',location:'s. 1: hitta ISSI'});
