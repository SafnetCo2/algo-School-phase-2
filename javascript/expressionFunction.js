// setTimeout(function () {
//     console.log('waited 2 minutes');
// }), 2000;

let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log('will wait 2 minutes' + counter++);
        timeout();
    }, 2000);
}
timeout();

//run until u hit ctr + c


