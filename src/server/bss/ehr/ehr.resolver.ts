import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {LabelInput} from '../../../shared/graphql/label.input'
import {CurrentUser} from "../../core/auth/decor/current-user"
import {UserDocument} from "../../core/users/user.schema"
import {EHR} from '../../../shared/graphql/ehr.model'
import {EHRsService} from './ehr.service'

@Resolver(() => EHR)
export class EHRsResolver {
    constructor(private ehrsService: EHRsService) {
    }

    @Query(() => EHR)
    async nextRecord() {
        return this.ehrsService.findOneWithoutLabel()
    }

    @Mutation(() => EHR, {nullable: true})
    async labelRecord(@Args('in') {ehr, label}: LabelInput, @CurrentUser() user: UserDocument) {
        if (ehr && label) {
            await this.ehrsService.labelRecord(ehr, label, user.id)
        }
        return this.ehrsService.findOneWithoutLabel()
    }
}
