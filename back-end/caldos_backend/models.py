from django.db import models
from django.contrib.postgres.fields import ArrayField


class Produto(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField()
    tamanhos_disponiveis = ArrayField(models.IntegerField(), default=list)
    preco_em_centavos = models.IntegerField()

    def __str__(self):
        return self.nome
    
class ProdutosDisponveis(models.Model):
    data_disponibilidade = models.DateField()
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    tamanho = models.CharField(max_length=255)
    quantidade = models.IntegerField()

    def __str__(self):
        return f"{self.produto.nome} - {self.tamanho}"