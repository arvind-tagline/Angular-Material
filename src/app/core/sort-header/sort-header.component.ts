import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Dessert } from '../allinterface';

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss']
})
export class SortHeaderComponent implements OnInit {

  public sortedData: Dessert[];
  public desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Ice cream sandwich', calories: 105, fat: 9, carbs: 37, protein: 4 },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];


  constructor() {
    this.sortedData = this.desserts.slice();
  }




  ngOnInit(): void {
  }

  public compare(a: number | string, b: number | string, isAsc: boolean): any {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      // console.log('a :>> ', a);
      // console.log('b', b);
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'calories':
          return this.compare(a.calories, b.calories, isAsc);
        case 'fat':
          return this.compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return this.compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return this.compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

}
