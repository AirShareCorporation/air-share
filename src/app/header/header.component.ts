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
  mobileMenuShow = false
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("btnMenuRef", { static: false }) btnMenuRef!: ElementRef;
  @ViewChild("dropdownContainer", { static: false }) dropdownContainer!: ElementRef;
  @ViewChild("dropdownMenu", { static: false }) dropdownMenu!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false }) popoverDropdownRef!: ElementRef;
  

  constructor() { }

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

  toggleMobileMenu(event : any) {
    console.log(this.mobileMenuShow)
    event.preventDefault();

    if (this.mobileMenuShow) {
      this.mobileMenuShow = false;
    } else {
      this.mobileMenuShow = true;
    }
  }



  closeDropdown(event: any) {

    if(!this.dropdownContainer.nativeElement.contains(event.target) && this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false
    }
  }

}
