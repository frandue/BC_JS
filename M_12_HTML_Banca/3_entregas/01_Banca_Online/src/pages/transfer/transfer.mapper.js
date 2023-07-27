export const mapTransferFromViewModelToApi = valueTransfer => { 
  return {
    accountId: valueTransfer.accountId,
    targetIban: valueTransfer.iban,
    receiver: valueTransfer.name,
    amount: valueTransfer.amount,
    concept: valueTransfer.concept,
    notes: valueTransfer.notes,
    date: new Date(`${valueTransfer.year}-${valueTransfer.month}-${valueTransfer.day}`),
    email: valueTransfer.email,
  };
};

