#urls.py
urlpatterns = [
    url(r'^dataStored/(?P<fileId>\d+)/$', views.dataStored, name='dataStored'),
]