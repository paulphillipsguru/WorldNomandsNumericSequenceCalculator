describe('validate that all elements exist', function () {
    var instance = protractor.getInstance();
    describe("home", function () {
        instance.get("/#");
        it("has heading", function () {
            
            var temp = element(by.id("heading")).getText();
            expect(temp).toContain("Please enter a");
        });
        it("has the input", function () {
            
            expect(element(by.model("MaxNumber")).isDisplayed()).toBe(true);
        });
        it("has a search button", function () {
            expect(element(by.id("Search")).isDisplayed()).toBe(true);
            
        });

        it("has all numbers div", function () {
            expect(element(by.id("AllNumbers")).isDisplayed()).toBe(false);
        });
        it("has even numbers div", function () { 
            expect(element(by.id("EvenNumbers")).isDisplayed()).toBe(false);
        });
        it("has mixed numbers div", function () {
            expect(element(by.id("MixedNumbers")).isDisplayed()).toBe(false);
            
        });

        it("has Fibonacci div", function () {
            expect(element(by.id("Fibonacci")).isDisplayed()).toBe(false);
           
        });


    });
});
