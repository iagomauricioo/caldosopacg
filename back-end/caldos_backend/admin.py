from django.contrib import admin

from caldos_backend.forms import ProdutoAdminForm
from .models import Produto

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'precos_em_centavos_por_tamanho')
    search_fields = ('nome',)
    form = ProdutoAdminForm