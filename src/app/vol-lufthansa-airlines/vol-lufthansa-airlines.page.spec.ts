import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolLufthansaAirlinesPage } from './vol-lufthansa-airlines.page';

describe('VolLufthansaAirlinesPage', () => {
  let component: VolLufthansaAirlinesPage;
  let fixture: ComponentFixture<VolLufthansaAirlinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolLufthansaAirlinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolLufthansaAirlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
