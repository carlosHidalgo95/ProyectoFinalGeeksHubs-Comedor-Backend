



# Comedor Oficina
## Autor

- [Carlos Hidalgo](https://github.com/carlosHidalgo95)

## Descripción del proyecto

El proyecto se basa en una prueba técnica en la que se requiere una aplicación web para realizar
reservas en el comedor de una oficina en franjas de 15 minutos para evitar aglomeraciones.
Los requisitos funcionales son:

- Los usuarios pueden registrarse en la aplicación

- Los usuarios pueden autenticarse a través de un login

- Los usuarios pueden ver la lista de platos y filtrarlos

- Los usuarios pueden añadir platos a su reserva

- Los usuarios pueden realizar una reserva

- Los usuarios pueden hacer logout

- Los administradores pueden hacer login

- Los administradores pueden filtrar,modificar,crear y borrar platos

- Los administradores pueden subir imagenes de los platos

- Los administradores pueden consultar las reservas de los usuarios y filtrarlas.

- Los administradores pueden hacer logout

Este proyecto se encargará de gestionar el back la parte frontal se encuentra en el siguiente enlace:

[ProyectoFinalGeeksHubsFrontend](https://github.com/carlosHidalgo95/ProyectoFinalGeeksHubsFrontend)

## Diagrama Entidad Relación

## Listado de endpoints

### Auth
**POST /auth/register**

Recibe email y contraseña a través del body y crea un usuario si el email no está ya registrado hasheando la contraseña.

Ejemplo de body:

{
  "email":"testing@email",
  "password":"contraseña"
}

**POST /auth/login**

Recibe email y contraseña a través del body,busca un usuario con ese correo y si lo encuentra hashea la contraseña y la compara con la de la base de datos,en caso de ser correcta,crea y devuelve un json web token.
Para que algunos endpoints funcionen necesitaremos estar logeados,para ello cogemos el token que nos devuelve el endpoint de login y lo ponemos en la cabecera "Authorization" de las peticiones de la siguiente forma:

![tempsnip](https://user-images.githubusercontent.com/50781684/200200244-c177a43b-6ab5-42b5-ba2a-37527b47e9b3.png)

Ejemplo de body:

{
  "email":"prueba@test.com",
  "password":"Contraseña1"
}

### Bookings

**GET /bookings/get**

Recupera todas las reservas del usuario activo, necesitas estar logeado ya que el id del usuario está guardado en el jsson web token.

**GET /bookings/getAll**

Recupera todas las reservas de todos los usuarios

**GET /bookings/getTimes**

Recupera las horas libres

**POST /bookings/create**

Recibe los parametros por el body y crea una reserva con la fecha,la hora y los platos elegidos.

Ejemplo de body:

    {
    booking_date: '2022-20-01',
    time: '14:15',
    entrante_id:1,
    primero_id:4,
    segundo_id:7
    postre_id:9
    }

**DELETE /bookings/delete**

Recibe un id de reserva y la borra
