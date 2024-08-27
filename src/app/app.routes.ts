import { Routes } from '@angular/router'
import { Rxjs1Component } from './components/rxjs/rxjs1/rxjs1.component'
import { Rxjs2Component } from './components/rxjs/rxjs2/rxjs2.component'
import { HomeComponent } from './components/home/home.component'
import { Rxjs3Component } from './components/rxjs/rxjs3/rxjs3.component'
import { Rxjs4Component } from './components/rxjs/rxjs4/rxjs4.component'
import { Rxjs5Component } from './components/rxjs/rxjs5/rxjs5.component'
import { Routing1Component } from './components/routing/routing1/routing1.component'
import { Forms1Component } from './components/forms/forms1/forms1.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rxjs1', component: Rxjs1Component },
  { path: 'rxjs2', component: Rxjs2Component },
  { path: 'rxjs3', component: Rxjs3Component },
  { path: 'rxjs4', component: Rxjs4Component },
  { path: 'rxjs5', component: Rxjs5Component },
  { path: 'routing1', component: Routing1Component },
  { path: 'forms1', component: Forms1Component },
]
