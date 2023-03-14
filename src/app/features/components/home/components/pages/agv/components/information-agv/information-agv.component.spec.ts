import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAgvComponent } from './information-agv.component';

describe('InformationAgvComponent', () => {
  let component: InformationAgvComponent;
  let fixture: ComponentFixture<InformationAgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationAgvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationAgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
