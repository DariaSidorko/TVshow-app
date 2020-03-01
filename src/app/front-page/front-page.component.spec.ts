import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageComponent } from './front-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FrontPageComponent', () => {
  let component: FrontPageComponent;
  let fixture: ComponentFixture<FrontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FrontPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
