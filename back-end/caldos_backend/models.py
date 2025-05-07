from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField()
    preco_em_centavos = models.IntegerField()

    def __str__(self):
        return self.nome