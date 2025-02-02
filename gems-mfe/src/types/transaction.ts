export const TRANSACTION_COLUMNS = [
  { key: 'created_at', label: 'Date' },
  { key: 'type', label: 'Type' },
  { key: 'amount', label: 'Amount' },
  { key: 'currency', label: 'Currency' },
  { key: 'chain', label: 'Chain' },
  { key: 'from_address', label: 'From' },
  { key: 'note', label: 'Note' },
] as const

export type TransactionColumn = (typeof TRANSACTION_COLUMNS)[number]
