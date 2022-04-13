const home = document.querySelector("#home");
const about = document.querySelector("#about");
const porfol = document.querySelector("#porfol");

// page start
window.onload = function () {
	scrollTo(0, 0);
	htmlScroll = 0;
}

const makeChart = function (gdType, percent, className, color) {
	// let i = 1;
	for(let i=1; i<percent; i++){
		gdPp(gdType, i, className, color);
	}
	// let chartFn = setInterval(function () {
	// 	if (i < percent) {
	// 		gdPp(gdType, i, className, color);
	// 		i++;
	// 	}  else {
	// 		clearInterval(chartFn);
	// 	}
	// }, 20);
}
const gdPp = function (gdType, i, className, color) {
	className.style.background = gdType+color+ " 0% "+i+"%, #dedede "+i+"% 100%)";
}


// chart Ani
const chart = document.querySelector("#about .chart");
const graph = about.querySelectorAll(".chart .graph");

const gdConic = "conic-gradient(";
const gdLinear = "linear-gradient(to right, ";

function chartAni() {
	if (innerWidth > 768) {
		chart.classList.remove("rod");
		chart.classList.add("circle");

		makeChart(gdConic, 80, graph[0], '#F39C12');
		makeChart(gdConic, 40, graph[1], '#2ECC71');
		makeChart(gdConic, 70, graph[2], '#3498DB');
		makeChart(gdConic, 60, graph[3], '#8E44AD');
		makeChart(gdConic, 50, graph[4], '#E74C3C');
	} else{
		chart.classList.add("rod");
		chart.classList.remove("circle");

		makeChart(gdLinear, 80, graph[0], '#F39C12');
		makeChart(gdLinear, 40, graph[1], '#2ECC71');
		makeChart(gdLinear, 70, graph[2], '#3498DB');
		makeChart(gdLinear, 60, graph[3], '#8E44AD');
		makeChart(gdLinear, 50, graph[4], '#E74C3C');
	}
	// chartAni = function () { };
}


// active
window.addEventListener('scroll', function () {
	let htmlScroll = document.querySelector('html').scrollTop;
	if (htmlScroll > innerHeight + 500) {
		console.log("1111");
		home.classList.remove("active");
		about.classList.remove("active");
		porfol.classList.add("active");
	} else if (htmlScroll > innerHeight - 100) {
		console.log("2222");
		home.classList.remove("active");
		about.classList.add("active");
		porfol.classList.remove("active");
		setTimeout(function() {
			chartAni();
		}, 2000);
	} else{
		console.log("3333");
		home.classList.add("active");
		about.classList.remove("active");
		porfol.classList.remove("active");
	}
});

// chart reset / change
window.addEventListener('resize', function () {
	if (innerWidth > 768) {
		chart.classList.remove("rod");
		chart.classList.add("circle");

		gdPp(gdConic, 80, graph[0], '#F39C12');
		gdPp(gdConic, 40, graph[1], '#2ECC71');
		gdPp(gdConic, 70, graph[2], '#3498DB');
		gdPp(gdConic, 60, graph[3], '#8E44AD');
		gdPp(gdConic, 50, graph[4], '#E74C3C');
	} else{
		chart.classList.add("rod");
		chart.classList.remove("circle");

		gdPp(gdLinear, 80, graph[0], '#F39C12');
		gdPp(gdLinear, 40, graph[1], '#2ECC71');
		gdPp(gdLinear, 70, graph[2], '#3498DB');
		gdPp(gdLinear, 60, graph[3], '#8E44AD');
		gdPp(gdLinear, 50, graph[4], '#E74C3C');
	}
});
