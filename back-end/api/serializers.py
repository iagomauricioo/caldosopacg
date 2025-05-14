from rest_framework import serializers
from .models import ProdutoDisponivel, Produto, ProdutoDisponivel
from .models import Cliente, Endereco

# api produtos

class ProdutoSerializer(serializers.ModelSerializer):
    precos_em_centavos_por_tamanho = serializers.JSONField()

    class Meta:
        model = Produto
        fields = ['id', 'nome', 'descricao', 'precos_em_centavos_por_tamanho']

    def create(self, validated_data):
        precos = validated_data.pop('precos_em_centavos_por_tamanho')
        return Produto.objects.create(precos_em_centavos_por_tamanho=precos, **validated_data)


class ProdutoDisponivelSerializer(serializers.ModelSerializer):
    produto_id = serializers.IntegerField(source='produto.id')

    class Meta:
        model = ProdutoDisponivel
        fields = ['produto_id', 'quantidade_disponivel_em_gramas']

class ProdutoDisponivelPostSerializer(serializers.Serializer):
    data = serializers.DateField()
    produtos_disponiveis = ProdutoDisponivelSerializer(many=True)
    
    def create(self, validated_data):
        data = validated_data['data']
        produtos = validated_data['produtos_disponiveis']
        result = []
        for prod in produtos:
            produto_id = prod['produto']['id']
            qtd = prod['quantidade_disponivel_em_gramas']
            produto = Produto.objects.get(id=produto_id)
            obj, _ = ProdutoDisponivel.objects.update_or_create(
                data=data,
                produto=produto,
                defaults={'quantidade_disponivel_em_gramas': qtd}
            )
            result.append(obj)
        return result

class DisponibilidadeSerializer(serializers.ModelSerializer):
    produtos_disponiveis = ProdutoDisponivelSerializer(
        many=True,
        source='produtos'
    )

    class Meta:
        model = ProdutoDisponivel
        fields = ['data', 'produtos_disponiveis']

# api clientes
class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer()
    
    class Meta:
        model = Cliente
        fields = ['id', 'nome', 'email', 'telefone' , 'endereco']
        
    def create(self, validated_data):
        endereco_data = validated_data.pop('endereco')
        endereco  = Endereco.objects.create(**endereco_data)
        return Cliente.objects.create(endereco=endereco, **validated_data)
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'endereco':
                for key, val in value.items():
                    setattr(instance.endereco, key, val)
                instance.endereco.save()
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance

    
        