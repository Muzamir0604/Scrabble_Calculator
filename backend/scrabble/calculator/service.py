from calculator.models import ScoreTable
from django.shortcuts import get_object_or_404


class Service:

    @staticmethod
    def calculate_Score(self, name, word):
        sum = 0
        if isinstance(word, str):
            list_word = list(word.strip().lower())
            for letter in list_word:
                res = get_object_or_404(ScoreTable, letter=letter)
                sum += res.value
        return {"name": name, "word": word, "score": sum}
