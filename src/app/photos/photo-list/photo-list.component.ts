import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators"

@Component({
    selector    : "ap-photo-list",
    templateUrl : "./photo-list.component.html" 
})
export class PhotoListComponent implements OnInit{

    photos: Object[] = [];
    filter: string = '';
    debounce: Subject<string> = new Subject<string>();
    
    constructor(
        private activatedRoute: ActivatedRoute
    ){}
    
    ngOnInit(): void {
        this.photos = this.activatedRoute.snapshot.data.photos; 
        this.debounce
                .pipe(debounceTime(300))
                .subscribe(filter => this.filter = filter);
    }
}