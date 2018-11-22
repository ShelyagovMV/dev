document.addEventListener("DOMContentLoaded",function(){
	(function(){
		var slider=["https://img.getbg.net/upload/full/8/297935_bmv_-chyornyj_-stilnyj_avtomobili_mashiny_avto_1920x1200_(www.GetBg.net).jpg",
			"http://bmw320.net/wp-content/uploads/2016/11/Screenshot_6.png","http://strg2.nm.kz/neofiles/serve-image/59ad1fbda3abd64db05593aa"];
		var sliderCount=0;
		var sliderImgChange=document.getElementsByClassName("sliderImg")[0];
		sliderImgChange.src=slider[0];

		var next = document.getElementsByClassName("next")[0];
		next.addEventListener("mouseover",nextFullOpacity,false);
		next.addEventListener("mouseout",nextHalfOpacity,false);
		next.addEventListener("click",next1,false);

		var prev=document.getElementsByClassName("prev")[0];
		prev.addEventListener("mouseover",prevFullOpacity,false);
		prev.addEventListener("mouseout",prevHalfOpacity,false);
		prev.addEventListener("click",prev1,false);

		function nextFullOpacity(){
			next.style.opacity = "1";
		}

		function nextHalfOpacity(){
			next.style.opacity = "0.2";
		}

		function prevFullOpacity(){
			prev.style.opacity = "1";
		}

		function prevHalfOpacity(){
			prev.style.opacity = "0.2";
		}
	
		function next1(){
			sliderCount++;
			if(sliderCount>=slider.length){
				sliderCount=0;
			}
			sliderImgChange.src=slider[sliderCount];
		}

		function prev1(){
			sliderCount--;
			if(sliderCount<0){
				sliderCount=slider.length-1;
			}
			sliderImgChange.src=slider[sliderCount];
		}

		setInterval(function(){
			sliderCount++;
			if(sliderCount>=slider.length){
				sliderCount=0;
			}
			sliderImgChange.src=slider[sliderCount];
		},1500);

	})();
	
})

