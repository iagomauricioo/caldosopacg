from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField

# Api de produtos

class Produto(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField()
    precos_em_centavos_por_tamanho = models.JSONField(default=dict)

    def __str__(self):
        return self.nome

    def to_json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "descricao": self.descricao,
            "precos_em_centavos_por_tamanho": self.precos_em_centavos_por_tamanho
        }
class ProdutoDisponivel(models.Model):
    data = models.DateField(unique=True)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade_disponivel_em_gramas = models.IntegerField()
    
    # api de clientes
    
class Endereco(models.Model):
    rua = models.CharField(max_length=255)
    numero = models.CharField(max_length=10)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2)
    cep = models.CharField(max_length=9)
    complemento = models.CharField(max_length=255, null=True, blank=True)

class Cliente(models.Model):
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    telefone = models.CharField(max_length=15, unique=True)
    endereco = models.OneToOneField(Endereco, on_delete=models.CASCADE)