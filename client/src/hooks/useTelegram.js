const tg = window.Telegram.WebApp;

function useTelegram() {

    return {
        tg, user: tg.initDataUnsafe.user,
    }
}

export default useTelegram;
