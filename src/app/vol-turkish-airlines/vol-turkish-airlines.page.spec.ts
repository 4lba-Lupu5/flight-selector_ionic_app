import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolTurkishAirlinesPage } from './vol-turkish-airlines.page';

describe('VolTurkishAirlinesPage', () => {
  let component: VolTurkishAirlinesPage;
  let fixture: ComponentFixture<VolTurkishAirlinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolTurkishAirlinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolTurkishAirlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
