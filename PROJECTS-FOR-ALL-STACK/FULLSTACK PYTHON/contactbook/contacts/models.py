from django.db import models
from django.utils import timezone

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    address = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
