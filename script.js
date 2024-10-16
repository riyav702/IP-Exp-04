function validateForm() {
    let tagline = document.getElementById('tagline').value;
    let phone = document.getElementById('phone').value;
  
  
  if(tagline.length > 30){
    alert("tagline cannot exeed 30 characters.");
    return false;
  }
  
  if (!/^\d{10}$/.test(phone)) {
    alert('Phone number must be exactly 10 digits.');
    return false;
  } 
  
  return true;
  
  }
  
  function processOrder(event) {
    event.preventDefault();
  
    if(!validateForm()) {
        return;
    }
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let tagline = document.getElementById('tagline').value;
    let color = document.getElementById('color').value;
    let size = document.getElementById('size').value;
    let quantity = document.getElementById('quantity').value;
    let delivery_Date = new Date(document.getElementById('delivery_date').value);
  
  
    let person = new Person(name , email);
  
    let receipt = `
    <h3>Order Confirmation</h3>
    <p><strong>Thank you for your order, ${person.getName()}!</strong></p>
    <p>Order Details:</p>
    <ul>
      <li>Tagline: ${tagline}</li>
      <li>Color: ${color}</li>
      <li>Size: ${size}</li>
      <li>Quantity: ${quantity}</li>
      <li>Order Date: ${delivery_Date.toDateString()}</li>
    </ul>
    <p>A confirmation has been sent to your email: ${person.getEmail()}</p>
    `;
    
    document.getElementById('receipt').innerHTML = receipt;
  
  }
  
  class Person {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
  
    getName = () => this.name;
  
    getEmail() {
        return this.email;
    }
  }