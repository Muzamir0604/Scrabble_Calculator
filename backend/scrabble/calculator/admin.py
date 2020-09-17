from django.contrib import admin

# Register your models here.

from calculator.models import UserEntry, ScoreTable


admin.site.register(UserEntry)
admin.site.register(ScoreTable)
