import { Injectable } from '@angular/core';
import { Profile } from '../model/profile.model';
import { Subject } from 'rxjs-compat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

	private profiles: Profile[] = [] ;

	private profileUrl : string;

	profilesSubject = new Subject<Profile[]>(); 

    constructor(private http: HttpClient) {
    	this.profileUrl = 'http://localhost:8080/listProfile';
    }

    emitProfilesSubject(){
    	this.profilesSubject.next(this.profiles);
    }

    findProfileById( id: number){
    	console.log(this.profiles[id]);
    	return this.http.get<Profile>(this.profileUrl + "/" + id);
    }

    public findAllProfiles(): Observable<Profile[]>{
		return this.http.get<Profile[]>(this.profileUrl);
	}
}