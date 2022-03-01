import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  public favoriteSeason: string = '';
  public seasons: string[] = ['Designer', 'Developer', 'Tester']

  constructor() { }

  ngOnInit(): void {
  }

}
