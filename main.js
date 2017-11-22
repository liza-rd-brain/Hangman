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
var attempt = 0

//Пока остались неразгаданные буквы
while (remainingLetters > 0 && attempt < 15) {
    //Показываем текущее состояние игры
    showPlayerProgress(answerArray)
    //Запрашиваем у игрока ответ
    var getGuess = function () {
       return prompt ("Угадайте букву или нажмите Отмена для выхода из игры.")
    }
    var guess = getGuess()

    if (guess === null) {
        break
    }
    else if (guess.length !== 1) {
        alert("Пожалуйста введите только одну букву.")
    }
    /*else if (guess === answerArray[i]) {
        alert("Эта буква ужа угадана! Введите другую букву!")
        break
    }*/
    else {
        var updateGameState = function (guess, word, answerArray) {
            for (var j = 0; j < word.length; j++) {
                //Приводим введеный символ к строчному написанию
                guess = guess.toLowerCase()
                //Повторояется одна буква в слове столько раз
                var repeatLetter = 0
                if (word[j] === guess && answerArray[j] === "_") {
                    answerArray[j] = guess
                    repeatLetter++
                }
            }
            return repeatLetter
            attempt++
        }
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        //Увеличиваем количество попыток
        attempt++
    }

    var showAnswerAndCongratulatePlayer = function (answerArray) {
        alert(answerArray.join(" "))
        alert("Отлично! Было загадано слово " + word)
    }
}

showAnswerAndCongratulatePlayer(answerArray)