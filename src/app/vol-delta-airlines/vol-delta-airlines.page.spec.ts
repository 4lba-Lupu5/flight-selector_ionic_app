import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolDeltaAirlinesPage } from './vol-delta-airlines.page';

describe('VolDeltaAirlinesPage', () => {
  let component: VolDeltaAirlinesPage;
  let fixture: ComponentFixture<VolDeltaAirlinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolDeltaAirlinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolDeltaAirlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
