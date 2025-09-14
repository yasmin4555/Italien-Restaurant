import { Injectable } from '@angular/core';

export interface FoodItem {
  name: string;
  imageUrl: string;
  quantity: number;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodSelectionService {
  private selectedFoods: FoodItem[] = [];

  constructor() {}

  // Save selected foods
  setSelectedFoods(foods: FoodItem[]) {
    this.selectedFoods = foods;
  }

  // Get selected foods
  getSelectedFoods(): FoodItem[] {
    return this.selectedFoods;
  }

  // Clear foods
  clearFoods() {
    this.selectedFoods = [];
  }
}
