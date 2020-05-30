from django.contrib import admin
from django.urls import path
from homepage import views
from .views import add_student, information,student

urlpatterns = [
    path('', views.index,name='homepage'),
    path('details/', views.add_student,name='details'),
    path('details/information/',views.information,name='information'),
    path('details/update/',views.update,name='update'),
    path('details/delete/',views.delete,name='delete'),
     path('details/student/',views.student,name='student'),





]