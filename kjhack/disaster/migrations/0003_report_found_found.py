# Generated by Django 4.0.3 on 2022-04-09 11:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('disaster', '0002_alter_donation_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='found',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='Found',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField(max_length=255)),
                ('contact', models.BigIntegerField(unique=True)),
                ('report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='report_found', to='disaster.report')),
            ],
        ),
    ]