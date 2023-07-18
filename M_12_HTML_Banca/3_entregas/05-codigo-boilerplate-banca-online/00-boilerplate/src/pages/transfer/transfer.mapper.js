export const mapAccountFromApiToViewModel = account => {
    return {
        ...account,
        name: account.select-account,
    };
};