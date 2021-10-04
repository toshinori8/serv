import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})


export class BleScanService {
  state = 0;

  data:any;

  io = "http://192.168.8.105:8/io";

  io_state_send= "http://192.168.8.105:8/io_state_send";

  constructor(private httpClient: HttpClient) {}

  sendGetRequest() {
     return this.httpClient.get(this.io,{ responseType: 'json' });
  }
  sendPostRequest(data: String, acc:Boolean): Observable<Object> {
    return this.httpClient.post(this.io_state_send+"?id="+data+'&acc='+acc,data);
  }
  

}
