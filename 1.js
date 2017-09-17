
// Task 1

var p = document.getElementsByTagName('p')

for (var i = 0; i<p.length; i++) {
	p[i].onclick = redP;
}

function redP() {
	this.style.background = 'red';
}

// Task 2
var img = document.getElementsByTagName('img');

for (var i=0; i<img.length; i++) {
	img[i].onclick = shadow;
} 

function shadow () {
	this.style.boxShadow = "-10px -10px 10px 10px cyan";
}


// Task 3

document.getElementById('num').onclick = num;

function num () {
	var p1 = document.getElementsByTagName('p');


for (var i=0 ; i<p1.length; i++) {
	p1[i].innerHTML = i+1 + ') ' + p1[i].innerHTML;
	// if (i==1) {break} ;
    }

}



// Task 4

document.getElementById('rezult').value = rezult;
document.getElementById('key1').onclick = key1;
document.getElementById('key2').onclick = key2;
var counter = 0;

function key1 () {
	counter++;
	rezult.innerHTML = counter;
}

function key2 () {
	counter++;
	rezult.innerHTML = counter;
}


// Task 5


document.getElementById('pow').onclick = pow;

function pow () {
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	alert(Math.pow(inp1, inp2));
}

// Task 6

document.getElementById('findteg').onclick = findteg;
// findteg -кнопка запуска функции
// tagname из инпута
function findteg () {
	// В инпут вводим название тега(p, h3)
	var tag = document.getElementById('tagname').value;
	// введенному тегу присваиваем новую переменную, 
	// по которой будем искать циклом
	var newtag = document.getElementsByTagName(tag);
	for (var key of newtag) {
// for (var key=0 ; key<newteg1.length; key++)
		key.style.textDecoration = 'underline';
	}

}

// Task 7

document.getElementById('b7').onclick = b7;
	function b7 () {
		var inp7 = document.getElementById('inp7').value;
		if (inp7 <= 16) {
			alert ('Вы молоды');
		}
		else {
			alert('Добро пожаловать')
		}
	}

	// Task 8

	document.getElementById('b8').onclick = b8;
	function b8 () {
		var a8 = document.getElementById('a8').value;
		if (inp8 == '' || typeof inp8 == 'undefined' || inp8 == null || a8 <=0) {
			alert ('Введите возраст');
		}
		
		else  if (a8 < 16) {
			alert ('Вы молоды');
		}
		else if (a8 >= 16){
			alert('Добро пожаловать')
		}
		else {
			alert('Введите возраст')
		}
		
	}
// Task 9
// var m =[];
var m1 = [99, 33, 'Hello'];
m1[3] = 444;
m1[4] = 444444;
// console.log (m1);

function masOut(){
	var p = document.getElementById('out9');
	var str='';
	for (var i=0; i<m1.length; i++){
		str += i +' --- ' + m1[i]+'<br>';
	}
	p.innerHTML = str;
}
masOut();

document.getElementById('p93').onclick=change;
function change(){
	var inp91 = document.getElementById('inp91').value;
	var inp92 = document.getElementById('inp92').value;
	m1[inp91]=inp92;
// Если ввести masOut(); за пределами этой функции, то вывод результата будет не видно
	masOut();
}

document.getElementById('calculate').onclick = calculate;

function calculate () {
		outlength.innerHTML =  m1.length;
	}

	// Task 10
 document.getElementById('b10').onclick = b10;
	function b10 () {
		var a10 = document.getElementById('a10').value;
			if (a10 < 7 ) {
				return c10.innerHTML = 'Число меньше 7';
			}
			else if (a10 >= 7 && a10 <=10) {
				return c10.innerHTML ='Возврат значения'+' ' + a10;
			}
			else {
				return c10.innerHTML ='Квадрат числа выше'+' ' +a10*a10;
			}

	}
// Task 11

var number = Math.floor(10*Math.random()) + 1; //случайное число от 1 до 10
console.log(number);
var count = 3;

document.getElementById('check').onclick = function (){
	if (count>0) {
		var usernum = document.getElementById('mynum').value;
		usernum = parseInt(usernum);
		var out11 = document.getElementById('out11');

		if (usernum == number) {
			out11.innerHTML = 'Ура вы угадали!!!';
		}
		else if (usernum > number) {
			out11.innerHTML = 'Перелет';
		}
		else if (usernum<number){
			out11.innerHTML = 'Недолет';
		}
		count = count - 1;
		document.getElementById('count').innerHTML = 'Осталось попыток '+count;
		
	}
	else {
		alert ('Попытки закончены, вы проиграли. Страница будет перезагружена');
		location.reload();
	}
}