# inquiries/admin.py
from django.contrib import admin
from .models import Inquiry

@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ("full_name", "organization", "email", "phone", "inquiry_type", "created_at")
    search_fields = ("full_name", "email", "organization", "inquiry_type")
    list_filter = ("inquiry_type", "created_at")
