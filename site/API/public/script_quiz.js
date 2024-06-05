const quizData = [
    // fáceis
    // {
    //     question: "Qual é o nome do efeito de guitarra que adiciona um som 'metálico' à nota?",
    //     opcoes: ["Reverb", "Chorus", "Flanger", "Distortion"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    {
        question: "Qual destes é um dos principais fabricantes de cordas de guitarra?",
        opcoes: ["Martin", "D'Addario", "Taylor", "Gibson"],
        answer: 1,
        difficulty: 'facil'
     },
    // {
    //     question: "Qual é a função das tarraxas na guitarra?",
    //     opcoes: ["Ajustar a afinação das cordas", "Ampliar o som", "Segurar a correia", "Alterar o timbre"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Quantas cordas uma guitarra padrão possui?",
    //     opcoes: ["4", "5", "6", "7"],
    //     answer: 2,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual dos seguintes é um famoso modelo de guitarra da Fender?",
    //     opcoes: ["Stratocaster", "Les Paul", "SG", "Flying V"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome da parte da guitarra onde as cordas são pressionadas para criar diferentes notas?",
    //     opcoes: ["Corpo", "Braço", "Ponte", "Trastes"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual destes é um famoso guitarrista do AC/DC?",
    //     opcoes: ["Angus Young", "Kirk Hammett", "Brian May", "Eddie Van Halen"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome da técnica que envolve deslizar de uma nota para outra na guitarra?",
    //     opcoes: ["Bend", "Pull-off", "Slide", "Hammer-on"],
    //     answer: 2,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome da peça que segura as cordas no final do corpo da guitarra?",
    //     opcoes: ["Captador", "Ponte", "Tarraxa", "Corpo"],
    //     answer: 1,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do famoso pedal de distorção da BOSS?",
    //     opcoes: ["DS-1", "MT-2", "SD-1", "OD-3"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual dos seguintes guitarristas é famoso por seu trabalho na banda Metallica?",
    //     opcoes: ["Jimmy Page", "David Gilmour", "Kirk Hammett", "Steve Vai"],
    //     answer: 2,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome da parte da guitarra que contém os controles de volume e tom?",
    //     opcoes: ["Corpo", "Braço", "Headstock", "Controles"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual marca é famosa pela guitarra Les Paul?",
    //     opcoes: ["Fender", "Gibson", "Ibanez", "Epiphone"],
    //     answer: 1,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é a afinação padrão para uma guitarra?",
    //     opcoes: ["EADGBE", "EBGDAE", "DADGAD", "DGCFAD"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual guitarrista é conhecido como 'Slowhand'?",
    //     opcoes: ["Eric Clapton", "Jimmy Page", "Jimi Hendrix", "Slash"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o primeiro nome do guitarrista conhecido como Slash?",
    //     opcoes: ["Saul", "Steven", "Scott", "Sam"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual desses é um dos tipos mais comuns de captadores de guitarra?",
    //     opcoes: ["Single-coil", "Double-coil", "Triple-coil", "Quadruple-coil"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do famoso amplificador de guitarra criado pela Marshall?",
    //     opcoes: ["Blackstar", "Orange", "Peavey", "JCM800"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome da técnica de tocar duas notas ao mesmo tempo na guitarra?",
    //     opcoes: ["Hammer-on", "Pull-off", "Slide", "Double-stop"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "O que significa a sigla 'PRS' em relação a guitarras?",
    //     opcoes: ["Paul Reed Smith", "Peter Ray Scott", "Pete Robert Stratocaster", "Patrick Roy Simmons"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do instrumento de seis cordas tocado pela mão direita, enquanto a mão esquerda pressiona as cordas contra os trastes para alterar a nota?",
    //     opcoes: ["Guitarra", "Baixo", "Violão", "Cavaquinho"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome da técnica que envolve a rápida troca entre duas notas na guitarra?",
    //     opcoes: ["Bend", "Trill", "Vibrato", "Slide"],
    //     answer: 1,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual destes músicos é mais associado à técnica de 'tapping'?",
    //     opcoes: ["Stevie Ray Vaughan", "Joe Satriani", "Eddie Van Halen", "Ritchie Blackmore"],
    //     answer: 2,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do pequeno dispositivo usado para segurar as cordas da guitarra em posição?",
    //     opcoes: ["Corda", "Guitarra", "Afinador", "Capotrasto"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do componente da guitarra que permite ao guitarrista mudar a tonalidade das cordas?",
    //     opcoes: ["Tarraxa", "Ponte", "Captador", "Traste"],
    //     answer: 0,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual destes guitarristas é conhecido como 'The Edge'?",
    //     opcoes: ["Eric Clapton", "David Gilmour", "The Edge", "Jimmy Page"],
    //     answer: 2,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do método popular de aprendizado de guitarra criado por Mel Bay?",
    //     opcoes: ["FastTrack", "Guitarra para Iniciantes", "Método de Mel Bay", "Aprenda Guitarra Rapidamente"],
    //     answer: 2,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do efeito de guitarra que adiciona um som 'metálico' à nota?",
    //     opcoes: ["Reverb", "Chorus", "Flanger", "Distortion"],
    //     answer: 3,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual destes é um dos principais fabricantes de cordas de guitarra?",
    //     opcoes: ["Martin", "D'Addario", "Taylor", "Gibson"],
    //     answer: 1,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual dos seguintes guitarristas foi membro fundador do Led Zeppelin?",
    //     opcoes: ["Jimi Hendrix", "Jimmy Page", "Eric Clapton", "Jeff Beck"],
    //     answer: 1,
    //     difficulty: 'facil'
    // },
    // {
    //     question: "Qual é o nome do pedal que cria um som de 'wa wa' quando o guitarrista move o pedal para cima e para baixo?",
    //     opcoes: ["Delay", "Overdrive", "Wah-wah", "Flanger"],
    //     answer: 2,
    //     difficulty: 'facil'
    //  },
    // // Médios
    {
        question: "Qual é o nome do guitarrista famoso por sua técnica de sweep picking?",
        opcoes: ["Steve Vai", "John Petrucci", "Yngwie Malmsteen", "Joe Satriani"],
        answer: 2,
        difficulty: 'medio'
    },
    // {
    //     question: "Qual guitarrista é conhecido pelo uso extensivo de um pedal de efeito conhecido como 'Big Muff'?",
    //     opcoes: ["David Gilmour", "Kirk Hammett", "Tom Morello", "Jack White"],
    //     answer: 3,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual é o nome do guitarrista da banda Queen?",
    //     opcoes: ["Brian May", "Jimmy Page", "Eddie Van Halen", "Angus Young"],
    //     answer: 0,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual é o nome da técnica que envolve tocar uma corda da guitarra e, em seguida, deslizar o dedo para outra nota?",
    //     opcoes: ["Bend", "Pull-off", "Slide", "Hammer-on"],
    //     answer: 2,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual é a madeira frequentemente usada para fazer o braço de guitarras Fender?",
    //     opcoes: ["Mogno", "Maple", "Rosewood", "Basswood"],
    //     answer: 1,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual dos seguintes guitarristas é conhecido por tocar com os dentes?",
    //     opcoes: ["Jimmy Page", "Jimi Hendrix", "Steve Vai", "Eric Clapton"],
    //     answer: 1,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual é o nome do guitarrista conhecido por sua participação na banda Pink Floyd?",
    //     opcoes: ["David Gilmour", "Jimmy Page", "Ritchie Blackmore", "Brian May"],
    //     answer: 0,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual é a afinação comum para tocar blues em E?",
    //     opcoes: ["EADGBE", "DADGAD", "EBEGBE", "EBEG#BE"],
    //     answer: 3,
    //     difficulty: 'medio'
    // },
    // {
    //     question: "Qual é o nome do componente da guitarra elétrica que converte as vibrações das cordas em sinais elétricos?",
    //     opcoes: ["Ponte", "Captador", "Tarraxa", "Traste"],
    //     answer: 1,
    //     difficulty: 'medio'
    // },
    // // difíceis
    // {
    //     question: "Quem é o guitarrista fundador da banda de metal progressivo Dream Theater?",
    //     opcoes: ["John Petrucci", "Joe Satriani", "Steve Vai", "Paul Gilbert"],
    //     answer: 0,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual guitarrista é conhecido por popularizar o estilo 'fingerpicking' na guitarra elétrica?",
    //     opcoes: ["Mark Knopfler", "Chet Atkins", "Tommy Emmanuel", "Andrés Segovia"],
    //     answer: 0,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual é o nome do álbum do Jimi Hendrix que apresenta a famosa música 'Purple Haze'?",
    //     opcoes: ["Electric Ladyland", "Axis: Bold as Love", "Are You Experienced", "Band of Gypsys"],
    //     answer: 2,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual guitarrista é conhecido por sua técnica de 'hybrid picking'?",
    //     opcoes: ["Brent Mason", "John Petrucci", "David Gilmour", "Jimmy Page"],
    //     answer: 0,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual é o nome do guitarrista da banda Megadeth?",
    //     opcoes: ["Dave Mustaine", "James Hetfield", "Kerry King", "Dimebag Darrell"],
    //     answer: 0,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual é o nome do famoso álbum ao vivo do guitarrista Joe Bonamassa gravado no Royal Albert Hall?",
    //     opcoes: ["An Acoustic Evening", "Live at the Royal Albert Hall", "Blues Deluxe", "Sloe Gin"],
    //     answer: 1,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual guitarrista é conhecido por tocar a icônica 'Frankenstrat'?",
    //     opcoes: ["Eddie Van Halen", "Randy Rhoads", "Slash", "Steve Vai"],
    //     answer: 0,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual guitarrista famoso pela técnica 'economy picking' escreveu o livro 'Speed Mechanics for Lead Guitar'?",
    //     opcoes: ["Paul Gilbert", "Frank Gambale", "Yngwie Malmsteen", "Troy Stetina"],
    //     answer: 1,
    //     difficulty: 'dificil'
    // },
    // {
    //     question: "Qual guitarrista é conhecido por usar uma guitarra com corpo de alumínio chamada 'Lucille'?",
    //     opcoes: ["B.B. King", "Eric Clapton", "Albert King", "Joe Bonamassa"],
    //     answer: 0,
    //     difficulty: 'dificil'
    // },
    {
        question: "Qual guitarrista virtuoso lançou o álbum 'Surfing with the Alien'?",
        opcoes: ["Joe Satriani", "Steve Vai", "John Petrucci", "Eric Johnson"],
        answer: 0,
        difficulty: 'dificil'
    }
];

