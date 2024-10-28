import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetail implements OnInit {
  product: any;

  // Sample product data
  products = [
    { id: 1, name: "Wireless Earbuds", price: 149.99, description: "High-quality sound with noise-canceling features. Perfect for on-the-go listening.", imageUrl: "assets/images/earbuds.png" },
    { id: 2, name: "Smartwatch", price: 199.99, description: "Monitor workouts and receive notifications on your wrist. Stylish and functional.", imageUrl: "assets/images/smartwatch.png" },
    { id: 3, name: "Bluetooth Speaker", price: 99.99, description: "Portable and waterproof with powerful bass for all your adventures.", imageUrl: "assets/images/speaker.png" },
    { id: 4, name: "TV", price: 599.99, description: "Stunning 4K UHD display for an immersive entertainment experience.", imageUrl: "assets/images/tv.png" }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.product = idParam ? +idParam : 0; // Use 0 as a default if idParam is null
    // Now you can use this.productId safely
  }
}
