describe('validate inputs', function () {
    var instance = protractor.getInstance();
    describe("home", function () {
        instance.get("/#");
        it("checks for invalid letters", function () {
            element(by.model("MaxNumber")).sendKeys("Error");
            expect(element(by.id("InvalidMaxNumber")).isDisplayed()).toBe(true);
            
        });
        it("check if max value error message is displayed", function () {
            element(by.model("MaxNumber")).clear();
            expect(element(by.id("RequiredMaxNumber")).isDisplayed()).toBe(true);

        });


    });
});
