from rest_framework import serializers
from .models import Disponibilidade, Produto, ProdutoDisponivel

class ProdutoSerializer(serializers.ModelSerializer):
    precos_em_centavos_por_tamanho = serializers.JSONField()

    class Meta:
        model = Produto
        fields = ['id', 'nome', 'descricao', 'precos_em_centavos_por_tamanho']

    def create(self, validated_data):
        precos = validated_data.pop('precos_em_centavos_por_tamanho')
        return Produto.objects.create(precos_em_centavos_por_tamanho=precos, **validated_data)
    

class ProdutoDisponivelSerializer(serializers.ModelSerializer):
    # Inclui todos os campos do Produto
    id = serializers.IntegerField(source='produto.id')
    nome = serializers.CharField(source='produto.nome')
    descricao = serializers.CharField(source='produto.descricao')
    precos_em_centavos_por_tamanho = serializers.JSONField(source='produto.precos_em_centavos_por_tamanho')
    
    class Meta:
        model = ProdutoDisponivel
        fields = ['id', 'nome', 'descricao', 'precos_em_centavos_por_tamanho', 'quantidade_disponivel_em_gramas']

class DisponibilidadeSerializer(serializers.ModelSerializer):
    produtos_disponiveis = ProdutoDisponivelSerializer(
        many=True,
        source='produtos'
    )
    
    class Meta:
        model = Disponibilidade
        fields = ['data', 'produtos_disponiveis']