//merubah angka yang ditampilkan di layar dgn cara memperbarui atribut nilai dari tag <input>

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number") // Mengambil elemen2 pada button html

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number // supaya concat string
	}
}

numbers.forEach((number) => { // for all elemen number di html-nya, ditambahkan addEventListener
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})


// operator

const operators = document.querySelectorAll(".operator") // SelectorAll karena banyak elemen

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = ''
}

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})


// sama dengan/equal sign

const equalSign = document.querySelector('.equal-sign') // cuman satu elemen aja 

equalSign.addEventListener('click', () => {
	calculate() // jalankan fungsi calculate dibawah
	updateScreen(currentNumber)
})

// fungsi calculate, untuk menghitung hasil operasi

const calculate = () => {
	let result = ''
	switch (calculationOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber) // biar ngga dianggap String
			break
		case '-':
			result = prevNumber - currentNumber
			break
		case '*':
			result = prevNumber * currentNumber
			break
		case '/':
			result = prevNumber / currentNumber
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator = ''
}

// tombol AC untuk CLEAR layar

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll() // panggil fungsi clear dibawah
	updateScreen(currentNumber)
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}


// biar bisa pake desimal
const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})
