//Создаем массив со словами
var words = ["программа", "макака", "прекрасный", "оладушек", "солеварня", "гадалка", "мороз",
    "совокупность", "поворот", "аквариум", "водоворот", "переправа", "корабль", "каравай", "пожарный"]
//Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)]

//Итоговый массив, куда заносятся правильно угаданные буквы
var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
// Переменная с количеством оставшихся букв
var remeiningLetters = word.length
var attempt = 0

//Пока остались неразгаданные буквы
while (remeiningLetters > 0 && attempt < 15) {
    //Показываем текущее состояние игры
    alert(answerArray.join(" "))
    //Запрашиваем у игрока ответ
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.")


    for (var i = 0; i <= word.length; i++) {
        if (guess === answerArray[i]) {
            alert("Эта буква ужа угадана! Введите другую букву!")
            break
        }
    }

    if (guess === null) {
        break
    }
    else if (guess.length !== 1) {
        alert("Пожалуйста введите только одну букву.")
    }
    //Основной код, сверка введенной буквы с имеющимися в загаданном слове
    else {
        for (var j = 0; j < word.length; j++) {
            //Приводим введеный символ к строчному написанию
            guess = guess.toLowerCase()
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess
                remeiningLetters--
            }
            //else alert("Эта буква уже отгадана! Введите другую букву!")
        }
    }
    //Увеличиваем количество попыток
    attempt++
}

alert(answerArray.join(" "))
alert("Отлично! Было загадано слово " + word)

