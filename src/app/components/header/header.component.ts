import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  constructor() {}
}
