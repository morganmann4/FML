import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaModalComponent } from './idea-modal.component';

describe('IdeaModalComponent', () => {
  let component: IdeaModalComponent;
  let fixture: ComponentFixture<IdeaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
