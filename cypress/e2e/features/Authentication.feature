Feature: 1-Authentication
  Scenario: Login: Datos validos (Exitoso)
    Given El usuario se encuentra en la pagina de login exitoso
    When Ingresar un usuario y contraseña valido.
    And Al hacer click en iniciar sesion.
    Then que se direccione a la pagina principal
  Scenario: Login: Datos validos Inválidos (Fallido)
    Given El usuario se encuentra en la pagina de login fallido
    When Ingresar un usuario y contraseña invalida o vacia.
    And Al hacer click en iniciar sesion fallido.
    Then Se espera que cargue una alerta o mensaje indicacando que no fue posible iniciar sesion debido a las crendenciales invalidas.
  Scenario: Validar el enlance para restablecer contraseña
    Given Un usuario esta en login y requiere restablecer contraseña
    When Cuando le da en el boton de restablecer contraseña
    Then Que se redireccione a la pagina para realizarlo

