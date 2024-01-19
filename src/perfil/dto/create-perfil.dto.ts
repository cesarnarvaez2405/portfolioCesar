import { IsNotEmpty, IsString } from "class-validator";

export class CreatePerfilDto {

    @IsNotEmpty()
    @IsString()
    titulo: string

    @IsNotEmpty()
    descripcion: string

    @IsString()
    @IsNotEmpty()
    foto: string
}
