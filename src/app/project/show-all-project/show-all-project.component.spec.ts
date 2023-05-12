import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProjectComponent } from './show-all-project.component';

describe('ShowAllProjectComponent', () => {
  let component: ShowAllProjectComponent;
  let fixture: ComponentFixture<ShowAllProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
