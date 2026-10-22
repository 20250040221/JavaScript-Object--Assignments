console.log("\n=== Level 3 - Q1: Inventory summary ===");
function inventorySummary(products) {
    const totalValue = products.reduce((sum,p) => sum + p.price*p.stock,0);
    const lowStock = products.filter((p) => p.stock < 5).map((p)=> p.name);
    return { totalValue, lowStock };

}

const products = [
    {name:"keyboard",price: 50,stock: 10},
    {name:"Mouse",price: 25,stock: 3},
    {name:"Monitor",price: 200,stock: 4},
    {name:"Webcam",price: 80,stock: 12},

];
console.log(inventorySummary(products));
//{totalValue: 2335,lowstock: [Mouse,Monitor]}