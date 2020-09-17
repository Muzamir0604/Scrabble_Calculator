""" Serializer for Scrabble Calculator
"""

from rest_framework import serializers
from calculator.service import Service

from calculator.models import ScoreTable, UserEntry

# TODO: exclude Score field


class UserEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEntry
        exclude = ('created_at', 'updated_at')

    def create(self, validated_data):
        logic = Service.calculate_Score(self, **validated_data)
        return UserEntry.objects.create(**logic)


class ScoreTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScoreTable
        exclude = ('created_at', 'updated_at')
