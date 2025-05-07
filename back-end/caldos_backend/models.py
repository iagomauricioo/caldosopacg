from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField

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
    
class ProdutosDisponveis(models.Model):
    data_disponibilidade = models.DateField()
    produtos_disponiveis = models.ForeignKey(Produto, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.produto.nome} - {self.tamanho}"