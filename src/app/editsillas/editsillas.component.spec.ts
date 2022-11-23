import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsillasComponent } from './editsillas.component';

describe('EditsillasComponent', () => {
  let component: EditsillasComponent;
  let fixture: ComponentFixture<EditsillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
