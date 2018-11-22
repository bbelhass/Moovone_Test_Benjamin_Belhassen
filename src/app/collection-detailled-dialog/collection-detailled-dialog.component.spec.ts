import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailledDialogComponent } from './collection-detailled-dialog.component';

describe('CollectionDetailledDialogComponent', () => {
  let component: CollectionDetailledDialogComponent;
  let fixture: ComponentFixture<CollectionDetailledDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionDetailledDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDetailledDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
