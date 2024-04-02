import { Component, OnInit } from '@angular/core';
import * as Item from '../../../assets/json/index';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-bio-component',
  templateUrl: './bio-component.component.html',
  styleUrls: ['./bio-component.component.scss']
})
export class BioComponentComponent implements OnInit {
  
  public list: any = Item.technological.product_technological;
  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
  }

  public handleClick(eventName: string) {
    switch(eventName) {
      case 'facebook':
        window.open("https://www.facebook.com/NguyenTrongDuong.vn");
        break;
      case 'tiktok':
        window.open("https://www.tiktok.com/@ng.tr.duong_review");
        break;
      case 'instagram':
        window.open("https://www.instagram.com/_duongnguyen.97");
        break;
      default:
        break;
    }
  }

  public handleSelectPage(pageSelect: number) {
    switch(pageSelect) {
      case 1:
        this.list = Item.technological.product_technological;
        break;
      case 2:
        this.list = Item.houseWare.product_houseWare;
        break;
      case 3:
        this.list = Item.fashion.product_fashion;
        break;
      case 4:
        this.list = Item.other.product_other;
        break;
      default:
        break;
    }
    this.loader.isPage.next(pageSelect);
  }

  public handleClickProduct(link: any) {
    window.open(link);
  }

}
