# inquiries/models.py
from django.db import models

class Inquiry(models.Model):
    full_name = models.CharField(max_length=100)
    organization = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    inquiry_type = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} ({self.organization})"
