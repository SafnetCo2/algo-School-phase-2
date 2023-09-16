function person(friend) {
    setTimeout(function () {
        console.log('my friend name' + friend);
        person2();

    }, 4000);
    }
function person2() {
    console.log('am Josephine');

    
}
person('larry', person2);