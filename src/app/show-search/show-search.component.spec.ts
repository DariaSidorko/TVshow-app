import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchComponent } from './show-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowSearchComponent', () => {
  let component: ShowSearchComponent;
  let fixture: ComponentFixture<ShowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ShowSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
