from django.test import TestCase
from calculator import models


def create_entry(name="muzamir", word="Intelligent", score=10):
    """Create an entry on User Entry Model

    Args:
        name (str, optional): [description]. Defaults to "muzamir".
        word (str, optional): [description]. Defaults to "Intelligent".
        score (int, optional): [description]. Defaults to 10.

    Returns:
        [str]: [model default string]
    """

    return models.UserEntry.objects.create(name=name, word=word, score=score)


def create_score_table_entry(letter="A", value=10):
    """create_score_table_entry 

    Args:
        letter (str, optional): [description]. Defaults to "A".
        value (int, optional): [description]. Defaults to 10.
    Returns:
    [str]: [model default string]
    """

    return models.ScoreTable.objects.create(letter=letter, value=value)


class ModelTests(TestCase):
    """Test Model Validity
    """

    def test_create_one_entry(self):
        """Test create on entry"""

        entry = create_entry()

        self.assertEqual(str(entry), "muzamir-Intelligent:10")

    def test_create_scoretable_entry(self):
        """Test scoretable Entry"""
        score_entry = create_score_table_entry()

        self.assertEqual(str(score_entry), "A")
