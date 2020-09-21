""" Serializer for Scrabble Calculator
"""

from rest_framework import serializers
from calculator.service import Service

from calculator.models import ScoreTable, UserEntry


class UserEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEntry
        exclude = ('updated_at',)
        read_only_fields = ('id', 'score', 'created_at')

    def create(self, validated_data):
        logic = Service.calculate_Score(self, **validated_data)
        return UserEntry.objects.create(**logic)


class ScoreTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScoreTable
        exclude = ('id', 'created_at', 'updated_at')

    def to_representation(self, instance):
        data = super(ScoreTableSerializer, self).to_representation(instance)
        """Modify your response data here"""
        return dict(data)
