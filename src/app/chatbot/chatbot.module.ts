import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatbotComponent } from "../chatbot/chatbot.component";
import { ChatHeaderComponent } from "./chat-header/chat-header.component";
import { ChatBodyComponent } from "./chat-body/chat-body.component";
import { ChatInputComponent } from "./chat-input/chat-input.component";

@NgModule({
  declarations: [
    ChatbotComponent,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatInputComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [ChatbotComponent]
})
export class ChatbotModule {}
