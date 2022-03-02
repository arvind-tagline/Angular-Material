import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      // useValue: { showError: true },
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class StepperComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }



}
