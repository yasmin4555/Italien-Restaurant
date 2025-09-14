import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodSelectionService, FoodItem } from '../../food-selection.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showForm = false;
  reservationConfirmed = false;

  reservation = {
    Time: '',
    people: null,
    foods: [] as FoodItem[],
  };

  constructor(private foodService: FoodSelectionService, private router: Router) {}

  ngOnInit(): void {
    const selectedFoods = this.foodService.getSelectedFoods();
    if (selectedFoods.length > 0) {
      this.reservation.foods = selectedFoods;
      this.showForm = true;
    }
  }

  toggleForm() {
    this.showForm = true;
    this.reservationConfirmed = false;
  }

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  removeFood(index: number) {
    this.reservation.foods.splice(index, 1);
  }

  submitReservation() {
    if (this.reservation.foods.length === 0) {
      alert('⚠️ Please select at least one food before submitting.');
      return;
    }

    const summary = this.reservation.foods
      .map(f => `${f.quantity} × ${f.name}`)
      .join(', ');

    alert(`✅ Reservation confirmed!\n\n🕒 Time: ${this.reservation.Time}\n👥 People: ${this.reservation.people}\n🍽️ Order: ${summary}`);

    this.foodService.clearFoods();
    this.reservation = { Time: '', people: null, foods: [] };
    this.reservationConfirmed = true;
    this.showForm = false;
  }
}
