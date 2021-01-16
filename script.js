        function makePhrases(){
            const words1 = ['24/7', 'Каждый день', "сегодня", "Все равно", "Почему?"];
            const words2 = ['1 день в неделю', 'ТЫ где?', "Ало/Ало", "У меня нет", "Зачем?"];
            const words3 = ['невозможно', 'У тебя есть?', "Зажигалка", "Гори", "Бытье"];

            const rand1 = Math.floor(Math.randoom() * words1.length);
            const rand2 = Math.floor(Math.randoom() * words2.length);
            const rand3 = Math.floor(Math.randoom() * words3.length);

            const phease = words1[rand1] + ' ' + words2[rand2]+ ' ' + words3[words3];
            alert(phrase);
        }

        makePhrases();