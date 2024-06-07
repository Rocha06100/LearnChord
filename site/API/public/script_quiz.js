const quizData = [
    // fáceis
    {
        question: "Quantas cordas uma guitarra padrão possui?",
        opcoes: ["4", "5", "6", "7"],
        answer: 2,
        difficulty: 'facil'
    },
    {
        question: "Qual dos seguintes é um famoso modelo de guitarra da Fender?",
        opcoes: ["Stratocaster", "Les Paul", "SG", "Flying V"],
        answer: 0,
        difficulty: 'facil'
    },
    // // Médios
    {
        question: "Qual é a madeira frequentemente usada para fazer o braço de guitarras Fender?",
        opcoes: ["Mogno", "Maple", "Rosewood", "Basswood"],
        answer: 0,
        difficulty: 'medio'
    },
    {
        question: "Qual dos seguintes guitarristas é conhecido por tocar com os dentes?",
        opcoes: ["Jimmy Page", "Jimi Hendrix", "Steve Vai", "Eric Clapton"],
        answer: 1,
        difficulty: 'medio'
    },
    // // difíceis
    {
        question: "Qual guitarrista é conhecido por sua técnica de 'hybrid picking'?",
        opcoes: ["Brent Mason", "John Petrucci", "David Gilmour", "Jimmy Page"],
        answer: 0,
        difficulty: 'dificil'
    },
    {
        question: "Qual é o nome do guitarrista da banda Megadeth?",
        opcoes: ["Dave Mustaine", "James Hetfield", "Kerry King", "Dimebag Darrell"],
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