import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnivsComponent } from './show-univs.component';

describe('ShowUnivsComponent', () => {
  let component: ShowUnivsComponent;
  let fixture: ComponentFixture<ShowUnivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnivsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
