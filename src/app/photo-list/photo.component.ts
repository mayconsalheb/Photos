import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'photo-list',
    templateUrl: './photo.component.html'
})
export class PhotoListComponent implements OnInit{
    
    title       : string;
    path        : string;
    description : string;
    
    ngOnInit(): void {
        this.title = "Photo List";
        this.path = "http://www.portaljava.com.br/wp-content/uploads/2017/11/java.jpg";
        this.description = "Java Photo";
    }

}