import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppSlateComponent } from './app-slate/app-slate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule  } from '@angular/material/autocomplete';  
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FileCardComponent } from './file-card/file-card.component'
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AppSlateComponent,
    FileCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
