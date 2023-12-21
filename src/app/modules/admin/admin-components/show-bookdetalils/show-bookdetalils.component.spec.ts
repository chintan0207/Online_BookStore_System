import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookdetalilsComponent } from './show-bookdetalils.component';

describe('ShowBookdetalilsComponent', () => {
  let component: ShowBookdetalilsComponent;
  let fixture: ComponentFixture<ShowBookdetalilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowBookdetalilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowBookdetalilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
