# Samband · Tentaträning

Separat tentaplattform för aktiv återgivning och förberedelse inför skriftlig examination.

**Webbplats:** https://denniswessman-hub.github.io/samband-tentatraning/

Version 1.0.0 omfattar alla 31 delmoment i kurslistan, 93 källkopplade grundfrågor, 8 fiktiva scenarier och 12 praktiska stegövningar.

## Fem träningslägen

- **Tentakollen:** självvald status Inte tränat, Påbörjat eller Behärskat per delmoment.
- **Minnesträning:** öppna frågor, eget skriftligt eller muntligt svar, dolt facit och självbedömning.
- **Gör i rätt ordning:** flytta steg med tangentbord/touch och kontrollera arbetsgången. Förenklade stegövningar, inte exakta kopior av terminalgränssnitt.
- **Scenario & RLC:** egna svar om åtgärd, radiomeddelande, talgrupp/funktion och RLC:s informationsbehov.
- **Provpass:** 12 slumpade uppgifter (3 begrepp, 4 öppna kunskapsfrågor, 3 handhavandefrågor, 2 scenarier). Facit efter avslut, ingen godkäntgräns.

## Integritet och källor

Resultat, kö och svar sparas endast lokalt med nyckeln `samband-tentatraning:v1`. Ingen server, analysmätning, inloggning, mikrofon eller extern resurs behövs under träningen. GitHub Pages hanterar vanliga tekniska uppgifter när webbplatsen hämtas. Lokal lagring kan försvinna om webbläsardata rensas.

Original från Canvas och privata meddelanden ingår inte i repot. Inga verkliga person-, ärende-, telefon- eller terminaluppgifter används. Alla exempel använder fiktiva platser och platshållare. Offentliga RLC-anropsbeteckningar och generella funktions-/indexnummer förekommer som kursbegrepp.

Varje uppgift visar källfil/avsnitt och delmoment. Frågor och scenarier är egna bearbetningar av Sambandslabbets kursunderlag. Bildinstruktionerna för skanninglistor och direktvalsprogrammering har lästs visuellt. Källunderlaget granskades 2026-09-28. Plattformen är inte officiellt godkänd av lärosätet eller Polismyndigheten.

Aktuell sambandstablå, lokal programmering och lärarnas instruktioner har alltid företräde. Charlottes examinationsinformation och T4-övningstentan är ännu inte inarbetade. När de finns justeras formulering, omfattning och svårighetsgrad med bevarade uppgifts-id:n. Kopiera inte examinationsfrågor okritiskt.

## Använd lokalt och utveckla

Servera mappen med en vanlig statisk webbserver, till exempel `python -m http.server 5188`. Öppna sedan `http://localhost:5188/`. ES-moduler kräver HTTP; dubbelklick på index.html räcker inte.

Inga paket behöver installeras. Kör `node --test tests/*.test.mjs` för innehållsintegritet, kölogik, provurval, lokal återläsning och ordningslogik.

- `data.mjs`: 31 delmoment och 93 frågor med källhänvisningar.
- `practice.mjs`: scenarier och stegövningar.
- `logic.mjs`: resultat, kö, provurval och validering av sparade data.
- `app.mjs`: gränssnitt, navigation och lokal lagring.
- `style.css`: mobil- och datorlayout.

GitHub Pages publicerar rotmappen på huvudgrenen. `.nojekyll` innebär att filerna serveras direkt. Alla interna tillgångar använder relativa sökvägar, även under `/samband-tentatraning/`.

Valfritt WebMCP-stöd exponerar enbart läsning av summerad progression och start av delmomentsträning. Vanlig användning kräver inte WebMCP.
