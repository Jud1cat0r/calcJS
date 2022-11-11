let a = "";
let b = "";
let c = "";

let out = document.querySelector(".out span");

let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let sign = ['-', '+', '*', '/'];







document.querySelector('.buttons').onclick = (event) => {
	let key = event.target.textContent;
	if (key == 'C') {
		a = '';
		b = '';
		c = '';
		out.textContent = 0;
	}
	if (key == '=') {
		if (b == '+') out.textContent = +(a) + +(c);
		else if (b == '-') out.textContent = a - c;
		else if (b == '/') {
			if (a == '0' || c == '0') out.textContent = 0;
			else out.textContent = a / c;
		}
		else if (b == '*') out.textContent = a * c;
		a = '';
		b = '';
		c = '';
	}
	if (number.includes(key)) {
		if (b == '' && c == '') {
			a += key;
			out.textContent = a;
			console.log(a);
		}
		else if (!a == '') {
			c += key;
			out.textContent = c;
			console.log(c);
		}

	}
	else if (sign.includes(key)) {
		b = key;
		out.textContent = b;
		console.log(b);
	}

}
