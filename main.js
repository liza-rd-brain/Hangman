//Создаем массив со словами
var words = ["программа", "макака", "прекрасный", "оладушек"]
//Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)]

//Итоговый массив, куда заносятся правильно угаданные буквы
var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
// Переменная с количеством оставшихся букв
var remeiningLetters = word.length

//Пока остались неразгаданные буквы
while (remeiningLetters > 0) {
    //Показываем текущее состояние игры
    alert(answerArray.join(" "))
    //Запрашиваем у игрока ответ
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.")
    if (guess === null) {
        break
    }
    else if (guess.length !== 1) {
        alert("Пожалуйста введите только одну букву.")
    }
    //Основной код, сверка введенной буквы с имеющимис в загаданном слове
    else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess
                remeiningLetters--

            }
        }
    }
}

alert(answerArray.join(" "))
alert("Отлично! Было загадано слово " + word)

