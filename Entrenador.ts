import { Persona } from "./Persona";
import { Futbolista } from "./Futbolista";

export class Entrenador extends Persona {
    private listaTitulares: Futbolista[];

    constructor(pNombre: string, pApellido: string, pEdad: number, pEstado: boolean, pListaTitulares: Futbolista[]) {
        super(pNombre, pApellido, pEdad, pEstado)
        this.listaTitulares = pListaTitulares;
    }

    titularizar(pJugador: Futbolista): void {
        this.listaTitulares.push(pJugador);
        console.log(pJugador, " quedo como titular en el equipo.");
    }

    sacarDeListaDeTitulares(pJugador: Futbolista): void {
        for (let i: number = 0; i < this.listaTitulares.length; i++) {
            if (pJugador.getApellido() === this.listaTitulares[i].getApellido()) {
                this.listaTitulares.splice(i, 1);
                console.log("El jugador ", pJugador.getNombre(), " ", pJugador.getApellido(), " quedo en lista de suplentes.");
            }
        }
    }

    descansar(): void {
        if (this.estado) {
            this.estado = false;
            console.log("el personal se encuentra en descanso")
        } else {
            this.estado = true;
            console.log("El personal se encuentra ejerciendo")
        }
    }
}
