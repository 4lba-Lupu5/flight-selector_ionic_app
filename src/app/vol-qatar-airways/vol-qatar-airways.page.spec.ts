import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolQatarAirwaysPage } from './vol-qatar-airways.page';

describe('VolQatarAirwaysPage', () => {
  let component: VolQatarAirwaysPage;
  let fixture: ComponentFixture<VolQatarAirwaysPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolQatarAirwaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolQatarAirwaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
