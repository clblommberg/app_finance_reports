from django.db import models

class Item(models.Model):
    invoice_id = models.CharField(max_length=100)
    branch = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    customer_type = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    product_line = models.CharField(max_length=100)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    tax_5_percent = models.DecimalField(max_digits=10, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.TimeField()
    payment = models.CharField(max_length=100)
    cogs = models.DecimalField(max_digits=10, decimal_places=2)
    gross_margin_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    gross_income = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.invoice_id
