import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-intersect-observer',
  template: `
    <div class="row"
      id="intersect-div">
    </div>

  `,
  styles: [
    `
      .row {
        width: 100%;
        height: 1px;
      }
    `
  ]
})
export class NgxIntersectObserverComponent implements OnInit, OnChanges, OnDestroy {

  intersectionObserver!: IntersectionObserver;

  @Input()
  intersectionCondition = true;

  @Input()
  actionOnIntersection: () => void = () => { };

  @Input()
  intersectionObserverInit: IntersectionObserverInit = {
    threshold: 0.5,
  };

  constructor(private elementRef: ElementRef) { }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.monitorForIntersection();
  }

  ngOnInit(): void { }

  private intersectionObserverCB: IntersectionObserverCallback = (entries, _) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && this.intersectionCondition) {
        this.actionOnIntersection();
      }
    })
  }

  private monitorForIntersection() {
    const intersectDiv = this.elementRef.nativeElement.querySelector('#intersect-div');
    if (intersectDiv) {
      this.observeIntersection(intersectDiv, this.intersectionObserverCB);
    }
  }

  private observeIntersection(intersectDiv: any, callback: IntersectionObserverCallback) {
    this.intersectionObserver = new IntersectionObserver(callback, this.intersectionObserverInit);
    this.intersectionObserver.observe(intersectDiv);
  }

}
