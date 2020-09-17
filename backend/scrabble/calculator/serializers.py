""" Serializer for Scrabble Calculator
"""

from rest_framework import serializers

from calculator.models import ScoreTable, UserEntry


class UserEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEntry
        exclude = ('created_at', 'updated_at')


class ScoreTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScoreTable
        exclude = ('created_at', 'updated_at')
