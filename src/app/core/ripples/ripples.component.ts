import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent implements OnInit {

  public centered: boolean = false;
  public disabled: boolean = false;
  public unbounded: boolean = false;

  public radius!: number;
  public color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
