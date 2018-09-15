import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { CommonModule } from "@angular/common";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";
import { DarkenOnHoverModule } from "../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        FilterByDescription
    ],
    exports: [PhotoListComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        DarkenOnHoverModule
    ]
})
export class PhotoModule {}