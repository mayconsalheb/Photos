import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/Photo";

@Pipe({name:"filterByDescription"})
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], filter: string) {
        console.log("teste: "+filter.toLowerCase());
        
        if(filter)
            return photos.filter(photo => photo
                .alt
                .toLowerCase()
                .includes(filter.toLowerCase()));
        else
            return photos;
           
    }

}