import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPipeComponent } from './ngx-pipe.component';

describe('NgxPipeComponent', () => {
  let component: NgxPipeComponent;
  let fixture: ComponentFixture<NgxPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
