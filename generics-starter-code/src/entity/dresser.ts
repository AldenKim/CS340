class Drawer<T> {
    private items: T[] = [];

    public isEmpty(): boolean {
        return this.items.length === 0;
    } 

    public addItem(item: T): void {
        this.items.push(item);
    }

    public removeItem() {
        return this.items.pop();
    }

    public removeAll(): T[] {
        const returnVal = [...this.items];
        this.items = [];
        return returnVal; 
    }
} 

class Dresser <T, M, B> {
    public top: Drawer<T> = new Drawer<T>();
    public middle: Drawer<M> = new Drawer<M>();
    public bottom: Drawer<B> = new Drawer<B>();
}

export function functionality() {
    type Socks = { style: string; color: string; }
    type Shirt = { style: string; size: string; }
    type Pants = { waist: number; length: number; }

    const testDresser = new Dresser<Socks, Shirt, Pants>();

    console.log("Testing isEmpty(): " + testDresser.top.isEmpty());

    testDresser.top.addItem({ style: "long", color: "white" });
    testDresser.middle.addItem({ style: "t-shirt", size: "M" });
    testDresser.bottom.addItem({ waist: 10, length: 10 });

    console.log("Testing add/remove: " + testDresser.top.removeItem()?.style);
    console.log("Testing add/remove: " + testDresser.middle.removeItem()?.style);
    console.log("Testing add/remove: " + testDresser.bottom.removeItem()?.waist);

    console.log("Testing isEmpty(): " + testDresser.top.isEmpty());

    testDresser.top.addItem({ style: "long", color: "white" });
    testDresser.top.addItem({ style: "long", color: "black" });
    testDresser.top.addItem({ style: "long", color: "blue" });

    console.log("Testing removeAll: " + testDresser.top.removeAll().length);

    console.log("Testing isEmpty(): " + testDresser.top.isEmpty());
    console.log("\n");
}