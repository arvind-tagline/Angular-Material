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
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChipsComponent } from './chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { RadioButtonComponent } from './radio-button/radio-button.component';







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

//Card module import
const card = [
  MatCardModule,
  MatProgressBarModule
];

//CheckBox module import
const checkbox = [
  MatCheckboxModule,
  MatRadioModule
];

//Chips module import
const chips = [
  MatChipsModule
];

//DatePicker module import
const datepicker = [
  MatDatepickerModule,
  MatNativeDateModule
];

//Expansion-Panel module import
const expansionPanel = [
  MatExpansionModule
];

//Grid list module import
const gridlist = [
  MatGridListModule
];

//menu module import
const menu = [
  MatMenuModule
];

const spinner = [
  MatProgressSpinnerModule,
  MatSliderModule //For slider
];

const materialImports = [
  ...autoComplete,
  ...badge,
  ...bottomSheet,
  ...button,
  ...card,
  ...checkbox,
  ...chips,
  ...datepicker,
  ...expansionPanel,
  ...gridlist,
  ...menu,
  ...spinner
];

@NgModule({
  declarations: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetExampleComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DialogExampleComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    ...materialImports
  ],
  exports: [
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent
  ]
})
export class CoreModule { }
