import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RequestService} from "../../shared/services/request.service";
import {HomeComponent} from "../../pages/home/home.component";
import {TranslateService} from "../../shared/services/translate.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {BottomSheetMenuComponent} from "../bottom-sheet-menu/bottom-sheet-menu.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RequestService,HomeComponent]
})
export class HeaderComponent implements OnInit {


 constructor(private rout: Router ,
             public translate: TranslateService,
             public dialog: MatDialog,
             public _bottomSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetMenuComponent);
  }

}
