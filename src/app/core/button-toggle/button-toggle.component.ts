import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  public alertsEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
