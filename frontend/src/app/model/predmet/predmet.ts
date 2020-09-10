import { GodinaStudijeInfo } from '../godina-studije/godina-studije';
import { Ishod } from '../ishod/ishod';

export interface Predmet {
    id: number,
    naziv: string,
    espb: number,
    obavezan: number,
    brojPredavanja: number,
    brojVezbi: number,
    brojSemestara: number,
    drugiObliciNastave: number,
    istrazivackiRad: number,
    ostaliCasovi: number,
    godinaStudija: GodinaStudijeInfo,
    ishod: Ishod[],
}

export interface PredmetInfo {
    id: number,
    naziv: string,
    espb: number,
    obavezan: number,
}