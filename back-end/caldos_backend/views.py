from rest_framework import viewsets, generics
from .models import Disponibilidade, Produto
from .serializers import DisponibilidadeSerializer, ProdutoSerializer
from django.http import Http404

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
            return Disponibilidade.objects.prefetch_related('produtos__produto').get(data=data)
        except Disponibilidade.DoesNotExist:
            # Retorna uma disponibilidade vazia se não existir para a data
            return Disponibilidade(data=data)