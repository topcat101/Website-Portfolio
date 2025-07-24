from django.shortcuts import render, HttpResponse
from django.http import HttpResponseNotFound

def Home(request):
    render_template = render(request, "Home", status=200)
    return HttpResponse(render_template)

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




###############################################################
#                                                             #
#                The below is for testing                     #
#                     Purposes only                           #
#                                                             #
#                                                             #
###############################################################





def login_request(request):
    if request == True:
        return HttpResponse(request, status=200)
    elif request == True:
        return HttpResponseNotFound("<h1>Page not found</h1>")
    else:
        return HttpResponse(request.META)
    
def Thomas(request):
    return HttpResponse("Learning Django everyday!", status=200)