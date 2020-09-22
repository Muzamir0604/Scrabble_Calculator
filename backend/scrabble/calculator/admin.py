from django.contrib import admin

# Register your models here.

from calculator.models import UserEntry, ScoreTable


class ScoreTableAdmin(admin.ModelAdmin):
    model = ScoreTable
    ordering = ('letter',)
    list_display = ('letter', 'value')


admin.site.register(UserEntry)
admin.site.register(ScoreTable, ScoreTableAdmin)
