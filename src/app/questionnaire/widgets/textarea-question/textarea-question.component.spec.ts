import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaQuestionComponent } from './textarea-question.component';

describe('TextareaQuestionComponent', () => {
  let component: TextareaQuestionComponent;
  let fixture: ComponentFixture<TextareaQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
