import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public album = [];
  constructor(private _lightbox: Lightbox) {}
  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      const src = 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(' + i  + ').jpg';
      const caption = 'תמונה ' + i ;
      const album = {
         src: src,
         caption: caption,
         thumb: src
      };

      this.album.push(album);
    }
  }
    open(index: number): void {
      // open lightbox
      this._lightbox.open(this.album, index , {centerVertically : true,wrapAround:true});
    }

    close(): void {
      // close lightbox programmatically
      this._lightbox.close();
    }
  }

