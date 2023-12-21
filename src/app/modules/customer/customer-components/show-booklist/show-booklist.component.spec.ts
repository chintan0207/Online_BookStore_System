import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooklistComponent } from './show-booklist.component';

describe('ShowBooklistComponent', () => {
  let component: ShowBooklistComponent;
  let fixture: ComponentFixture<ShowBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowBooklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
