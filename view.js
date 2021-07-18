function view(){
let html = ``;
html += `<h1> Velkommen Til den Årlige Turneringen</h1><br><h4>ThereseBall- Edition </h4>
<p> <h2> Dato: 31.07.2021 kl 13.00 </h2> <br>
-  Det blir delt inn i 4 puljer på selve dagen. 1 og 2 plass går til semifinale <br> <br> 
-  1. plassene møter hverandre i ett grupperspill og 2. plassene i ett gruppespill.<br> <br>
-  De som ikke gikk videre til semi skriver navnet sitt på en lapp, <br>
   Therese trekker en og personen går direkte til GRAND-FINALE! <br> <br>
-  Fra semi finalen går 1. og 2 plassen fra hvert gruppespill til GRAND-FINALE!
</p>

<button onclick="show()"> Til Reglene! </button> 
`;
document.getElementById('app').innerHTML = html

}
function show(){
    let html = `<button onclick="view()">...Tilbake... </button><br> 

    <p>GULT KORT!<br>
        2 gule kort = stå over en runde. <br>
        4 gule kort i ett spill = ute av spillet ! BUGHU!!!!
      </p>
    <h3> FEILSLAG </h3>`;
    for( let i = 0; i < model.rules.length; i ++){
        if (model.rules[i].name === 'feilslag'){
            html += `
          ${showWrongHitsHtml(i)}`
        }
    }
     html += '<h3> KROKKING </h3>';
    for( let i = 0; i < model.rules.length; i ++){
        if (model.rules[i].name === 'Krokking'){
            html += `
          ${showCrokkingHtml(i)}`
        }
    }
    html += '<h3> PORT-REGLER </h3>';
    for( let i = 0; i < model.rules.length; i ++){
        if (model.rules[i].name === 'Port-regler'){
            html += `
          ${showGateRulesHtml(i)}`
        }
    }
    html += '<h3> FINALE-REGLER </h3>';
    for( let i = 0; i < model.rules.length; i ++){
        if (model.rules[i].name === 'finale-regler'){
            html += `
          ${showFinalRulesHtml(i)}`
        }
    }
    html += '<h3> ØVRIGE-REGLER </h3>';
    for( let i = 0; i < model.rules.length; i ++){
        if (model.rules[i].name === 'øvrige-regler'){
            html += `
          ${showGeneralRulesHtml(i)}`
        }
    }
    document.getElementById('app').innerHTML = html
}

function showWrongHitsHtml(index){
html = ``
            html += `
            <hr>Nummer : ${model.rules[index].number} <br>
            <p>${model.rules[index].rule}</p>
            <tt> ${model.rules[index].consequences} </tt>`
        
        return html
}

function showCrokkingHtml(index){
    html = ``
                html += `
                <hr>Nummer : ${model.rules[index].number} <br>
                <p>${model.rules[index].rule}</p>
                <tt> ${model.rules[index].consequences} </tt>`
            return html
    }
    function showGateRulesHtml(index){
        html = ``
                    html += `
                    <hr>Nummer : ${model.rules[index].number} <br>
                    <p>${model.rules[index].rule}</p>
                    <tt> ${model.rules[index].consequences} </tt>`
                return html
        }

    function showFinalRulesHtml(index){
        html = ``
                html += `
                <hr>Nummer : ${model.rules[index].number} <br>
                <p>${model.rules[index].rule}</p>
                <tt> ${model.rules[index].consequences} </tt>`
        return html
    }
    function showGeneralRulesHtml(index){
        html = ``
                html += `
                <hr>Nummer : ${model.rules[index].number} <br>
                <p>${model.rules[index].rule}</p>
                <tt> ${model.rules[index].consequences} </tt>`
        return html
    }