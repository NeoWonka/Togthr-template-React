import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-members',
  templateUrl: 'members.component.html',
  styleUrls: ['members.component.css'],
})
export class Members {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Members - [DMT]')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Members - [DMT]',
      },
    ])
  }
}
