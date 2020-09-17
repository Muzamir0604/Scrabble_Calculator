from django.urls import path

from calculator.views import UserEntryViewSet, ScoreTableViewSet

from rest_framework import routers
from django.conf.urls import include


router = routers.DefaultRouter()
router.register('score-table', ScoreTableViewSet)
router.register('scrabble', UserEntryViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
