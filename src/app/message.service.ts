import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  // Acts like a cache memory to store messages
  messages: string[] = [];

  // Adds message to cache
  add(message: string) {
    this.messages.push(message);
  }

  // Empty cache
  clear() {
    this.messages = [];
  }

  constructor() { }

}
