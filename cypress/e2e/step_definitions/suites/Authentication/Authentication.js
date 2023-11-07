import { authenticatedSuccesfullyTestCase } from "./Scenarios/TC-1.0-AuthenticatedSucess"
import { authenticatedFailedTestCase } from "./Scenarios/TC-1.1-AuthenticatedFailed"
import { resetPassword } from "./Scenarios/TC-1.2-ResetPassword"

context('AF-1-Login', ()=> {
    describe('Login: Datos validos (Exitoso) ',()=> {
        authenticatedSuccesfullyTestCase().testCaseAuthSuccess()
    })
    describe('Login: Datos validos Inválidos (Fallido) ',()=> {
        authenticatedFailedTestCase().executeTestCase()
    })
    describe('Validar el enlance para restablecer contraseña',() => resetPassword().executeTestCase() )
})
