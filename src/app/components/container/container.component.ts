import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.css'],
})
export class Container {
  @Input()
  text1: string = 'Wizard Wednesday Feature'
  @Input()
  text: string = 'dddafsaxt about the feature'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
