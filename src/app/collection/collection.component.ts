import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { ModalService } from '../modal.service';
import { Detailledinfo } from '../models/detailledinfo';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  private result: any;

  albumNumber: 0;
  detailled_info: Detailledinfo;  

  constructor(private collSvc: CollectionService, private ModalSvc: ModalService) {}

  ngOnInit() {
    this.detailled_info = new Detailledinfo();
    //Get all the collection info with the CollectionService
    this.collSvc.getCollectionInfo().subscribe(data => {
      this.result = data.results;
      this.albumNumber = data.results.length;
    },
    err => alert("Impossible d'acceder à la collection; error status:"+err.status)
    );
  }

  //action when user click on one album
  openDetailledCollection(event,idModal: string) {
    this.detailled_info = new Detailledinfo(); //Re-init detailled info object
    let infoObj = this.result[parseInt(event.target.id)];//get info of the selected album
    if(infoObj !== undefined){
      for (var key in infoObj) {
          this.detailled_info[key] = infoObj[key];
      }
      this.ModalSvc.open(idModal);//open modal
    } else {
      alert("Les informations sur l'album demandé sont indisponibles");
    }
  }

  closeDetailledCollection(id: string) {
    this.ModalSvc.close(id);
  }

}
