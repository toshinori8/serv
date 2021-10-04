import { Component, OnInit, Pipe, PipeTransform} from "@angular/core";
import { interval, Subscription } from "rxjs";
import { BleScanService } from "../../services/ble-scan.service";
// import {Response} from '@angular/http';


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [BleScanService],
})
export class DashboardComponent implements OnInit {
  Click(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

  }
  BleDevices=[];

  BleDevices_list = [];

  switchDevice(id) {

        console.log(id,' : device arp');

    for (const prop in this.BleDevices) {
      
       if(this.BleDevices[prop]['arp']==id){
        let dev_ = this.BleDevices[prop]

       // console.log(dev_);

         let set_use = dev_['used'];
         dev_['used']=!set_use;
         this.BleScanService.sendPostRequest(id, !set_use.toString()).subscribe((response)=>{
    
       });
       }

      
     
      

      // if (this.BleDevices[prop]['arp'] == id) {
      //   this.BleDevices[prop]['arp']['used'] = !this.BleDevices[prop]['arp']['used'] ;
      // }
    }
    // this.BleDevices_list = this.BleDevices;

    // Clear list of devices - only enabled

  }


  getDevices(): void {
    

    this.BleScanService.sendGetRequest().subscribe((response)=>{ 
        
      let response_= JSON.parse(response.toString());


      console.log(response_);
      
      let arr = [];  

      let pos=0;

      Object.values(response_).map(function(device_){  

            arr[pos]=[];
            Object.keys(device_).map(function(key,val){  
            arr[pos][key]=device_[key];

              if(key=='temp'){
                  let temp_=device_['temp'].toString().split('.');
                  arr[pos]['temp_v']=[];
                  arr[pos]['temp_v']['temp']=temp_[0];
                  arr[pos]['temp_v']['temp_d']=temp_[1];
              }
              if(key=='hum'){
                let hum_=device_['hum'].toString().split('.');
                arr[pos]['hum']=hum_[0];
              
                
            }
            if(key == 'used'){
              console.log('device_["used"');
                console.log(device_['used']);

            }
            if(key=='batt'){
                  if(device_['batt']<=10){
                    arr[pos]['batt_img']='0.svg';
                  }
                  if(device_['batt']>=10){
                    arr[pos]['batt_img']='50.svg';
                  }
                  if(device_['batt']>=80){
                    arr[pos]['batt_img']='100.svg';
                  }
                //  image manipulation
            }

              // console.log(arr[pos]);

               
        });
      pos++;

       
      });
     
     

     // Object.keys(response_).map(function(key){  
         
     

      //     arr[key]=Array;
          
      //     Object.keys(key).map(function(param){  
          
            
            
      //       arr[key]['arp']=response_[key]['arp'];
      //       arr[key]['batt']=response_[key]['batt'];
      //       arr[key]['hum']=response_[key]['hum'];
      //       arr[key]['id']=response_[key]['id'];
      //       arr[key]['powerOn']=response_[key]['powerOn'];
      //       arr[key]['temp']=response_[key]['temp'];
      //       arr[key]['used']=response_[key]['used'];
            
          
          
      //   });
        
          
      // });  

        //console.log(arr);
        //this.BleDevices =arr[0];
        // console.log(arr);

        // arr.forEach(element => {
        //    console.log(element);
        //  });

        
        //  for (const prop in response_) {
        //    //console.log(response[prop].id);
        //   //this.BleDevices[prop].id == prop;
        
        //     arr=[{'id':response_[prop].id}];
        //     this.BleDevices=[];
        //     this.BleDevices=arr; 
        // }


  
        // console.log('cccccccc');
       
        this.BleDevices=arr;

       

    })
  }; 


   // this.BleScanService.sendGetRequest().subscribe((respond) => {
    //  const objectArray = Object.entries(respond);

     // objectArray.forEach(([key, value]) => {
        // console.log(key); // 'one'
        // console.log(typeof value); // 1

     //   const entries = Object.entries(value);
     //   this.BleDevices[key] = [];
     //   entries.forEach(([property, val]) => {
          // console.log(typeof property); // 1
          // console.log(typeof val); // 1

     //     this.BleDevices[key].property = val;
     //   });
    //  });
   // });
   // console.log(this.BleDevices);

    //     this.BleScanService.sendGetRequest().subscribe((responseBody) => {

    //     // console.log(responseBody);

    //     // const objectArray = Object.entries(responseBody);

    //       // objectArray.forEach(([key, value]) => {

    //       //  this.BleDevices[key];
    //       //  this.BleDevices[key].id = value.id;
    //       //  this.BleDevices[key].used = value.used;
    //       //  this.BleDevices[key]['arp'] = value.arp;
    //       //  this.BleDevices[key]['powerstate'] = value.powerstate;
    //       //  this.BleDevices[key]['temp'] = value.temp;
    //       //  this.BleDevices[key]['hum'] = value.hum;
    //       //  this.BleDevices[key]['name'] = value.name;
    //       //  this.BleDevices[key]['batt'] = value.batt;
    //       //  console.log(this.BleDevices);
    //       //   });

    //      for (const prop in responseBody) {

    //      console.log(responseBody[prop].arp);

    //       this.BleDevices[prop]=[];
    //     this.BleDevices[prop].id= responseBody[prop].id;
    //     this.BleDevices[prop].name= responseBody[prop].name;

    //     //  this.BleDevices[prop].id = responseBody[prop].id.toString();
    //     //  this.BleDevices[prop].used = responseBody[prop].used.toString();
    //     }
    //     console.log(this.BleDevices);

    // //    this.BleDevices[0] = responseBody;

    // // console.log(this.BleDevices);

     //  });
  

  statusMqtt: boolean = false;
  enableMqtt() {
    console.log("MQQT SERVER ENABLED");
    this.statusMqtt = !this.statusMqtt;
  }

  statusBLE: boolean = true;
  enableScanBLE() {
    console.log("BLE SCAN ENABLED");
    this.statusBLE = !this.statusBLE;
  }

  taggleState() {}

  constructor(private BleScanService: BleScanService) {}


  mgAfterInit() {

    // const source = interval(10000);
    // const text = 'Your Text Here';
    // this.subscription = source.subscribe(val => console.log('sadasda'));
    // console.log('init done');

  }
  ngOnInit() {

     
    
  }

  // subscription: Subscription;


  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
