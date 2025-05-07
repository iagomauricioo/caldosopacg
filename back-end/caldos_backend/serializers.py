from rest_framework import serializers
from .models import Produto

class ProdutoSerializer(serializers.ModelSerializer):
    precos_em_centavos_por_tamanho = serializers.JSONField()

    class Meta:
        model = Produto
        fields = ['id', 'nome', 'descricao', 'precos_em_centavos_por_tamanho']

    def create(self, validated_data):
        precos = validated_data.pop('precos_em_centavos_por_tamanho')
        return Produto.objects.create(precos_em_centavos_por_tamanho=precos, **validated_data)