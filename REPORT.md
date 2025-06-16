# 📌 Rättningsrapport – fed24d-the-last-todos-koliwewe

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller samtliga krav för betyg VG, inklusive de under betyg G. Applikationen hanterar todolistan på ett interaktivt sätt där användaren kan markera uppgifter som klara, sortera dem, och lägga till nya. Det finns användning av lifting state up för att dela upp komponenter och själva funktionaliteten är korrekt implementerad både för grundläggande och avancerade funktioner.

💡 **Förbättringsförslag:**  
Även om koden är välstrukturerad finns det några mindre förbättringsmöjligheter: 1. Implementera bättre validering eller feedback när användaren försöker lägga till en tom todo-titel. 2. Använda en grafisk ramverk som t.ex. Material UI eller Tailwind för att förbättra den visuella upplevelsen ytterligare och för att demonstrera förmågan att integrera tredjepartsbibliotek med React. 3. Även om localStorage är ett bra alternativ för att spara data lokalt kan det vara bra att introducera ett annat lager av abstraction eller state management om projektet växer i komplexitet. 4. Kommentera koden för att underlätta för nya utvecklare att förstå projektspecifika logiker och beslut.