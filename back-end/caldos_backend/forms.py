# forms.py
from django import forms
from .models import Produto

class ProdutoAdminForm(forms.ModelForm):
    class Meta:
        model = Produto
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if not self.instance.pk:  # só aplica em criação
            self.fields['precos_por_tamanho'].initial = {
                "300": 1200,
                "500": 1800
            }
