// Bearbetning av användarens tre övningsunderlag. Originalfiler publiceras inte.
export const sourceFiles={paper:'Tenta vt26 exempeltenta.pdf',answers:'Svar övningstenta T4.pdf',practical:'T4 HT25 Exam PRAKTIKS DEL.docx'};
const questionTopics=['11,27,29','12','06,27','07,14','07','14,15','13,30,31','16','02,24','07','25','30','05,12,18','03,05,09','26','10,17,23','02,05','22','11,17,22','14,30','12','13','14,15'];
const q=(number,title,points,page,answerPage,prompt,answer,extra={})=>({number,title,points,prompt,answer,topics:questionTopics[number-1].split(','),sources:[...(page?[`${sourceFiles.paper}, s. ${page}`]:[]),...(answerPage?[`${sourceFiles.answers}, s. ${answerPage}`]:[])],...extra});
export const paperQuestions=[
 q(1,'Direktläge',1,'1','1',[
 'Du raderar gamla meddelanden på både handterminalen och POLMAN och ordnar terminalerna så de är redo för tjänst. Du aktiverar också direktläge för att kontrollera att terminalerna har rätt direktlägestalgrupp i displayen. Du ser att terminalen hade POL 8 DMO displaylagd och tillser att terminalen i stället har POL 1 DMO i displayen. Därefter aktiverar du nätläge igen. Varför utför du detta handhavande?'],[
 'Terminalen minns den senast valda DMO-talgruppen. Du förbereder rätt direktlägestalgrupp inför tjänsten så att den är vald om du senare behöver växla till direktläge.',
 'Det sparar tid och minskar risken för fel eller missförstånd, exempelvis i ett brådskande läge. Kontrollera ändå gruppnamnet när du byter läge.']),
 q(2,'Direktläge och siffror',1,'2','1',[
 'Då du hade direktläge aktiverat såg du att det stod siffror högst upp i terminalens display. Vad är siffrorna för något?'],[
 'ISSI-nummer. Det identifierar terminalen. I direktläge visas det i stället för den taktiska anropssignalen.'],{options:['ISSI-nummer','Taktisk anropssignal','IMEI','MSISDN'],correct:[0],figure:'issi',note:'Frågefilen skriver först sex och sedan sju siffror. Det ändrar inte svaret. Terminalnumret i originalbilden är maskerat här.'}),
 q(3,'Symbol handterminal',1,'3','2',[
 'Vad betyder symbolen med gubben och siffran 5 som är placerad ovanför texten ”Direktläge” i displayen?'],[
 'Användarprofil nummer fem är aktiv i terminalen just nu. Symbolen visar inte hur många terminaler som lyssnar, antal samtal eller en gateway.'],{options:['Användarprofil nummer fem är aktiv i terminalen just nu.','Fem terminaler har displaylagt denna talgrupp just nu.','Inom din terminals räckvidd har någon kopplat upp DMO-talgruppen i gateway.','Terminalen har fem obesvarade individsamtal.','Talgruppen har fem aktiva lyssnare just nu.'],correct:[0],figure:'profile'}),
 q(4,'Normalpassning',1,'4','2',[
 'Då ni åker ut ska era terminaler vara i normalpassning. Vilka två saker måste vara uppfyllda för att en terminal ska anses ha normalpassning?'],[
 'Den ordinarie skanninglistan för din aktuella tjänst ska vara displaylagd.',
 'Skanningen ska vara aktiverad. Det räcker inte med en valfri skanninglista eller en enskild intern talgrupp.']),
 q(5,'Dynamisk talgrupp',1,'4','2',[
 'Ni träffar er kollega Ersin. Han har förstärkt på IGV i Söderort i Stockholm under några veckor och behövde programmera en skanninglista. Alla regioners ordertalgrupper fanns i terminalen, men han behövde också den interna talgruppen IGV Söderort. RLC Stockholm skickade ut den som dynamisk talgrupp till Ersin.',
 'Ange namnet på den mapp där dynamiskt tilldelade talgrupper hamnar då de tilldelas en terminal.'],['DYNA.']),
 q(6,'Felsökning',1,'5–6','3',[
 'När Ersin hade programmerat sin skanninglista i Stockholm lade han den på direktval 1. Hemma igen har han programmerat om DV1 för att arbeta på IGV i POSS.',
 'Ni pratar i utrustningsrummet. När RLC går ut på ordertalgruppen med en allmän efterspaning kopplar din terminal upp ordertalgruppen, men inte Ersins. Efter ett långt tryck på DV1 visar hans display ”Igv POSS”. Du ser att Ersin gjort en felaktig inställning. Vad behöver han göra för att ha normalpassning?'],[
 'Displaylägg hela skanninglistan SKAN IGV POSS. Han har valt den enskilda talgruppen IGV POSS. Programmera också DV1 till rätt skanninglista.',
 'Kontrollera att skanningen är på när listan är vald. ”Aktivera skanningen” räcker inte som svar: av bilden med en enskild talgrupp går det inte att avgöra om skanningen i grunden är av eller på.'],{figure:'scan',note:'Fråga 6 är dubblerad i frågefilen. Här visas den en gång.'}),
 q(7,'I annan region',2,null,'3',[
 'Ersin tyckte att det var givande att förstärka i Stockholm. Han använde sin personliga handterminal, programmerad för POSS i region Syd. Vad gäller när du använder din handterminal i andra regioner? Fyll i rätt region.',
 'a) När Ersin tjänstgjorde i Stockholm och gjorde en anropsbegäran med A/DV2 hamnade den hos RLC för region …',
 'b) När Ersin tjänstgjorde i Stockholm och höll inne förtursbegäransknappen längre än tre sekunder gick förtursbegäran till RLC för region …'],[
 'a) Syd. Anropsbegäran via A eller DV2 går till det egna, programmerade RLC.',
 'b) Stockholm. Förtursbegäran går till RLC i den region där terminalen geografiskt befinner sig.'],{note:'Fråga 7 saknas i frågefilen och har hämtats från facitfilen. Beskriv funktionen; skicka inte en skarp förtursbegäran när du tränar.'}),
 q(8,'Mappen Egen',1,null,'4',[
 'Du har programmerat mappen Egen på DV7. Vilket eller vilka påståenden är korrekta gällande mappen Egen?'],[
 'Alternativ A, B och D är korrekta. Egen är en favoritmapp, inte en skanninglista. Du kan lägga både talgrupper och redan färdiga skanninglistor i den.',
 'Att samla flera enskilda talgrupper i Egen skapar inte en skanninglista.'],{multi:true,options:['Mappen Egen kan användas på både handterminaler och fordonsterminaler.','Mappen Egen har ingen skanningfunktion i sig, men du kan spara in en redan färdig skanninglista där.','Mappen Egen är en mapp där du kan spara flera talgrupper och sätta ihop dem till en skanninglista.','Mappen Egen är en mapp där du kan samla favorittalgrupper. Programmerar du in den på DV7 kan du snabbt hitta talgrupperna.'],correct:[0,1,3],note:'Fråga 8 saknas i frågefilen och har hämtats från facitfilen.'}),
 q(9,'Anmälan på RAPS',1,'7','4',[
 '”Order POSS gällande Lund, 64-4130 från 6-0, kom.” Er patrull beordras till en trafikolycka på Flygelvägen: personbil och cyklist. Ambulans är på väg. Ni tilldelas Skåne RAPS 55.',
 'Då samtalet avslutats displaylägger du RAPS-talgruppen och anmäler dig. Fyll i det som saknas: ”_____ Lund, anmäler sig på talgruppen, kom.”'],[
 '”Polis 64-4130”. Även ”Polisen 64-4130” godtas enligt facit. Hela anmälan blir: ”Polis 64-4130 Lund, anmäler sig på talgruppen, kom.”',
 'På samverkanstalgruppen anger du organisationen med ord. Säg inte ”ett” i stället för ”polis”.']),
 q(10,'Dirigera trafik',1,'7','4',[
 'Bilen har kört in i en refug och blockerar vägen. Ingen cyklist finns på platsen och föraren plåstras om av sjukvårdarna. I väntan på bärgaren behöver du och Alice dirigera trafik. Alice föreslår att ni ber RLC om en insatstalgrupp för er interna kommunikation. Vilket påstående är korrekt?'],[
 'Alternativ B. En insatstalgrupp kan vid behov tilldelas en enda patrull för en oplanerad händelse.',
 'Facit nämner omfattande eller operativ intern kommunikation, behov av operatörsstöd eller att fler patruller kan ansluta. RAPS används för samverkan mellan organisationer.'],{options:['RAPS-talgruppen ska användas för samverkan både inom patrullen och mellan organisationerna.','Insatstalgrupper är tillägnade oplanerade händelser och kan vid behov tilldelas enstaka patrull för samverkan.','Insatstalgrupper är endast tillägnade oplanerade händelser där det är minst två patruller för samverkan.'],correct:[1]}),
 q(11,'Basstation',1,'8','5',[
 'Vid större olyckor kan basstationerna bli hårt belastade. Markera det alternativ som tar ”mest plats”/flest tidsluckor i anspråk i en basstation.'],[
 'Alternativ B: fem olika talgrupper med samtidig trafik. Ett pågående gruppsamtal tar en trafikresurs i den berörda basstationen, oberoende av hur många som lyssnar där.',
 'Det är de samtidiga samtalen som är avgörande. Fem tysta talgrupper belastar inte nätet som fem pågående samtal.'],{options:['Tio personer vid samma basstation som vid en och samma tidpunkt sänder eller lyssnar på samma talgrupp.','Fem personer vid samma basstation som vid en och samma tidpunkt sänder eller lyssnar på fem olika talgrupper.'],correct:[1]}),
 q(12,'Förstärk i PONV',1,'8','5',[
 'Efter avrapportering berättar RLC att Polisområde Nordvästra Skåne (PONV) haft en större händelse där flera patruller behöver debriefing. Ni beordras att förstärka tills extra personal kommit in. PONV är ett annat polisområde i samma region som POSS, region Syd. RLC informerar samtliga på ordertalgruppen.',
 'Vilka åtgärder behöver ni vidta med terminalerna när ni passerar gränsen till det nya polisområdet?'],[
 'Displaylägg SKAN IGV PONV på både handterminalerna och fordonsterminalen. Kontrollera att skanningen är aktiv.',
 'Rätt lista ger passning av den interna talgruppen för PONV och relevanta ordertalgrupper, inklusive regional order. Att bara byta till en enskild IGV-talgrupp räcker inte.']),
 q(13,'Individsamtal till annan patrull',3,'9','5',[
 'Du saknar telefonnumret till yttre befälet i PONV men vet att hen åker i bilen med taktisk anropssignal 63-1100. Ni bestämmer er för att upprätta ett individsamtal till fordonsterminalen.',
 'a) Vilka siffror skriver du i displayen?',
 'b) Vilken symbol använder du, A eller B?',
 'c) Du startar samtalet med PTT. Vad heter den typ av individsamtal du då upprättar?'],[
 'a) 1631100. Organisationssiffran 1 för polisen följd av 631100 ger MSISDN.',
 'b) A, den liggande radiosymbolen för MSISDN.',
 'c) Semiduplex. Ni talar en i taget med PTT. Duplex startas med grön lur och medger tal i båda riktningar samtidigt.'],{figure:'symbols'}),
 q(14,'Siffror och regioner',5,'10','6',[
 'Använd endast siffror i a–c och endast bokstäver i d–e.',
 'a) Anropssignal för RLC region Nord.',
 'b) Indexnummer för RLC-talgruppen för region Öst.',
 'c) Indexnummer för Insats 2 region Väst.',
 'd) Insatstalgrupp med indexnummer 203 tillhör region …',
 'e) Patrull med taktisk anropssignal 51-4110 tillhör region …'],[
 'a) 10 (uttalas ett-noll). b) 40. c) 502. d) Mitt. e) Väst. Varje korrekt del ger en poäng i underlaget.']),
 q(15,'Fordon på service',1,'10','6',[
 'På väg norrut berättar Alice att bilen 64-1120 lämnades på service förra veckan. Redogör för vad ni måste göra med POLMAN/fordonsterminalen innan bilen lämnas till externa biltekniker.'],[
 'Stäng av terminalen och kontakta Servicedesk för att få den spärrad i nätet enligt gällande rutin. Att bara stänga av den är inte samma sak som att spärra den.',
 'Det äldre lärarfacit anger även PUK-låsning genom tre felaktiga koder som ett alternativ. Detta är en uppgift ur facit, inte en uppmaning att låsa övningsutrustning. Följ aktuell rutin och lärarens anvisning.']),
 q(16,'Gateway i Väla',2,'11','7',[
 'RLC beordrar er och 63-1130 att biträda 63-4130 som gripit tre personer i parkeringshuset i Väla köpcenter. Ni tilldelas Insats 33. Du displaylägger gruppen och anmäler: ”64-4130 anmäler sig på talgruppen, kom.” Operatören kvitterar.',
 '63-4130 befinner sig längst ner i östra trapphuset och har upprättat gateway mellan Insats 33 och DMO 1 eftersom mottagningen är dålig.',
 'a) Redogör för åtgärder du kan behöva vidta med terminalerna på väg fram och på plats (1 p).',
 'b) Hur meddelar ni korrekt, enligt dessa förutsättningar, att ni är framme och påbörjar uppdraget (1 p)?'],[
 'a) På väg fram använder ni Insats 33 i nätläge. Vid dålig nättäckning på plats växlar ni handterminalerna till direktläge och väljer samma DMO-talgrupp som gatewayn, DMO 1. Kontrollera gruppnamn och samband. Gatewayn är redan upprättad av den andra patrullen.',
 'b) Avrapportera muntligt på insatstalgruppen, med er fullständiga anropssignal 64-4130. Då hör både operatören och patrullerna att ni är framme. I detta scenario är enbart status ”Påbörjat uppdrag” inte rätt svar.']),
 q(17,'Taktisk anropssignal',2,'12','8',[
 'När du anmälde dig på insatstalgruppen angav du alla sex siffror i din taktiska anropssignal. Varför är det viktigt att alltid ange samtliga siffror? Använd det aktuella ärendet ”Gateway i Väla” som exempel.'],[
 '63-4130 och 64-4130 är olika patruller från olika polisområden men har samma fyra sista siffror. Om båda bara säger ”4130” kan operatören och andra patruller förväxla dem.',
 'Alla sex siffror behövs för att information och uppdrag ska kopplas till rätt patrull. Koppla resonemanget till just dessa två patruller; enbart ”för att veta vem som pratar” är för ospecifikt.'],{note:'Facitkommentaren skriver 63-4120/64-4120. Här används 63-4130/64-4130 enligt frågans scenario; principen är densamma.'}),
 q(18,'Transport av gripen',1,'13','8',[
 'På plats behöver ni bara hjälpa till med transport av en av de gripna till arresten. Välj det korrekta påståendet.'],[
 'Alternativ A. Meddela operatören att ni transporterar en gripen i bilen när ni lämnar platsen. Det är relevant för uppföljning och säkerhet även om ni bara hjälper till med transporten.'],{options:['Ni meddelar operatören att ni transporterar en gripen i bilen i samband med att ni lämnar platsen.','Ni behöver inte meddela att ni genomför transporten eftersom ni inte har något att avrapportera i ärendet.','Ni kan förutsätta att den ansvariga patrullen meddelar transporten, så det räcker att säga att ni lämnar platsen.','Ni meddelar operatören att ni transporterat en gripen i bilen då ni anländer till arresten.'],correct:[0]}),
 q(19,'Handhavande',1,'13','9',[
 'Vad är viktigt att ni gör med era handterminaler när ni kommer ut från parkeringshuset och innan ni lämnar platsen, enligt förutsättningarna i ”Gateway i Väla”?'],[
 'Växla handterminalerna från direktläge tillbaka till nätläge och kontrollera att Insats 33 är displaylagd. Annars riskerar ni att lämna gatewayns räckvidd utan fungerande samband.',
 'Rapportera transporten på insatstalgruppen. Lämna inte den tilldelade insatsgruppen på eget initiativ; invänta besked om återgång.']),
 q(20,'Ordinarie samband',1,'13','9',[
 'Alla patruller har kommit in på stationen i Helsingborg (PONV). Insatsen avslutas och samtliga återgår till ordinarie samband. Din patrull ska fortsätta förstärka PONV.',
 'Kan du nu göra ett långt tryck på DV1 på din handterminal för att displaylägga rätt skanninglista för din nuvarande uppgift? Motivera svaret. Tidigare förutsättningar i tentan gäller.'],[
 'Nej. Din DV1 är fortfarande programmerad för ordinarie tjänst i POSS. Ingen omprogrammering av din DV1 har angetts i scenariot.',
 'Välj SKAN IGV PONV manuellt och kontrollera att skanningen är på. Att tidigare ha displaylagt PONV:s lista ändrar inte automatiskt programmeringen av DV1.']),
 q(21,'ISSI-nummer',1,'14','10',[
 'Alice repeterar hur hon hittar POLMAN:s ISSI-nummer. Markera det eller de påståenden som stämmer om ISSI-nummer.'],[
 'Endast alternativ B är korrekt enligt kursens facit. ISSI är knutet till terminalens hårdvara. Det är inte det taktiska anropsnumret och berättar inte om terminalen är handburen eller fordonsmonterad.'],{multi:true,options:['Ett ISSI går att programmera om utefter den tjänst terminalen ska användas i.','Ett ISSI är ett fast nummer som följer terminalens hårdvara tills den skrotas.','ISSI-numret består av samma siffror som terminalens taktiska anropsnummer.','I ISSI-numret kan du se om terminalen är en handterminal eller fordonsterminal.'],correct:[1]}),
 q(22,'Förtursbegäran av misstag',1,'14','10',[
 'Vid Filbornaskolan låser sig POLMAN-skärmen. Alice ska starta om men håller av misstag inne förtursbegäransknappen i stället för av/på. Operatören svarar: ”Förtursanropande 64-4130, kom.” Vilket svar ska Alice ange?'],[
 'Alternativ A: ”64-4130 Filbornaskolan, feltryck, [U-nummer] [namn], slut kom.”',
 'Ange korrekt anropssignal, position, att det var ett feltryck samt U-nummer och namn. Besvara operatören och följ rutinen för felaktig förtursbegäran.'],{options:['64-4130 Filbornaskolan, feltryck, [U-nummer] [namn], slut kom.','64-4130 Filbornaskolan, fel av mig, [personnummer] [namn], slut kom.','60-7530 Filbornaskolan, feltryck, [namn], POSS, slut kom.','60-7530 Filbornaskolan, [namn] [U-nummer] fel, slut kom.'],correct:[0],note:'Personnamn och identitetsnummer i alternativen har ersatts med platshållare.'}),
 q(23,'Felsökning skanninglista',1,'15',null,[
 'RLC meddelar att ni får köra hem till POSS och Lund. Alice förbereder morgondagens förstärkning på Span. Hon skapar en skanninglista med projekttalgruppen och de ordertalgrupper hon behöver. Hon sparar listan och programmerar den på DV7.',
 'Vid långt tryck på 7 blinkar ”Ingen grupp vald” till (bild 1) och sedan blir fältet för talgrupp tomt (bild 2). Vad har orsakat detta?'],[
 'Alternativ A. Ingen talgrupp har valts som displaylagd i listan. Öppna och ändra skanninglistan, markera avsedd intern-/projekttalgrupp, tryck Välj och spara.',
 'Valet av displaylagd talgrupp är ett separat steg från prioritering med pilar och från programmering av direktval.'],{options:['Alice har inte valt vilken talgrupp i skanninglistan som ska vara displaylagd.','Alice har inte valt rätt skanninglista till direktvalet.','Alice har inte valt vilken talgrupp i skanninglistan som ska vara högprioriterad.','Alice har inte valt vilket direktval hon ska använda skanninglistan till.'],correct:[0],figure:'empty',note:'Fråga 23 saknar svar i facitfilen. Svaret är kompletterat från kursmaterialet.',sources:[`${sourceFiles.paper}, s. 15`,'Skanninglistor.pdf, s. 2 och 8','Kunskapsbanken SC21, bild 27 (steg 7–8)']}),
];

