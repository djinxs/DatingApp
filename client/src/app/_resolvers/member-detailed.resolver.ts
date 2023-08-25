import { Injectable, inject } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';

export const MemberDetailedResolver: ResolveFn<Member> = (route, state) => {

  const memberService = inject(MembersService);

  return memberService.getMember(route.paramMap.get('username')!)
}
