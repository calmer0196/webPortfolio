const carouselBtn = document.querySelectorAll(".btn.carousel");
const carouselItemLi = document.querySelectorAll(".item.carousel li");
const itemInner = document.querySelector("#porfol .item");
let carouselBtnCnt = 0;

function carouselRight(a,b,c,d,limit){
	carouselBtn[1].onclick = function() {
		carouselBtnCnt++;
		for (let i of carouselItemLi) {
			if (carouselBtnCnt == 0) { i.style.left = a+'px'; }
			if (carouselBtnCnt == 1) { i.style.left = b+'px'; }
			if (carouselBtnCnt == 2) { i.style.left = c+'px'; }
			if (carouselBtnCnt == 3) { i.style.left = d+'px'; }
			if (carouselBtnCnt > limit) { carouselBtnCnt = limit; }
		}
	}
}
function carouselLeft(a,b,c,d,limit){
	carouselBtn[0].onclick = function() {
		carouselBtnCnt--;
		for (let i of carouselItemLi) {
			if (carouselBtnCnt == 0) { i.style.left = a+'px'; }
			if (carouselBtnCnt == 1) { i.style.left = b+'px'; }
			if (carouselBtnCnt == 2) { i.style.left = c+'px'; }
			if (carouselBtnCnt == 3) { i.style.left = d+'px'; }
			if (carouselBtnCnt < limit) { carouselBtnCnt = limit; }
		}
	}
}

	if(innerWidth > 1720){
		console.log("1024이상");
		carouselRight(0,-1*560,null,null,1);
		carouselLeft(0,-1*560,null,null,0);
	} 
	else if(innerWidth > 1024){
		console.log("1024이상");
		carouselRight(0,-1*560,-1*1120,null,2);
		carouselLeft(0,-1*560,-1*1120,null,0);
	} 
	else if(innerWidth > 768){
		console.log("768이상");
		carouselRight(0,-1*460,-1*920,-1*1380,3);
		carouselLeft(0,-1*460,-1*920,-1*1380,0);
	} 
	else if(innerWidth > 480){
		console.log("480이상");
		carouselRight(0,-1*460,-1*920,-1*1380,3);
		carouselLeft(0,-1*460,-1*920,-1*1380,0);
	} 
	else {
		console.log("이하");
		carouselRight(0,-1*330,-1*660,-1*990,3);
		carouselLeft(0,-1*330,-1*660,-1*990,0);
	}

	window.addEventListener('resize', function() {
		console.log(-1*1120-(innerWidth-1024)*4);
		if(innerWidth > 1720){
			console.log("1024이상");
			carouselRight(0,-1*560,null,null,1);
			carouselLeft(0,-1*560,null,null,0);
		} 
		else if(innerWidth > 1024){
			console.log("1024이상");
			carouselRight(0,-1*560,-1*1120,null,2);
			carouselLeft(0,-1*560,-1*1120,null,0);
		} 
		else if(innerWidth > 768){
			console.log("768이상");
			carouselRight(0,-1*460,-1*920,-1*1380,3);
			carouselLeft(0,-1*460,-1*920,-1*1380,0);
		} 
		else if(innerWidth > 480){
			console.log("480이상");
			carouselRight(0,-1*460,-1*920,-1*1380,3);
			carouselLeft(0,-1*460,-1*920,-1*1380,0);
		} 
		else {
			console.log("이하");
			carouselRight(0,-1*330,-1*660,-1*990,3);
			carouselLeft(0,-1*330,-1*660,-1*990,0);
		}
	});



