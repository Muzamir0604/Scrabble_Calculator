from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter

from calculator.models import ScoreTable, UserEntry
from calculator.serializers import ScoreTableSerializer, UserEntrySerializer
from rest_framework.response import Response
from calculator.service import Service
from django_filters.rest_framework import DjangoFilterBackend


class UserEntryViewSet(viewsets.ModelViewSet):
    queryset = UserEntry.objects.all()
    serializer_class = UserEntrySerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = ['created_at']
    ordering = ['-created_at']
    filterset_fields = ['name']

    def create(self, request, *args, **kwargs):
        name = request.data['name']
        word = request.data['word']
        data = {}
        if word:
            data = Service.calculate_Score(self, name,  word)

            UserEntry.objects.create(**data)
            response = {'message': 'Entry Created',
                        'name': request.data['name'],
                        'word': request.data['word'],
                        'score': data['score']}
            return Response(response, status=status.HTTP_200_OK)
        else:
            data['score'] = 0
            response = {'message': 'No letters found',
                        'name': request.data['name'],
                        'word': request.data['word'],
                        'score': data['score']}
            return Response(response, status=status.HTTP_404_NOT_FOUND)

    def update(self, request, *args, **kwargs):
        response = {'message': 'you can\'t update like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        response = {'message': 'you can\'t create like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


class ScoreTableViewSet(viewsets.ModelViewSet):
    queryset = ScoreTable.objects.all()
    serializer_class = ScoreTableSerializer
