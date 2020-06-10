from django.contrib import admin
from django.urls import path
from query import views
from .views import raise_query , status , approve

urlpatterns = [
    path('query/',views.raise_query,name="query"),
    path('query/status/',views.status,name="status"),
    path('query/approve/',views.approve,name="approve"),



]