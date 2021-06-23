import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddPostComponent implements OnInit {
  likes = 0;
  dislikes = 0;
  time = "less than one minute"

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
  isVisible = false;
  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  open() {
    console.log("open")
  }
  ngOnInit(): void {
    console.log("on starting component")
  }






  submit() {

  }
  inputValue?: string;


}