const practicalTopics=['06,12,27','06,27','06,27','08,11,27','12,20','14','16','15,16','06','08,14','14','06'];
const task=(number,title,prompt,steps,check,sources)=>({number,title,prompt,steps,check,topics:practicalTopics[number-1].split(','),sources:[`${sourceFiles.practical}, uppgift ${number}`,...sources]});
export const practicalPaper=[
 task(1,'MSISDN och ISSI','Fyll i din handterminal: MSISDN: __________  ISSI: __________.',[
 'Läs av den aktuella övningsterminalen. Öppna Meny med nedåtpilen, välj Info-/hjälpmenyn och leta upp ISSI. I kursprogrammeringen kan du också hålla # och välja infomenyn (7).',
 'MSISDN hör till terminalens taktiska anropsnummer. För en polisterminal bildas det med organisationssiffran 1 följd av det sexsiffriga taktiska anropsnumret. Utgå från just handterminalens aktuella nummer, inte fordonets.',
 'Visa eller skriv numren på lärarens examinationspapper. Skriv inte riktiga terminalnummer på webbplatsen. ISSI kan inte räknas fram ur MSISDN.'],
 'Du kan visa båda numren och skilja mellan hårdvarans ISSI och det omprogrammerbara MSISDN.', ['ISSI-1.pdf, s. 1','Anropssignaler, nummerplan.pdf, s. 7','Menyn-1.pdf, s. 2']),
 task(2,'Vänster valknapp','Ställ in vänster valknapp på ”Högt/Tillb”.',[
 'Håll inne vänster valknapp tills listan med valbara funktioner öppnas.',
 'Bläddra till Högt/Tillb och bekräfta med Välj.',
 'Kontrollera att Högt/Tillb visas ovanför vänster valknapp. Med anslutet tillbehör växlar ett kort tryck ljudet mellan tillbehöret och yttre högtalaren.'],
 'Vänster valknapp är tilldelad Högt/Tillb. Uppgiften gäller programmeringen, inte att ändra DV0.', ['knappologi och display-1 (1).pdf, s. 16','Kunskapsbanken SC21, bild 15']),
 task(3,'Höger valknapp','Ställ in höger valknapp på ”Text +/-”.',[
 'Håll inne höger valknapp tills funktionslistan öppnas.',
 'Bläddra till Text +/- och välj/bekräfta funktionen.',
 'Kontrollera att Text +/- visas ovanför höger valknapp. Funktionen ändrar textstorleken. Om den inte finns i listan: kontrollera utbildningsterminalens programmering med läraren.'],
 'Höger valknapp har rätt funktion och vänster valknapp har kvar Högt/Tillb.', ['knappologi och display-1 (1).pdf, s. 16','Kunskapsbanken SC21, bild 62–63 (textstorlek)']),
 task(4,'Alla DMO 2 och tillbaka','Gå över i direktläge/DMO och displaylägg talgrupp Alla DMO 2. Återgå därefter till nätläge/TMO igen.',[
 'Gör ett långt tryck på DV8 och välj Direktläge. Kontrollera lägesindikeringen.',
 'Öppna talgruppsvalet med mittvalsknappen. Använd pilarna för att hitta rätt DMO-mapp och vredet för att välja Alla DMO 2. Bekräfta valet och läs gruppnamnet i displayen.',
 'Om du använder index måste det vara index för just Alla DMO 2 enligt terminalens programmering. Index 9001 för POL 1 DMO är inte svaret på denna uppgift.',
 'Gör åter ett långt tryck på DV8 och välj Nätläge. Kontrollera att terminalen åter är ansluten i TMO.'],
 'Du har visat exakt Alla DMO 2 och lämnar terminalen i nätläge. Välj inte Gateway för denna uppgift.', ['Byta talgrupp.pdf, s. 2, 4 och 7','knappologi och display-1 (1).pdf, s. 31','Kunskapsbanken SC21, bild 85']),
 task(5,'Kontakt: Bert RTJ','Skapa en korrekt kontakt till räddningsledaren Bert (Räddningstjänsten). Anropssignalen är 90-7001. Döp kontakten till Bert RTJ.',[
 'Öppna Meny → Kontakter. Öppna kontaktmenyn och välj Skapa kontakt.',
 'Skriv namnet Bert RTJ och spara/bekräfta namnet.',
 'Anropssignalen 90-7001 ger i kursens nummerplan MSISDN 2907001: organisationssiffran 2 för räddningstjänsten följd av 907001.',
 'Välj liggande radiosymbol (MSISDN) med upp-/nedpil och ange 2907001. Välj inte stående ISSI-symbol och lägg inte polisens organisationssiffra 1 framför numret.',
 'Avsluta/spara och öppna kontakten igen för att kontrollera namn, nummer och nummertyp. Uppgiften kräver inte att du ringer kontakten.'],
 'Bert RTJ, MSISDN 2907001, liggande radiosymbol. Detta är numret härlett för övningsuppgiften; följ lärarens tilldelning på faktisk utrustning.', ['Kontakter-1.pdf, s. 2–3','Anropssignaler, nummerplan.pdf, s. 7']),
 task(6,'Programmera SKAN17','Gör en skanninglista på SKAN17 med talgrupperna Proj 1 LPU, Order PO2 LPU och Order Reg LPU. Prioritera och välj enligt reglerna.',[
 'Öppna Meny → Talgrupper → Skanningslistor → SKAN17. Välj Öppna och Ändra. Använd lärarens övningsterminal och kontrollera befintligt innehåll innan du ändrar listan.',
 'Välj Mer → Lägg till. Leta upp Proj 1 LPU och välj den. Upprepa för Order PO2 LPU och Order Reg LPU.',
 'Markera varje grupp och använd vänster-/högerpil för att ändra prioritet: båda ordertalgrupperna ska ha hög prioritet (röda pilar). Proj 1 LPU ska ha låg prioritet (gröna pilar).',
 'Markera Proj 1 LPU och tryck Välj för att ange den som displaylagd talgrupp. Punktmarkeringen visar valet; den gröna prioritetspilen i sig räcker inte.',
 'Välj Mer → Spara. Kontrollera alla tre grupper, båda ordergruppernas prioritet och den valda displaygruppen. I uppgift 10 ska du displaylägga själva listan.'],
 'SKAN17 innehåller de tre angivna grupperna. Proj 1 LPU är vald som displaygrupp och har låg prioritet; båda ordergrupperna har hög prioritet.', ['Skanninglistor.pdf, s. 2, 4 och 8','Kunskapsbanken SC21, bild 27–28']),
 task(7,'Fyll EGEN 1','Spara Trafik 3 MPU och SKAN LPO OXIE i mappen EGEN 1.',[
 'Öppna Meny → Talgrupper → Mappar → EGEN 1 och välj Öppna.',
 'Välj Lägg till (eller Mer → Lägg till). Bläddra fram Trafik 3 MPU och lägg till med PTT enligt SC21-underlaget.',
 'Välj Lägg till igen. Gå till SCAN i talgruppsträdet, leta upp hela skanninglistan SKAN LPO OXIE och lägg till den med PTT.',
 'Öppna EGEN 1 och kontrollera att båda posterna finns. EGEN 1 blir en tillgänglig favoritmapp i talgruppsträdet.'],
 'EGEN 1 innehåller både talgruppen Trafik 3 MPU och den färdiga skanninglistan SKAN LPO OXIE. Egen får inte en egen skanningfunktion av detta.', ['Kunskapsbanken SC21, bild 54','Svar övningstenta T4.pdf, s. 4 (uppgift 8)']),
 task(8,'EGEN1 på DV7','Programmera in EGEN1 på DV7.',[
 'Öppna Meny → Talgrupper → Direktval och markera DV7.',
 'Välj Mer → Välj talgrupp och navigera till EGEN 1 i talgruppsträdet. Välj själva mappen och bekräfta enligt terminalens meny.',
 'Gå tillbaka till normalläget, håll inne 7 och kontrollera att EGEN 1 öppnas. Kontrollera att du kommer åt båda posterna från uppgift 7.'],
 'DV7 öppnar mappen EGEN 1. Du har inte bara lagt en enskild talgrupp på direktvalet.', ['Direktval programmering.pdf, s. 1–2','Kunskapsbanken SC21, bild 54 och 57']),
 task(9,'Normal tyst','Byt användarprofil till Normal tyst.',[
 'Tryck snabbt tre gånger på mittvalsknappen för att öppna profilvalet.',
 'Vrid fram Normal tyst. Bekräfta med Välj, grön lur eller PTT enligt kursens profilväljare.',
 'Kontrollera profilnamnet/indikeringen. Välj inte profilen Tyst; den är en annan profil.'],
 'Profilen Normal tyst är vald.', ['knappologi och display-1 (1).pdf, s. 8–9 och 17','Kunskapsbanken SC21, bild 19']),
 task(10,'Displaylägg SKAN17','Displaylägg SKAN17.',[
 'Öppna talgruppsvalet med mittvalsknappen.',
 'Navigera till SCAN i trädet och välj SKAN17. Bekräfta valet.',
 'Kontrollera att listnamnet SKAN17 visas och att Proj 1 LPU är displaylagd. Att enbart välja den fristående talgruppen Proj 1 LPU är inte samma sak som att välja listan.'],
 'SKAN17 är vald, med Proj 1 LPU som displaygrupp. Om ”Ingen grupp vald” visas: kontrollera valet i uppgift 6.', ['Skanninglistor.pdf, s. 8','Byta talgrupp.pdf, s. 2 och 4','Skanning.pdf, s. 4']),
 task(11,'Stäng av skanningen','Stäng av skanningen.',[
 'Öppna Meny → Talgrupper → Skanning På/Av.',
 'Välj Av/avmarkera skanning enligt menyn. Kontrollera att skanningen nu är av.',
 'Gå tillbaka till displayen och kontrollera att skanningssymbolen för den valda listan har försvunnit. Behåll SKAN17 som vald lista.'],
 'Vanlig skanning är av. Bakgrundstalgruppernas passning påverkas inte. Lämna skanningen av inför uppgift 12; i normal tjänst ska normalpassningen återställas enligt anvisning.', ['Kunskapsbanken SC21, bild 56','Skanning.pdf, s. 8–9']),
 task(12,'Knapplås','Aktivera knapplåset.',[
 'Återgå till terminalens normalläge.',
 'Gör ett långt tryck på stjärnknappen (*) enligt kursens handterminalprogrammering.',
 'Kontrollera låsindikeringen i displayen. Lämna terminalen med knapplåset aktivt och visa slutläget för läraren.'],
 'Knapplåset är aktivt. Att enbart välja automatisk låsning och lämna terminalen olåst uppfyller inte uppgiften.', ['knappologi och display-1 (1).pdf, s. 28']),
];

