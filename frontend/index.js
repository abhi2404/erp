function ADD_STUDENT(){
	let result=document.querySelector('.result');
	let name =document.querySelector('#name');
	let lib_id =document.querySelector('#lib_id');
	let mobile_no =document.querySelector('#mobile_no');
	let branch =document.querySelector('#branch');
	let course =document.querySelector('#course');
	let sec =document.querySelector('#sec');

	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/details/";

	xhr.open("POST",url,true);



	

	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"name":name.value,
		"lib_id":lib_id.value,
		"course":course.value,
		"mobile_no":mobile_no.value,
		"branch":branch.value,
		"sec":sec.value});
	xhr.send(data);
}




function UPDATE_STUDENT(){
	let result=document.querySelector('.result');
	let id =document.querySelector('#id');
	let name =document.querySelector('#name');
	let lib_id =document.querySelector('#lib_id');
	let mobile_no =document.querySelector('#mobile_no');
	let branch =document.querySelector('#branch');
	let course =document.querySelector('#course');
	let sec =document.querySelector('#sec');

	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/details/update/";

	xhr.open("POST",url,true);



	

	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 }
	};

	var data =JSON.stringify(
		{"name":name.value,
		"lib_id":lib_id.value,
		"course":course.value,
		"mobile_no":mobile_no.value,
		"branch":branch.value,
		"sec":sec.value});
	xhr.send(data);
}



function LOGIN(){
	let result=document.querySelector('.result');
	let lib_id=document.querySelector('#lib_id');
	let password =document.querySelector('#password');

	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/";

	xhr.open("POST",url,true);
    
    
	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"lib_id":lib_id.value,
		"password":password.value});
	xhr.send(data);


	if (password.value == "teacher"){
		//if()
			console.log("k")
			window.location = "details.html"
		}
		if(password.value == "student"){
			window.location="student.html"
		}

}



function DELETE_STUDENT(){
	let result=document.querySelector('.result');
	let lib_id=document.querySelector('#lib_id');

	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/details/delete/";

	xhr.open("POST",url,true);



	

	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"lib_id":lib_id.value});
	xhr.send(data);

}



function DETAILS(){
	let result=document.querySelector('.result');
	let lib_id=document.querySelector('#lib_id');

	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/details/student/";

	xhr.open("POST",url,true);
    
    
	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 	a=JSON.parse(this.responseText)
	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"lib_id":lib_id.value});
	xhr.send(data);

	
	}



function QUERY(){
	let result=document.querySelector('.result');
	let lib_id=document.querySelector('#lib_id');
	let query=document.querySelector('#query');



	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/query/";

	xhr.open("POST",url,true);



	

	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"lib_id":lib_id.value,
		"query":query.value});
	xhr.send(data);
	
}



function STATUS(){
	var xhr= new XMLHttpRequest();
	var url ="http://127.0.0.1:8000/query/status/";
	xhr.onreadystatechange= function()
	{
		if (this.readyState == 4 && this.status ==200){
			var arr = JSON.parse(this.responseText);
			myfunction(arr);
		}
	}
	xhr.open("GET",url,true);
	xhr.send();

    
    function myfunction(arr){




    	var i;
    	var k= '<tbody>';
    	for(i=0;i<arr.length;i++){
    		k+='<tr>';
    		k +='<td>'+arr[i].query_id+'</td>';
    		k +='<td>'+arr[i].lib_id+'</td>';
    		k +='<td>'+arr[i].query+'</td>'; 
    		k +='<td>'+arr[i].date+'</td>';
    	    k +='<td>'+arr[i].status+'</td>';
    	    k +='<td>'+'<form action="approve.html">'+'<input type="submit" value="approve">'+'</form>' +'</td>';
    		k +='<tr>';
    	}
    	k+='<tbody';
    	document.getElementById('status').innerHTML = k;
    }

}


function APPROVE(){
	let result=document.querySelector('.result');
	let lib_id=document.querySelector('#lib_id');

	let xhr = new XMLHttpRequest();
	let url="http://127.0.0.1:8000/query/approve/";

	xhr.open("POST",url,true);
    
    
	xhr.setRequestHeader("Content-Type", "application/json");


	xhr.onreadystatechange = function() {
	 if(xhr.readyState=== 4 && xhr.status === 200) {


	 	result.innerHTML = this.responseText;

	 	a=JSON.parse(this.responseText)
	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"lib_id":lib_id.value});
	xhr.send(data);

}

