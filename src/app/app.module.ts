import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookService } from '../services/book';
import { ExamplesComponent } from './examples/examples.component';
//Pipes
import { BookFilterPipe } from '../pipes/book.pipe';
import { FetchJsonPipe } from '../pipes/fetch-json.pipe';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from '../pipes/flying-heroes.pipe';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'examples', component: ExamplesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExamplesComponent,
    BookFilterPipe,
    FetchJsonPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
