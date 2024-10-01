import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAiAssistanceComponent } from './teacher-ai-assistance.component';

describe('TeacherAiAssistanceComponent', () => {
  let component: TeacherAiAssistanceComponent;
  let fixture: ComponentFixture<TeacherAiAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAiAssistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAiAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
