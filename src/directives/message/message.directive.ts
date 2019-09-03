import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMessage]',
})
export class MessageDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}

    ngDoCheck() {
      this.viewContainer.clear();
      if (this.appMessage.gender == 'Female' && this.appMessage.age > 20 && this.appMessage.age != 0) {
          const text = 'woman';
          this.addHTML(text);
      } else if (this.appMessage.gender == 'Male' && this.appMessage.age > 20 && this.appMessage.age != 0) {
          const text = 'man';
          this.addHTML(text);
      } else if (this.appMessage.gender == 'Male' && this.appMessage.age <= 20 && this.appMessage.age != 0) {
          const text = 'boy';
          this.addHTML(text);
      } else if (this.appMessage.gender == 'Female' && this.appMessage.age <= 20 && this.appMessage.age != 0) {
          const text = 'girl';
          this.addHTML(text);
      }  
    }

    addHTML(text) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      document.querySelector('.message').innerHTML = 'Hello, ' + text + '!';
    }

  @Input() appMessage;
}
