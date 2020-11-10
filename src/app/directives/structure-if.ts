import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// custom structure directive

@Directive({
  selector: '[myCustomIf]'
})
export class MyCustomIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set myCustomIf(condition: boolean) {
    if(condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
