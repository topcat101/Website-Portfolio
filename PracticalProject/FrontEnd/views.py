from django.shortcuts import render, HttpResponse

def Home(request):
    return render(request, "Home")

def About(request):
    return render(request, "About")

def Contact(request):
    return render(request, "Contact")

def Login(request):
    return render(request, "Login")

def SignUp(request):
    return render(request, "SignUp")

def Projects(request):
    return render(request, "Projects")