export const lessonDate='2026-09-30';
const ref=(title,location)=>({title,location});
const course=(...refs)=>[ref('Lektionsanteckningar återgivna 2026-09-30','momentlistan'),...refs];

export const lessonTasks=[
 {id:'egen',title:'Fyra talgrupper i Egen → direktval 7',device:'Handterminal',
  goal:'Lägg in fyra valfria talgrupper i mappen Egen och nå mappen via DV 7.',
  steps:[
   ['Öppna mappen','Från normalläget: öppna Meny med nedåtpilen. Välj Talgrupper → Mappar → Egen.'],
   ['Lägg in fyra grupper','Välj Ny grupp, leta upp en valfri övningstalgrupp och bekräfta. Upprepa tills fyra olika talgrupper finns i Egen. Kontrollera de fyra namnen.'],
   ['Programmera DV 7','Gå till Meny → Talgrupper → Direktval. Markera Direktval 7 och välj Mer → Välj talgrupp. Gå till Egen i gruppträdet och bekräfta valet enligt terminalens meny.'],
   ['Prova genvägen','Återgå till normalläget och aktivera DV 7 med långt tryck på 7 enligt kursens direktval. Tryck på mittvalsknappen/vredet och bläddra mellan de fyra grupperna. Kontrollera att gruppvalet utgår från Egen.'],
  ],
  checks:['Egen innehåller fyra olika talgrupper.','DV 7 ger åtkomst till Egen och du kan bläddra mellan alla fyra.'],
  note:'Enligt lektionen visas Egen som en egen mapp högst upp i trädet. Kurs-PDF:en placerar den mellan Version och Reg MPU; den exakta placeringen kan skilja med programmering. Egen är en favoritmapp och skannar inte automatiskt alla fyra grupper.',
  sources:course(ref('Mappen Egen-2.pdf','s. 1–2'),ref('Direktval programmering.pdf','s. 1–2'),ref('Menyn-1.pdf','s. 2'),ref('Byta talgrupp.pdf','s. 3: långt tryck för direktval'))},
 {id:'skanning',title:'Skanninglista: Projekt 1 + Order reg + Order lokal',device:'Handterminal',
  goal:'Skapa och displaylägg en egen skanninglista med Projekt 1 som vald intern-/sändningstalgrupp och två prioriterade ordertalgrupper.',
  steps:[
   ['Välj en ändringsbar lista','Öppna Meny → Talgrupper → Skanninglistor. Välj en programmerbar övningslista, exempelvis en ledig SKAN-lista som läraren anvisat.'],
   ['Lägg in tre talgrupper','Leta upp och lägg till Projekt 1, Order reg och den lokala ordertalgrupp som läraren avser. Kontrollera rätt region och lokal grupp i namnlistan.'],
   ['Ställ prioriteten','I listans redigering: markera respektive talgrupp och använd Ändra/terminalens prioriteringsval. Projekt 1 ska ha låg prioritet, grön pil/triangel. Båda ordertalgrupperna ska ha hög prioritet, röda pilar/trianglar.'],
   ['Välj den displaylagda gruppen','Markera Projekt 1 som vald talgrupp så att ringen vid den får en prick. Den gröna prioritetspilen ensam väljer inte vilken grupp som är displaylagd. Spara listan.'],
   ['Displaylägg listan','Öppna gruppträdet med ett tryck på mittvalsknappen/vredet. Bläddra till huvudmappen SKAN (SCAN enligt lektionsanteckningen), gå ned och välj din sparade skanninglista.'],
   ['Slå på och kontrollera skanning','Kontrollera att skanning är aktiverad. Om den är av: Meny → Talgrupper → Skanning På/Av och aktivera. Kontrollera att mappnamnet SKAN visas under talgruppsnamnet.'],
  ],
  checks:['Projekt 1: grön/låg prioritet och prick i ringen.','Order reg och Order lokal: röda/hög prioritet.','Skanninglistan är displaylagd från SKAN och skanning är på.'],
  note:'Anteckningens ”indextalgrupp” tolkas här som den valda interntalgruppen Projekt 1, enligt kursens exempel. Ingen indexsiffra har angivits. Du lyssnar på listans grupper när skanning är på; ordertrafik med hög prioritet bryter igenom. Att bara displaylägga den fristående talgruppen Projekt 1 ger inte samma passning.',
  sources:course(ref('Skanninglistor.pdf','s. 4–9'),ref('Direktval programmering.pdf','s. 1: Skanning På/Av'))},
 {id:'gateway',title:'Gateway i fordonet och förbindelseprov',device:'Fordonsterminal + handterminal',
  goal:'Koppla samman en tilldelad insatstalgrupp i Rakelnätet med en överenskommen DMO-talgrupp och prova sambandet från handterminalen.',
  correction:'Rättelse av terminal i anteckningen: efter att gateway har aktiverats är det handterminalen som ska ställas i direktläge. Fordonsterminalen ska stå kvar i Gateway och ha kontakt med Rakelnätet.',
  steps:[
   ['Kontakta RLC','Kontrollera att fordonsterminalen har nätkontakt. Anropa RLC, säg att ni ska upprätta gateway och be om/bekräfta insatstalgrupp och vilken DMO-talgrupp som ska användas. Använd den överenskomna gruppen, inte ett gissat standardnummer.'],
   ['Fordon: välj insatstalgrupp','Displaylägg den tilldelade insatstalgruppen i fordonsterminalen medan den har nätkontakt. Kontrollera gruppnamnet.'],
   ['Fordon: aktivera Gateway','Gör ett långt tryck på 8 (DV 8) i fordonsterminalen och välj Gateway. Välj/displaylägg därefter den överenskomna DMO-talgruppen för gatewaykopplingen. Låt fordonsterminalen stå kvar i Gateway.'],
   ['Handterminal: aktivera direktläge','Gör ett långt tryck på 8 i handterminalen och välj Direktläge. Välj samma DMO-talgrupp som i gatewayterminalen. Berörda handterminaler ska ha samma DMO-grupp.'],
   ['Prova hela förbindelsen','Kontrollera handterminalens indikering för gatewaykontakt. Gör ett muntligt förbindelseprov från handterminalen till RLC via kopplingen och invänta svar. Exempel med platshållare: ”[RLC] från [egen anropssignal], förbindelseprov via gateway, kom.”'],
   ['Avsluta efter anvisning','När övningen är avslutad: meddela RLC att gateway kopplas ned och att insatstalgruppen kan frigöras. Återställ fordon och handterminal till nätläge och anvisad normalpassning; kontrollera sambandet.'],
  ],
  checks:['Fordonet har nätkontakt och står i Gateway.','Handterminalen står i direktläge på samma DMO-talgrupp.','Förbindelseprovet ger kontakt i båda riktningarna.'],
  note:'Det tidigare examinationsbeskedet beskriver individuell examination med handterminal. Dagens lektionslista tar även upp fordonsterminal och gateway. Båda uppgifterna redovisas här; läraren behöver klargöra hur fordonsterminalen ingår vid examinationen.',
  sources:course(ref('Gateway KORT.pdf','s. 3: fordon respektive handterminal'),ref('Gateway-1.pdf','s. 2–5, 13–14'),{title:'Myndigheten för civilt försvar: Gatewayläge',url:'https://www.mcf.se/sv/amnesomraden/samhallsviktiga-kommunikationstjanster/rakel/tackning-och-teknik/tips-for-forstarkt-rakeltackning/'})},
 {id:'kontakt',title:'Skapa en kontakt med ISSI-nummer',device:'Handterminal',
  goal:'Spara en övningskontakt med terminalens individnummer, ISSI. ”ISI´SI” i anteckningen avser här ISSI.',
  steps:[
   ['Öppna skapa kontakt','Gå till Meny → Kontakter. Välj fliken Meny och därefter Skapa kontakt.'],
   ['Spara namnet','Skriv ett fiktivt övningsnamn med siffertangenterna och välj Spara.'],
   ['Ange ISSI','Skriv det av läraren anvisade ISSI-numret på den tomma nummerraden. Lägg inte till polisens MSISDN-prefix till ett ISSI-nummer.'],
   ['Välj ISSI-symbolen','Välj symbolen för ISSI: den stående handterminalen i kursmaterialet. Pil upp/ned växlar nummertyp där terminalen erbjuder det. Kontrollera symbolen tillsammans med numret.'],
   ['Slutför och kontrollera','Välj Avsluta för att spara kontaktposten. Öppna kontakten igen och kontrollera namn, nummer och ISSI-symbol. Spara efter namnet och Avsluta efter numret är två olika steg.'],
  ],
  checks:['Kontakten finns sparad med rätt övningsnamn.','Numret och den stående ISSI-symbolen hör ihop.'],
  sources:course(ref('Kontakter-1.pdf','s. 2–3'),ref('ISSI-1.pdf','s. 1'),ref('Individsamtal-1.pdf','s. 3–4: nummertyper'))},
 {id:'sds',title:'Skicka SDS till en kontakt',device:'Handterminal',
  goal:'Skicka ett kort övningsmeddelande till en sparad kontakt och kontrollera mottagaren.',
  steps:[
   ['Skapa meddelandet','Öppna Meny → Meddelanden → Skapa meddelande.'],
   ['Skriv texten','Skriv en kort fiktiv text, exempelvis ”Övningsmeddelande”. Kursens handterminal skriver bokstäver med upprepade tryck på siffertangenterna; två tryck på 1 ger mellanslag.'],
   ['Öppna mottagarvalet','Välj Sänd eller Mer → Skicka enligt terminalens visning. Välj mottagare ur kontaktboken.'],
   ['Kontrollera kontakt och nummertyp','Välj avsedd kontakt och, om kontakten har flera nummer, rätt nummer. För kontakten i föregående moment ska ISSI-numret och den stående ISSI-symbolen användas.'],
   ['Sänd och kontrollera återkoppling','Kontrollera text och mottagare och bekräfta Sänd. Läs terminalens återkoppling och kontrollera med övningsmottagaren att meddelandet kom fram.'],
  ],
  checks:['Rätt kontakt och rätt nummertyp har valts.','Meddelandet är sänt och övningsmottagaren har kunnat ta emot det.'],
  note:'Om ett tidigare nummer ligger kvar när du anger mottagare manuellt raderar du det med pil vänster enligt kursbilden. En sändningsindikering betyder inte automatiskt att mottagaren har läst och förstått texten.',
  sources:course(ref('Meddelanden SDS.pdf','s. 1–3'),ref('Kontakter-1.pdf','s. 3'))},
 {id:'msisdn',title:'”Skicka MSISDN” – handgreppet behöver preciseras',device:'Handterminal',pending:true,
  goal:'Lektionsanteckningen anger ”Skicka MSISDN”. MSISDN är en nummertyp, inte en egen meddelandefunktion. Det framgår ännu inte om uppgiften gäller SDS, individanrop eller att lämna ett nummer.',
  steps:[
   ['Förbered rätt nummertyp','Använd lärarens fullständiga övningsnummer. I kursens polisexempel är MSISDN sju siffror, inklusive organisationssiffran 1. ISSI är i stället terminalens individnummer.'],
   ['Känn igen symbolen','MSISDN visas i kursbilderna med en liggande radioterminal. ISSI visas med en stående handterminal. Vid nummerinmatning växlar pil upp/ned mellan nummertyperna.'],
  ],
  alternatives:[
   ['Om uppgiften avser SDS till MSISDN','Meny → Meddelanden → Skapa meddelande. Skriv text → Sänd eller Mer → Skicka. Ange mottagarens fullständiga övnings-MSISDN, välj MSISDN-symbolen och bekräfta Sänd efter kontroll av mottagaren.'],
   ['Om uppgiften avser individanrop via MSISDN','Ange det fullständiga övningsnumret och välj MSISDN-symbolen. Initiera den samtalstyp läraren anger: grön lur för duplex eller PTT för semiduplex. Invänta kontakt innan du talar.'],
  ],
  checks:['Du kan skilja MSISDN från ISSI och välja rätt symbol.','Lärarens avsedda handgrepp behöver bekräftas innan denna punkt kan användas som en exakt examinationsinstruktion.'],
  note:'Alternativen är tekniskt övningsstöd, inte två bekräftade examinationskrav. Uppgiften står kvar som oklar tills handgreppet har preciserats.',
  sources:course(ref('Meddelanden SDS.pdf','s. 2'),ref('Individsamtal-1.pdf','s. 2–5'),ref('Kontakter-1.pdf','s. 3'))},
 {id:'issi',title:'Hitta och uppge terminalens ISSI',device:'Handterminal',
  goal:'Visa var terminalens eget ISSI finns och läs upp numret för läraren.',
  steps:[
   ['Öppna informationsmenyn','Från normalläget: öppna Meny med nedåtpilen, navigera till Info-meny och välj. Alternativt öppnar DV # Smartmeny, där du väljer infomeny.'],
   ['Hitta ISSI-uppgiften','Leta upp terminalens ISSI i informationen. Kursunderlaget beskriver sex siffror, i vissa fall sju. Läs det nummer terminalen faktiskt visar; räkna inte fram det från anropssignalen.'],
   ['Läs upp och förklara','Läs siffrorna tydligt för läraren och förklara att ISSI är just radioterminalens unika individnummer. Skilj det från MSISDN/anropsnumret.'],
   ['Återgå','Gå tillbaka till normalläget. Uppgiften innebär inte att terminalens nummer ska ändras eller att du ska byta driftsätt.'],
  ],
  checks:['Du hittar numret i Info-meny utan att förväxla det med MSISDN.','Du kan läsa upp det och förklara vad det identifierar.'],
  note:'Visa och läs upp numret på övningsterminalen. Skriv inte verkliga terminalnummer på webbplatsen.',
  sources:course(ref('ISSI-1.pdf','s. 1'),ref('Menyn-1.pdf','s. 2'),ref('Smartmeny.pdf','s. 1'))},
];

