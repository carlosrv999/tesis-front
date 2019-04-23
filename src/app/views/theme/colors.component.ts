import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { ApiService } from './api.service';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document: any, private apiService: ApiService) {}

  public themeColors(): void {
    Array.from(this._document.querySelectorAll('.theme-color')).forEach((el: HTMLElement) => {
      const background = getStyle('background-color', el);
      const table = this._document.createElement('table');
      table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
      el.parentNode.appendChild(table);
    });
  }

  ngOnInit(): void {
    this.themeColors();
    this.apiService.getConfig().subscribe(
      (response: any) => {
        localStorage.setItem('crumb', response.crumb);
        console.log(response.crumb);
      }
    )
  }
}
