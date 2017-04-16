/**
 * Created by gotzverdieck on 14.04.17.
 */
import {NgModule} from '@angular/core'
import {UserComponent} from "./user.component";
import {CommonModule} from '@angular/common'


@NgModule ( {
    imports: [CommonModule],  /*Damit man angular directiven wie  NgIf,  NgSwitch etc. verwenden kann*/
    declarations: [UserComponent],
    exports: [UserComponent]
})
export class UserModule {}
