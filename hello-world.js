setTimeout(foo, 2000);

console.log("hello");

function fooler() {
	debugger;
	return 1+ 2;
}

function foo() {
	setTimeout(bar, 1000);
}

function bar() {
	console.log("world");
	throw new Error("hit a problem"); // no information about calling by foo, i.e. where you are coming from
	// http://nodejs.org/illuminati0.pdf
}

fooler();

// node debug hello-world.js (uses JDB: debug> run, backtrace, list, quit)
// node inspector (Eclipse Plugin)