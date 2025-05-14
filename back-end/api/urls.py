from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProdutoViewSet, ProdutosDisponiveisView
from .views import ClienteListCreateView, ClienteUpdateView


router = DefaultRouter()
router.register(r'produtos', ProdutoViewSet)

urlpatterns = [
    path("", include(router.urls)),
    
    path('produtos/disponiveis', ProdutosDisponiveisView.as_view()),

    path("clientes", ClienteListCreateView.as_view(), name="clientes-list-create"),
    path("clientes/<int:pk>", ClienteUpdateView.as_view(), name="clientes-update"),
]
