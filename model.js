const model = {
    rules:[     
    {
        number: '1.1',
        name: 'feilslag',
        rule: '- Køllen må slå ballen minst en kule-lengde',
        consequences:' - Nytt forsøk gjelder, men kun ett forsøk, skjer det samme, kan du ikke prøve på nytt igjen !',
    },
    {
        number: '1.2',
        name: 'feilslag',
        rule: '- Man har ikke lov til å skyve eller dytte kulen, og ikke lov til å slå med langsiden på køllehodet',
        consequences:' - Gult kort! - regler for kort øverst!',
    },
    {
        number: '1.3',
        name: 'feilslag',
        rule: '- Ikke lov å skyte seg selv på pinnen',
        consequences:' - Du er ute av spillet',
    },
    
    
    {
        number: '2.1',
        name: 'Krokking',
        rule: '- Du har lov til å krokke samme motstander 1 gang per runde',
        consequences:'- Gult kort! - regler for kort øverst!',
    },
    {
        number: '2.2',
        name: 'Krokking',
        rule: '- 2 måter å krokke på: enten med foten på egen kule eller ikke. men du må slå på egen kule. 1 forsøk gjelder ',
        consequences:'- Beveger din kule seg har du mistet røverslaget, er din kule på samme plass har du ett røverslag. Dette gjelder uansett om foten er på din kule eller ikke!',
    },
    //roger mener denne skal bort
    // {
    //     number: '2.3',
    //     name: 'Krokking',
    //     rule: '- I kvalifiseringsrunden- er det IKKE lov til å krokke andre spillere (alle skal få en sjangse her)!, i Semi og finale er dette lov altså!',
    //     consequences:'- Gult kort! - regler for kort øverst!',
    // },
    // {
    //     number: '2.3',
    //     name: 'Krokking',
    //     rule: '- Du har ikke lov til å krokke en som ikke er halv-røver på pinnen',
    //     consequences:'- Du selv er ute av spillet!',
    // },
    {
        number: '2.3',
        name: 'Krokking',
        rule: '- Dersom du er halvrøver så kan du krokke en røver på pinnen ',
        consequences:'- Du blir da selv røver ( selv om du ikke har vært gjennom alle portene)',
    },
    {
        number: '2.4',
        name: 'Krokking',
        rule: '- Du har ikke lov til å krokke noen hvis du ikke selv er blitt halvrøver',
        consequences:'- Gult-Kort! - regler for kort øverst!',
    },
    {
        number: '2.5',
        name: 'Krokking',
        rule: '- Dersom du blir krokket og kulen di havner inntil en annen kule',
        consequences:'- Den andre spilleren kan da IKKE krokke deg dens neste slag og du kan ikke krokke den andre!',
    },
    // {
    //     number: '3.1',
    //     name: 'Port-regler',
    //     rule: '- Hvis du blir krokket eller dyttet mellom en port som du ikke selv har slått slaget!',
    //     consequences:'- Du må selv rundt og igjennom porten RIKTIG VEI!',
    // },
    
    {
        number: '3.1',
        name: 'Port-regler',
        rule: '- Hele kulen må være igjennom porten',
        consequences:'- Du får ikke ekstra slag før DU selv har slått kulen gjennom hele. ',
    },
    // {
    //     number: '3.2',
    //     name: 'Port-regler',
    //     rule: '- Stopper kulen midt i krysset får du ingen ekstra slag!',
    //     consequences:'.. Når du har klart begge får du 2. ',
    // },
    {
        number: '3.2',
        name: 'Port-regler',
        rule: '- Du må igjennom begge portene i krysset samtidig!',
        consequences:'- Du må tilbake og prøve igjen neste runde og får da 2 slag når du klarer begge!',
    },
    {
        number: '4.1',
        name: 'finale-regler',
        rule: '- Når alle er blitt røver så er det ikke lov å være "fegis" (må slå deg selv nærmere en motstander / evt forsøke å treffe en annen) ',
        consequences:'- Gult kort! - regler for kort øverst!',
    },
    {
        number: '4.2',
        name: 'finale-regler',
        rule: '- Dere får 5 min til å godkjenne banen for hinder og slikt',
        consequences:'...',
    },
    {
        number: '4.3',
        name: 'finale-regler',
        rule: '- Når alle er blitt røver blir portene borte og de blir satt ned igjen med 10 min mellomrom og teller som nye pinner ( de blir satt i den rekkefølgen det skal stå i en vanlig bane',
        consequences:'...',
    },
    {
        number: '5.1',
        name: 'øvrige-regler',
        rule: '- Det ikke ikke lov til å ta på portene kun (dommer har lov til dette, dersom de løsner)',
        consequences:'- Gult kort! - regler for kort øverst!',
    },
    {
        number: '5.2',
        name: 'øvrige-regler',
        rule: '- Det ikke ikke lov til å tråkke eller lage vei i gresset',
        consequences:'- Gult kort! - regler for kort øverst!',
    },
    {
        number: '5.3',
        name: 'øvrige-regler',
        rule: '- Det ikke ikke lov til å fjerne hinder(kongler, greiner og ect.) ',
        consequences:'- Gult kort! - regler for kort øverst!',
    },
    {
        number: '5.4',
        name: 'øvrige-regler',
        rule: '- Dersom man lander uten for baneområde ',
        consequences:'- Kan da flytte kulen sin rett over med en køllehodes bredde inn på banen',
    },
    {
        number: '5.5',
        name: 'øvrige-regler',
        rule: '- Står du i veien for noen som skal slå og da hindrer kulen videre, med en kropsdel eller kølle',
        consequences:'- Spilleren får ett slag til fra det punktet, og du selv får gult kort',
    },
    {
        number: '5.6',
        name: 'øvrige-regler',
        rule: '- Det er kun spillere og dommer som får lov til å gå på banen!',
        consequences:'- Da må du hente drikke til de som ønsker det på banen!',
    },   
    {
        number: '5.7',
        name: 'øvrige-regler',
        rule: '- Hinder som blir lagt til fra andre typ. genser, sko, flasker kan fjernes før du slår første gang i din runde.',
        consequences:'- Du får IKKE ekstra slag dersom du ikke fjernet dette før du slo slaget ditt',
    }, 
       
       

    ]
}