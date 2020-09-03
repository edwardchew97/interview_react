
export default function usePasswordValidation(password){
    const pattern = RegExp('(?=.*[A-Z])(?=.*[0-9]).{12,}')

    if (!password) return null
    else if (!pattern.test(password))
        return 'Password needs to have at least one capital letter and 1 digit'

    return null
}