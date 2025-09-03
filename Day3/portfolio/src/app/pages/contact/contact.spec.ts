import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ContactComponent, FormsModule],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.contactForm.name).toBe('');
    expect(component.contactForm.email).toBe('');
    expect(component.contactForm.message).toBe('');
  });

  it('should reset form after submission', () => {
    // Fill form
    component.contactForm.name = 'Test User';
    component.contactForm.email = 'test@example.com';
    component.contactForm.message = 'Test message';

    // Submit form
    component.onSubmit();

    // Check if form is reset
    expect(component.contactForm.name).toBe('');
    expect(component.contactForm.email).toBe('');
    expect(component.contactForm.message).toBe('');
  });

  it('should navigate to specified path', () => {
    component.navigateTo('/test');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/test']);
  });
});
