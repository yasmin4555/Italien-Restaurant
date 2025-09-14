import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary-component.component';
import { FoodSelectionService } from '../../food-selection.service';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  // ✅ Provide a mock service
  const mockFoodService = {
    getSelectedFoods: () => [
      {
        name: 'Margherita',
        imageUrl: 'some-url',
        quantity: 2,
        selected: true,
        category: 'Pizza'
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryComponent],
      providers: [
        { provide: FoodSelectionService, useValue: mockFoodService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should group selected items by category', () => {
    expect(component.groupedSelections['Pizza']).toBeDefined();
    expect(component.groupedSelections['Pizza'].length).toBe(1);
    expect(component.groupedSelections['Pizza'][0].name).toBe('Margherita');
  });
});
