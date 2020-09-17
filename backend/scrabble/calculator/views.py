from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from calculator.models import ScoreTable, UserEntry
from calculator.serializers import ScoreTableSerializer, UserEntrySerializer


class UserEntryViewSet(viewsets.ModelViewSet):
    queryset = UserEntry.objects.all()
    serializer_class = UserEntrySerializer
    permission_classes = [AllowAny]

    def update(self, request, *args, **kwargs):
        response = {'message': 'you can\'t update like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        response = {'message': 'you can\'t create like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


class ScoreTableViewSet(viewsets.ModelViewSet):
    queryset = ScoreTable.objects.all()
    serializer_class = ScoreTableSerializer