export function lessonInfoView({heading,btn,escape}){
 const sourceList=t=>`<details class="source"><summary>Källor till instruktionen</summary>${t.sources.map(s=>`<p>${s.url?`<a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a>`:escape(s.title)}${s.location?` · ${escape(s.location)}`:''}</p>`).join('')}</details>`;
 return `${heading('07 / INFO · LEKTION 30 SEPTEMBER','Praktiska provet, steg för steg.','Sju moment från lektionsgenomgången den 30 september 2026. Öppna ett moment för menyvägar, arbetsgång och slutkontroll.')}<section class="panel lesson-intro"><span class="badge">Lektionsanteckningar + kursmaterial</span><p>Momentlistan återger lektionsuppgifterna från den 30 september. Instruktionerna är kontrollerade mot kursunderlaget för utbildningens Sepura-terminaler. Menytexter och direktval kan skilja med modell och programmering.</p><p><strong>Två saker att reda ut:</strong> direktlägessteget i gatewaymomentet görs på handterminalen, och punkt 6 ”Skicka MSISDN” behöver preciseras. Det tidigare examinationsbeskedet säger handterminal; lektionslistan tar även upp gateway i fordonsterminal.</p><div class="row">${btn('Visa alla instruktioner','lesson-expand','','secondary')}${btn('Fäll ihop alla','lesson-collapse','','soft')}</div></section><div class="lesson-list">${lessonTasks.map((t,i)=>`<details class="lesson-card" id="lesson-${t.id}" ${i===0?'open':''}><summary><span class="lesson-number">${i+1}</span><span><strong>${escape(t.title)}</strong><span class="lesson-device">${escape(t.device)}${t.pending?' · Behöver förtydligas':''}</span></span><span class="lesson-toggle" aria-hidden="true">+</span></summary><div class="lesson-body"><p class="intro">${escape(t.goal)}</p>${t.correction?`<p class="notice warning"><strong>${escape(t.correction)}</strong></p>`:''}${t.id==='gateway'?'<div class="gateway-flow" aria-label="Gatewaykoppling"><div><strong>RLC / Rakelnätet</strong><span>Tilldelad TMO-insatstalgrupp</span></div><span aria-hidden="true">↔</span><div><strong>Fordon · Gateway</strong><span>Kopplar TMO till DMO</span></div><span aria-hidden="true">↔</span><div><strong>Handterminal · Direktläge</strong><span>Samma DMO-talgrupp som fordonet</span></div></div>':''}<ol class="lesson-steps">${t.steps.map(([title,text])=>`<li><strong>${escape(title)}</strong><p>${escape(text)}</p></li>`).join('')}</ol>${t.alternatives?`<section class="notice warning"><h3>Möjliga betydelser – inte fastställda krav</h3>${t.alternatives.map(([title,text])=>`<p><strong>${escape(title)}</strong><br>${escape(text)}</p>`).join('')}</section>`:''}<div class="lesson-check"><h3>Kontrollera innan du är klar</h3><ul>${t.checks.map(c=>`<li>${escape(c)}</li>`).join('')}</ul></div>${t.note?`<p class="notice">${escape(t.note)}</p>`:''}${sourceList(t)}</div></details>`).join('')}</div><p class="source">Använd lärarens övningsuppgifter på terminalen. Originalfiler från Canvas och verkliga person-, ärende- eller terminaluppgifter publiceras inte här. Återställ övningsterminalen efter lärarens anvisning.</p>`;
}
