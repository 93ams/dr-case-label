import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {LabelInput} from '../../../shared/graphql/label.input'
import {CurrentUser} from "../../core/auth/decor/current-user"
import {UserDocument} from "../../core/users/user.schema"
import {GqlAuthGuard} from "../../core/auth/guard/gql"
import {EHR} from '../../../shared/graphql/ehr.model'
import {EHRsService} from './ehr.service'
import {UseGuards} from "@nestjs/common"

@Resolver(() => EHR)
export class EHRsResolver {
    constructor(private ehrsService: EHRsService) {
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => EHR)
    async nextRecord() {
        return this.ehrsService.findOneWithoutLabel()
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => EHR, {nullable: true})
    async labelRecord(@CurrentUser() user: UserDocument, @Args('in') {ehr, label}: LabelInput) {
        if (ehr && label) {
            await this.ehrsService.labelRecord(ehr, label, user.id)
        }
        return this.ehrsService.findOneWithoutLabel()
    }
}
