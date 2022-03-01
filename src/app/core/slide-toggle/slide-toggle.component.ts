import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  public isChecked = true;
  public formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }

  ngOnInit(): void {
  }

}
