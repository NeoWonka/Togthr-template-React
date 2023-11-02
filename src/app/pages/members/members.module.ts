import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Members } from './members.component'

const routes = [
  {
    path: '',
    component: Members,
  },
]

@NgModule({
  declarations: [Members],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Members],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MembersModule {}