export const trafficAnswers=['från','kom','repetera','kom','mittåt','uppfattat','slut kom','klart slut','från','kom','förtur','vänta','kom'];
export const trafficDialogue=[
 ['Patrull 65-3100','6-0 {1} 65-3100 {2}.'],
 ['Operatör','6-0, kom.'],
 ['Patrull 65-3100','Var snäll och {3} signalementet du angav tidigare på gärningspersonen, det var dålig hörbarhet {4}.'],
 ['Operatör','Det var en man, ca 180 cm lång, röd keps och grön tröja, {5}, röd tröja var det. Röd tröja inget annat, kom.'],
 ['Patrull 65-3100','(Patrullen har förstått) {6}, (patrullen har inte mer att säga) {7}.'],
 ['Operatör','(Avslutar samtalet) {8}.'],
 ['Samtalet avslutas','Nytt samtal på insatstalgruppen.'],
 ['Patrull 65-3100','6-0 {9} 65-3100, {10}.'],
 ['Operatör','6-0, kom.'],
 ['Patrull 65-3100','Vi har kollat av Stortorget men inte sett några människor. Är målsäganden kvar på platsen, kom?'],
 ['Patrull 65-3240','(Patrullen ser gärningspersonen och behöver akut gå emellan i samtalet) {11}! 65-3240, vi ser en person som stämmer överens med signalementet, han går in i ett hus. Vi är på… {12} (patrullen försöker hitta adressen på TITAN-skärmen och ser sedan en gatuskylt med husets nummer)… Granvägen 31, Granvägen 31. Ska vi avvakta eller gå fram, {13} (har ej för avsikt att avsluta samtalet)?'],
 ['Operatör','65-3240 avvakta! Vad har övriga patruller för framkörningstid till platsen, kom?'],
];

