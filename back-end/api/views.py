from rest_framework import viewsets, generics
from .models import ProdutoDisponivel, Produto
from .serializers import DisponibilidadeSerializer, ProdutoSerializer
from django.http import Http404
from .models import Cliente
from .serializers import ClienteSerializer

#api produtos

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


class ProdutosDisponiveisView(generics.RetrieveAPIView):
    serializer_class = DisponibilidadeSerializer

    def get_object(self):
        data = self.request.query_params.get('data')
        if not data:
            raise Http404("Parâmetro 'data' é obrigatório")

        try:
            return ProdutoDisponivel.objects.prefetch_related("produtos__produto").get(
                data=data
            )
        except ProdutoDisponivel.DoesNotExist:
            # Retorna uma disponibilidade vazia se não existir para a data
            return ProdutoDisponivel(data=data)
        

#api clientes

class ClienteListCreateView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        telefone  = self.request.query_params.get('telefone')
        id = self.request.query_params.get('id')
        if telefone:
            queryset = queryset.filter(telefone=telefone)
        if id:
            queryset = queryset.filter(id=id)
        return queryset
    
class ClienteUpdateView(generics.UpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer