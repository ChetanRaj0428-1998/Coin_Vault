import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCoinPage } from './add-coin.page';

describe('AddCoinPage', () => {
  let component: AddCoinPage;
  let fixture: ComponentFixture<AddCoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
