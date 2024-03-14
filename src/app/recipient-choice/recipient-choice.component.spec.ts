import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientChoiceComponent } from './recipient-choice.component';

describe('RecipientChoiceComponent', () => {
  let component: RecipientChoiceComponent;
  let fixture: ComponentFixture<RecipientChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipientChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipientChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
