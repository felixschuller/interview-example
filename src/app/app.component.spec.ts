import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have title', () => {
    const titleElem = fixture.debugElement.query(By.css('.title'));

    expect(titleElem.nativeElement.innerHTML).toBe('Interview example');
  });

  it('should emit name after 10ms', () => {
    let name;
    
    app.getNameAfterTenMS().subscribe(emitted => name = emitted);

    expect(name).toBe('Hera');
  });


});
