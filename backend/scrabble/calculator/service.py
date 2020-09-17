from calculator.models import ScoreTable


class Service:

    @staticmethod
    def calculate_Score(self, name, word, score):
        print("Calculating score")
        list_word = list(word.strip().lower())

        sum = 0
        for letter in list_word:
            res = ScoreTable.objects.get(letter=letter)
            sum += res.value
        return {"name": name, "word": word, "score": sum}
