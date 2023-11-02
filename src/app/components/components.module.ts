import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AppComponent } from './component/component.component'
import { IconContainer } from './icon-container/icon-container.component'
import { Check } from './check/check.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { Header } from './header/header.component'
import { News } from './news/news.component'
import { Container } from './container/container.component'
import { Line } from './line/line.component'

@NgModule({
  declarations: [
    AppComponent,
    IconContainer,
    Check,
    NavigationLinks,
    Header,
    News,
    Container,
    Line,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AppComponent,
    IconContainer,
    Check,
    NavigationLinks,
    Header,
    News,
    Container,
    Line,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
