from django.db import models


class Task(models.Model):
    text = models.TextField()

    class Meta:
        verbose_name = "Задача"
        verbose_name_plural = "Задачи"
