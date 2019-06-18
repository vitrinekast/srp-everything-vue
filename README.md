# CMD_SRP
You can find the demo right [here]( https://cmd-srp.firebaseapp.com)

## Running this repo

This project is created using vue-cli create.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

# SRP everything web
Voor de laatste SRP richt ik mij op het framework Vue. Tijdens de SRP komen de volgende onderwerpen aan bod
- [x] Het volgen van een online course rondom Vue.js via [Vue School](https://vueschool.io/courses/the-vuejs-master-class)
- [x] Bouwen van een aantal kleine demo's om de kennis te vergroten
- [x] Exploratie van de Everything Web Site omtrend design
- [x] Opzetten van het framework van de Everything web site

De site zal gebouwd worden volgens de volgende wireframes
### Mockup Detail pagina
![Mockup detail](/mockup_detail.png)

### Mockup Navigatie
![Mockup navigation](/mockup_navigation.png)

### Mockup Submit
![Mockup submit](/mockup_submit.png)



Daarnaast zal de site de volgende functionaliteiten bevatten
- [x] Het bekijken van alle vakken die gegeven worden in een lijst
- [x] Een vak detail pagina
- [x] Bekijken van studentenwerk op de vak detail pagina
- [x] Bekijken van gerelateerde artikelen aan het vak op de vak detail pagina
- [x] Door middel van de Vue router tussen deze twee navigeren
- [x] De basis transitie tussen deze pagina's
- [ ] Een super fancy transitie waardoor het meer lijkt op een expandable
- [ ] Gebruik van Firebase voor de data
- [ ] Hosting via Firebase
- [ ] Gebruikers zelf gerelateerde artikelen / inspiratie laten uploaden
- [ ] Gebruikers zelf gerelateerde studentenwerk laten uploaden

## Feedback

Aan de hand van de eerste versie heeft er een feedback moment plaatsgevonden, waarna ik kort gezegd weer hard naar de tekentafel ben gehold. 

Punten van feedback:
- Het doel van de site is om juist een overzicht te geven van de minor, en hoe de verschillende vakken met elkaar in verband staan. 
- Wens is dan ook om in "vogelvlucht" de minor te kunnen bekijken, en dan per vak meer verdieping te kunnen vinden

De focus van de SRP ligt nu dan ook minder op het technische hoogstandje, maar meer op het ontwerp. Daarom heb ik de ideeen om studenten eigen werk te laten uploaden laten gaan, maar ga ik mij juist meer focussen op de transitie tussen de vogelvlucht en de detail pagina. 

## Schetsen

Aan de hand van de nieuwe vogelvlucht insteek heb ik een aantal schetsen gemaakt, met name om de transitie tussen de pagina's uit te werken. Onderstaand staan de foto's van de schetsen, die de basis dienden voor het ontwerp. Vervolgens zijn deze verder uitgewerkt tot schematische wireframes. Zoals te zien is ben ik vooral aan het stoeien geweest met de layout. 

#### Foto's van de schetsen

![Mockup submit](/sketch_photo_1.JPG)
Exploratie van verschillende layouts

![Mockup submit](/sketch_photo_2.JPG)
Verder onderzoek naar de transitie tussen de schermen

De schetsen zijn verder uitgewerkt naar een schematische layout, zoals hier onder de verschillend smaakjes te zien zijn.

![Mockup submit](/sketch_1.png)
Een schermvullend overzicht waarbij de gebruiker de verschillende rijen kan scrollen

![Mockup submit](/sketch_2.png)
Richting een masonry grid die visueel wat interessanter is.

![Mockup submit](/sketch_3.png)
Een helderder overzicht van hoe de vakken in verhouding met elkaar staan.


### Oplossing
Uiteindelijk is er gekozen voor de laatste oplossing, waarbij de verschillende vakken in de juist verhouding met elkaar staan. Op deze manier is het goed zichtbaar hoe de vakken verdeeld zijn.

De schetsen zijn vervolgens verder uitgewerkt in de vue oplossing, waarbij ik een paar punten verder uit wil lichten


#### Gebruik van Vue.js
Omdat de SRP gericht is op Vue.js is deze oplossing dan ook via Vue.js gebouwd, en is het een mooie use case om wat Vue-dingen in uit te proberen. Wanneer een site als deze voor het "eggie" wordt gebouwd geloof ik echter niet dat Vue de ideale oplossing is. De focus van een site als deze ligt veel meer op transities en animaties, en niet zo zeer op ingewikkelde routers, state management en authenticatie.

Wel geloof ik dat Vue ideaal is voor het maken van (app) prototypes. Binnen een mum van tijd heb je namelijk een authenticatie systeem er in hangen, en duidelijke state manager en een router die alles afhandelt. Daarnaast zijn er enorm veel [packages](https://curated.vuejs.org/) te vinden om de ontwikkeling te versnellen.

Het lijkt me dan ook nog steeds een tof idee om een soort wireframe framework binnen Vue te bouwen, met dingen als authenticatie, routers, een basis database en wireframe styling out of the box beschikbaar. 

#### Pagina transities

Voor de transitie tussen het overzichtsscherm en de detail pagina is bewust geen gebruik gemaakt van [Vue transitions](https://vuejs.org/v2/guide/transitions.html). Vue transitions blijken prima te zijn voor simpele fade-in-fade-out transities, maar zodra het wat verder gaa, zorgt het juist meer voor ruis. De kans is namelijk groot dat er dan geanimeerd wordt met javascript, waardoor je code voor de transities op veel verschillende plekken terug te vinden zijn, in plaats van 1 á 2. 

In plaats daar van is er gekozen voor een combinatie tussen CSS transitions en Javascript animaties.
De CSS transitions zijn gebruikt om grote componenten binnen pagina's in/uit te faden.
Voor de elementen die "blijven bestaan" zoals de gekleurde card van het geselecteerde vlak is een Javascript animatie toegepast, ondersteund door [anime.js](http://animejs.com/documentation). Anime.js is namelijk een erg leesbare library, die in tegenstelling als bijvoorbeeld GSAP nog vrij compact en klein is. 

Door deze toepassing blijft de code maar op 2 plekken, en is het makkelijker te onderhouden. Wel merk je dat deze hoeveelheid aan animaties/transities een flinke beuk geeft aan de performance.

#### DRY code
Om de dry-ness te bewaren heb ik een service-pattern toegepast, in combinatie met een state manager. Daarbij zeggend is dat eigenlijk iets te enthousiast voor het formaat van de site, maar het is een mooie manier om hier wat mee uit te proberen, aangezien ik zelf nog nooit met een state-manager heb gewerkt. 

Alle communicatie met de API (momenteen een JSON bestand met Mockdata) gaat via de API service. In deze javascript module staan alle `GET` `POST`, `PUT` etc die maar nodig zijn voor communicatie met een API.
Deze service wordt vervolgens op de relevante plekken geimporteert, waar via een Promise alleen nog maar `return ApiService.get('Courses', id)` nodig is, om een specifieke course op te kunnen halen. 

#### Afsluitend
De laatste versie is [hier](https://cmd-srp.firebaseapp.com) te bekijken. 

Kortom: werken met Vue is vrij untuietief, maar - ik blijf (voorlopig) toch wel een vanilla-html-css-ert, en verwacht deze kennis dus vooral met prototypes toe te passen.