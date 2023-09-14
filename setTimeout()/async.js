async function f() {
    console.log('Asynchronous function returns a promise');
}
f();

async function f() {
    console.log('async function');
}
f()
    .then(function (result) {
        console.log(result);
    });