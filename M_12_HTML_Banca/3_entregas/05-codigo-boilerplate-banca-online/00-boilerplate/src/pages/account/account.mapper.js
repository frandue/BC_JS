export const mapAccountFromApiToViewModel = account => {
    return {
        ...account,
        alias: account.name,
    };
};

//Necesitamos un mappeo a la inversa para devolver los datos de name a alias
export const mapAccountFromViewModelToApi = account => {
    return {
        ...account,
        name: account.alias,
    }
}