const model = {
    rules:[
        
    {
        number: '1.1',
        name: 'feilslag',
        rule: 'køllen må slå ballen minst en kule-lengde',
        consequences:'ny forsøk gjelder, men kun ett forsøk, skjer det samme, kan du ikke prøve på nytt igjen !',
    },
    {
        number: '1.2',
        name: 'felslag',
        rule: 'man har ikke lov til å skyve eller dytte kulen, og ikke lov til å slå med langsiden på køllehodet',
        consequences:'gult kort! - regler for kort øverst!',
    },
    {
        number: '1.3',
        name: 'feilslag',
        rule: 'Ikke lov å skyte seg selv på pinnen',
        consequences:'Du er ute av spillet',
    },
    {
        number: '1.4',
        name: 'feilslag',
        rule: 'Hvis du tilfeldigvis treffer en ikke-røver sin kule på pinnen!',
        consequences:'Du er ute av spillet',
    },
    
    {
        number: '2.1',
        name: 'Krokking',
        rule: 'Du har lov til å krokke samme motstander 1 gang per runde',
        consequences:'Gult kort! - regler for kort øverst!',
    },
    {
        number: '2.2',
        name: 'krokking',
        rule: '2 måter å krokke på: enten med foten på egen kulle eller ikke. men du må slå på egen kule. 1 forsøk gjelder ',
        consequences:'Beveger din kule seg har du mistet røverslaget, er din kule på samme plass har du ett røverslag. dette gjelder uansett om foten er på din kule eller ikke!',
    },
    {
        number: '2.3',
        name: 'krokking',
        rule: 'I kvalifiseringsrunden- er det IKKE lov til å krokke andre spillere (alle skal få en sjangse her)!, i Semi og finale er dette lov altså!',
        consequences:'Gult kort! - regler for kort øverst!',
    },
    {
        number: '2.4',
        name: 'Krokking',
        rule: 'Du har ikke lov til å krokke en som ikke er halv-røver eller røver på pinnen',
        consequences:'Du selv er ute av spillet!',
    },
    {
        number: '2.5',
        name: 'Krokking',
        rule: 'Dersom du er halvrøver så kan du krokke en røver på pinnen ',
        consequences:'Du selv er blitt røver ( selv om du ikke har vært gjennom alle portene)',
    },
    {
        number: '3.1',
        name: 'Port-regler',
        rule: ' Hvis du blir krokket eller dyttet mellom en port som du ikke selv har slått slaget!',
        consequences:'Du må selv rundt og gjennom porten RIKTIG VEI!',
    },
    {
        number: '3.2',
        name: 'Port-regler',
        rule: 'Hele kulen må være gjennom porten',
        consequences:'Du får ikke ekstra slag før DU selv har slått kulen gjennom hele. ',
    },
    {
        number: '3.3',
        name: 'Port-regler',
        rule: 'Stopper kulen midt i krysset får du ingen ekstra slag!',
        consequences:'Du må tilbake og prøve igjen neste runde',
    },
    {
        number: '3.4',
        name: 'Port-regler',
        rule: 'Du må gjennom begge portene samtidig',
        consequences:'Du må tilbake og prøve igjen neste runde og får da 2 slag når du klarer begge!',
    },
    {
        number: '4.1',
        name: 'finale-regler',
        rule: 'Når alle er blitt røver så er det ikke lov å være "fegis" (må slå deg selv nærmere en motstander / evt forsøke å treffe en annen) ',
        consequences:'Gult kort! - regler for kort øverst!',
    },
    {
        number: '4.2',
        name: 'finale-regler',
        rule: 'Dere får 5 min til å godkjenne banen for hinder og slikt',
        consequences:'...',
    },
    {
        number: '4.3',
        name: 'finale-regler',
        rule: 'Når alle er blitt røver blir portene borte og de blir satt ned igjen med 10 min mellomrom og teller som nye pinner ( de blir satt i den rekkefølgen det skal stå i en vanlig bane',
        consequences:'...',
    },
    {
        number: '5.1',
        name: 'øvrige-regler',
        rule: 'Det ikke ikke lov til å ta på portene kun (dommer har lov til dette, dersom de løsner)',
        consequences:'Gult kort! - regler for kort øverst!',
    },
    {
        number: '5.2',
        name: 'øvrige-regler',
        rule: 'Det ikke ikke lov til å tråkke eller lage vei i gresset',
        consequences:'Gult kort! - regler for kort øverst!',
    },
    {
        number: '5.3',
        name: 'øvrige-regler',
        rule: 'Det ikke ikke lov til å fjerne hinder(kongler, greiner og ect.) ',
        consequences:'Gult kort! - regler for kort øverst!',
    },
    {
        number: '5.4',
        name: 'øvrige-regler',
        rule: 'Dersom man lander uten for baneområde ',
        consequences:'kan man flytte kulen sin rett over med en køllehodes bredde inn på banen',
    },
    {
        number: '5.5',
        name: 'øvrige-regler',
        rule: 'står du i veien for noen som skal slå og da hindrer kulen veien videre',
        consequences:' spilleren får ett slag til fra det punktet, og du selv får gult kort',
    },
    {
        number: '5.6',
        name: 'øvrige-regler',
        rule: 'det er kunn spillere og dommer som får lov til å gå på banen!',
        consequences:'da må du hente drikke til de som ønaker det på banen!',
    },   
    {
        number: '5.7',
        name: 'øvrige-regler',
        rule: 'Hinder som blir lagt til fra andre typ. genser, sko, flasker kan fjernes før du slår første gang i din runde.',
        consequences:'du får ikke ekstra slag dersom du ikke fjernet dette før du slo slaget ditt',
    }, 
       
       

    ]
}