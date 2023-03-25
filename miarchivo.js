let nombreUsuario = prompt('¡Bienvenido! Ingresa tu nombre para continuar');
while (nombreUsuario == '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}

alert(nombreUsuario + ', gracias por elegirnos!');

let Total = 0;
function sumarTotal(precio) {
    Total += precio;
}
let mensaje = prompt(nombreUsuario + ' quieres comprar un rico sushi?');
while (mensaje.toLowerCase() === 'si') {
    let producto = prompt('1-Kanikama Roll\n2-Caribean Roll\n3-Maki Roll\n4-Gyosas Pollo\n5-Gyosas Carne\n6-Gyosas Cerdo\n7-Coca-Cola\n8-Sprite');
    switch (producto) {
        case '1':
            alert('Agregaste Kanikama Roll... 10.990$');
            sumarTotal(10990);
            break;
        case '2':
            alert('Agregaste Caribean Roll... 15.990$');
            sumarTotal(15990);
            break;
        case '3':
            alert('Agregaste Maki Roll... 12.990$');
            sumarTotal(12990);
            break;
        case '4':
            alert('Agregaste Gyosas Pollo... 7.990$');
            sumarTotal(7990);
            break;
        case '5':
            alert('Agregaste Gyosas Carne... 7.990$');
            sumarTotal(7990);
            break;        
        case '6':
            alert('Agregaste Gyosas Cerdo... 8.990$');
            sumarTotal(8990);
            break;
        case '7':
            alert('Agregaste Coca-Cola... 2.500$');
            sumarTotal(2500);
            break;
        case '8':
             alert('Agregaste Sprite... 2.500$');
            sumarTotal(2500);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }    
    mensaje = prompt('¿Deseas comprar algún otro producto?');
    if (mensaje.toLowerCase() === 'no') {
        break;
    }
}

alert(`Total en el carrito: $${Total}`);
alert('Muchas gracias ' + nombreUsuario + ' por tu compra. En instantes nos pondremos en contacto para finalizar tu pedido.');

