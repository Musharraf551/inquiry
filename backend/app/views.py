# inquiries/views.py
from rest_framework import generics, permissions
from django.core.mail import send_mail
from django.conf import settings
from .models import Inquiry
from app.serializers import InquirySerializer

class InquiryCreateView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def perform_create(self, serializer):
        inquiry = serializer.save()

        # Admin notification
        subject = f"New Inquiry from {inquiry.full_name}"
        message = (
            f"Full Name: {inquiry.full_name}\n"
            f"Organization: {inquiry.organization}\n"
            f"Email: {inquiry.email}\n"
            f"Phone: {inquiry.phone}\n"
            f"Inquiry Type: {inquiry.inquiry_type}\n\n"
            f"Message:\n{inquiry.message}"
        )
        admin_email = ["musharrafaleem2@gmail.com"]  # Replace with your email

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            admin_email,
            fail_silently=False,
        )

        # User confirmation email
        user_message = (
            f"Hello {inquiry.full_name},\n\n"
            "Thank you for contacting us. We have received your inquiry and "
            "will get back to you within 24 hours.\n\n"
            "Best regards,\nYour Company Team"
        )

        send_mail(
            "Thank you for contacting us",
            user_message,
            settings.DEFAULT_FROM_EMAIL,
            [inquiry.email],
            fail_silently=False,
        )

class AdminInquiryListView(generics.ListAPIView):
    queryset = Inquiry.objects.all().order_by("-created_at")
    serializer_class = InquirySerializer
    permission_classes = [permissions.IsAdminUser]  # ✅ Admin only