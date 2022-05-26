function show(){
	var v2 = document.getElementById("para2");
	var v3 = document.getElementById("para3");
	if(v2.style.display=="block"){/*tôi ko đọc đơcj css nên tôi ko check đc, nên tôi cho nó là False luôn!, nên tôi sẽ chạy else */
		v2.style.display="none";
		v3.innerHTML="SHOW ALL";
	}
	else{
		v2.style.display="block"; /*kể từ sau lần chạy else đầu tiênm thì js biết tình hinhf display của para2 vì chính js gán display mà */
		v3.innerHTML ="SHOW LESS";

	}
}

function Enroll(){
	var v1=document.getElementById("t1").value;
	var v2=document.getElementById("t2").value;
	var v3=document.getElementById("t3").value;
	var v4=document.getElementById("t4").value;
	if(v1=="" || v2==""||v3==""||v4==""){
		alert("Please fill out all field")
	}
	else{
		if(v3!=v4){
			alert("Password and Repassword don't match");
		}
		else{
			v5=document.getElementById("t5").checked;
			v6=document.getElementById("t6").checked;
			v7=document.getElementById("t7").checked;
			if(!v5&&!v6&&!v7)
			{
				var c=confirm("would you like to choose any option");
				if(!c){
					alert("Welcome to the course");
				}
			}
			else{
				alert("Thank you!");
			}
		}
	}
}