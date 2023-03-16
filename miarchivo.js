
let nombreUsuario = prompt('Ingresa tu nombre');
const usuarioComprador = nombreUsuario;

if (nombreUsuario == usuarioComprador){
    alert  ('Bienvenido '+ nombreUsuario + '... ¡Te estabamos esperando!');
}

let mensaje = prompt('Deseas comprarte un rico sushi?');
while(mensaje == 'si' || mensaje=='SI' || mensaje=='Si'){
    let producto = prompt('1-Kanikama Roll\n2-Caribbean Roll\n3-Maki Roll');
    if(producto == '1'){
        alert('Kanikama Roll... $ 10.990  AGREGADO AL CARRO!');
    }else if(producto == '2'){
        alert('Caribbean Roll... $ 10.990  AGREGADO AL CARRO!');
    }else if(producto == '3'){
        alert('Maki Roll... $ 10.990  AGREGADO AL CARRO!');
    }else{
        alert('Codigo de producto inexistente')}
    mensaje = prompt('Desea comprar otro producto?');
}
