import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BleinterfacesComponent } from './bleinterfaces.component';

describe('BleinterfacesComponent', () => {
  let component: BleinterfacesComponent;
  let fixture: ComponentFixture<BleinterfacesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BleinterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BleinterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
