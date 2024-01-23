from django.shortcuts import render, redirect
from django.views import View
from django.db.models import Q


# Create your views here.
class IndexView(View):
    def get(self, request):
        return render(request, 'outside_app/index4.html')


class Napriew(View):
    def get(self, request):
        return render(request, 'outside_app/napr.html')


class AboutView(View):
    def get(self, request):
        return render(request, 'outside_app/about.html')


class CareeView(View):
    def get(self, request):
        return render(request, 'outside_app/career.html')


class ZakupView(View):
    def get(self, request):
        return render(request, 'outside_app/zakup.html')


class CompanyView(View):
    def get(self, request):
        return render(request, 'outside_app/company.html')


class GridView(View):
    def get(self, request):
        return render(request, 'outside_app/grid.html')


class MapView(View):
    def get(self, request):
        return render(request, 'outside_app/map2.html')

class MapView2(View):
    def get(self, request):
        return render(request, 'outside_app/map.html')

class InformModel(View):
    def get(self, request):
        return render(request, 'outside_app/inform_model.html')
