import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MainPageComponent } from './dbz/pages/main-page.component';
import { ListCharactersComponent } from './dbz/components/list/list-characters.component';
import { FormCharacterComponent } from './dbz/components/form/form-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MainPageComponent,
    ListCharactersComponent,
    FormCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
