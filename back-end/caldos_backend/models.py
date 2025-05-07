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
    
class Disponibilidade(models.Model):
    data = models.DateField(unique=True)
    
class ProdutoDisponivel(models.Model):
    disponibilidade = models.ForeignKey(Disponibilidade, on_delete=models.CASCADE, related_name='produtos')
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade_disponivel_em_gramas = models.IntegerField()