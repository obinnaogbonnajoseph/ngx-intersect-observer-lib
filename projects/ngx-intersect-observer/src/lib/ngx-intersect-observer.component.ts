import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

/**
 * Component that implements the Intersection Observer API
 * Inline template and style
 */
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

  /**
   * Initialize the intersection observer
   */
  intersectionObserver!: IntersectionObserver;

  /**
   * Extra condition(s) to be met for actionOnIntersection to be called
   */
  @Input()
  intersectionCondition = true;

  /**
   * function to be called when target element is visible and intersection conditions are met
   */
  @Input()
  actionOnIntersection: () => void = () => { };

  /**
   * Initialize the intersection observer.
   * An interface with 3 properties:
   * @property root?: Element | Document | null
   * @property rootMargin?: string
   * @property threshold?: number | number[]
   * @see [IntersectionObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
   */
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

  /**
   * Intersection observer callback
   * @param entries IntersectionObserverEntry[]
   * @param _ IntersectionObserver
   */
  private intersectionObserverCB: IntersectionObserverCallback = (entries, _) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && this.intersectionCondition) {
        this.actionOnIntersection();
      }
    })
  }

  /**
   * Get the element to be observed
   * Start the observation for intersection
   */
  private monitorForIntersection() {
    const intersectDiv = this.elementRef.nativeElement.querySelector('#intersect-div');
    if (intersectDiv) {
      this.observeIntersection(intersectDiv, this.intersectionObserverCB);
    }
  }

  /**
   * Implementation of the observationnn for intersection
   * Initialize the intersection observer.
   * @param intersectDiv DOM element to be observed
   * @param callback Intersection observer callback
   */
  private observeIntersection(intersectDiv: any, callback: IntersectionObserverCallback) {
    this.intersectionObserver = new IntersectionObserver(callback, this.intersectionObserverInit);
    this.intersectionObserver.observe(intersectDiv);
  }

}
