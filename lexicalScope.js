let a = 10;

function test1() {
    let b = 12
    function innerTest() {
        const ab = 11;
        console.log(a);
    }
    innerTest();
}

test1();
