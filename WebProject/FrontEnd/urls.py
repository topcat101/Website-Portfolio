from django.shortcuts import render
from django.urls import path
from . import views

urlpatterns = [
    path("", views.Home, name="Home"),
    path("Home", views.Home, name="Home"),
    path("About", views.About, name="About"),
    path("Contact", views.Contact, name="Contact"),
    path("Projects", views.Projects, name="Projects"),
    path("Login", views.Login, name="Login"),
    path("SignUp", views.SignUp, name="SignUp")
]