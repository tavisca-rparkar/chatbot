import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatbotModule } from "./chatbot/chatbot.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChatbotModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
