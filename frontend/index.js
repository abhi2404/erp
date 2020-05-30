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
	let url="http://127.0.0.1:8000";

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

	 }
	};

    //var data =JSON.stringify({"name":name.value};
	var data =JSON.stringify(
		{"lib_id":lib_id.value});
	xhr.send(data);
	}

