import { isPlatformServer } from "@angular/common";
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
  selector: "[appShellDirective]"
})

export class AppShellRenderDirective implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef){

  }

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
