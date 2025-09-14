import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodSelectionService, FoodItem } from '../../food-selection.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  categories = [

    {
      name: 'Pizza',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.4QfcMdyG3KlfkFJDdM6oFAHaE7&pid=Api&P=0&h=180',
      items: [
        { name: 'Margherita', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.U91E7M2gIoIs3zdideOtfgHaEP&pid=Api&P=0&h=180', quantity: 0 },
        { name: 'Pepperoni', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.RQzzMY8hDNQUPWWwpB7epQHaE8&pid=Api&P=0&h=180', quantity: 0 },
        { name: 'Four Cheese', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.M17vFjQeiWXkyawrA8QXTQHaE6&pid=Api&P=0&h=180', quantity: 0 },
      ]
    },
    {
      name: 'Pasta',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.42Z5SIkFX5yBC4rV-pVRVwHaE8&pid=Api&P=0&h=180',
      items: [
        { name: 'Spaghetti', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.-87butTBOr6OIJDy9qWzfQHaE8&pid=Api&P=0&h=188', quantity: 0 },
        { name: 'Lasagna', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.EWq3SI10FnLn6pW7SzZ66wHaE8&pid=Api&P=0&h=180', quantity: 0 },
        { name: 'Fettuccine Alfredo', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.dN3iBjPt_YTOEbn1VEowcAHaER&pid=Api&P=0&h=180', quantity: 0 },
      ]
    },
    {
      name: 'Salad',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.vwxD8BKynasyj3q8YYCPDwAAAA&pid=Api&P=0&h=180',
      items: [
        { name: 'Caesar Salad', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.BvP-69sD57O-wv3mXzs9wgHaHa&pid=Api&P=0&h=180', quantity: 0 },
        { name: 'Greek Salad', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.cOX9xDK5TDhzpEe_D7ZECgHaHa&pid=Api&P=0&h=180', quantity: 0 },
        { name: 'Garden Salad', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.IjKtgpezHMsbMagZtihxGwHaHa&pid=Api&P=0&h=180', quantity: 0 },
      ]
    },
  
    {
      name:'Beverges',
      id:'Alcohol Drinks',
      imageUrl:'',
      items:[
        {name:'Bloodymary',ingredients: "vodka, tomato juice, horseradish",imageUrl:'https://ik.imagekit.io/bhug69xts/bloody-mary.png',quantity: 0 },
        {name:'SunShine',ingredients:"a rum, vermouth, and pineapple",imageUrl:'https://drinkoteket.se/wp-content/uploads/lick-of-sunshine-1-860x860.jpg',quantity: 0},
        {name:'White Wine',imageUrl:'https://www.oaks.delivery/wp-content/uploads/white-wine.jpg',quantity: 0},
        {name:'Red Wine',imageUrl:'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/10/12205239/Best-red-wines-in-India-6.jpg',quantity: 0},
        {name:'Bier', imageUrl:'https://tse4.mm.bing.net/th/id/OIP.jHAM7PAJWUfOHDeWM6qmfAHaHa?pid=Api&P=0&h=180',quantity: 0},
      ]

    },
  
  {
    name:'',
    imageUrl:'',
    items:[
      {name:'Orange Juice',imageUrl:'https://facts.net/wp-content/uploads/2024/05/19-amazing-facts-about-orange-juice-1716522312.jpg',quantity: 0},
      {name:'Florida Juice',imageUrl:'https://www.puredrinkology.com/recipes/miami-vice/images/cover_hu64c606d4fcae78dc76a084cb81302c5e_277550_1000x0_resize_q75_box.jpeg',quantity: 0},
      {name:'Mojito Lemon',imageUrl:'https://img.freepik.com/premium-photo/mojito-coktail-lemon-ice-cubes_974629-20420.jpg',height:20,quantity: 0},
      {name:'RedBull',imageUrl:'https://tse2.mm.bing.net/th/id/OIP.mIPtHdum9YGzBo9arCrAzgHaFE?pid=Api&P=0&h=180',quantity: 0},
    ]

  },
  {
    name:'',
    imageUrl:'',
    items:[
      {name:'Capuccino',imageUrl:'https://www.tastingtable.com/img/gallery/the-perfect-milk-to-coffee-ratio-for-your-homemade-cappuccino/intro-1670945507.jpg',quantity: 0},
      {name:' Flat White',imageUrl:'https://carmelbaycoffee.com/wp-content/uploads/2023/07/Flat-White-coffee-recipe.jpg',quantity: 0},
      {name:'Hot chocolate',imageUrl:'https://bakerbynature.com/wp-content/uploads/2024/01/Hot-Chocolate-4-1024x681.jpg',quantity: 0},
      {name:'Green Tea',imageUrl:'https://healthyline.com/wp-content/uploads/2017/08/Green-Tea.jpg', quantity: 0},

]
},


  {
    name:'Desserts',
    items:[
      {name:'Tiramisu Bowl',imageUrl:'https://www.thefork.fr/blog/s3/files/styles/lightbox_content/public/2023-01/italie-furkan-dokuzlar-trRIeLsc_20-unsplash.jpg?itok=HbPXDd4w',quantity:0},
       {name:'Tiramisu',imageUrl:'https://www.momondo.es/discover/wp-content/uploads/sites/242/2017/05/theme_food_tiramisu_shutterstock-portfolio_1204513603_universal_within-usage-period_71598.jpg' , quantity:0},
       {name:'Panna Cotta Tiramisu',imageUrl:'https://www.ilristorante.fr/wp-content/uploads/2016/07/panna-cotta-1-1024x683.jpeg',quantity:0},
       {name:'Cannoli with vanilla custard',imageUrl:'https://img.taste.com.au/vYU0NCl5/taste/2016/11/cannoli-with-vanilla-custard-85970-1.jpeg',quantity:0},
    ]

  },
];
  constructor(private foodService: FoodSelectionService, private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  increaseQuantity(item: FoodItem) {
    item.quantity++;
  }

  decreaseQuantity(item: FoodItem) {
    if (item.quantity > 0) item.quantity--;
  }

  // Confirm all selected items from all categories
  confirmAllSelections() {
    const allSelected = this.categories.flatMap(c =>
      c.items.filter(i => i.quantity > 0)
    );

    if (allSelected.length === 0) {
      alert('⚠️ Please select at least one item from any category.');
      return
    }
    this.foodService.setSelectedFoods(allSelected);
    alert('✅ All categories selections confirmed!');
    this.router.navigate(['/']);
  }
}
