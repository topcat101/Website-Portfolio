from django.shortcuts import render
from django.urls import path
from . import views

urlpatterns = [
    path("", views.Home, name="Home"),
    path("index.html", views.Home, name="Home"),
    path("About.html", views.About, name="About"),
    path("Contact.html", views.Contact, name="Contact"),
    path("Projects.html", views.Projects, name="Projects"),
    path("Login.html", views.Login, name="Login"),
    path("SignUp.html", views.SignUp, name="SignUp")
]