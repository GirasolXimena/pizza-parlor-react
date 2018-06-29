export const styles = {
    nextButton: {
        backgroundColor: 'blue',
        float: 'right',
        marginTop: 20,
        marginRight: 50,
        '&:hover': {
            backgroundColor: 'blue',
            opacity: 0.8
        },
    },
    Link: {
        color: 'white',
        textDecorationLine: 'none'
    },
    title: {
        float: 'left',
        margin: 15
    },
    radioButton: {
        '&:hover':{
            color: 'blue'
        }
    },
    menu: {
        gridArea: '1/1/10/25'
    },
    cart: {
        gridArea: '1/26/10/441',
    },
    cartTotal: {
        float: 'right'
    },
    cartObject: {
        width: '100%',
        listStyleType: 'none',
        height: 75,
        float: 'left'
    },
    cartImage: {
        maxWidth: 100,
    },
    cartDescription: {
        lineHeight: 20,
        overflow: 'auto',
        width: 60,
    },
    deleteButton: {
        backgroundColor: 'red',
        float: 'right',
        marginTop: 20,
        marginRight: 50,
        '&:hover': {
            backgroundColor: 'red',
            opacity: 0.8
        },
    },
    cartItemCostCell: {
        width: '50px'
    },
    table: {
        minWidth: 200,
    },
    cartImageCell: {
        width: 100,
    },
    cartDescriptionCell: {
        lineHeight: 20,
        overflow: 'auto',
        width: 60,
    },
    deleteButtonCell: {
        
    },
    tableRow: {
        height: '80px'
    }
}