import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  public showDelay = new FormControl(1000);
  public hideDelay = new FormControl(2000);
  public positionOptions = ['below', 'above', 'left', 'right'];
  public position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit(): void {
  }

}
