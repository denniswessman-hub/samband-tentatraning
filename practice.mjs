import {topics} from './data.mjs';
const refs = ids => ids.flatMap(id=>topics.find(t=>t.id===id).sources);
export const scenarioLabels = ['Vad gör du?', 'Vad säger du?', 'Vilken talgrupp eller funktion använder du?', 'Varför behöver RLC informationen?'];
const s=(id,title,prompt,ids,answer)=>({id,title,prompt,topics:ids,topic:ids[0],kind:'scenario',answer,sources:refs(ids)});
export const scenarios=[
 s('s1','Täckningen försvinner','Övning: Ni söker vid Övningsberget. Handterminalerna tappar nätkontakt bakom berget, men fordonsterminalen har täckning. Ni behöver fortsatt kontakt med RLC.',['17','11','22'],[
  'Återgå till fungerande samband. Samordna gateway med RLC, konfigurera fordon och handterminaler och gör förbindelseprov innan ni fortsätter.',
  '”[RLC] från [egen anropssignal]. Handterminalerna saknar täckning vid Övningsberget. Fordonet har nätkontakt. Vi behöver upprätta gateway och få en insatstalgrupp, kom.”',
  'Tilldelad TMO-insatstalgrupp i fordonet, gatewayfunktion och samma överenskomna DMO-talgrupp i fordon och handterminaler.',
  'RLC behöver känna till sambandsbegränsningen, var patrullen finns och hur den kan nås. Meddela även när gateway kopplas ned och normalpassning återställs.',
 ]),
 s('s2','En förtursbegäran av misstag','Övning: Din handterminal har skickat förtursbegäran av misstag. RLC anropar dig. Ingen hjälp behövs. Använd enbart platshållare för identitetsuppgifter.',['13','02'],[
  'Besvara RLC:s individsamtal och klarlägg att begäran skickades av misstag. Vänta inte på att den ska försvinna.',
  '”[Egen anropssignal], [position], feltryck, [U-nummer], [namn], slut kom.”',
  'Det inkommande individsamtalet från RLC. Feltrycket ska klarläggas med operatören.',
  'RLC måste kunna säkerställa att du inte behöver akut hjälp. De angivna identifieringsuppgifterna används för att kontrollera situationen.',
 ]),
 s('s3','Förstärkning i ett annat område','Övning: Patrullen ska tillfälligt förstärka i ett annat polisområde inom samma region. Du har fortfarande hemmaområdets normalpassning.',['30','14','21'],[
  'Ta reda på rätt passning för området, välj dess skanninglista och kontrollera aktiv skanning.',
  '”[Egen anropssignal], vi förstärker i [området]. Bekräfta vilken passning som gäller, kom.” Meddela uppdragets start enligt aktuell rutin.',
  'Områdets skanninglista med relevanta ordertalgrupper och interntalgrupp enligt sambandstablån.',
  'RLC behöver veta var patrullen arbetar och kunna nå den med områdets order och samordning.',
 ]),
 s('s4','Resa till en annan region','Övning: Ni gör en transport till en annan region. Vanlig anropsbegäran når fortfarande ert hemma-RLC. Ni behöver anmäla er och få rätt passning.',['31','30','09'],[
  'Välj destinationens RLC-talgrupp, begär kontakt och följ anvisad talgrupp/passning. Meddela även när ni lämnar regionen.',
  '”[Egen anropssignal], [position]. Vi genomför en transport i regionen och behöver besked om passning, kom.”',
  'Rätt RLC-talgrupp och långt tryck på grön lur enligt kursens terminal. DV 2/A leder till hemma-RLC.',
  'Berört RLC behöver känna till er närvaro, uppgift och nåbarhet, och när ni inte längre är kvar.',
 ]),
 s('s5','Samverkan vid en övningsolycka','Övning: Polis, räddningstjänst och ambulans behöver dela en gemensam lägesbild vid Övningsplats Alfa. Polisens interntalgrupp är vald i din radio. Ingen talgrupp är ännu anvisad.',['24','07','22'],[
  'Samordna via ledningsfunktionerna vilken samverkanstalgrupp som ska användas och kontrollera att berörda resurser har den.',
  '”[Egen anropssignal], Övningsplats Alfa. Vi behöver gemensamt samband med räddningstjänst och ambulans. Vilken samverkanstalgrupp ska vi använda, kom?”',
  'Anvisad RAPS- eller annan lämplig samverkanstalgrupp. Välj inte en grupp på eget antagande.',
  'RLC behöver aktuell lägesbild och veta hur polisresurserna kan ledas och samverka med övriga.',
 ]),
 s('s6','Avrapportera med luckor i informationen','Övning: En händelse vid Övningsplats Beta är avslutad på plats. Ingen skada har konstaterats. En berörd persons ID är ännu okänt. Ni ska skriva PM och därefter följa upp uppgifter. Inga ytterligare fakta är givna.',['22','21','01'],[
  'Förbered en saklig avrapportering. Skilj kända fakta från det som ännu inte är klarlagt. Komplettera när uppgifter blir kända.',
  '”[Egen anropssignal], Övningsplats Beta. Händelsen är avslutad på plats. Ingen skada är konstaterad. ID på en berörd person är okänt. Vi skriver PM och följer upp uppgifterna, slut kom.” Lägg inte till ett påhittat brott eller tvångsmedel.',
  'Talad kontakt med RLC enligt aktuell sambandssituation. En status ensam rymmer inte de nödvändiga förklaringarna.',
  'RLC behöver dokumentera känt läge, kvarstående osäkerheter och patrullens fortsatta arbete och tillgänglighet.',
 ]),
 s('s7','Radion blev kvar','Övning: Efter ett moment upptäcker du att handterminalen saknas. Du kan inte omedelbart hitta den. Du har tillgång till en annan säker kontaktväg.',['26','22'],[
  'Följ förlustrutinen: kontakta servicedesk för spärr, upprätta anmälan och underrätta sambandsansvarig. Använd aktuella kontaktvägar.',
  'Till berörd ledning: ”[Egen anropssignal], min handterminal saknas. Jag följer spärr- och förlustrutinen och nås tills vidare via [överenskommen kontaktväg].”',
  'En fungerande, godkänd alternativ kontaktväg. Säkerställ hur RLC når patrullen under avbrottet.',
  'RLC behöver veta att tidigare kontaktväg inte är tillförlitlig och hur patrullen nås. Spärren hanteras enligt rutinen av ansvarig funktion.',
 ]),
 s('s8','Tillbaka från gateway','Övning: Uppgiften är avslutad, ni är vid bilen och har nätkontakt. Gateway är fortfarande aktiv. Ni vill återgå till ordinarie passning.',['17','28','29'],[
  'Meddela RLC före nedkoppling. Återställ fordon och samtliga handterminaler till nätläge och korrekt normalpassning; kontrollera funktion.',
  '”[Egen anropssignal], uppgiften är avslutad. Vi kopplar ned gateway och behöver inte längre insatstalgruppen. Vi återgår till [anvisad passning], slut kom.”',
  'Driftsätt till TMO och därefter rätt skanninglista med aktiv skanning. Kontrollera även fordonets/Polmans ljudväg.',
  'RLC behöver kunna frigöra talgruppen och veta var patrullen åter kan nås. Andra deltagare får inte ovetande bli av med gatewayförbindelsen.',
 ]),
];

