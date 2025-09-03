import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnComponent} from './loginn';

describe('Loginn', () => {
  let component: LoginnComponent;
  let fixture: ComponentFixture<LoginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
