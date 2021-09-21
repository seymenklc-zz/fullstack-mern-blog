export const refreshPage = (duration) => {
    setTimeout(() => {
        window.location.reload();
    }, duration);
}