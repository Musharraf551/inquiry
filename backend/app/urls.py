# inquiries/urls.py
from django.urls import path
from .views import InquiryCreateView, AdminInquiryListView

urlpatterns = [
    path("inquiry/", InquiryCreateView.as_view(), name="inquiry-create"),
    path("inquiries/admin/", AdminInquiryListView.as_view(), name= "admin-inquiry"),
]
