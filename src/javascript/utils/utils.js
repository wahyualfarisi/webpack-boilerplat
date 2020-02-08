export const mainController = ( () => {
    const EventListener = () => {

        document.querySelector('.clickme').addEventListener('click', function() {
            alert('Hai Everyone ! ..')
        })

    }

    return {
        init(){
            EventListener()
            console.log('app is running')
        }
    }
})()

