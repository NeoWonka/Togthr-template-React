import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Videos } from './videos.component'

const routes = [
  {
    path: '',
    component: Videos,
  },
]

@NgModule({
  declarations: [Videos],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Videos],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VideosModule {}