export const paperTotal=paperQuestions.reduce((sum,item)=>sum+item.points,0);
export const blankPapers=()=>({answers:{},scores:{},practice:{}});
const answerIds=[...paperQuestions.map(q=>`q${q.number}`),...['nationell','internationell'].flatMap(part=>[`${part}-text`,...Array.from({length:29},(_,i)=>`${part}-${i}`)]),...trafficAnswers.map((_,i)=>`traffic-${i}`)];
export function sanitizePapers(raw){
 const out=blankPapers();
 for(const id of answerIds)if(typeof raw?.answers?.[id]==='string')out.answers[id]=raw.answers[id].slice(0,6000);
 for(const q of paperQuestions){const n=raw?.scores?.[q.number];if(Number.isInteger(n)&&n>=0&&n<=q.points)out.scores[q.number]=n;}
 for(const t of practicalPaper){const n=raw?.practice?.[t.number];if([0,1,2].includes(n))out.practice[t.number]=n;}
 return out;
}
export function paperProgress(papers){
 const marked=paperQuestions.filter(q=>Number.isInteger(papers.scores[q.number]));
 return {marked:marked.length,points:marked.reduce((sum,q)=>sum+papers.scores[q.number],0),repeat:marked.filter(q=>papers.scores[q.number]<q.points).map(q=>q.number),complete:marked.length===paperQuestions.length};
}
