// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];


// เริ่มเขียนโค้ดตรงนี้
let minItemQuan = inventory[0].quantity; 
let itemsName = inventory[0].name; 

for (const items of inventory) {
  if (minItemQuan > items.quantity) {
    minItemQuan = items.quantity; 
    itemsName = items.name; 
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${itemsName} ซึ่งมี ${minItemQuan} ชิ้น`);

