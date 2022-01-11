# Introduksjon til REST API

Først kan det være nyttig med en kort forklaring av hva et REST API er for noe. Her er det mange begreper og forkortelser, dere trenger _ikke_ huske hva forkortelsene står for, men jeg tar med hva det står for, slik at det ikke bare er "magiske ord".

## Interface

"Interface" kan vi oversette til "grensesnitt" på norsk (det er ikke et veldig pent ord). Det definerer "grensen" mellom noe og noe annet. Et "brukergrensesnitt" er den delen ("snittet"), som en bruker kan bruke. Det er altså "grensen" mellom brukeren og programmet.

### Eksempel: Video-kabler

Et annet eksempel er en HDMI-kabel. HDMI står faktisk for "High-Definition Multimedia *Interface*". Den definerer grensesnittet mellom noe som lager et videosignal, for eksempel en Nintendo Switch, og noe som mottar det, for eksempel en TV.

Et sånt grensesnitt er kjempenyttig, fordi det er mange måter å lage et videosignal på, og det er mange måter å vise det. 

Nintendoen trenger ikke vite hvordan TVen skal håndtere videosignalet, den trenger bare _implementere_ sin del av HDMI.

Hva som skjer på innsiden av en Nintendo Switch og på innsiden av en Bluray-spiller kan være veldig forskjellig, men så lenge vi bruker et grensesnitt spiller det ingen rolle for TVen hva det er som lager signalet.

Ingen i Nintendo trenger å ha snakket med noen i selskapet som har laget akkurat den skjermen du bruker, så lenge de begge bruker samme _Interface_.

## Application Programmable Interface (API)

API er en type Interface for hvordan et program kommuniserer med et annet program. Programmet som tilbyr et API, forklarer hvordan andre programmer kan kommunisere med seg. 

Den som tilbyr API kaller vi _server_ på engelsk, eller _tjener_ på norsk (men vi sier ofte "server" med norsk uttale likevel). Den som bruker APIet kaller vi _client_ eller _klient_. Jeg kommer til å bruker "server" og "klient", deal with it språkrådet.

På samme måte som med HDMI, trenger _ikke_ klienten å forstå hvordan serveren utfører oppgavene. Serveren trenger ikke forstå hva klienten skal gjøre med svaret. Så lenge alle forholder seg til APIet, kan én server håndtere hundrevis av klienter som gjør forskjellige ting.

## Representational State Transfer (REST)

En stil for å lage apier.

## Hyper Text Transfer Protocol (HTTP)

Oppbygning