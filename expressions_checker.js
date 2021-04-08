class Stack {
	constructor(limit = 20) {
		this.limit = limit;
		this.stack = [];
	}
	
	isEmpty() {
		if(this.stack === 'undefined' || this.stack === null || this.stack === 0) {
			return true;
		} else {
			return false;
		}
	}
	
	isFull() {
		if(this.limit <= this.stack.length) {
			return true;
		} else {
			return false;
		}
	}
	
	push(item) {
		if(this.isFull()) {
			console.log('Stack is full');
		} else {
			this.stack.push(item);
		}
	}
	
	pop() {
		if(this.isEmpty()) {
			console.log('Stack is empty');
		} else {
			return this.stack.pop();
		}
	}
	
	top() {
		if(this.isEmpty()) {
			console.log('Stack is empty');
		} else {
			return this.stack[this.stack.length - 1];
		}
	}
	
	expressionChecker(str) {
		let valid = true;
		str = Array.from(str.split(' ').join(''));
		for(let i = 0; i < str.length; i++) {
			let char = str[i];
			switch(char) {
				case '(':
				case '{':
				case '[':
					this.push(str[i]);
					break;
				case ')':
				case '}':
				case ']':
				if(this.isEmpty()) {
					valid = false;
				} else {
					let last = this.stack.pop();
					if((char == ')' && last != '(') || (char == '}' && last != '{') || (char == ']' && last != '[')) {
						valid = false;
					} 
				}
				break;
			}
			if(!valid) {
				break;
			}
		}	
	
		return valid;
	}
}

const stack = new Stack();

let expressions = ['8 * (9 - 2) + { ( 4 * 5) / ( 2 * 2) }', '5 * 8 * 9 / ( 3 * 2 ) )', '[{ (2 * 7) + ( 15 - 3) ]'];
for(let i = 0; i < expressions.length; i++) {
	let valid = stack.expressionChecker(expressions[i]);
	if(valid) {
		console.log('Expression is valid');
	} else {
		console.log('Expression is not valid');
	}
}