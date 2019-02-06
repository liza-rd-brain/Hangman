/* Тестовый комментарий для ветки
 */


//Создаем массив со словами
var words = ["программа", "макака", "прекрасный", "оладушек", "солеварня", "гадалка", "мороз",
    "совокупность", "поворот", "аквариум", "водоворот", "переправа", "корабль", "каравай", "пожарный"]

//Выбираем случайное слово
var pickWord = function () {
    return words[Math.floor(Math.random() * words.length)]
}
var word = pickWord()

//Итоговый массив, куда заносятся правильно угаданные буквы
//кусок корявый. Не понимаю, зачем все запихивать в функц. выражения.
//Но пока все делаю по книге
var setupAnswerArray = function (word) {
    var emptyArray = []
    for (var i = 0; i < word.length; i++) {
        emptyArray[i] = "_"
    }
    return emptyArray
}

var answerArray = setupAnswerArray(word);

var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "))
}

// Переменная с количеством оставшихся букв
var remainingLetters = word.length
//Сделанные попытки
var attempt = 0
//Попытки с неверными буквами
var attemptIncorrect = 0

//Рисуем человечка
var hangAMan = function (numberOfParts) {
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    ctx.beginPath()
    if (numberOfParts == 1) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.stroke()
    }
    else if (numberOfParts == 2) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.stroke()
    }
    else if (numberOfParts == 3) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.stroke()
    }
    else if (numberOfParts == 4) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.lineTo(250, 145)
        ctx.stroke()
    }
    else if (numberOfParts == 5) {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.lineTo(250, 145)
        ctx.moveTo(150, 300)
        ctx.lineTo(200, 240)
        ctx.stroke()
    }
    else {
        ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
        ctx.moveTo(200, 140)
        ctx.lineTo(200, 240)
        ctx.moveTo(150, 145)
        ctx.lineTo(200, 170)
        ctx.lineTo(250, 145)
        ctx.moveTo(150, 300)
        ctx.lineTo(200, 240)
        ctx.lineTo(250, 300)
        ctx.stroke()
    }
}


//Пока остались неразгаданные буквы и попыток не больше 15
while (remainingLetters > 0 && attempt < 15 && attemptIncorrect < 6) {
    //Показываем текущее состояние игры
    showPlayerProgress(answerArray)
    //Запрашиваем у игрока ответ
    var getGuess = function () {
        return prompt("Угадайте букву или нажмите Отмена для выхода из игры.")
    }
    //В guess будет записан введенный в строку alert символ
    var guess = getGuess()
    //если игрок нажмет кнопку «Отмена», guess примет значение null
    //Если это условие даст true, мы с помощью break выйдем из цикла while
    if (guess === null) {
        break
    }
    else if (guess == "") {
        alert("Вы не ввели букву!")
    }
    //если введена не одна буква
    else if (guess.length !== 1) {
        alert("Пожалуйста введите только одну букву.")
    }

    else {
        var updateGameState = function (guess, word, answerArray) {
            //Перебираем загаданное слово и ищем сколько раз введенная буква повторяется
            var repeatLetter = 0
            for (var j = 0; j < word.length; j++) {
                //Приводим введеный символ к строчному написанию
                guess = guess.toLowerCase()
                //Повторояется одна буква в слове столько раз
                if (word[j] === guess && answerArray[j] === "_") {
                    //говорим,answerArray, в твоей позиции j  будет стоять теперь буква  guess
                    answerArray[j] = guess
                    repeatLetter++
                }
            }
            return repeatLetter


        }
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        //Увеличиваем количество попыток
        attempt++
        if (correctGuesses == 0) {
            attemptIncorrect++
            //Риуем какую-то часть человека в зависимости от количестве неверноугаданных букв
            hangAMan(attemptIncorrect)
        }
    }
}
var showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "))
    alert("Отлично! Было загадано слово " + word)
}

showAnswerAndCongratulatePlayer(answerArray)


/*var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
ctx.beginPath()

ctx.arc(200, 100, 40, 0, Math.PI * 2, false)
ctx.stroke()

ctx.moveTo(200, 140)
ctx.lineTo(200, 240)

ctx.moveTo(150, 145)
ctx.lineTo(200, 170)
ctx.lineTo(250, 145)
ctx.moveTo(150, 300)
ctx.lineTo(200, 240)
ctx.lineTo(250, 300)
ctx.stroke()*/