const e=(id,title,ids,brief,steps,why)=>({id,title,topics:ids,topic:ids[0],kind:'ordning',brief,steps,why,sources:refs(ids)});
// En pedagogisk arbetsgång. Varje steg är en sammanhållen fas för att undvika falskt exakta ordningskrav inom en kontroll.
export const exercises=[
 e('e1','Muntligt förbindelseprov',['10','02'],'Övning: Patrulluppgifter har ändrats och du behöver också kontrollera förbindelsen. Ordna den här arbetsgången.',[
  'Kontrollera aktuella patrulluppgifter och förbered det som behöver meddelas.',
  'Gör anropsbegäran till rätt RLC.',
  'När RLC anropar: svara med anropssignal och position.',
  'Lämna förändrade uppgifter och genomför det muntliga förbindelseprovet.',
  'Kontrollera att uppgifterna och förbindelsen är uppfattade, avsluta med rätt trafikuttryck.',
 ],'Status Klar, ledig är kursens grundrutin när patrullen är redo. Det här muntliga flödet tränar situationen med ändrade uppgifter eller osäker förbindelse.'),
 e('e2','Klarlägg en felaktig förtursbegäran',['13'],'Övning: För­tursbegäran har redan skickats av misstag. Ordna uppgifterna i den ordning som kursmaterialet anger.',[
  'Besvara RLC:s individsamtal och uppge [egen anropssignal].',
  'Ange [position].',
  'Säg ”feltryck”.',
  'Uppge [U-nummer] och [namn].',
  'Avsluta din redogörelse med SLUT KOM och låt RLC avsluta kontakten.',
 ],'Det är ett aktivt klarläggande med RLC. Att stänga terminalen eller bara återgå till normalpassning återkallar inte situationen.'),
 e('e3','Programmera en skanninglista',['14'],'Övning: Skapa en lista med en lågprioriterad interntalgrupp och högprioriterade ordertalgrupper.',[
  'Öppna Meny → Talgrupper → Skanninglistor och välj en programmeringsbar lista.',
  'Lägg till de talgrupper som ska ingå.',
  'Ange hög prioritet för ordertalgrupperna och låg för interntalgruppen.',
  'Markera den talgrupp som ska vara displaylagd.',
  'Spara skanninglistan.',
  'Displaylägg listan och kontrollera att skanning är aktiv.',
 ],'Listans innehåll, prioriteringar, displayval och aktivering behöver alla stämma för avsedd passning.'),
 e('e4','Programmera DV 1',['15','14'],'Övning: Lägg en anvisad skanninglista på DV 1 genom alternativet Välj talgrupp.',[
  'Öppna Meny → Talgrupper → Direktval.',
  'Markera Direktval 1.',
  'Välj Mer → Välj talgrupp.',
  'Bläddra till den anvisade skanninglistan i SKAN och bekräfta.',
  'Prova DV 1 och kontrollera listnamn och aktiv skanning.',
 ],'DV 1 ska innehålla en skanninglista enligt kursmaterialet. Alternativet Mer → Välj kan i stället knyta det redan displaylagda valet till direktvalet.'),
 e('e5','Bygg och använd mappen Egen',['16','15'],'Övning: Samla övningens favorittalgrupper, använd mappen via DV 7 och återställ efteråt.',[
  'Öppna Meny → Talgrupper → Mappar och hitta Egen.',
  'Välj Ny grupp och lägg till de anvisade övningstalgrupperna.',
  'Programmera mappen Egen på DV 7 enligt terminalens direktvalsfunktion.',
  'Aktivera DV 7, öppna gruppvalet och prova att bläddra mellan grupperna.',
  'Efter övningen: återställ DV 7 och ta bort övningens grupper ur Egen.',
 ],'Egen är en favoritmapp. Den blir inte en skanninglista genom att läggas på ett direktval.'),
 e('e6','Lägg in en kontakt',['20','12'],'Övning: Spara [övningskontakt] med [MSISDN]. Inga verkliga nummer ska matas in.',[
  'Öppna Kontakter → Meny → Skapa kontakt.',
  'Skriv kontaktens övningsnamn och välj Spara.',
  'Ange det av läraren anvisade övningsnumret på nummerraden.',
  'Kontrollera fullständigt nummer och välj rätt symbol för MSISDN.',
  'Välj Avsluta för att spara kontakten och kontrollera kontaktposten.',
 ],'Spara efter namnet och Avsluta efter numret fyller olika funktioner i kursens flöde. Nummerformen måste stämma med vald symbol.'),
 e('e7','Gateway från start till avslut',['17','11','28'],'Övning: Fordonet har nätkontakt men handterminalerna behöver använda DMO. Följ hela kedjan.',[
  'Informera RLC, få eller bekräfta insatstalgrupp och planera DMO-talgrupp.',
  'Displaylägg insatstalgruppen i fordonsterminalen.',
  'Välj Gateway via DV 8 i fordonet och välj den överenskomna DMO-talgruppen.',
  'Ställ handterminalerna i DMO och välj samma DMO-talgrupp.',
  'Kontrollera gatewayindikering och gör förbindelseprov med RLC innan arbetet fortsätter.',
  'När arbetet är klart: meddela RLC att gateway ska ned och talgruppen kan frigöras.',
  'Återgå till nätläge och normalpassning i fordon och handterminaler; kontrollera sambandet.',
 ],'Gateway behöver både fungerande nätkontakt och en direktförbindelse till handterminalerna. Vald DMO-talgrupp följer överenskommelsen, inte ett fast exempelnummer.'),
 e('e8','Skicka SDS',['19','12'],'Övning: Skicka ett kort, påhittat övningsmeddelande till en anvisad övningskontakt.',[
  'Öppna Meddelanden → Skapa meddelande.',
  'Skriv det korta övningsmeddelandet.',
  'Välj Sänd eller Mer → Skicka för att komma till mottagarval.',
  'Välj övningskontakten eller ange övningsnumret och rätt anropstyp.',
  'Kontrollera text och mottagare, bekräfta sändning och läs terminalens återkoppling.',
 ],'En skickad text ska inte automatiskt likställas med att mottagaren läst och förstått budskapet. Följ rutin för kvittens där det behövs.'),
 e('e9','Anropsbegäran till annat RLC',['31','30'],'Övning: Begär vanlig kontakt med ett annat RLC enligt kursens terminalprogrammering.',[
  'Identifiera rätt regions RLC-talgrupp i aktuell sambandstablå.',
  'Displaylägg RLC-talgruppen och kontrollera namnet.',
  'Gör ett långt tryck på grön lur.',
  'När RLC svarar: ange anropssignal, position och ärende.',
  'Följ anvisad talgrupp/passning och kontrollera att ni kan nås.',
 ],'Ordinarie DV 2/A är riktat till hemma-RLC även när du befinner dig på annan plats.'),
 e('e10','Handterminal: ta emot och återgå',['27','08','02'],'Övning: Efter inledande kontroll får du en talgrupp tilldelad. Avsluta med normalpassning.',[
  'Kontrollera terminalens strömförsörjning, driftsätt, nätkontakt och normalpassning.',
  'Ta emot och kvittera anvisningen om vilken talgrupp som ska användas.',
  'Välj anvisad talgrupp via grupper eller index och kontrollera displayen.',
  'Sänd med PTT: invänta kopplingston och håll knappen under hela meddelandet.',
  'När momentet är avslutat enligt ledningen: återställ rätt skanninglista och aktiv skanning.',
 ],'Övningen binder ihop kontroll, val, sändning och återställning. Den ersätter inte handhavande på utbildningens verkliga terminal.'),
 e('e11','Fordonsterminal: status och talgrupp',['28','21','08'],'Övning: Patrullen är korrekt registrerad och redo. Därefter tilldelar RLC en talgrupp för ett övningsmoment.',[
  'Kontrollera nätkontakt, ordinarie passning och lämplig ljudväg i fordonsterminalen.',
  'Öppna status med två tryck på navigationsratten och välj Klar, ledig.',
  'Kontrollera mottagare och sänd status enligt rutinen.',
  'Ta emot RLC:s nya talgruppsanvisning, öppna gruppval med ett tryck på ratten och välj gruppen.',
  'Kontrollera talgruppsnamnet och genomför övningens radiokontakt.',
  'Efter avslutat moment: återställ anvisad normalpassning och kontrollera ljudet.',
 ],'Ett respektive två tryck öppnar olika funktioner. Status och gruppval måste följas av kontroll av resultatet.'),
 e('e12','Polman: anslut och koppla från',['29','12'],'Övning: Anslut en handterminal till fordonets Polman för att öva vidarebefordran. Använd bara övningsuppgifter.',[
  'Starta Polman och genomför den behöriga uppstarten enligt lokal instruktion.',
  'Öppna funktionen för att ansluta handterminal/handenhet.',
  'Ange hela det anvisade övningsnumret som sjusiffrigt MSISDN.',
  'Kontrollera att rätt handterminal är kopplad och prova vidarebefordran enligt övningsinstruktionen.',
  'När övningen är klar: koppla från handterminalen och kontrollera att kopplingen är borta.',
 ],'Polman styr fordonsterminalens radiofunktioner. Källan anger att kopplade handterminaler också tas bort vid avstängning med huvudbrytaren.'),
];
