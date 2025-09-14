import { Component, OnInit } from '@angular/core';
import { FoodSelectionService } from '../../food-selection.service';
import { CommonModule } from '@angular/common';

interface SelectedItem {
  name: string;
  imageUrl: string;
  quantity: number;
  selected: boolean;
  category: string;
}

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-component.component.html',
  styleUrls: ['./summary-component.component.css']
})
export class SummaryComponent implements OnInit {
  groupedSelections: { [category: string]: SelectedItem[] } = {};

  constructor(private foodService: FoodSelectionService) {}

  ngOnInit() {
    const selections: any[] = this.foodService.getSelectedFoods();

    const convertedSelections: SelectedItem[] = selections.map(item => ({
      name: item.name,
      imageUrl: item.imageUrl,
      quantity: item.quantity ?? 1,
      selected: item.selected ?? true,
      category: item.category ?? 'Uncategorized'
    }));

    for (const item of convertedSelections) {
      if (!this.groupedSelections[item.category]) {
        this.groupedSelections[item.category] = [];
      }
      this.groupedSelections[item.category].push(item);
    }
  }
  getCategories(): string[] {
    return Object.keys(this.groupedSelections);
  }
}
