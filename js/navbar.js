	const body = document.querySelector("body");
	const navbar = document.querySelector(".navbar");
	const menu = document.querySelector(".menu-list");
	const menuBtn = document.querySelector(".menu-btn");
	const cancelBtn = document.querySelector(".cancel-btn");

	menuBtn.addEventListener("click", function(){
		menu.classList.add("active");
		menuBtn.classList.add("hide");
		body.classList.add("disbaledScroll");
	});
	cancelBtn.addEventListener("click", function(){
		menu.classList.remove("active");
		menuBtn.classList.remove("hide");
		body.classList.remove("disbaledScroll");
	});

    window.addEventListener('scroll', function(){
		// this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        let htmlScroll = document.querySelector('html').scrollTop;
		if(htmlScroll > 20){
			navbar.classList.add("sticky");
		} else{
			navbar.classList.remove("sticky");
		}
	});
