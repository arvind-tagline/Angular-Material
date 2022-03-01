import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Animal, Food } from '../allinterface';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public toppings = new FormControl();

  public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato', 'Patota', 'Banana'];

  public selectedValue!: string;
  public selectedCar!: string;

  foods: Food[] = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'tacos', viewValue: 'Tacos' },
  ];

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
