from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.db.models import Q


# Create your views here.
class IndexView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/index4.html')


class Napriew(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/napr.html')


class AboutView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/about.html')


class CareeView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/career.html')


class ZakupView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/zakup.html')


class CompanyView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/company.html')


class GridView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/grid.html')


class MapView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/map2.html')

class MapView2(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/map.html')

class InformModel(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        return render(request, 'outside_app/inform_model.html')
