# Generated by Django 3.2.3 on 2021-05-28 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produtos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nome', models.CharField(max_length=255)),
                ('Quantidade', models.PositiveIntegerField()),
                ('Valor', models.FloatField()),
                ('Descricao', models.CharField(max_length=255)),
                ('Data', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
