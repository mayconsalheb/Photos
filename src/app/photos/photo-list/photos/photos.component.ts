import { Photo } from '../../photo/Photo';
import { OnChanges, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges{
  
  @Input() photos: Photo[];
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos)
      this.rows = this.groupCOlumns(this.photos);
  }

  groupCOlumns(photos: Photo[]){
    const newRows: any = [];
    for(let ind=0; ind<photos.length;ind+=3){
      newRows.push(photos.slice(ind, ind+3));
    }
    return newRows;
  }
}
