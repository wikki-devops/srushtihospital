import { Component } from '@angular/core';

@Component({
  selector: 'app-ivf-package',
  templateUrl: './ivf-package.component.html',
  styleUrls: ['./ivf-package.component.css']
})
export class IvfPackageComponent {
  pagetitle = 'IVF Package';
  package: any[] = [
    { },
    { },
    { },
    { },
  ];
}
