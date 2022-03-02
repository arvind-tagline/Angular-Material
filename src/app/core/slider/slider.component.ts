import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public autoTicks = false;
  public disabled = false;
  public invert = false;
  public max = 100;
  public min = 0;
  public showTicks = false;
  public step = 1;
  public thumbLabel = false;
  public value = 0;
  public vertical = false;
  public tickInterval = 1;

  constructor() { }

  ngOnInit(): void {
  }


  public getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  public formatLabel(value: number): string | number {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}