let idUsuario = sessionStorage.ID_USUARIO;

const qtdElement = document.getElementById('qtd');
const questaoElement = document.getElementById('questao');
const optionsElement = document.getElementById('options');
const corretoElement = document.getElementById('correto');
const fimElement = document.getElementById('fim');
const reiniciarButton = document.querySelector('.reiniciar');
const dashboardButton = document.getElementById('dashboard');
const avaliacao = document.querySelector('.avaliacao');

let currentQuestion = 0;
let score = 0;

function mostrarQuestao() {
    const question = quizData[currentQuestion];
    avaliacao.style.display = 'none'
    qtdElement.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
    questaoElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.opcoes.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => verificarResposta(index));
        optionsElement.appendChild(button);

    });
}
let contFacil = 0
let contMedio = 0
let contDificil = 0

function verificarResposta(optionIndex) {
    const question = quizData[currentQuestion];
    const correctAnswerIndex = question.answer;
    if (optionIndex === correctAnswerIndex) {
        let pontos = 0;
        switch (question.difficulty) {
            case 'facil':
                pontos = 1;
                contFacil++
                break;
            case 'medio':
                pontos = 5;
                contMedio++

                break;
            case 'dificil':
                pontos = 10;
                contDificil++

                break;
        }
        score += pontos;
        corretoElement.textContent = "Correto!";
    } else {
        corretoElement.textContent = "Incorreto!";
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        mostrarQuestao();
    } else {
        mostrarResultado();
        cadastrarMetricas()

    }
}

