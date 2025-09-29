from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(req):
    # Either return HttpResponse
    # return HttpResponse("<h1>Hello World</h1>")
    
    # Or return template render
    return render(req, 'app/home.html')