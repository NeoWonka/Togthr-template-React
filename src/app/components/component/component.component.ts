import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component',
  templateUrl: 'component.component.html',
  styleUrls: ['component.component.css'],
})
export class AppComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Subscribe'
  @Input()
  text: string =
    'Sign up to receive notifications about Videos, Members, and Upcoming Events'
  @Input()
  textinput_placeholder: string = 'Email here...'
  constructor() {}
}
