import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  public selected!: Date;
  constructor() { }

  ngOnInit(): void {
  }

  selectedDate: any;
  name = 'Angular 6';

  onSelect(event:any) {
    console.log(event);
    // const date=moment().format()
    this.selectedDate = event;
  }

  onDelete(event:any) {
    console.log('event', event)
  }

}
