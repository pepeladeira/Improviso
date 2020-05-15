const getRandomNumber = () => {
    let userInput = document.getElementById('number').value;

    switch (userInput){
        case "1":
            return 'Nordeste'
            break;
        case "2":
            return 'Hot Dog'
            break;
        case "3":
            return 'Funk'
            break;          
        case "4":
            return 'Rugby'
            break;          
        case "5":
            return 'Panela'
            break;
        case "6": 
            return 'Cachorro'
            break;
        case "7":
            return 'Corona Vírus'
            break;
        case "8":
            return 'Revolução Francesa'
            break;
        case "9":
            return 'Computador'
            break;
        case "10":
            return 'Samurai'
            break;
        case "11":
            return 'Tijolo'
            break;
        case "12":
            return 'Vaca'
            break;
        case "13":
            return 'Norte'
            break;
        case "14":
            return 'Centro-Oeste'
            break;
        case "15":
            return 'Sudeste'
            break;
        case "16":
            return 'Sul'
            break;
        case "17":
            return 'Sushi'
            break; 
        case "18":
            return 'Baleia'
            break;
        case "19":
            return 'Anita'
            break;
        case "20":
            return 'Programação'
            break;
        case "21":
            return 'Palmeiras'
            break;
        case "22":
            return 'Dólar'
            break;
        case "23":
            return 'Carro'
            break;
        case "24":
            return 'Moto'
            break;   
        case "25":
            return 'Barco'
            break;
        case "26":
            return 'Avião'
            break;
        case "27":
            return 'Grécia'
            break;
        case "28":
            return 'África'
            break;
        case "29":
            return 'Ásia'
            break;
        case "30":
            return 'Europa'
            break;
        case "31":
            return 'Oceanos'
            break;
        case "32":
            return '1º Guerra Mundial'
            break;
        case "33":
            return '2º Guerra Mundial'
            break;
        case "34":
            return 'Geografia'
            break;
        case "35":
            return 'Caneca'
            break;
        case "36":
            return 'Prato'
            break;
        case "37":
            return 'Talhares'
            break;
        case "38":
            return 'Livros'
            break;
        case "39":
            return 'Videogame'
            break;
        case "40":
            return 'Cinema'
            break;
        case "41":
            return 'Arte'
            break;
        case "42":
            return 'Encanação'
            break;
        case "43":
            return 'Celular'
            break;
        case "44":
            return 'Skate'
            break;
        case "45":
            return 'Ventilador'
            break;
        case "46":
            return 'Televisão'
            break;
        case "47":
            return 'Jeans'
            break;
        case "48":
            return 'Sweater'
            break;
        case "49":
            return 'Mouse'
            break;
        case "50":
                return 'Verduras'
                break;
        default:
            alert('Escolha um número entre 1 e 50.');
            break;    
    };
    
};


const getRandomStructute = () => {
    let randomNumber = Math.floor(Math.random() * 5);

    switch (randomNumber){
        case 0:
            return 'Presente, Passado e Futuro'
            break;
        case 1:
            return 'Pontos Fortes e Pontos Fracos'
            break;
        case 2:
            return 'Causa e Consequência'
            break;
        case 3:
            return 'Problema, Solução e Benefícios'
            break;
        case 4:
            return 'What? / So What? / Now What?'
            break;
    }
};

const displayOnWeb = () => {
    const displayTheme = document.getElementById('tema');
    displayTheme.innerHTML = getRandomNumber();

    const displayStructure = document.getElementById('estrutura');
    displayStructure.innerHTML = getRandomStructute();

    
    const stopwatch = document.getElementById('stopwatch');
    stopwatch.style.display = "flex";
};

