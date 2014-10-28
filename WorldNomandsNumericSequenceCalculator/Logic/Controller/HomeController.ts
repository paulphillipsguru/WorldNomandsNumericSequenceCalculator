class HomeController {
    Scope: any;
    OddList: IAlgorithm;
    EvenList: IAlgorithm;
    MixedNumbers: IAlgorithmExtended;
    FibonacciList: IAlgorithm;
    RuleList: Array<RuleModel>;
    

    constructor(scope: any) {
        this.Scope = scope;
        this.Scope.ListNumbers = this.ListNumbers;
        this.OddList = new OddNumber();
        this.EvenList = new EvenNumber();
        this.MixedNumbers = new MixedNumbers();
        this.RuleList = new Array<RuleModel>();
        this.FibonacciList = new FibonacciNumber();

        this.RuleList.push(new RuleModel(3, "C"));
        this.RuleList.push(new RuleModel(5, "E"));
        this.RuleList.push(new RuleModel(15, "Z"));
        


    }

    ListNumbers = () => {

        this.Scope.ShowNumbers = false;
        if (this.Scope.MaxNumber == undefined || this.Scope.MaxNumber == null || this.Scope.MaxNumber <= 0) return;
        this.Scope.AllNumbers = MathHelper.GenerateNumberList(this.Scope.MaxNumber);
        this.Scope.OddNumbers = this.OddList.Calculate(this.Scope.AllNumbers);
        this.Scope.EvenNumbers = this.EvenList.Calculate(this.Scope.AllNumbers);
        var newNumbers = MathHelper.GenerateNumberList(this.Scope.MaxNumber);
        this.Scope.MixedNumbers = this.MixedNumbers.Calculate(newNumbers, this.RuleList);
        newNumbers = MathHelper.GenerateNumberList(this.Scope.MaxNumber);
        this.Scope.FibonacciNumbers = this.FibonacciList.Calculate(newNumbers);
        this.Scope.ShowNumbers = true;
    };


} 