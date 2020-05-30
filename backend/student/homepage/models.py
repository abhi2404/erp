from django.db import models

# Create your models here.
class details(models.Model):
	"""docstring for details"""
	name=models.CharField(max_length=30)
	lib_id=models.CharField(max_length=30)
	course=models.CharField(max_length=30)
	mobile_no=models.CharField(max_length=30)
	branch=models.CharField(max_length=30)
	sec=models.CharField(max_length=30)
	status=models.CharField(max_length=15,default="active")
	
	#def __unicode__(self):
		#return self.details


class login(models.Model):
	lib_id=models.CharField(max_length=30)
	password=models.CharField(max_length=15,default="student")

		

