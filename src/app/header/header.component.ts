import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { createPopper } from "@popperjs/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'closeDropdown($event)',
  }
})
export class HeaderComponent implements OnInit {

  isVisible = false

  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("dropdownContainer", { static: false }) dropdownContainer!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef!: ElementRef;
  

  constructor(private _elementRef : ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }

  toggleDropdown(event : any) {
    event.preventDefault();

    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }



  closeDropdown(event: any) {

    if(!this.dropdownContainer.nativeElement.contains(event.target) && this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false
    }
  }

}
