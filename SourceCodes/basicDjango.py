# urls.py
urlpatterns = [
    url(r'^$', index),
]

# views.py
def index(request):
    return render(request,"index.html")
