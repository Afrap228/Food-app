import React from 'react'

export default function () {
    let food=[
{
        name:"Biriyani",
        price:280,
        image_url:"https://images.pexels.com/photos/9738983/pexels-photo-9738983.jpeg",
},

{
    name:"Butter chicken",
        price:220,
        image_url:"https://images.pexels.com/photos/10615283/pexels-photo-10615283.jpeg",
},
{

name:"Paneer tikka",
        price:280,
        image_url:"https://images.pexels.com/photos/3928854/pexels-photo-3928854.png",
},


{
name:"Alfam",
        price:160,
        image_url:"https://images.pexels.com/photos/6735031/pexels-photo-6735031.jpeg",
},

{
name:"Noodles",
        price:250,
        image_url:"https://images.pexels.com/photos/4223916/pexels-photo-4223916.jpeg",
},

{
name:"Salad",
        price:199,
        image_url:"https://images.pexels.com/photos/3026013/pexels-photo-3026013.jpeg",
},
    ]



  return (
<>
 <nav>
    <h2>Saffron Grill <i class="bi bi-fire"></i></h2>
    <div>
        <a href="#menu">Menu</a>
             <a href="#booking">Booking Table</a>
                  <a href="#contact">Contact</a>
    </div>
 </nav>


 <section className='Hero'>
    <h1>Fresh & Flavorful Dining</h1>
    <p>
        Authentic tastes, handdcrafted with the finest ingrediants.
    </p>
    <button type="button" class="btn btn-warning">Our Menu</button>
  <button type="button" class="btn btn-outline-light">Book Table</button>

  
 </section>


   <section id='Menu'>
    <h2>Popular Dishes</h2>
    <p>Customer favorites from our kitchen</p>


    <div className='Dishes'>
        {food.map((item)=>(

<div>
<img src={item.image_url} alt="" height={300}width={400}/>
<h3>{item.name}</h3>
<button>{item.price}</button>
    </div>



        ))

}
    </div>
   </section>



<section className='box'>
  <h2>Reserve a Table</h2>

  <input type="text" placeholder="Your Full Name" />
  <input type="tel" placeholder="Phone Number" />

  <select>
    <option>4 Persons</option>
    <option>2 Persons</option>
    <option>6 Persons</option>
  </select>


  <button>Confirm Booking</button>
</section>


</>

  )
}
