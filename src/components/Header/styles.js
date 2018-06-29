export const styles = {
    header: {
        backgroundColor: '#07349D',
        height: 100,
    },
    cartContainer: {
        position: 'fixed',
        right: 50,
        top: 45,
        display: 'inline-block'
    },
    projectTitle: {
        position: 'fixed',
        left: 10,
        top: 15,
        display: 'inline-block',
        color: 'white'
    },
    cartLogo: {
        display: 'inline',
        color: 'white',
        '&:hover':{
            position: 'relative',
            color: 'lightBlue',
            animationName: 'logoMove',
            animationDuration: '1s'
        }
    },
    closeButton: {
        backgroundColor: 'white',
        color: 'red',
        display: 'inline',
        position: 'fixed',
        top: 10,
        right: 0
    },
    cartImage: {
        maxWidth: 100,
        display: 'inline'
    },
    cartDescription: {
        margin: 15,
        display: 'inline',
        position: 'relative',
        bottom: 27
    },
    cartItemCost: {
        display: 'inline',
        float: 'right'
    },
    cartTotal: {
        float: 'right'
    },
    cartObject: {
        margin: 20
    },
    homeLink: {
        color: 'white',
        textDecorationLine: 'none',
        backgroundColor: '#07349D',
        '&:hover':{
            color: 'lightBlue',
            position: 'relative',
            animationName: 'logoMove',
            animationDuration: '1s'
        }
    }
}