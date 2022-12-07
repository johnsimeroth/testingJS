var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

var cats = [itemData[0]['category']];
var foundMatch = false;
items = [];
for (let i in itemData) {
  foundMatch = false;
  for (let j in cats) {
    if (itemData[i]['category'] === cats[j]) {
      foundMatch = true;
      if (itemData[i]['onSale'] === true) {
        itemData[i]['itemName'] += '($)';
      }
      items.push(itemData[i]['itemName'])
    }  
  }
  if (foundMatch === false) {
    cats.push(itemData[i]['category']);
  }
  
}
console.log(cats);