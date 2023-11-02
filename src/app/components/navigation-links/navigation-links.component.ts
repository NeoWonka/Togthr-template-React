import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text4: string = 'Blog'
  @Input()
  text: string = 'About'
  @Input()
  text1: string = 'Members'
  @Input()
  text3: string = 'Events'
  @Input()
  text2: string = 'Videos'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
