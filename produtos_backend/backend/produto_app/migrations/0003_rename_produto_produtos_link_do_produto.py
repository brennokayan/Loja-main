# Generated by Django 3.2.3 on 2021-05-28 07:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('produto_app', '0002_produtos_produto'),
    ]

    operations = [
        migrations.RenameField(
            model_name='produtos',
            old_name='Produto',
            new_name='Link_do_Produto',
        ),
    ]
