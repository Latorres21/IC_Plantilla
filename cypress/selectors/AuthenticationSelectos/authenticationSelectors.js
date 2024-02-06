export const authInputSelector = [
    '#username','#password'   
]


export const authButtonSelector = {
    authButton : 'INGRESAR'
}

export const validatePD = {
    byElementPD: '.InformacionPersonal_body__m6Hgz'
}

export const validateRedirectLogin = {
    url:'https://192.168.218.243:8444/ic_formpeda',
    byElement: '.MuiIconButton-edgeStart',
    byError: {
        popUp: '.swal2-popup',
        popUpLabel : {
            referenceId : '#swal2-title',
            messageError: 'Error'
        }
    }
}
export const resetPassword = {
    label: 'olvidado tu contraseña',
    redirectUrl: 'https://www.icesi.edu.co/pic_usuario_unico/newpass'
}
