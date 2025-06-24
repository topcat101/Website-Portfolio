from django.shortcuts import render, HttpResponse

def Home(request):
    return render(request, "index.html")

def About(request):
    return render(request, "About.html")

def Contact(request):
    return render(request, "Contact.html")

def Login(request):
    return render(request, "Login.html")

def SignUp(request):
    return render(request, "SignUp.html")

def Projects(request):
    return render(request, "SignUp.html")