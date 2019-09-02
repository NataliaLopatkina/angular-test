import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective {
  constructor(
    private templateRef: TemplateRef<any>, // Для получения доступа к шаблону директивы применяется этот объект
    private viewContainer: ViewContainerRef // Объект рендера
    ) {}

  @Input() appMessage(condition) {
    if (condition == "age < 10 && gender=='Female'") {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition == "age < 10 && gender=='Male'") {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition == "age > 10 && gender=='Male'") {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition == "age > 10 && gender=='Female'") {
      this.viewContainer.clear();
    }
  }
}
