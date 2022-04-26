0. Deploy en Heroku: https://app-desafio2-heroku.herokuapp.com/
1. Crear una cuenta en Heroku https://signup.heroku.com/
2. Siga los pasos que indique como verificación de email
3. Cuando cree su nueva cuenta.
4. Inicie sesión en https://id.heroku.com/login
5. Crear una aplicacion para esto nos dirigimos a https://dashboard.heroku.com/apps
6. Clic en el botón Create new app
7. Elegimos un nombre para nuestra App, luego damos clic en Create app
8. Crear base de datos en Heroku, para esto nos dirigimos a https://data.heroku.com/
9. Hacemos click sobre Create one en el card Heroku Postgres
10. En la siguiente página, debemos hacer clic en el botón "Install Heroku Postgres"
11. Ahora debemos indicar que aplicación utiliza nuestra nueva base de datos, para esto escribimos el nombre de la aplicación recién creada en el paso 7.
12. Confirmamos la acción dando clic en Submit Order Form
13. Damos clic en el siguiente botón "Heroku Postgres"
14. Damos clic en el Tab Settings
15. Luego clic en View Credentials…
16. Descargar los archivos del proyecto https://github.com/Sepjir/Desafio_ExpressHeroku
17. Procedemos a reemplazar las variables de ambiente del archivo .env con las variables de la página donde recién ingresamos
18. Vamos a insertar los datos con la siguiente herramienta https://dbeaver.io/
19. Descargamos la versión según nuestro Sistema Operativo
20. Abrimos la aplicación y presionamos en el boton "Nueva Conexion"
21. Seleccionamos el tipo de base de datos PostgresSQL y hacemos clic en el botón Next
22. Ingresamos las credenciales y damos clic en Test Connection.... Aparecerá un ventana de confirmacio, por ultimo, damos clic en Ok y luego Finish
23. Dando clic derecho sobre la base de datos, seleccionamos SQL Editor y luego clic
24. Copiamos el SQL solicitado en el desafio y presionamos el botón con el símbolo
25. Esto creará la base de datos y la tabla para Heroku.
26. Tengamos en consideración que los valores para la conexión que acabamos de utilizar no son permanentes ya que heroku los actualiza cada cierto tiempo.
27. Subimos el proyecto a Github y luego se sincroniza con Heroku en la pestaña de Deploy.
28. Finalmente de hace click en Deploy y luego view app.
