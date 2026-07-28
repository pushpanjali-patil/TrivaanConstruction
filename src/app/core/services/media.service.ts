import { Injectable } from '@angular/core';
import { environment } from '../../../assests/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  getUrl(path: string | null | undefined): string {

    if (!path)
      return 'assets/images/no-image.jpg';

    return `${environment.serverUrl}${path}`;
  }

}