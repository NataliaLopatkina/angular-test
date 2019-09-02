import { Directive, Input, TemplateRef, ViewContainerRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMessage]',
})
export class MessageDirective {
  constructor(
    private templateRef: TemplateRef<any>, // Для получения доступа к шаблону директивы применяется этот объект
    private viewContainer: ViewContainerRef // Объект рендера
    ) {}


    ngOnChanges(changes: SimpleChanges) { console.log(changes);
      
    if(changes.appMessage.currentValue.gender =='Female'){
      this.addHtml()
    }
    }

    addHtml(){
      console.log('жопа!!!')
this.templateRef.elementRef.nativeElement.textContent = 'Жопа!!!!'

    }



  @Input() appMessage(condition) {
    // console.log(condition);
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
