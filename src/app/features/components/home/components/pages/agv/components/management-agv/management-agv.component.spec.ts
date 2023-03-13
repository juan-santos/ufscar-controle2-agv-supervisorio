import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAgvComponent } from './management-agv.component';

describe('ManagementAgvComponent', () => {
  let component: ManagementAgvComponent;
  let fixture: ComponentFixture<ManagementAgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementAgvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
