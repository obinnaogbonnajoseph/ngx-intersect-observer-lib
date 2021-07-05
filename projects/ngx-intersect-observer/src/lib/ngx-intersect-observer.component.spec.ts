import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntersectObserverComponent } from './ngx-intersect-observer.component';

describe('NgxIntersectObserverComponent', () => {
  let component: NgxIntersectObserverComponent;
  let fixture: ComponentFixture<NgxIntersectObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxIntersectObserverComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIntersectObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div in the template with class, row and id intersect-div', () => {
    const div: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#intersect-div');
    expect(div.className).toEqual('row');
    expect(div.getAttribute('id')).toEqual('intersect-div')
  })
});
