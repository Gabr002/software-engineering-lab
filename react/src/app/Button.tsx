import { FunctionComponent, ReactNode } from "react";
interface ButtonProps {
    text: string;
    onClick?: () => void;
    children?: ReactNode; // Para quem não sabe nada sobre React com Typescript, isso é uma prop que pode receber qualquer coisa que seja um nó React (outro componente, texto, etc). children é uma prop especial em React que representa o conteúdo que fica entre as tags de abertura e fechamento do componente.
}

const Button: FunctionComponent<ButtonProps> = ({text, onClick}) => { // Para quem não sabe nada sobre React com Typescript, isso é uma função que recebe props e retorna um componente React.
    return (
        <div onClick={onClick}>{text}</div>
    )
}

export default Button;