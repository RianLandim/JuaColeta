import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty({ message: 'Email é obrigatorio' })
  @IsString({ message: 'Email precisa ser do tipo string' })
  @IsEmail(undefined, { message: 'Digite um email valido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatoria' })
  @IsString({ message: 'Senha precisa ser do tipo string' })
  @MinLength(8, { message: 'A senha deve conter no minimo 8 caracteres' })
  password: string;
}
