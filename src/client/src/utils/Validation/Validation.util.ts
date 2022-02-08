import * as yup from 'yup';

export const Validation = {
    userName: (message: string) => yup.string().required(message),
    phone: (messageRequired: string, messageLength: string) =>
        yup.string().required(messageRequired) &&
        yup.string().length(18, messageLength),
    email: (message: string) => yup.string().required(message),
};
