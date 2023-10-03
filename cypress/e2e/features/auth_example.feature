Feature: TemplateTestingCypressCucumber
  Scenario: Iniciar sesion IC
    When Se ingresa a IC
    Then Desplegar el formulario de inicio de sesion.
  Scenario: Iniciar sesion IC Error
    When Se ingresa a IC Error.
    Then Desplegar el formulario de inicio de sesion Error.


