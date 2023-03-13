import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAgvComponent } from './new-agv.component';

describe('NewAgvComponent', () => {
  let component: NewAgvComponent;
  let fixture: ComponentFixture<NewAgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAgvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
