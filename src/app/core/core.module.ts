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
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { MatSortModule } from '@angular/material/sort';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';




// matAutoComplete modules import
const matAutoComplete = [
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

//matBadge module import
const matBadge = [
  MatBadgeModule
];

//matBottomSheet import
const matBottomSheet = [
  MatBottomSheetModule,
  MatListModule
];

//matButton module import
const matButton = [
  MatIconModule,
  MatButtonToggleModule
];

//matCard module import
const matCard = [
  MatCardModule,
  MatProgressBarModule
];

//matCheckBox module import
const matCheckBox = [
  MatCheckboxModule,
  MatRadioModule
];

//matChips module import
const matChips = [
  MatChipsModule
];

//matDatePicker module import
const matDatePicker = [
  MatDatepickerModule,
  MatNativeDateModule
];

//matExpansion-Panel module import
const matExpansionPanel = [
  MatExpansionModule
];

//matGridlist  module import
const matGridlist = [
  MatGridListModule
];

//matMenu module import
const matMenu = [
  MatMenuModule
];

//matSpinner module import
const matSpinner = [
  MatProgressSpinnerModule,
  MatSliderModule //For slider
];

//matSelect module import
const matSelect = [
  MatSelectModule
];

//matSidenav module import 
const matSidenav = [
  MatSidenavModule
];

//matSlideToggle module import
const matSlideToggle = [
  MatSlideToggleModule
];

//matSnackBar module import
const matSnackBar = [
  MatSnackBarModule
];

//matSortHeader module import
const matSortHeader = [
  MatSortModule
];

//matStepper module imports
const matStepper = [
  MatStepperModule
];

//matTable module IMPORTS
const matTable = [
  MatTableModule
];

const materialImports = [
  ...matAutoComplete,
  ...matBadge,
  ...matBottomSheet,
  ...matButton,
  ...matCard,
  ...matCheckBox,
  ...matChips,
  ...matDatePicker,
  ...matExpansionPanel,
  ...matGridlist,
  ...matMenu,
  ...matSpinner,
  ...matSelect,
  ...matSidenav,
  ...matSlideToggle,
  ...matSnackBar,
  ...matSortHeader,
  ...matStepper,
  ...matTable
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
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
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
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent
  ]
})
export class CoreModule { }
