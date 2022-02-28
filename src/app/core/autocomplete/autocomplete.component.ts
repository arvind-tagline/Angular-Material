import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  public myControl = new FormControl();
  public options: string[] = ['One', 'Two', 'Three', 'Four'];


  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets!: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value)),
    );
  }

  private filter(val: string): string[] {
    const filterValue = this.normalizeValue(val);
    return this.streets.filter(street => this.normalizeValue(street).includes(filterValue));
  }

  private normalizeValue(val: string): string {
    return val.toLowerCase().replace(/\s/g, '');
  }

  constructor() { }

}
