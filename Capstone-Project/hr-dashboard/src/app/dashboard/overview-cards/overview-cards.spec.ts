import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCards } from './overview-cards';

describe('OverviewCards', () => {
  let component: OverviewCards;
  let fixture: ComponentFixture<OverviewCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
