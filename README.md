# REST API fra klient-siden

## Repetisjon av Postman

Først skal vi repetere hvordan vi bruker et API med Postman som klient. Vi skal bruke samme API som sist på siden gorest.co.in.

Gå inn på:
```postman.com```
og logg inn med brukeren din.

### Repetisjon: Sette opp collection i Postman

For å holde ting ryddig i postman skal vi opprette en **collection** som skal inneholde alle **requestene** vi skriver.

For å opprette en collection i Postman, trykk på "+" tegnet til høyre for "Collections" knappen:

![Skjermdump: Hvordan opprette en collection](./img/postman_new_collection.png)


Den nye collectionen kan du kalle hva du vil, f.eks. "gorest.co.in", som er nettsiden vi skal bruke.

### Repetisjon: Request med GET

Nå skal vi skrive vår første request.

Den enkleste requesten er GET, som vi bruker når vi skal hente informarsjon fra serveren vi snakker med. Vi kan begynne med å hente brukeren for gorest-siden.

Trykk for å legge til en ny request rett under tittelen på den ny kolleksjonen:

![Skjermdump: Hvordan legge til en request](./img/postman_add_request.png)

Da får vi opp vinduet for å redigere den nye requesten.

Øverst er navnet på requesten. Det er bare for vår egen den for å holde styr på ting. Vi kan kalle denne "Hent alle brukere".

Nedenfor skriver URLen for requesten, vi skal hente ut brukerene i gorest-siden, urlen blir derfor:

```https://gorest.co.in/public/v1/users```


Med alle verdiene satt kan vi trykke på Send-knappen helt til høyre:

![Skjermdump: Hvordan sende en request](./img/postman_send_request.png)

Requesten blir da sendt til serveren på den gitte URLen, og postman viser oss svarer vi får tilbake i JSON-format:

![Skjermdump: Respons fra en request](./img/postman_response.png)

#### Oppgave: Hente alle poster

Opprett en GET request i samme kolleksjon som henter alle innleggene fra endepunktet:

```https://gorest.co.in/public/v1/posts```

### Repetisjon: Request med autorisering

Vi skal nå gå videre til requester hvor vi kan opprette brukere og innlegg, men da trenger vi å autorisere oss. Vi skal bruke en **token** som vi sender med sammen med requesten vår for å bevise at vi har tilgang til å opprette ting i nettsiden.

I timen vil det bli lagt ut en token i teams. Hvis du jobber med dette på egenhånd kan du gå inn på https://gorest.co.in/access-token for å lage en egen token.

Fordi alle kallene mot gorest-siden kan bruke samme token, skal vi legge til tokenet på collection, ikke på enkelt request, trykk derfor direkte på collection-navnet.

I kolleksjonen velger vi "Autorization"-tabben. I "Type" menyen velger du "Bearer Token", og lim inn tokenet inn i "Token"-feltet, som vist på bildet:

![Skjermdump: Hvordan sette opp authorization i en collection](./img/postman_auth.png)

Nå vil tokenet automatisk brukes i alle requests i kolleksjonen.

### Repetisjon: Request med POST
