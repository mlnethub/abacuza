import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cluster } from '../models/cluster';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClustersService {

  constructor(private http: HttpClient) { }

  /**
   * getAllClusters
   */
   public getAllClusters(): Observable<HttpResponse<Cluster[]>> {
    return this.http.get<Cluster[]>(`${environment.clusterServiceBaseUrl}api/clusters`, {
      observe: 'response',
    });
  }
}
