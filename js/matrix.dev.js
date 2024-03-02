//Crearemos una constante que almacene el canvas para tener donde pintar
const canvas = document.querySelector('#canvas');
//Contexto del canvas
const ctx = canvas.getContext('2d');
//Como el canvas necesita dimensiones, nosotros se las daremos
const w = document.body.clientWidth;
const h = document.body.clientHeight;
canvas.width = w;
canvas.height = h;
//Se creara una position que nos dara los espacios para que nos de las letras de nuestra matrix
const position = Array(300).join(0).split('');
//Array con 300 elementos que los unira cada uno con un 0 y los separara con un espacio
//Crearemos el metodo para rellenar nuestro lienzo.
const initMatrix = () => {
    //Necesitamos un pincel, que se puede obtener mediante el contexto del canvas
    //Inicializamos el contexto del canvas, para pasarle el relleno del documento
    ctx.fillStyle = 'rgba(0, 15, 2, 0.15)';
    //Para reflejar los cambios seria por medio del contexto, se dibuja un rectangulo 
    ctx.fillRect(0, 0, w, h);
    //Crearemos un nuevo fillStyle para ejecutar otro color
    ctx.fillStyle = '#00FF00';
    //Ahora se trabajaran con las letras
    ctx.font = '11pt'; //Cambiamos el tamaño de la fuente
    //Aca es donde entra en juego el position
    position.map((value, index) => {
        //Constante de ser la encargada de generar los caracteres
        //Se le pasa una expresion del tipo de caracter que se va a utilizar
        const text = String.fromCharCode(1e3 + Math.random() * 30);
        //Se le pasa la posicion de x y y
        const x = index * 15 + 15;
        //Ahora se trabajara con el objeto canvas. Para ello 
        // se creara un nuevo canvas.
        //Se le pasa el texto, la posicion x y el eje y
        canvas.getContext('2d').fillText(text, x, value);
        /**
         * Como se pudo observar, dichas letras carecen de animacion, 
         * ya que se quedan fijas en un solo lugar, por lo que, se debera
         * hacer lo siguiente. Se tiene que, cada vez que se ejecute la funcion
         * initMatrix, se debera cambiar la posicion de las letras, para que
         * parezca que se estan moviendo.
         * Para ello, se creara una nueva linea, o se baja la que ya esta creada.
         */
        value > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = value + 15;
    })

}

setInterval(initMatrix, 50); //Se ejecutara cada 50 milisegundos