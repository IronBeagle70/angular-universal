import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, //client side, recibe servicios inyectados que correran en el browser
    ServerModule, //server side, recibe servicios inyectados para que corran en el lado del servidor , genera archivos como tmp.html
    // ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
