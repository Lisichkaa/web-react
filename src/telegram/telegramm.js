const tg = window.Telegram.WebApp;

export function telegramUse() {

    const onClose = () => {
        tg.close()
    }

    const onSetName = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.setParams({
                text: `Купить`
        })
    }
}


    return {
        onClose,
        onSetName,
        tg,
        user: tg.initDataUnsafe.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
