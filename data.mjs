export const VERSION = '1.2.0';
export const CHECKED = '2026-09-28';
export const LAB = 'https://denniswessman-hub.github.io/samband/';
export const precedence = 'Aktuell sambandstablå, lokal programmering och lärarnas instruktioner har alltid företräde.';

// Originalfiler och privata meddelanden ingår inte. Referenser avser kursens källmaterial.
const t = (id, title, group, source, location, items, note = '') => ({
  id, title, group, note, sources: [{title: source, location}],
  questions: items.map(([prompt, answer, kind = 'öppen'], i) => ({id:`${id}-${i+1}`, topic:id, kind, prompt, answer:answer.split('|'), sources:[{title:source, location}]})),
});

export const topics = [
  t('01', 'Trafikuttryck', 'Tala och förstå', 'Trafikuttryck.pdf', 's. 2–4', [
    ['Vad skiljer KOM, SLUT KOM och KLART SLUT?', 'KOM lämnar över ordet och begär svar.|SLUT KOM visar att du inte har mer att tillföra i det individsamtal med RLC som du har initierat.|KLART SLUT avslutar samtalet. RLC avslutar kontakten med patrullen; mellan patruller avslutar den som inledde.', 'begrepp'],
    ['Räkna upp de nio trafikuttrycken och förklara två som hjälper vid missförstånd.', 'KOM, SLUT KOM, KLART SLUT, UPPFATTAT, REPETERA, VÄNTA, FRÅN, FÖRTUR och MITTÅT/FEL.|REPETERA begär en upprepning, helst av just den uppgift som är oklar. MITTÅT/FEL rättar den egna felaktiga uppgiften.'],
    ['Du hör inte vilken infart RLC anger. Formulera ditt svar med platshållare.', '”[Egen anropssignal], repetera infarten, kom.”|Identifiera vem som talar och precisera vad som behöver upprepas. Gissa inte och kvittera inte som uppfattat.'],
  ]),
  t('02', 'Utföra korrekta anrop', 'Tala och förstå', 'Anropstyper.pdf; Trafikuttryck.pdf', 'Anropstyper s. 1–2; Trafikuttryck s. 4', [
    ['Hur bygger du upp ett riktat anrop på en talgrupp?', 'Mottagarens anropssignal, FRÅN, egen anropssignal, KOM.|Exempel: ”[Mottagare] från [egen anropssignal], kom.”'],
    ['Beskriv Tänk – Tryck – Tala i ett gruppsamtal.', 'Tänk igenom det korta budskapet och lyssna på trafiken.|Tryck in PTT och invänta kopplingstonen.|Tala tydligt, håll PTT under hela meddelandet och släpp när du lämnar över ordet.', 'handhavande'],
    ['Varför är det fel att börja prata samtidigt som du trycker in PTT?', 'Uppkopplingen kan ännu inte vara klar; början av meddelandet kan försvinna.|Invänta kopplingstonen så att mottagaren får hela budskapet.'],
  ]),
  t('03', 'Geografiska regioner och numrering', 'Tala och förstå', 'Regioner och anrop till RLC.pdf', 's. 1–3 och 5', [
    ['Ange polisregionerna 1–7 och förklara hur RLC:s anropssignal bildas.', '1 Nord, 2 Mitt, 3 Stockholm, 4 Öst, 5 Väst, 6 Syd, 7 Bergslagen.|RLC:s anropssignal är regionens siffra följd av noll: exempelvis 5-0 för Väst.', 'begrepp'],
    ['Varför kan du inte läsa polisregion direkt ur varje terminals regionsiffra?', 'Polisregionernas indelning och Rakelregionernas nummerplan är inte identiska.|Mitt och Bergslagen delar Rakelregion 2 i kursmaterialets nummerplan.'],
    ['Vilka ledningscentraler avses med 1-0, 6-0 och 7-0?', '1-0: RLC Nord.|6-0: RLC Syd.|7-0: RLC Bergslagen.'],
  ]),
  t('04', 'Bokstavering nationell/internationell', 'Tala och förstå', 'Bokstavering.pdf', 's. 1–4', [
    ['Bokstavera övningsordet RAKEL nationellt och internationellt.', 'Nationellt: Rudolf Adam Kalle Erik Ludvig.|Internationellt: Romeo Alpha Kilo Echo Lima.'],
    ['Vilka regler gäller när du bokstaverar ett registreringsnummer?', 'Registreringsnumret bokstaveras alltid enligt kursmaterialet.|Välj ett alfabet och blanda inte. Siffrorna sägs på svenska i svensk radiotrafik.|Lämna fabrikat och färg när uppgifterna är kända.'],
    ['Å, Ä och Ö: vilka ord används i de två alfabeten i kursmaterialet?', 'Nationellt: Åke, Ärlig, Östen.|Internationellt: Alpha Alpha, Alpha Echo, Oscar Echo.', 'begrepp'],
  ]),
  t('05', 'Uppbyggnad av taktiska anropsnummer', 'Tala och förstå', 'Anropssignaler, nummerplan.pdf', 'avsnittet Nummerplanen, s. 6 och framåt', [
    ['Vilka delar bygger upp polisens taktiska nummer enligt nummerplanen?', 'Organisationssiffra, Rakelregion och polisområde eller markering för handterminal.|De efterföljande positionerna beskriver lokalpolisområde/funktion, fordonstyp/funktion och löpnummer/lokal variation.|Tolka detaljer med aktuell nummerplan, inte enbart genom att gissa på siffrorna.', 'begrepp'],
    ['Varför kan det talade anropet ha färre siffror än numret som du slår in?', 'Polisens organisationsprefix 1 utelämnas normalt muntligt inom polisen.|Vid anrop med MSISDN används hela det sjusiffriga numret.'],
    ['Vilken markering skiljer handterminaler i position 3 i kursens nummerplan?', 'Handterminaler har noll i position 3, räknat inklusive organisationsprefixet.|Förväxla inte den markeringen med ISSI, som är terminalens unika identitet.'],
  ]),
  t('06', 'Terminalernas knappar, direktval och funktioner', 'Terminal och talgrupp', 'knappologi och display-1.pdf; Fordonsterminal Kort-1.pdf', 'knappar och direktval; fordon s. 1–2', [
    ['Vad är ett direktval och varför behöver du skilja kort från långt tryck?', 'Ett direktval öppnar en programmerad funktion eller talgrupp genom långt tryck.|Samma knapp kan ha en annan funktion vid kort tryck. Kontrollera terminaltyp och programmering.', 'begrepp'],
    ['Vilka funktioner har DV 1, DV 2, DV 8 och # i kursmaterialet?', 'DV 1: förprogrammerad skanninglista för normalpassning. DV 2: anropsbegäran till hemma-RLC.|DV 8: val av driftsätt. # öppnar smartmenyn.|Skanning måste vara aktiv för normalpassning; enbart DV 1 räcker inte.'],
    ['Du ska sända och därefter kontrollera inställningarna. Vilka displayuppgifter granskar du?', 'Kontrollera driftsätt och nätkontakt, vald talgrupp, index och mapp/skanninglista.|Kontrollera att skanningen faktiskt är aktiv när uppgiften kräver normalpassning.|Använd PTT först när rätt talgrupp är vald och invänta kopplingston.', 'handhavande'],
  ]),
  t('07', 'Användning av olika typer av talgrupper', 'Terminal och talgrupp', 'Talgrupper.pdf', 's. 2–10', [
    ['Skilj mellan order-, insats-, intern- och samverkanstalgrupp.', 'Order används mellan RLC och patruller för ordergivning.|Insats samlar resurser i ett gemensamt ärende och tilldelas av RLC.|Intern används för gruppens interna samband. Samverkan används mellan organisationer.', 'begrepp'],
    ['Du vill samverka med flera patruller i samma händelse. Vem bestämmer insatstalgruppen?', 'RLC beslutar om och vilken insatstalgrupp som ska användas.|Begär vid behov en talgrupp och säkerställ vilka som deltar och hur ledningen nås.'],
    ['Varför kan en vald intern talgrupp ensam ge sämre passning än normalpassning?', 'En enskild talgrupp innebär inte att den ordinarie skanninglistan lyssnas av.|Normalpassning kräver rätt skanninglista och aktiv skanning så att även berörda orderanrop når fram.|Bakgrundsskannade talgrupper är en separat funktion.'],
  ]),
  t('08', 'Byta talgrupper via grupper/mode', 'Terminal och talgrupp', 'Navigering talgrupper.pdf', 's. 1–6; bekräftelse även i Sambandslabbets Talgruppslabb', [
    ['Hur går du från grunddisplay till rätt talgrupp via mappträdet?', 'Öppna Grupper med mittvalsknappen eller tryck på navigationsratten enligt terminaltyp.|Använd pilar för mappnivåer och mappar. Vrid för att välja talgrupp i rätt mapp.|Bekräfta enligt terminalens funktion och kontrollera slutligen displayen.', 'handhavande'],
    ['Vad betyder pilarna vid mappnamnet?', 'Upp-/nedpilar visar att det finns över- eller undermappar.|Höger-/vänsterpilar visar mappar på samma nivå.', 'begrepp'],
    ['Varför fungerar inte vridning av vredet alltid för att byta skanninglista?', 'Skanninglistorna ligger som egna mappar i SKAN.|Använd pilar mellan mappar/skanninglistor; vredet används mellan talgrupper i en mapp.'],
  ]),
  t('09', 'Byta talgrupper via indexnummer', 'Terminal och talgrupp', 'Indexering 22.pdf', 's. 2–4', [
    ['Beskriv hur en talgrupp väljs med indexnummer.', 'Öppna gruppvalet med ett tryck på mittvalsknappen eller navigationsratten.|Skriv indexnumret direkt, bekräfta valet enligt terminalens funktion och kontrollera talgruppsnamnet i displayen.', 'handhavande'],
    ['Vad betyder nationell indexering, och gäller det alla talgrupper?', 'En nationellt indexerad talgrupp har samma index i terminaler i hela landet.|Insats- och RLC-talgrupper är exempel. Alla talgrupper är inte nationellt indexerade.', 'begrepp'],
    ['Vilka index har RLC Väst och RLC Nord, och varför?', 'RLC Väst har 50 och RLC Nord har 10.|RLC-talgruppernas index motsvarar ledningscentralernas anropsnummer utan bindestreck.'],
  ]),
  t('10', 'Göra förbindelseprov', 'Samband med RLC', 'Förbindelseprov canvasversion.pdf', 's. 1–2', [
    ['När behövs ett muntligt förbindelseprov enligt kursmaterialet?', 'När uppgifter om exempelvis patrullens bemanning har ändrats eller utrustningens funktion är osäker.|Lokala rutiner kan innebära regelmässiga muntliga prov. Följ aktuell instruktion.'],
    ['Vilken grundrutin anges när patrullen är redo för passets uppdrag?', 'Patrullen ska vara korrekt registrerad och skickar status ”Klar, ledig”.|Det ger RLC information om att patrullen är tillgänglig.|Muntligt prov ersätter inte behovet av korrekta patrulluppgifter.', 'handhavande'],
    ['Vad behöver du få bekräftat vid ett muntligt förbindelseprov?', 'Att förbindelsen fungerar åt båda håll och att relevanta uppgifter om patrullen stämmer.|Identifiera patrullen och lämna aktuella förändringar eller utrustningsuppgifter som RLC behöver.|Normalt ändrar patrullen uppgifterna i registreringssystemet; källans exempel om hjälp från RLC är en undantagssituation.'],
  ]),
  t('11', 'Nätläge och direktläge', 'Nät, samverkan och ansvar', 'Driftsätt.pdf', 's. 3–10', [
    ['Vad är skillnaden mellan TMO och DMO?', 'TMO/nätläge använder Rakelnätets basstationer.|DMO/direktläge innebär direkt samband mellan terminaler inom radioräckvidd.|DMO ger inte i sig kontakt med RLC eller andra i Rakelnätet.', 'begrepp'],
    ['Ni har samma DMO-talgrupp men hör inte varandra. Vad kan förklara det?', 'Avstånd, terräng eller byggnader kan hindra den direkta radiosignalen.|Kontrollera också att båda terminalerna verkligen är i direktläge och har samma talgrupp.|Samma talgrupp är nödvändig men garanterar inte räckvidd.'],
    ['Vad skiljer en repeater från en gateway?', 'En repeater vidarebefordrar radiosignalen mellan terminaler i direktläge.|En gateway förbinder en DMO-talgrupp med en TMO-talgrupp via en terminal med nätkontakt.', 'begrepp'],
  ]),
  t('12', 'ISSI och MSISDN', 'Terminal och talgrupp', 'ISSI-1.pdf; Individsamtal-1.pdf', 'ISSI s. 1; Individsamtal s. 2–4', [
    ['Vad skiljer ISSI från MSISDN?', 'ISSI är terminalens unika individidentitet.|MSISDN är det taktiska/personliga anropsnumret. Polisens MSISDN anges med sju siffror inklusive organisationsprefix.|Nummer och vald anropstyp/symbol måste stämma överens.', 'begrepp'],
    ['Varför används ISSI vid ett individanrop i direktläge?', 'I DMO finns inte nätets växel som håller reda på kopplingen till taktiska nummer.|ISSI identifierar den specifika terminal som ska anropas.'],
    ['Ett individanrop eller SDS går inte fram. Vilken nummerkontroll gör du?', 'Kontrollera mottagarens nummer och om det är ISSI eller MSISDN.|Välj motsvarande symbol/anropstyp och kontrollera att MSISDN är fullständigt.|Kontrollera även driftsätt och förbindelse.', 'handhavande'],
  ]),
  t('13', 'Förtursbegäran och feltryck', 'Samband med RLC', 'Förtursbegäran.pdf', 's. 1–3', [
    ['Vad begär du med förtursbegäran och hur besvaras den?', 'Du begär prioritet i radiokön för att brådskande nå RLC.|RLC svarar med ett individsamtal och kan därefter koppla in andra resurser vid behov.', 'begrepp'],
    ['Hur gör du en förtursbegäran på terminalen i kursmaterialet?', 'Håll förtursknappen, markerad orange/röd, intryckt minst två sekunder tills ljudsignal hörs.|Invänta och besvara RLC:s individsamtal. Lämna position, behov och den brådskande informationen.', 'handhavande'],
    ['Du skickade förtursbegäran av misstag. Vilka uppgifter lämnar du när RLC svarar?', 'Anropssignal, position, att det är ett feltryck, U-nummer, namn, SLUT KOM.|Svara RLC och låt operatören klarlägga situationen; anta inte att begäran försvinner av sig själv.|I plattformen används bara platshållarna [U-nummer] och [namn].'],
  ]),
  t('14', 'Programmera skanninglistor', 'Programmera och använda', 'Skanninglistor.pdf', 's. 2, 4, 6–9; s. 8 visuellt granskad', [
    ['Beskriv arbetsgången för att skapa en egen skanninglista.', 'Meny → Talgrupper → Skanninglistor: välj en programmeringsbar lista.|Lägg till talgrupper, ange deras prioritet och välj den talgrupp som ska vara displaylagd.|Spara. Displaylägg listan och kontrollera att skanning är aktiv.', 'handhavande'],
    ['Vilken prioritet har ordertalgrupper respektive interntalgruppen i kursens exempel?', 'Ordertalgrupperna har hög prioritet.|Interntalgruppen har låg prioritet och väljs som den normalt displaylagda gruppen.|Det gör att relevanta orderanrop kan bryta in.'],
    ['Du hör bara interntrafik efter programmeringen. Vilka tre saker granskar du?', 'Att listan innehåller rätt ordertalgrupper och prioriteringar.|Att själva skanninglistan är displaylagd, inte bara en av dess talgrupper.|Att skanningen är aktiverad.'],
  ]),
  t('15', 'Programmera direktval', 'Programmera och använda', 'Direktval programmering.pdf', 's. 1–2; s. 1 visuellt granskad', [
    ['Vilka begränsningar gäller för DV 1, DV 7 och DV 9 i kursmaterialet?', 'DV 1 måste innehålla en skanninglista.|DV 7 kan programmeras med valfri talgrupp eller mappen Egen.|DV 9 måste innehålla en RAPS-talgrupp.', 'begrepp'],
    ['Hur programmerar du ett direktval genom att bläddra fram önskad talgrupp?', 'Öppna Meny → Talgrupper → Direktval och markera det tillåtna direktvalet.|Välj Mer → Välj talgrupp och bläddra till rätt talgrupp/skanninglista enligt direktvalets regler.|Bekräfta och prova direktvalet; kontrollera vad som visas.', 'handhavande'],
    ['Vad riskerar du om du lägger en intern talgrupp på DV 1 i stället för skanninglistan?', 'Du återskapar inte normalpassningen och kan missa relevant ordertrafik.|Välj rätt skanninglista och kontrollera aktiv skanning. Återställ utbildningsterminalen efter övning.'],
  ]),
  t('16', 'Programmera och använda mappen Egen', 'Programmera och använda', 'Mappen Egen-2.pdf', 's. 1–2', [
    ['Vad är mappen Egen och hur skiljer den sig från en skanninglista?', 'Egen är en samling valda favorittalgrupper.|Den skannar inte automatiskt samtliga talgrupper; en grupp väljs och displayläggs åt gången.', 'begrepp'],
    ['Hur lägger du in talgrupper i Egen?', 'Öppna Meny → Talgrupper → Mappar → Egen.|Välj Ny grupp och lägg till önskade talgrupper.|Mappen kan därefter läggas på ett tillåtet direktval enligt kursens instruktion.', 'handhavande'],
    ['Hur använder och återställer du en övningsmapp på DV 7?', 'Aktivera Egen via direktvalet. Öppna gruppvalet och bläddra mellan de sparade talgrupperna.|Efter övningen: återställ DV 7 och radera övningens innehåll ur Egen enligt lärarens instruktion.'],
  ]),
  t('17', 'Upprätta gateway', 'Nät, samverkan och ansvar', 'Gateway-1.pdf; Gateway KORT.pdf', 'Gateway-1 s. 2–5 och 7–16; kortversion s. 3', [
    ['Vilka förutsättningar krävs för gateway i kursens exempel?', 'Fordonsterminalen måste ha kontakt med Rakelnätet och stödja gateway.|RLC ska informeras och tilldela eller bekräfta nätets insatstalgrupp.|Handterminalerna måste nå gatewayterminalen och använda samma DMO-talgrupp.'],
    ['Beskriv kedjan från tilldelad talgrupp till fungerande gateway.', 'Displaylägg insatstalgruppen i fordonet. Välj gateway via DV 8 och därefter överenskommen DMO-talgrupp.|Ställ handterminalerna i DMO via DV 8 och välj samma DMO-talgrupp.|Kontrollera gatewayindikeringen och gör förbindelseprov med RLC.', 'handhavande'],
    ['Hur avslutar ni gateway när uppdraget är klart?', 'Meddela RLC att gateway ska kopplas ned och att insatstalgruppen inte längre behövs.|Återgå till nätläge och normalpassning i både fordon och handterminaler.|Kontrollera driftsätt, rätt skanninglista och aktiv skanning.', 'handhavande'],
  ], 'Källorna använder olika exempel på DMO-grupp. Använd överenskommen grupp enligt aktuell sambandstablå; lär inte in ett exempel som ett universellt val.'),
  t('18', 'Individanrop: duplex och semiduplex', 'Terminal och talgrupp', 'Individsamtal-1.pdf', 's. 2–6', [
    ['Vad skiljer duplex från semiduplex?', 'Duplex tillåter sändning och mottagning samtidigt, som ett telefonsamtal.|Semiduplex innebär att terminalen sänder eller tar emot i taget, med PTT vid tal.', 'begrepp'],
    ['Vilka två val gör du innan ett individanrop?', 'Välj rätt mottagarnummer och symbol för ISSI eller MSISDN.|Välj duplex med grön lur eller semiduplex med PTT enligt kursens terminalfunktion.', 'handhavande'],
    ['Varför föredrar kursmaterialet semiduplex när det fungerar för uppgiften?', 'Duplex tar mer nätkapacitet än semiduplex enligt materialet.|Semiduplex ger turordning genom PTT. Anpassa samtalsform till uppgiften och lokala instruktioner.'],
  ]),
  t('19', 'Skicka SDS', 'Programmera och använda', 'Meddelanden SDS.pdf', 's. 1–3', [
    ['Vad är SDS och vad behöver du kontrollera före sändning?', 'SDS är ett kort textmeddelande i Rakel.|Kontrollera text, mottagare, hela numret och rätt symbol för ISSI eller MSISDN.', 'begrepp'],
    ['Beskriv hur du skapar och skickar ett SDS.', 'Öppna Meddelanden → Skapa meddelande och skriv texten.|Välj Sänd eller Mer → Skicka. Välj kontakt eller ange nummer med rätt anropstyp.|Kontrollera mottagare och text, sänd och kontrollera terminalens återkoppling.', 'handhavande'],
    ['Varför räcker det inte att mottagarens siffror ser korrekta ut?', 'Terminalen behöver även veta vilken nummerform som används.|En symbol för fel anropstyp kan göra att meddelandet inte når fram trots korrekt sifferföljd.'],
  ]),
  t('20', 'Lägga in kontakter', 'Programmera och använda', 'Kontakter-1.pdf', 's. 2–3', [
    ['Beskriv hur du skapar en kontakt i kursens terminal.', 'Kontakter → Meny → Skapa kontakt.|Skriv namnet och välj Spara. Lägg därefter in numret med rätt symbol för MSISDN eller ISSI.|Välj Avsluta för att spara kontakten.', 'handhavande'],
    ['Vilka kontroller behövs när du sparar ett taktiskt polisnummer?', 'Kontrollera hela det sjusiffriga MSISDN-numret inklusive organisationsprefix.|Välj symbolen för MSISDN och kontrollera att numret hör till rätt kontakt.'],
    ['Kan en kontakt innehålla flera nummer och hur avslutar du i så fall?', 'Ja. Använd Lägg till nummer för ytterligare nummer.|Kontrollera nummer och anropstyp för varje post och välj Avsluta när kontakten är färdig.', 'handhavande'],
  ]),
  t('21', 'Skicka status', 'Samband med RLC', 'Status.pdf; Påbörjat uppdrag .pdf', 'Status s. 1–7; Påbörjat uppdrag s. 1', [
    ['När är en status lämplig, och när behövs talad kontakt?', 'Status är ett fördefinierat meddelande för en känd åtgärd.|Använd status när RLC inte behöver ytterligare förklaring. Begär talad kontakt när situationen kräver fler uppgifter eller frågor.'],
    ['Hur skickar du status via mittvalsknapp eller navigationsratt?', 'Tryck två gånger på mittvalsknappen/navigationsratten.|Bläddra till rätt status, välj Sänd och kontrollera avsedd mottagare enligt rutinen.|Kursen anger hemma-KC/RLC som mottagare i detta grundflöde.', 'handhavande'],
    ['Varför är Påbörjat uppdrag betydelsefullt för RLC?', 'RLC behöver veta vilket uppdrag patrullen arbetar med och följa dess läge.|Enligt kursmaterialet påverkar uppgiften även vilket händelseunderlag som öppnas vid förtursbegäran.|Meddela påbörjandet muntligt om ni redan har direkt kontakt med operatören.'],
  ]),
  t('22', 'Avrapportering till RLC', 'Samband med RLC', 'Avrapportering kort.pdf', 's. 1', [
    ['Vilka uppgifter behöver en sammanhängande avrapportering till RLC innehålla?', 'Anropssignal och plats/ärende; händelseförlopp och eventuell brottsrubricering.|Identiteter eller besked att ID saknas, relevanta fordonsuppgifter, tvångsmedel och skador.|Planerad dokumentation, vad patrullen gör härnäst och om relevant information finns i chatten.'],
    ['Varför måste RLC få veta både vidtagna åtgärder och vad patrullen gör härnäst?', 'RLC behöver ett aktuellt händelseunderlag för ledning och dokumentation.|Nästa steg påverkar patrullens tillgänglighet, behov av stöd och fortsatt samordning.'],
    ['Identiteten är ännu okänd. Hur hanterar du det i avrapporteringen?', 'Säg uttryckligen att ID saknas och skilj säkra uppgifter från osäkerheter.|Hitta inte på uppgifter och presentera inte antaganden som fastställda fakta.'],
  ]),
  t('23', 'Direktlägestalgrupper i tjänst och särskild händelse', 'Nät, samverkan och ansvar', 'Driftsätt.pdf; Gateway-1.pdf', 'Driftsätt s. 5–10; Gateway-1 s. 3–5 och 13–15', [
    ['Vad måste en grupp samordna före en övergång till direktläge?', 'Driftsätt, gemensam DMO-talgrupp och hur samband med ledningen ska upprätthållas.|Kontrollera räckvidd och gör förbindelseprov. Vid särskild händelse följs beslutad sambandsplan.'],
    ['Varför innebär direktläge utan gateway en begränsning gentemot RLC?', 'Terminalerna kommunicerar direkt med varandra och har ingen förbindelse via basnätet.|RLC nås inte automatiskt. En planerad förbindelse, exempelvis gateway, behövs för nätkontakten.'],
    ['Vilken informationssäkerhetsfråga måste du beakta i DMO?', 'Kursmaterialet och Myndigheten för civilt försvar beskriver DMO-trafik som okrypterad.|Utgå inte från samma skydd som i nätläge. Följ aktuella säkerhetsföreskrifter om vad som får sändas.', 'begrepp'],
  ], 'Övningen prövar sambandsprinciper. Exakt DMO-grupp och sambandsplan bestäms av aktuell instruktion.'),
  t('24', 'Samverkan med andra organisationer: RAPS m.m.', 'Nät, samverkan och ansvar', 'Talgrupper.pdf; Gateway-1.pdf', 'Talgrupper s. 8; Gateway-1 s. 15', [
    ['Vad står RAPS för och när används en sådan talgrupp?', 'Räddningstjänst, Ambulans, Polis och SOS Alarm.|Talgruppen används för gemensamt samband mellan organisationerna vid behov.', 'begrepp'],
    ['Varför kan du inte förutsätta att en annan organisations resurs hör polisens interna talgrupp?', 'Terminalen behöver tillgång till talgruppen och rätt inställning.|Samordna en tilldelad gemensam talgrupp och kontrollera att berörda deltagare kan använda den.'],
    ['Vad behöver vara tydligt innan samverkan via gateway i exempelvis en tunnel?', 'Vilken nätlägestalgrupp och vilken DMO-talgrupp som kopplas samman.|Vilka deltagare och vilken ledningsfunktion som finns på sambandet; i källans samverkansexempel leds det av SOS.|Att gatewayterminalen har nätkontakt och att förbindelsen är provad.'],
  ]),
  t('25', 'Rakel: uppbyggnad och funktion', 'Nät, samverkan och ansvar', 'RAKEL och Tetra-1.pdf; Myndigheten för civilt försvar: Om Rakel', 'kursmaterial s. 2–6; offentlig källa kontrollerad 2026-09-28', [
    ['Hur förhåller sig Rakel och TETRA till varandra?', 'Rakel är det svenska digitala radiosystemet för samhällsviktiga aktörer.|TETRA, Terrestrial Trunked Radio, är standarden som systemet bygger på.', 'begrepp'],
    ['Vilken roll har basstationerna i nätläge?', 'De förmedlar kommunikationen mellan terminalerna och Rakelnätet.|Kontakt med nätet behövs för nätets tjänster; terminaler kan nå varandra över stora avstånd via infrastrukturen.'],
    ['Varför kan handterminalen sakna täckning trots att fordonet har nätkontakt?', 'Placering, antennförhållanden och hinder som betong, stål eller berg påverkar radioförbindelsen.|Bedöm sambandet på plats. Fordonets nätkontakt kan under rätt förutsättningar användas för gateway.'],
  ], 'Äldre kursmaterial använder namnet MSB. Den aktuella offentliga källan finns hos Myndigheten för civilt försvar.'),
  t('26', 'Säkerhet, förvaring och förlust', 'Nät, samverkan och ansvar', 'Regler hantering av terminaler-1.pdf', 's. 2–3', [
    ['Vilken grundregel anges för förvaring av handterminal?', 'Terminalen ska vara under uppsikt eller förvaras i låst och larmat utrymme.|Kursmaterialet anger tjänsteanknuten användning och att batteriet tas ur när man inte är i tjänst, med angivna undantag/beslut.|Följ alltid aktuella säkerhetsföreskrifter.'],
    ['Vad gör du om en handterminal förkommer?', 'Kontakta rätt servicedeskfunktion för spärr enligt aktuell rutin.|Upprätta anmälan om stöld/förlust och underrätta sambandsansvarig.|Använd aktuella kontaktvägar, inte ett gammalt telefonnummer ur kursmaterialet.', 'handhavande'],
    ['Varför är en förlorad radio mer än en fråga om ersättningsutrustning?', 'Terminalen ger tillgång till skyddad kommunikation och behöver spärras för att förhindra obehörig användning.|Förlusten behöver dokumenteras och följas upp av ansvariga funktioner.'],
  ]),
  t('27', 'Hantera handburen terminal', 'Sammanhängande handhavande', 'knappologi och display-1.pdf; Skanning.pdf; Anropstyper.pdf', 'knappar/display; normalpassning; Anropstyper s. 2', [
    ['Beskriv din kontroll av handterminalen inför ett övningspass.', 'Kontrollera att terminalen är startad, strömförsörjd och har avsett driftsätt/nätkontakt.|Kontrollera rätt skanninglista, aktiv skanning och lämplig ljudnivå/profil.|Kontrollera förbindelsen enligt instruktion och aktuella patrulluppgifter.', 'handhavande'],
    ['Vilka steg behöver du kunna återge när en ny talgrupp tilldelas?', 'Uppfatta och vid behov repetera talgruppsnamnet.|Välj gruppen via mappträd eller känt index. Kontrollera namnet i displayen.|Använd PTT med kopplingston för tal och återställ rätt passning när uppgiften är slut.', 'handhavande'],
    ['Vad måste du kontrollera efter återgång från direktläge?', 'Att terminalen faktiskt är tillbaka i nätläge och har nätkontakt.|Att rätt skanninglista är displaylagd och skanning aktiv.|Att sambandet fungerar enligt aktuell uppgift.'],
  ]),
  t('28', 'Hantera fordonsterminal', 'Sammanhängande handhavande', 'Fordonsterminal Kort-1.pdf; Gateway-1.pdf', 'Fordonsterminal s. 1–2; Gateway-1 s. 2–5 och 14', [
    ['Hur används navigationsratten för gruppval och status?', 'Tryck en gång för gruppval och två gånger för status enligt kursens grundflöde.|Vrid/bläddra till rätt val och bekräfta. Kontrollera resultatet i displayen.', 'handhavande'],
    ['Vad gör DV 0 respektive DV 8 i fordonsterminalens kursversion?', 'DV 0 byter ljudväg från fordonshögtalare till monofon.|DV 8 öppnar driftsätt, där nätläge, direktläge och gateway kan väljas.', 'begrepp'],
    ['Fordonet har använts som gateway. Vad granskar du innan normal tjänst återupptas?', 'Att RLC fått information om nedkopplingen och frigörandet av insatstalgruppen.|Att både fordon och handterminaler återgått till nätläge och korrekt normalpassning.|Att vald ljudväg och ljudnivå fungerar för arbetet.'],
  ]),
  t('29', 'Hantera Polman', 'Sammanhängande handhavande', 'Polman.pdf; Status.pdf', 'Polman s. 3–10; Status s. 7', [
    ['Hur förhåller sig Polmans Rakelfunktioner till fordonsterminalen?', 'Polmans Rakelgränssnitt är direkt kopplat till fordonsterminalen och har dess radiofunktioner.|Volymvredet fungerar även som Rakels mode-knapp.', 'begrepp'],
    ['Hur kopplas en handterminal till Polman och vad behöver du kontrollera?', 'Välj anslutning av handterminal/handenhet och ange dess hela sjusiffriga MSISDN.|Kontrollera rätt mottagare. Kopplingen används för vidarebefordran av SDS och larm enligt kursen.|Koppla från efter övningen; kopplingarna raderas även när Polman stängs av med huvudbrytaren.', 'handhavande'],
    ['Vad är skillnaden mellan Stealth mode och Leave car mode?', 'Stealth mode släcker skärmen men påverkar inte Rakelljudet.|Leave car mode släcker skärmen och stänger av Rakelljudet enligt kursmaterialet.|Förväxla inte en släckt skärm med att radioinformationen inte kan höras.'],
  ]),
  t('30', 'Arbete och förflyttning mellan PO och regioner', 'Samband med RLC', 'Georgrafisk förflyttning Canvas-1.pdf', 's. 2, 4–9', [
    ['Vad ändrar du i passningen när du ska arbeta i ett annat polisområde inom regionen?', 'Välj skanninglistan för det aktuella området i SKAN och kontrollera aktiv skanning.|Du behöver höra områdets relevanta order- och interntrafik, inte bara hemmaområdets.', 'handhavande'],
    ['Vad behöver samordnas när du tillfälligt arbetar i en annan region?', 'Kontakta berörd ledningscentral enligt rutin och få besked om talgrupp/passning.|Kontrollera att anropsbegäran går till avsett RLC och att du nås av rätt ordertrafik.|Meddela när du lämnar regionen och anpassa passningen vid återgång.'],
    ['Varför ska man inte anta att alla regioner har samma nivå på ordertalgrupperna?', 'Kursmaterialet beskriver skillnader mellan polisområde, radioområde och lokalpolisområde.|Följ aktuell sambandstablå för området; den organisatoriska benämningen ensam räcker inte.'],
  ]),
  t('31', 'Anropsbegäran till annat RLC', 'Samband med RLC', 'Georgrafisk förflyttning Canvas-1.pdf; Förtursbegäran.pdf', 'Geografisk förflyttning s. 7 och 9; Förtursbegäran s. 3', [
    ['Hur gör du anropsbegäran till annat RLC enligt kursmaterialet?', 'Displaylägg den avsedda regionens RLC-talgrupp.|Gör ett långt tryck på grön lur och invänta svar.|Identifiera patrullen, ange position/ärende och följ anvisad passning.', 'handhavande'],
    ['Varför räcker det inte att du befinner dig i den andra regionen och trycker DV 2?', 'Ordinarie anropsbegäran via DV 2/A är programmerad till hemma-RLC enligt kursmaterialet.|Geografisk förflyttning ändrar inte automatiskt den mottagaren.'],
    ['Hur skiljer sig mottagarprincipen för vanlig anropsbegäran och förtursbegäran?', 'DV 2/A riktas till hemma-RLC enligt programmeringen.|Förtursbegäran styrs geografiskt enligt kursmaterialet.|För vanlig kontakt med annat RLC används dess RLC-talgrupp och långt tryck på grön lur.'],
  ]),
];

export const publicSources = [
  {title:'Myndigheten för civilt försvar: Om Rakel', url:'https://www.mcf.se/sv/amnesomraden/samhallsviktiga-kommunikationstjanster/rakel/om-rakel/'},
  {title:'Myndigheten för civilt försvar: Tips för förstärkt Rakeltäckning', url:'https://www.mcf.se/sv/amnesomraden/samhallsviktiga-kommunikationstjanster/rakel/tackning-och-teknik/tips-for-forstarkt-rakeltackning/'},
];
topics.find(t=>t.id==='25').questions.forEach(q=>q.sources.push(publicSources[0]));
topics.find(t=>t.id==='23').questions[2].sources.push(publicSources[1]);
export const questions = topics.flatMap(t=>t.questions);
