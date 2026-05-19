import { Component, inject, signal } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { User } from '../../../types/user';
import { Member } from '../../../types/member';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MemberCard } from "../member-card/member-card";

@Component({
  selector: 'app-member-list',
  imports: [AsyncPipe, MemberCard],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList {

  private memberService = inject(MemberService)
  //protected members = signal<Member[]>([])
  protected members$: Observable<Member[]>;

  // ngOnInit(){
  //   this.memberService.getMembers().subscribe({
  //     next: members => this.members.set(members),

  //     error: error => console.log(error)
  //   })
  // }

  constructor(){
    this.members$ = this.memberService.getMembers()
  }

}
