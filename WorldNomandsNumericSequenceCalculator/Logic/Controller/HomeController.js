var HomeController = (function () {
    function HomeController(scope) {
        var _this = this;
        this.ListNumbers = function () {
            _this.Scope.ShowNumbers = false;
            if (_this.Scope.MaxNumber == undefined || _this.Scope.MaxNumber == null || _this.Scope.MaxNumber <= 0)
                return;
            _this.Scope.AllNumbers = MathHelper.GenerateNumberList(_this.Scope.MaxNumber);
            _this.Scope.OddNumbers = _this.OddList.Calculate(_this.Scope.AllNumbers);
            _this.Scope.EvenNumbers = _this.EvenList.Calculate(_this.Scope.AllNumbers);
            var newNumbers = MathHelper.GenerateNumberList(_this.Scope.MaxNumber);
            _this.Scope.MixedNumbers = _this.MixedNumbers.Calculate(newNumbers, _this.RuleList);
            newNumbers = MathHelper.GenerateNumberList(_this.Scope.MaxNumber);
            _this.Scope.FibonacciNumbers = _this.FibonacciList.Calculate(newNumbers);
            _this.Scope.ShowNumbers = true;
        };
        this.Scope = scope;
        this.Scope.ListNumbers = this.ListNumbers;
        this.OddList = new OddNumber();
        this.EvenList = new EvenNumber();
        this.MixedNumbers = new MixedNumbers();
        this.RuleList = new Array();
        this.FibonacciList = new FibonacciNumber();

        this.RuleList.push(new RuleModel(3, "C"));
        this.RuleList.push(new RuleModel(5, "E"));
        this.RuleList.push(new RuleModel(15, "Z"));
    }
    return HomeController;
})();
//# sourceMappingURL=HomeController.js.map
