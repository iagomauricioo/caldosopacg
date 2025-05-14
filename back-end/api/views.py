from django.shortcuts import get_list_or_404
from rest_framework import viewsets, generics
from .models import ProdutoDisponivel, Produto
from .serializers import DisponibilidadeSerializer, ProdutoDisponivelPostSerializer, ProdutoDisponivelSerializer, ProdutoSerializer
from django.http import Http404
from .models import Cliente
from .serializers import ClienteSerializer
from rest_framework.response import Response
from rest_framework import status

#api produtos

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

class ProdutosDisponiveisView(generics.RetrieveAPIView):
    serializer_class = DisponibilidadeSerializer

    def get(self, request):
        data = request.query_params.get('data')
        if not data:
            return Response({'error': 'Informe a data'}, status=status.HTTP_400_BAD_REQUEST)
        produtos = get_list_or_404(ProdutoDisponivel, data=data)
        serializer = ProdutoDisponivelSerializer(produtos, many=True)
        return Response({
            "data": data,
            "produtos_disponiveis": serializer.data
        })
        
    def post(self, request):
        serializer = ProdutoDisponivelPostSerializer(data=request.data)
        if serializer.is_valid():
            objs = serializer.save()
        return Response({'status': 'ok'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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