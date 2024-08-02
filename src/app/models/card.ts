/**
 * MODELO = PANTILLA que representa un tipo de OBJETO, compartiendo caracteristicas generales y
 * similares.
 * 
 * INSTANCIAS = copia de la CLASE o MODELO del objeto, que tenia definido sus proias caracteristicas
 * 
 * EJ: persona -> trabajador, estudiante, veterinario.
 * EJ: animal -> perro, gato, caballo.
 * 
 * INTERFACES (concepto del  lenguaje typeScript) =  MODELO / CLASE 
 * (concepto de programacion orientada a objetos)
 */
export interface Card {
    idCard: string; //alfanumerico, numerico , booleano
    titulo: string;
    descripcion: string;
    imagen: string;
    alt: string;

}
