from django.test import TestCase
from calculator import models
from calculator.service import Service
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status

scoreTableListUrl = reverse('scoretable-list')
UserEntryListUrl = reverse('userentry-list')


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

        self.assertEqual(str(entry), "muzamir-intelligent:10")

    def test_create_scoretable_entry(self):
        """Test scoretable Entry"""
        score_entry = create_score_table_entry()

        self.assertEqual(str(score_entry), "a")


class ApiTests(APITestCase):
    def setUp(self):
        create_score_table_entry()
        create_entry()

    def test_read_scoretable(self):
        url = scoreTableListUrl

        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.ScoreTable.objects.count(), 1)

    def test_read_userentry(self):
        url = UserEntryListUrl

        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(models.ScoreTable.objects.count(), 1)

    def test_create_userentry(self):
        url = UserEntryListUrl
        payload = {
            "name": "basyir",
            "word": "a",
            "score": "10",
        }
        response = self.client.post(url, payload)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class ServiceLogicTests(TestCase):
    def setUp(self):
        create_score_table_entry("b", 10)
        create_score_table_entry("c", 5)
        create_score_table_entry("a", 3)
        create_score_table_entry("k", 9)

    def test_calculate_score(self):
        res = Service.calculate_Score(self, "muzamir", "back", 0)
        self.assertEqual(res.get("score"), 27)
