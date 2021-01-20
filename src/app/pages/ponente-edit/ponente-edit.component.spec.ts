import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonenteEditComponent } from './ponente-edit.component';

describe('PonenteEditComponent', () => {
  let component: PonenteEditComponent;
  let fixture: ComponentFixture<PonenteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonenteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonenteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
