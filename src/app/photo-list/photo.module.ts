import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photo.component";

@NgModule({
    declarations: [PhotoListComponent],
    exports: [PhotoListComponent]
})
export class PhotoModule {}