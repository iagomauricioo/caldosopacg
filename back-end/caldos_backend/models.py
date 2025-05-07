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
    