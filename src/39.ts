class MyClass {
    private _privateField: number;
    public field1: string;

    constructor(private _publicField: number) {}

    get privateField(): number {
        return this._privateField;
    }

    set privateField(value: number) {
        if (value < 0) throw new Error("Private field value must be non-negative.");
        this._privateField = value;
    }

    public getField1(): string {
        return `Hello, World!`;
    }
}
