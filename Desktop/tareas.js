let nombreUsuario = prompt('Ingresa tu nombre');
while(nombreUsuario==''){
   alert('Nombre invalido');
   nombreUsuario = prompt('Ingresa tu nombre');
}
alert('Bienvenido/a '+nombreUsuario);

let total = 0;
let mensaje = prompt(nombreUsuario+' deseas comprar un producto? (s-si / n-no)');
while(mensaje == 's' || mensaje=='S'){
    let producto = prompt('1-Teclado gamer Logitech\n2-Mouse Genius usb\n3-Monitor LG\n4-Auriculares Sony\n5-Parlante bluetooth');
    switch(producto){
        case '1':
            alert('Agregaste Teclado gamer Logitech al carro ... $ 6000');
            incrementarTotal(6000);
            break;
        case '2':
            alert('Agregaste Mouse Genius al carro ... $ 3000');
            incrementarTotal(3000);
            break;
        case '3':
            alert('Agregaste Monitor LG al carro ... $ 33000');
            incrementarTotal(33000);
            break;   
        case '4':
            alert('Agregaste Auriculares Sony al carro ... $ 13000');
            incrementarTotal(13000);
            break; 
        case '5':
            alert('Agregaste Parlante bluetooth JBL al carro ... $ 29000');
            incrementarTotal(29000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
    mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
}

alert('Total de la compra $'+total);

function incrementarTotal(precio){
    total = total + precio;
    alert('Llevas gastado $'+total);
}
