export const useCookie = (key) => {
    const cookie = document.cookie
        ?.split('; ')
        ?.find(row => row.startsWith(`${key}=`))
        ?.split('=')[1];

    return { cookie };
};