import {Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';
import { Global } from './global';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable()
export class ProjectServices{
    public url?: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return "probando el servicio de angular";
    }

    saveProject(project: Project): Observable <any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-project', params, {headers: headers});
    }

    getProjects(): Observable <any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'projects', {headers: headers});
    }

    getProject(id:any): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'project/'+id, {headers: headers});
    }

    deleteProject(id: any): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'project/'+id, {headers: headers});
    }

    updateProject(project: any): Observable <any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'update-project/'+project._id, params, {headers: headers});
    }


}