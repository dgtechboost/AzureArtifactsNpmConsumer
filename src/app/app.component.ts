import { Component, OnInit } from '@angular/core';
import { AzureNpmNgLibService } from 'azure-npm-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AzureArtifactsNpmConsumer';

  constructor(private _azureNpmNgLibService: AzureNpmNgLibService) {
  }

  ngOnInit(): void {
    this.mainFunc();
  }

  mainFunc(){
    let message = this._azureNpmNgLibService.getMessage();
    console.log(message);
    console.log(123)
  }
}
