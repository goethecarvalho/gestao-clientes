import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from "./shared/header/header.component";
import { MatToolbarModule, MatIconModule, MatMenuModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
