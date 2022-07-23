import { FormikHelpers } from 'formik'

export interface InsertItem {
  BlockNumber: string
  PoolAddr: string
  RegistryAddr: string
}

export interface InsertItemApi {
  BlockNumber: number
  PoolAddr: string
  RegistryAddr: string
}

export enum InsertStatus {
  UNKNOWN,
  PENDING,
  SUCCESS,
  FAILED,
}

export interface TableInsertValues {
  tableData: InsertItem[]
}

export interface InsertTableProps {
  onSubmit: (values: TableInsertValues, formikHelpers: FormikHelpers<TableInsertValues>) => void
  initialValues?: TableInsertValues
}
