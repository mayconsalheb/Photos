import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo/Photo.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector    : "ap-photo-list",
    templateUrl : "./photo-list.component.html" 
})
export class PhotoListComponent implements OnInit{

    photos: Object[] = [];
    
    constructor(
        private photoService: PhotoService, 
        private activatedRoute: ActivatedRoute
    ){}
    
    ngOnInit(): void {
        this.photoService.listFromUser(this.activatedRoute.snapshot.params.username)
        .subscribe(photos => {
            this.photos = photos;    
        },error=>console.log(error));
    }
}