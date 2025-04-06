import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const httpErrorHandler = ({
    err,
    errorKeys,
    setFieldErrors,
    onCustomError,
}) => {

    onCustomError?.()

    const errorCases = {
        400: () => handleBadRequest(err, errorKeys, setFieldErrors),
        403: () => showErrorToast('Unauthorised: Permission denied'),
        404: () => showErrorToast('Requested resource not found'),
        500: () => showErrorToast('Internal server error'),
        default: () => showErrorToast('Something went wrong'),
    }

    const handleCustomError = errorCases[err?.status] || errorCases.default
    handleCustomError()
}

const handleBadRequest = (err, errorKeys, setFieldErrors) => {
    errorKeys?.forEach(key => {
        const firstError = err?.data?.[key]?.[0]
        if (firstError) {
            setFieldErrors?.[key](firstError)
        }
    })
}

export const showErrorToast = (errorMessage) => {
    toast.error(`${errorMessage}`, {
        position: "top-right"
    })
}

export const showSuccessToast = (successMessage) => {
    toast.success(`${successMessage}`, {
        position: "top-right"
    })
}

