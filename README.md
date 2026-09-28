# Samband · Tentaträning

Separat tentaplattform för aktiv återgivning och förberedelse inför skriftlig och praktisk examination i Moment 5:8.

**Webbplats:** https://denniswessman-hub.github.io/samband-tentatraning/

Version 1.1.0 omfattar alla 31 delmoment i kurslistan, 93 källkopplade grundfrågor, 58 bokstaveringskort, 9 tillämpningar av trafikuttryck, 8 fiktiva scenarier och 12 stegövningar. En separat praktisk checklista täcker de sju områden examinatorn angett.

## Examinationsbeskedet

Examinatorns information, återgiven av användaren 2026-09-28: examination 2026-11-05 kl. 08.15–10.00 i sal 1103N2. Skriftligt på papper utan hjälpmedel. Frågedelen kräver 80 %, nationell bokstavering 100 %, internationell bokstavering 100 % och användning av trafikuttryck 100 %. De fyra delarna bedöms separat och omexamination gäller endast underkänd del. Praktiskt: individuellt med handterminal, separat bedömning U/G, gräns 80 %.

Antal frågor, poängfördelning och tid per del framgår inte av beskedet. Plattformens urval är därför uttryckligen träningsurval. Självbedömningen räknar varje övningsuppgift lika: endast **Kunde själv** räknas som helt rätt. Delresultat visas först när alla svar är bedömda och vägs aldrig samman mellan delar. Resultatet är inte ett examinationsbetyg. Praktikens sju områden räknas inte om till en påhittad poängskala.

## Sex träningslägen

- **Tentakollen:** självvald status Inte tränat, Påbörjat eller Behärskat per delmoment.
- **Minnesträning:** öppna frågor, eget skriftligt eller muntligt svar, dolt facit och självbedömning. Separata fokuspass för båda bokstaveringsalfabeten och trafikuttrycken.
- **Gör i rätt ordning:** flytta steg med tangentbord/touch och kontrollera arbetsgången. Förenklade stegövningar, inte exakta kopior av terminalgränssnitt.
- **Scenario & RLC:** egna svar om åtgärd, radiomeddelande, talgrupp/funktion och RLC:s informationsbehov.
- **Skriftliga provpass:** välj frågedel (12 slumpade uppgifter: 3 begrepp, 4 öppna kunskapsfrågor, 3 handhavandefrågor, 2 scenarier), nationell bokstavering (29 bokstäver), internationell bokstavering (29 bokstäver enligt kursmaterialet, inklusive Å/Ä/Ö) eller trafikuttryck (9 situationer). Facit efter avslut. Separat sparat resultat för varje del, mål 80/100/100/100 %. Det går att svara på papper.
- **Praktisk examination:** sju områden med övningsstöd, källor, länkar till relevanta webbövningar och separat status för träning på handterminal.

## Integritet och källor

Resultat, kö och svar sparas endast lokalt med nyckeln `samband-tentatraning:v1`. Version 1.1 bevarar tidigare status, svar, repetitionskö och pågående tolvpassets position; äldre prov behandlas som frågedel. Nya bokstaveringskort och trafikuttryck använder samma kö. Ingen server, analysmätning, inloggning, mikrofon eller extern resurs behövs under träningen. GitHub Pages hanterar vanliga tekniska uppgifter när webbplatsen hämtas. Lokal lagring kan försvinna om webbläsardata rensas.

Original från Canvas och privata meddelanden ingår inte i repot. Inga verkliga person-, ärende-, telefon- eller terminaluppgifter används. Alla exempel använder fiktiva platser och platshållare. Offentliga RLC-anropsbeteckningar och generella funktions-/indexnummer förekommer som kursbegrepp.

Varje uppgift visar källfil/avsnitt och delmoment. Frågor och scenarier är egna bearbetningar av Sambandslabbets kursunderlag. Bildinstruktionerna för skanninglistor och direktvalsprogrammering har lästs visuellt. Källunderlaget granskades 2026-09-28. Plattformen är inte officiellt godkänd av lärosätet eller Polismyndigheten.

Aktuell sambandstablå, lokal programmering och lärarnas instruktioner har alltid företräde. Examinationsbeskedet är inarbetat i version 1.1. T4-övningstentan har inte tillförts. Om den tillkommer justeras formulering, omfattning och svårighetsgrad med bevarade uppgifts-id:n. Kopiera inte examinationsfrågor okritiskt.

## Använd lokalt och utveckla

Servera mappen med en vanlig statisk webbserver, till exempel `python -m http.server 5188`. Öppna sedan `http://localhost:5188/`. ES-moduler kräver HTTP; dubbelklick på index.html räcker inte.

Inga paket behöver installeras. Kör `node --test tests/*.test.mjs` för innehållsintegritet, kölogik, separata provurval, gränsvärden utan avrundningsfel, uppgradering av sparade data, lokal återläsning och ordningslogik.

- `data.mjs`: 31 delmoment och 93 frågor med källhänvisningar.
- `practice.mjs`: scenarier och stegövningar.
- `examination.mjs`: examinationsvillkor, bokstavering, trafikuttryck och sju praktiska områden.
- `examination-view.mjs`: examinationsöversikt, delval och praktisk checklista.
- `logic.mjs`: resultat, kö, provurval och validering av sparade data.
- `app.mjs`: gränssnitt, navigation och lokal lagring.
- `style.css`: mobil- och datorlayout.

GitHub Pages publicerar rotmappen på huvudgrenen. `.nojekyll` innebär att filerna serveras direkt. Alla interna tillgångar använder relativa sökvägar, även under `/samband-tentatraning/`.

Valfritt WebMCP-stöd exponerar enbart läsning av summerad progression och start av delmomentsträning. Vanlig användning kräver inte WebMCP.
