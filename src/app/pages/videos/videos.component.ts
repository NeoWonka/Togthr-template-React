import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.css'],
})
export class Videos {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Videos - [DMT]')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Videos - [DMT]',
      },
    ])
  }
}
