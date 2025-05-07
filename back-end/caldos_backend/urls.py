from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProdutoViewSet, ProdutosDisponiveisView

router = DefaultRouter()
router.register(r'produtos', ProdutoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('produtos-disponiveis/', ProdutosDisponiveisView.as_view(), name='produtos-disponiveis'),
]
