import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-bottom-sheet-example',
  templateUrl: './bottom-sheet-example.component.html',
  styleUrls: ['./bottom-sheet-example.component.scss']
})
export class BottomSheetExampleComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetExampleComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
