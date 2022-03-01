import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public value: number = 10;
  public value2!: number;
  public toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.value += 10;
  }

  public decrement(): void {
    if (this.value > 10) {
      this.value -= 10;
    } else {
      this.value;
    }
  }


  public startBar(): boolean {
    return this.toggle = !this.toggle;
  }

  // public stopBar(): boolean {
  //   return this.apiData = false;
  // }
}
