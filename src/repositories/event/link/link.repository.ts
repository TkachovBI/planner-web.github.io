import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LinkRequest } from 'src/models/event/links/LinkRequest';
import { LinkResponse } from 'src/models/event/links/LinkResponse';
import { LinkService } from 'src/services/links-services/LinkService';

@Injectable({
  providedIn: 'root',
})
export class LinksRepository {
  constructor(private http: HttpClient, private links: LinkService) {}

  getLinksByEventId(linkId: number) {
    return this.http
      .get<LinkResponse[]>(
        this.links.getLinkToApi(`/api/admin/v1/link/byEventId/${linkId}`)
      )
      .toPromise();
  }

  updateLink(id: number, updatedLink: LinkRequest) {
    return this.http
      .put<LinkResponse>(
        this.links.getLinkToApi(`/api/admin/v1/link/byEventId/${id}`),
        updatedLink
      )
      .toPromise();
  }
}
