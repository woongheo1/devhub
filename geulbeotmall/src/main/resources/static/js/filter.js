/* tooltip */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* filter */
const minor = document.querySelectorAll('.minor-list');
const brand = document.querySelectorAll('.brand-span');
const range = document.querySelectorAll('.price-span');
const tag = document.querySelectorAll('.tag-span');
const color = document.querySelectorAll('.color-span');
const item = document.querySelectorAll('.col');
for(let i=0; i < minor.length; i++) { //소분류 카테고리 필터
	minor[i].addEventListener('click', function(){
		for(let j=0; j < minor.length; j++) { minor[j].classList.remove('active'); }
		this.classList.add('active');
		let total = 0;
		const target = '$' + this.getAttribute('data-target'); //구분자 활용
		//console.log(target);
		for(let k=0; k < item.length; k++) {
			item[k].style.display = 'none';
			if(item[k].children[0].getAttribute('data-id').indexOf(target) != -1) {
				item[k].style.display = 'block';
				total++;
			}
		}
		document.querySelector('.product-desc').children[0].children[0].innerHTML = total;
	});
}

for(let i=0; i < brand.length; i++) { //브랜드 필터
	brand[i].addEventListener('click', function(){
		for(let j=0; j < brand.length; j++) { brand[j].classList.remove('active'); }
		this.classList.add('active');
		let total = 0;
		const target = ',' + this.getAttribute('data-target') + '$'; //구분자 활용
		//console.log(target);
		for(let k=0; k < item.length; k++) {
			item[k].style.display = 'none';
			if(item[k].children[0].getAttribute('data-id').indexOf(target) != -1) {
				item[k].style.display = 'block';
				total++;
			}
		}
		document.querySelector('.product-desc').children[0].children[0].innerHTML = total;
	});
}

for(let i=0; i < range.length; i++) { //가격 필터
	range[i].addEventListener('click', function(){
	let total = 0;
		for(let k=0; k < item.length; k++) {
			let target = range[i].getAttribute('data-target');
			let price = parseInt(item[k].children[0].children[0].children[1].children[0].attributes[1].textContent); //판매가
			item[k].style.display = 'none';
			switch(target) { //전체보기, 1만원미만, 1~3만원, 3~5만원, 5~8만원, 8만원이상
				case "all": item[k].style.display = 'block'; total++; break;
				case "10000": if(price < 10000) { item[k].style.display = 'block'; total++; } break;
				case "30000": if(10000 <= price && price < parseInt(target)) { item[k].style.display = 'block'; total++; } break;
				case "50000": if(30000 <= price && price < parseInt(target)) { item[k].style.display = 'block'; total++; } break;
				case "80000": if(50000 <= price && price < parseInt(target)) { item[k].style.display = 'block'; total++; } break;
				case "over": if(80000 <= price) { item[k].style.display = 'block'; total++; } break;
			}
		}
		document.querySelector('.product-desc').children[0].children[0].innerHTML = total; //결과별 상품 개수 반영
	});
}

for(let i=0; i < tag.length; i++) { //태그 필터
	tag[i].addEventListener('click', function(){
		for(let j=0; j < tag.length; j++) { tag[j].classList.remove('active'); }
		this.classList.add('active');
		let total = 0;
		const target = this.getAttribute('data-target') + ','; //태그간 구분자 ',' 활용
		for(let k=0; k < item.length; k++) {
			item[k].style.display = 'none';
			if(item[k].children[0].getAttribute('data-id').indexOf(target) != -1) {
				item[k].style.display = 'block';
				total++;
			}
		}
		document.querySelector('.product-desc').children[0].children[0].innerHTML = total;
	});
}
for(let i=0; i < color.length; i++) { //색상 필터
	color[i].addEventListener('click', function(){
		for(let j=0; j < color.length; j++) { color[j].classList.remove('active'); }
		this.classList.add('active');
		let total = 0;
		const target = this.getAttribute('data-target') + '$'; //구분자와 함께 '블랙$' 또는 '블랙페퍼$'로 나누어 취급.
		for(let k=0; k < item.length; k++) {
			item[k].style.display = 'none';
			if(item[k].children[0].getAttribute('data-id').indexOf(target) != -1) {
				item[k].style.display = 'block';
				total++;
			}
		}
		document.querySelector('.product-desc').children[0].children[0].innerHTML = total;
	});
}


/* sorting */
const form = document.getElementById('sortingForm');
let current = document.querySelector('.current').innerHTML;
let query = location.search.split('&')[1];
console.log(query);
//if(current != changed) { current = changed };
const per = document.querySelectorAll('#limitSelector > .list > ul > .per');
$('.dropdown').on('click', function() { //드롭다운
	$('.dropdown').not($(this)).removeClass('open');
	$(this).toggleClass('open');
	if ($(this).hasClass('open')){
		$(this).find('.per').attr('tabindex', 0);
	} else {
		$(this).find('.per').removeAttr('tabindex');
		$(this).focus();
	}
});
for(let i=0; i < per.length; i++) { //개수
	per[i].addEventListener('click', function(){
		let num = this.value;
		document.querySelector('input[name=items]').value = num;
		form.submit();
	});
}

const by = document.querySelectorAll('input[name=sortBy]');
for(let i=0; i < by.length; i++) { //정렬
		by[i].addEventListener('click', function(){
	});
}

/* a 태그 이동 제한 */
$(document).on('click', '.td > span > a', function(){
	return false;
});