function mostrarResultado() {
    fimElement.textContent = ``;
    optionsElement.style.display = 'none';
    corretoElement.style.display = 'none';
    fimElement.textContent += `Você fez ${score} pontos!`;
    avaliacao.style.display = 'block'

    fimElement.style.display = 'block';
    reiniciarButton.style.display = 'block';
    dashboardButton.style.display = 'block';





}

function cadastrarMetricas() {
    if (contFacil == "undefined") {
        contDificil = 0
    }
    if (contMedio == "undefined") {
        contDificil = 0
    }
    if (contDificil == "undefined") {
        contDificil = 0
    }


    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarMetricas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            usuarioServer: idUsuario,
            pontuacaoServer: score,
            facilServer: contFacil,
            medioServer: contMedio,
            dificilServer: contDificil,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

}

let nota = 0
function avaliar(avaliacao) {

    nota = avaliacao;
    alertAvaliacao();
}

function alertAvaliacao() {
    Swal.fire({
        title: "Você gostaria de enviar essa avaliação?<br>Nota: " + nota,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sim",
        denyButtonText: "Não",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {


            // Enviando o valor da nova input
            fetch("/usuarios/cadastrarAvaliacao", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js

                    usuarioServer: idUsuario,
                    avaliacaoServer: nota,

                }),
            })
                .then(function (resposta) {
                    Swal.fire("Enviado!", "", "success");
                    console.log("resposta: ", resposta);


                })
                .catch(function (resposta) {
                    Swal.fire("Avaliação já enviada anteriormente!", "", "error");
                });

            return false;



        } else if (result.isDenied) {
            Swal.fire("Não foi enviado!", "", "error");
        }
    });
}

function iniciarQuiz() {
    contFacil = 0
    contMedio = 0
    contDificil = 0
    currentQuestion = 0;
    score = 0;
    optionsElement.style.display = 'block';
    corretoElement.style.display = 'block';
    fimElement.style.display = 'none';
    reiniciarButton.style.display = 'none';
    dashboardButton.style.display = 'none';
    mostrarQuestao();
}

reiniciarButton.addEventListener('click', iniciarQuiz);

iniciarQuiz();