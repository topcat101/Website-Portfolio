from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from Api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.Home, name="Home"),
    path("Home", views.Home, name="Home"),
    path("About", views.About, name="About"),
    path("Contact", views.Contact, name="Contact"),
    path("Projects", views.Projects, name="Projects"),
    path("Login", views.Login, name="Login"),
    path("SignUp", views.SignUp, name="SignUp"),
    path("Thomas", views.Thomas, name="Thomas"),

    
    path("login_request", views.login_request, name="login_request"),
    
    
    path("Register/", CreateUserView.as_view(), name="Register"),



    path("Token", TokenObtainPairView.as_view(), name="Token"),
    path("Token/Refresh/", TokenRefreshView.as_view(), name="Refresh"),
    path("api-auth/", include("rest_framework.urls")),
]