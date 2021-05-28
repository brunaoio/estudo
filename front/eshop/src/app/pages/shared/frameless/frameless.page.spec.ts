import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FramelessPage } from './frameless.page';

describe('FramelessPage', () => {
  let component: FramelessPage;
  let fixture: ComponentFixture<FramelessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramelessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FramelessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
