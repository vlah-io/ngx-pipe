import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

// https://stackoverflow.com/questions/39628007/angular2-innerhtml-binding-remove-style-attribute
// https://stackoverflow.com/questions/44961759/highlight-the-search-text-angular-2
@Pipe({name: 'vlahioHighlight'})
export class TextHighlightPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(text: string, str: string): SafeHtml {
    const re = new RegExp(`(?<!</?[^>]*|&[^;]*)(${str})`, 'gi');
    return this.sanitized.bypassSecurityTrustHtml(
      text.replace(re, (occurrence: string) => {
        return `<span style="background-color: #ffc107; padding: 0 3px;">${occurrence}</span>`;
      })
    );
  }
}
