// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (products,promotionCode) {
  let totalPrice = 0; 
  for (const item of products) {
    totalPrice += item.price * item.quantity; 
  }
  if(promotionCode == "SALE20") {
    totalPrice = totalPrice - (totalPrice*0.2);
  } else if (promotionCode == "SALE50") {
    totalPrice = totalPrice - (totalPrice*0.5);
  } else if (promotionCode == "ไม่มี") {
    totalPrice = totalPrice - 0;
  }

  return totalPrice; 

}

let totalPriceAfterSale = calculateTotalPrice (products,"SALE50"); 
console.log(totalPriceAfterSale)

