export const mapMovementListFromApiToViewModel = movementList => {
    return movementList.map(movements => mapMovementFromApiToViewModel(movements));
};

//API -> Application Programming Interface
const mapMovementFromApiToViewModel = movements => {
    return {
            description: movements.description,
            amount: `${movements.amount} €`,
            balance: `${movements.balance} €`,
            transaction: new Date(movements.transaction).toLocaleDateString(),
            realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
            Id: movements.accountId,
    };
};


//Datos  del entorno de la pagina
export const mapAccountFromApiToViewModel = account => ({
    ...account,
    alias: account.name,
    balance: `${account.balance} €`,
});