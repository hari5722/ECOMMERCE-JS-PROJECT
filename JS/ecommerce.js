//     let allproducts=[]   
//         async function  fetchingproducts(){
//             try{
//                 const response= await fetch('https://fakestoreapi.com/products')
//                 allproducts= await response.json()
//                 displayproducts(allproducts)

//             }catch{
//                 console.log("Error");
//             }
//         }
//         function displayproducts(products){
//             const container = document.getElementById('Products-container')
//             container.innerHTML=""
//             products.forEach(product => {
//                 const box = document.createElement('div')
//                 box.className='box'

//                 box.innerHTML=`
//                 <img src="${product.image}" alt="${product.title}">
//                 <br>
//                 <h3> ${product.title.slice(0,15)}...</h3>
//                 <p> ${product.description.slice(0,110)}...</p>
//                 <hr>
//                 <p> $${product.price}</p>
//                 <hr>
//                 <div class="addcart">
//                     <button class="details">Details</button>
//                     <button class="addtocart">Add To Cart</button>
//                 </div>`;
//                 container.appendChild(box)   
//             });
//         }
//     document.querySelectorAll('.Productbtns button').forEach(button=>{
//     button.addEventListener('click',()=>{
//         const category=button.getAttribute('data-category')
//         if(category==='all'){
//             displayproducts(allproducts)
//         }else{
//             const filtered=allproducts.filter(p=>p.category.toLowerCase()===category)
//             displayproducts(filtered)
//         }

//     })
// })
// fetchingproducts()

// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('addtocart')) {
//         const productBox = e.target.closest('.box');
//         const image = productBox.querySelector('img').src;
//         const title = productBox.querySelector('h3').textContent;
//         const price = parseFloat(productBox.querySelector('p:nth-of-type(2)').textContent.replace('$', ''));

//         // Check if already in cart
//         const existing = cart.find(item => item.title === title);
//         if (existing) {
//             existing.quantity += 1;
//         } else {
//             cart.push({
//                 image,
//                 title,
//                 price,
//                 quantity: 1
//             });
//         }

//         localStorage.setItem('cart', JSON.stringify(cart));
//         // alert("Added to Cart!");
//     }
// });