import { Component, inject, signal } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { User } from '../../../types/user';

@Component({
  selector: 'app-member-list',
  imports: [],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList {

  private memberService = inject(MemberService)
  protected members = signal<User[]>([])

  ngOnInit(){
    this.memberService.getMembers().subscribe({
      next: members => this.members.set(members),

      error: error => console.log(error)
    })
  }

}
