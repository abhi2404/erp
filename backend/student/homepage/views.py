from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
import json
from .models import details,login


# Create your views here.
def index(request):
	if request.method =="POST":
		print(request.body)
		body=request.body.decode('utf-8')
		data=json.loads(body)
		username=data["lib_id"]
		password=data["password"]
		t=login.objects.all()
		for i in t:
			print(i.lib_id)
			print(i.password)
			print(data)
			if username == i.lib_id:
				if password == i.password:
					break
				else:
				    response ="wrong password"
			else:
				response="wrong credentials"
	return JsonResponse(response,safe=False)

   

def add_student(request):
	if request.method == "POST":
		print(request.body)
		#body_uncode.body.decode('utf-8')
		body =request.body.decode('utf-8')
		data=json.loads(body)
		u=details(**data)
		a=data['lib_id']
		w=login(lib_id=a)
		u.save()
		w.save()
	return JsonResponse({"result":"OK"}) 


def information(request):
	if request.method =="GET":
		t=details.objects.all()
		for i in t:
			if i.status == "active":
				x=list(t.filter(status="active").values())
				print(x)
				break
		#print(x)
		return JsonResponse(x,safe=False) 


def update(request):
	if request.method == "POST":
		body=request.body.decode('utf-8')
		data=json.loads(body)
		x=data['lib_id']
		print(x)
		t=details.objects.all()
		for i in t:
			print(i.lib_id)
			if i.lib_id == x:
				print(i.lib_id)
				u=details.objects.filter(lib_id=x).update(**data)
				w="updated"
			break
		else:
			w="not updated"
	return JsonResponse(w,safe=False)

def delete(request):
	if request.method == "POST":
		print(request.body)
		body=request.body.decode('utf-8')
		data=json.loads(body)
		x=data['lib_id']
		print(list(x))
		t=details.objects.all()
		for i in t:
			if i.lib_id==x:
				u=details.objects.filter(lib_id=x).update(status="inactive")
				w="deleted"
				break
			else:
				w="not deleted"
	return JsonResponse(w,safe=False)                   	

def student(request):
	if request.method == "POST":
		print(request.body)
		body=request.body.decode('utf-8')
		data=json.loads(body)
		a=data['lib_id']
		t= details.objects.all()
		for i in t:
			if i.lib_id == a:
				x=list(t.filter(lib_id=a).values())
				print(x)
				break
	return JsonResponse(x,safe=False)




