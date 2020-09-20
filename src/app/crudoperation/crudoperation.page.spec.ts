import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudoperationPage } from './crudoperation.page';

describe('CrudoperationPage', () => {
  let component: CrudoperationPage;
  let fixture: ComponentFixture<CrudoperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudoperationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudoperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
