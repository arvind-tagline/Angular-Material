import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, toArray } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public value: number = 10;
  public value2!: number;
  public toggle: boolean = false;
  public url: Observable<any>;
  public finalData: any;

  constructor(private http: HttpClient) {
    this.url = this.http.get('https://my-json-server.typicode.com/Uxtrendz/apis/videoList');
  }

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
    const apiData = from(this.url);
    // apiData.subscribe(res => {
    //   this.finalData = res;
    //   if (!this.finalData) {
    //     this.toggle = true;
    //   } else {
    //     this.toggle = false;
    //   }
    //   console.log('res', res)
    // })

    return this.toggle = !this.toggle;
  }
}
