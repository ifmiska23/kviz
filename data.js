const kerdesek = [
    {
        kerdes: 'Mi Magyarország fővárosa?',
        valasz: [
            { text: 'Budapest', correct: true },
            { text: 'Pécs', correct: false },
            { text: 'Debrecen', correct: false },
            { text: 'Szeged', correct: false }
        ]
    },
    {
        kerdes: 'Mi a legnagyobb bolygó a Naprendszerben?',
        valasz: [
            { text: 'Föld', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Vénusz', correct: false }
        ]
    },
    {
        kerdes: 'Ki festette a Mona Lisát?',
        valasz: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Michelangelo', correct: false },
            { text: 'Pablo Picasso', correct: false }
        ]
    }
];

var inditas = document.getElementById('inditas')
var jatekmezo = document.getElementById('jatekm')
var helyes = 0;
var helytelen = 0;

inditas.addEventListener('click', function kviz(){
    inditas.remove();
    let sz = 1;
    let random =Math.floor(Math.random() * kerdesek.length)
    let ker = document.createElement('p');
    ker.innerText = sz + ". kérdés: " + kerdesek[random].kerdes
    jatekmezo.appendChild(ker)
    kerdesek[random].valasz.forEach(function (elem){
        var valaszok = document.createElement('button');
        valaszok.innerText = elem.text;
        jatekmezo.appendChild(valaszok);
        valaszok.addEventListener("click", function(){
            if (elem.correct == true){
                valaszok.style.backgroundColor = "green"
                jatekmezo.style.backgroundColor = "white"
                let kov = document.createElement("button")
                kov.innerText = "Következő kérdés"
                jatekmezo.appendChild(kov);
                sz++;
                helyes ++
                document.getElementById('helyes').innerText = "Helyes válaszaid: " +helyes
                kov.addEventListener('click', function(){
                    jatekmezo.innerHTML = ""
                    kviz()
                })
            }
            else{
                valaszok.style.backgroundColor = "red"
                helytelen ++
                document.getElementById('helyes').innerText = "Helyes válaszaid: " +helytelen
            }
        });
        
    });
});
inditas.removeAttribute("onclick")