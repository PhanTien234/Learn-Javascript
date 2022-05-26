function show(){
	var v2 = document.getElementById("para2");
	var v3 = document.getElementById("para3");
	if(v2.style.display=="none"){/*tôi ko đọc đơcj css nên tôi ko check đc, nên tôi cho nó là False luôn!, nên tôi sẽ chạy else */
		v2.style.display="block";
		v3.innerHTML="SHOW LESS";
	}
	else{
		v2.style.display="none"; /*kể từ sau lần chạy else đầu tiênm thì js biết tình hinhf display của para2 vì chính js gán display mà */
		v3.innerHTML ="SHOW ALL";

	}
}
/*la*/