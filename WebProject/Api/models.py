from django.db import models
from django.core.validators  import ValidationError
from django.core import validators


# Create your models here.

class User(models.Model):
    age = models.IntegerField()
    First_name = models.CharField(max_length=25)
    Last_name = models.CharField(max_length=25)

    def __str__(self):
        return self.First_name + " " + self.Last_name

class Password(models.Model):
    password = models.CharField(max_length=100)
    def __str__(self):
        return self.password
    
class UserEmail(validators.EmailValidator, models.Model):
    email = models.EmailField(max_length=None)
    email = validators.EmailValidator()

    def __str__(self):
        return self.email