import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  public step: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

  public setStep(index: number): number {
    return this.step = index;
  }

  public nextStep(): number {
    return this.step++;
  }

  public prevStep(): number {
    return this.step--;
  }

}
