from django.urls import path
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('napr', views.Napriew.as_view(), name='napr'),
    path('about', views.AboutView.as_view(), name='about'),
    path('career', views.CareeView.as_view(), name='career'),
    path('zakup', views.ZakupView.as_view(), name='zakup'),
    path('company', views.CompanyView.as_view(), name='company'),
    path('grid', views.GridView.as_view(), name='grid'),
    path('map', views.MapView.as_view(), name='map'),
]
