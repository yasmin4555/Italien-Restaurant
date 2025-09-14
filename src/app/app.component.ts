import { Component } from '@angular/core';

import { MenuComponent } from './pages/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule,
  MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

  
  
  export class  AppComponent {
  
}

