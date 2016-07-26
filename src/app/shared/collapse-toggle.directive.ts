import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[collapseToggle]',
  exportAs: 'collapsible'
})
export class CollapseToggleDirective {

  // @Input('collapsed') isCollapsed = true;
  // @Output('collapsed') collapsedOutput = new EventEmitter();

  @Input() isCollapsed: boolean = true;
  @Output() collapsedOutput = new EventEmitter();

  constructor() { }

  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  onClick() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedOutput.emit(this.isCollapsed);
  }

}