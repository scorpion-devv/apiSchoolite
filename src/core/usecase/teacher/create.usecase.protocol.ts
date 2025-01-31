import { Nivel } from '../../entity/value-object/nivel-academico';
import { IGenre } from '../../entity/value-object/genre.value-object';
import { Name } from '../../entity/value-object/name.value-object';
export interface ICreateTeacher {
    handle:(parameters: {
        nome:Name,
        nascimento:Date, 
        genero:IGenre,
        nivelAcademico:Nivel,
        areaFormacao:string
    }) => Promise<void>;
}