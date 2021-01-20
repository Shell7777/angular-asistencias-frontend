import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonenteComponent } from './ponente.component';

describe('PonenteComponent', () => {
  let component: PonenteComponent;
  let fixture: ComponentFixture<PonenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
