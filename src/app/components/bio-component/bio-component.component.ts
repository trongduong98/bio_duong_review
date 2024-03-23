import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-component',
  templateUrl: './bio-component.component.html',
  styleUrls: ['./bio-component.component.scss']
})
export class BioComponentComponent implements OnInit {

  public isDisplay: boolean = false;
  public title: string = "";
  public image: string = "";
  public list: any = [
    { id: 1, name: "Panorama 01", description: "Panorama 01", link: "../assets/images/panorama01.jpg", image:"../assets/images/panorama01.jpg" },
    { id: 2, name: "Panorama 02", description: "Panorama 02", link: "../assets/images/panorama02.jpg", image:"../assets/images/panorama02.jpg" },
    { id: 3, name: "Panorama 03", description: "Panorama 03", link: "../assets/images/panorama03.jpg", image:"../assets/images/panorama03.jpg" },
    { id: 4, name: "Panorama 04", description: "Panorama 04", link: "../assets/images/panorama04.jpg", image:"../assets/images/panorama04.jpg" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(eventName: string) {
    switch(eventName) {
      case 'facebook':
        window.open("https://www.facebook.com/NguyenTrongDuong.CaptainNui");
        break;
      case 'tiktok':
        window.open("https://www.tiktok.com/@duongnguyenreviewer");
        break;
      default:
        break;
    }
  }

  public handleShowDialog(item: any) {
    this.isDisplay = true;
    console.log('item.name', item.name);
    console.log('item.image', item.image);
    
    this.title = item.name;
    this.image = item.image;
  }

  public handleCloseDialog(isDisplay: boolean) {
    this.isDisplay = isDisplay;
  }

}
