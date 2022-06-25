# API-NOTES🖥📁✅

    
##  1. Descripción ✏ 
API que permite crear, obtener, eliminar y editar notas almacenadas en una base de datos relacional MySql.

##  2. Documentación 📝

###  2.3 Opciones 🔨

####  GET 💡

Se puede obtener todas las notas mediante el método GET.

####  GET:id 💡

Si se quiere obtener una nota en específica, se debe especificar el id y utilizar el método GET.

####  POST 💡

Si se quiere guardar un nota, el método POST permitirá almacenarlo.

La estructura del body debe tener la siguiente estructura:

```
{
    "id":0,
    "title": "PRUEBA TITLE",
    "description": "PRUEBA DESCRIPTION",
    "type":"PRUEBA TYPE"
}
```

####  UPDATE:id 💡

Si se quiere actualizar una nota en específica, se debe especificar el id y utilizar el método PUT.
La estructura del body debe tener la siguiente estructura:

```
{   
    "title": "TITLE ACTUALIZADA",
    "description": "DESCRIPTION ACTUALIZADA",
    "type":"TYPE ACTUALIZADA"
}
```

####   DELETE:id 💡

Si se quiere eliminar una nota en específica, se debe especificar el id y utilizar el método DELETE.

###  2.5 Tecnologías Utilizadas
- ✅ JavaScript
- ✅ Nodoe.js
- ✅ Express
- ✅ Heroku
- ✅ CleverdCloud
- ✅ Postman


### 3. Autor

- [Nicol Mendoza](https://github.com/nicolmendoza) <img src="https://cdn-icons-png.flaticon.com/512/2570/2570280.png" width=20px>
