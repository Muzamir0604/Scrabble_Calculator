""" Model for Scrabble Calculator
    """

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class ScoreTable(models.Model):
    """ScoreTable
    """
    letter = models.CharField(max_length=1)
    value = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(20)])
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.letter


class UserEntry(models.Model):
    """UserEntry with score and no user model attached
    """
    name = models.CharField(max_length=120)
    word = models.CharField(max_length=120)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.name + "-" + self.word + ":" + str(self.score)
