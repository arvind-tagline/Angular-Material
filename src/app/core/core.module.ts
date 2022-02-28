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

const bottomSheet = [
  MatBottomSheetModule,
  MatListModule
];


const materialImports = [
  ...autoComplete,
  ...badge,
  ...bottomSheet
];

@NgModule({
  declarations: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetExampleComponent
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
    BottomSheetComponent]
})
export class CoreModule { }
