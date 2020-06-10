from django.db import models

# Create your models here.
class query(models.Model):
	query_id=models.IntegerField(primary_key=True)
	lib_id=models.CharField(max_length=30)
	query=models.CharField(max_length=200)
	date=models.DateTimeField(auto_now_add=True,blank=True)
	status=models.CharField(max_length=20,default="pending") 

