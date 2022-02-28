import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { BadgeComponent } from './badge/badge.component';
import { MatBadgeModule } from '@angular/material/badge';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ButtonComponent } from './button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// autocomplete modules import
const autoComplete = [
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

//badge module import
const badge = [
  MatBadgeModule
];

//bottom-sheet import
const bottomSheet = [
  MatBottomSheetModule,
  MatListModule
];

//button module import
const button = [
  MatIconModule,
  MatButtonToggleModule
];


const materialImports = [
  ...autoComplete,
  ...badge,
  ...bottomSheet,
  ...button
];

@NgModule({
  declarations: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetExampleComponent,
    ButtonComponent,
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialImports
  ],
  exports: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent
  ]
})
export class CoreModule { }
