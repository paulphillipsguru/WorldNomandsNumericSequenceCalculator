describe('validates all results', function () {
    var instance = protractor.getInstance();
    describe("home", function () {
        instance.get("/#");
        beforeEach(function () {
            element(by.model("MaxNumber")).clear();
            element(by.model("MaxNumber")).sendKeys("15");
            element(by.id("Search")).click();
        })

        it("all numbers", function () {

            element.all(by.repeater("No in AllNumbers")).then(function (rows) {
                expect(rows[0].getText()).toEqual('1');
                expect(rows[1].getText()).toEqual('2');
                expect(rows[2].getText()).toEqual('3');
                expect(rows[3].getText()).toEqual('4');
                expect(rows[4].getText()).toEqual('5');
                expect(rows[5].getText()).toEqual('6');
                expect(rows[6].getText()).toEqual('7');
                expect(rows[7].getText()).toEqual('8');
                expect(rows[8].getText()).toEqual('9');
                expect(rows[9].getText()).toEqual('10');
                expect(rows[10].getText()).toEqual('11');
                expect(rows[11].getText()).toEqual('12');
                expect(rows[12].getText()).toEqual('13');
                expect(rows[13].getText()).toEqual('14');
                expect(rows[14].getText()).toEqual('15');
            });
        });

        it("odd numbers", function () {
            element.all(by.repeater("No in OddNumbers")).then(function (rows) {
                expect(rows[0].getText()).toEqual('1');
                expect(rows[1].getText()).toEqual('3');
                expect(rows[2].getText()).toEqual('5');
                expect(rows[3].getText()).toEqual('7');
                expect(rows[4].getText()).toEqual('9');
                expect(rows[5].getText()).toEqual('11');
                expect(rows[6].getText()).toEqual('13');
                expect(rows[7].getText()).toEqual('15');
            });
        });
        it("even numbers", function () {
            element.all(by.repeater("No in EvenNumbers")).then(function (rows) {
                expect(rows[0].getText()).toEqual('2');
                expect(rows[1].getText()).toEqual('4');
                expect(rows[2].getText()).toEqual('6');
                expect(rows[3].getText()).toEqual('8');
                expect(rows[4].getText()).toEqual('10');
                expect(rows[5].getText()).toEqual('12');
                expect(rows[6].getText()).toEqual('14');

            });
        });

        it("mixed numbers", function() {
            element.all(by.repeater("No in MixedNumbers")).then(function(rows) {
                expect(rows[0].getText()).toEqual('1');
                expect(rows[1].getText()).toEqual('2');
                expect(rows[2].getText()).toEqual('C');
                expect(rows[3].getText()).toEqual('4');
                expect(rows[4].getText()).toEqual('E');
                expect(rows[5].getText()).toEqual('C');
                expect(rows[6].getText()).toEqual('7');
                expect(rows[7].getText()).toEqual('8');
                expect(rows[8].getText()).toEqual('C');
                expect(rows[9].getText()).toEqual('E');
                expect(rows[10].getText()).toEqual('11');
                expect(rows[11].getText()).toEqual('C');
                expect(rows[12].getText()).toEqual('13');
                expect(rows[13].getText()).toEqual('14');
                expect(rows[14].getText()).toEqual('Z');

            });
            
            it("fibonacci numbers", function () {
                element.all(by.repeater("No in FibonacciNumbers")).then(function(rows) {
                    expect(rows[0].getText()).toEqual('1');
                    expect(rows[1].getText()).toEqual('2');
                    expect(rows[2].getText()).toEqual('3');
                    expect(rows[3].getText()).toEqual('5');
                    expect(rows[4].getText()).toEqual('8');
                    expect(rows[5].getText()).toEqual('13');
                    expect(rows[6].getText()).toEqual('21');
                    expect(rows[7].getText()).toEqual('34');
                    expect(rows[8].getText()).toEqual('55');
                    expect(rows[9].getText()).toEqual('89');
                    expect(rows[10].getText()).toEqual('144');
                    expect(rows[11].getText()).toEqual('233');
                    expect(rows[12].getText()).toEqual('377');
                    expect(rows[13].getText()).toEqual('610');
                    expect(rows[14].getText()).toEqual('987');


                });
            });

        });

    });
});
