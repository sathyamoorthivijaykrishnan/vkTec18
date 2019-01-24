import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/products_list.component";
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { WelcomeComponent } from './home/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
