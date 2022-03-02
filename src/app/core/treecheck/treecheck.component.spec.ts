import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreecheckComponent } from './treecheck.component';

describe('TreecheckComponent', () => {
  let component: TreecheckComponent;
  let fixture: ComponentFixture<TreecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreecheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
