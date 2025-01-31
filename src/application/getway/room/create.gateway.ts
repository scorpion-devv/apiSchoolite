import { Acronym } from "../../../core/entity/value-object/acronym.value-object";
import { Description } from "../../../core/entity/value-object/description.value-object";

export interface ICreateRoomGateway{
    handle(parameters:{description: Description, acronym: Acronym, capacity: number}):Promise<void>
}
