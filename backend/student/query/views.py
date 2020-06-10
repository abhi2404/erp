from django.shortcuts import render
from .models import query
import json
from django.shortcuts import render,HttpResponse
from django.http import JsonResponse

# Create your views here.
def raise_query(request):
	if request.method == "POST":
		print(request.body)
		body=request.body.decode('utf-8')
		data=json.loads(body)
		a=data['lib_id']
		b=data['query']
		query.objects.create(lib_id=a,query=b)
	return JsonResponse({"staus:pending"},safe=False)	


def status(request):
	if request.method =="GET":
		t=query.objects.all()
		for i in t:
			x=list(t.values())
			print(x)
			break
		#print(x)
		return JsonResponse(x,safe=False) 


def approve(request):
	if request.method == "POST":
		print(request.body)
		body=request.body.decode('utf-8')
		data=json.loads(body)
		x=data['lib_id']
		print(list(x))
		t=query.objects.all()
		for i in t:
			if i.lib_id==x:
				u=query.objects.filter(lib_id=x).update(status="approved")
				w="approved"
				break
			else:
				w="not approved"
	return JsonResponse(w,safe=False)   

