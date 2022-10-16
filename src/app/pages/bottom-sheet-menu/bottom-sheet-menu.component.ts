import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {TranslateService} from "../../shared/services/translate.service";

@Component({
  selector: 'app-bottom-sheet-menu',
  templateUrl: './bottom-sheet-menu.component.html',
  styleUrls: ['./bottom-sheet-menu.component.scss']
})
export class BottomSheetMenuComponent implements OnInit {

  constructor(public _bottomSheet: MatBottomSheet,
              public translate :TranslateService) { }

  ngOnInit(): void {
  }
  closeBottomSheet() :void {
    this._bottomSheet.dismiss()
  }
}
