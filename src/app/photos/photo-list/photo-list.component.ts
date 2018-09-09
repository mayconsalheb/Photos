import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo/Photo.service";

@Component({
    selector    : "ap-photo-list",
    templateUrl : "./photo-list.component.html" 
})
export class PhotoListComponent implements OnInit{

    photos: Object[] = [];
    
    constructor(private photoService: PhotoService){}
    
    ngOnInit(): void {
        this.photoService.listFromUser("flavio")
        .subscribe(photos => {
            this.photos = photos;    
        },error=>console.log(error));
    }
}