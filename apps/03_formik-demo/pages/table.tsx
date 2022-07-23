import {
  Table,
  AddRowButton,
  RemoveRowButton,
  Form,
  Input,
  ResetButton,
  SubmitButton,
  Radio,
  FormItem,
} from 'formik-antd'
import { useFormik, FormikProvider, FormikTouched, FormikErrors } from 'formik'
import * as React from 'react'
import { Icon } from '@iconify/react'
import { Box, Flex } from 'rebass'
import { InsertItem, InsertTableProps } from './types'
import { Card } from 'antd'
import * as Yup from 'yup'

function getHelpBool(
  touched: FormikTouched<{
    tableData: InsertItem[]
  }>,
  errors: FormikErrors<{
    tableData: InsertItem[]
  }>,
  name: keyof InsertItem,
  i: number
) {
  const touch = touched.tableData?.[i]?.[name]
  const error = (errors.tableData?.[i] as InsertItem)?.[name]

  return touch && error ? error : ''
}
function getStatusBool(
  touched: FormikTouched<{
    tableData: InsertItem[]
  }>,
  errors: FormikErrors<{
    tableData: InsertItem[]
  }>,
  name: keyof InsertItem,
  i: number
) {
  const touch = touched.tableData?.[i]?.[name]
  const error = (errors.tableData?.[i] as InsertItem)?.[name]

  return touch && error ? 'error' : 'success'
}

export default function SampleTable({ initialValues, onSubmit }: InsertTableProps) {
  const schema = Yup.object().shape({
    tableData: Yup.array().of(
      Yup.object().shape({
        BlockNumber: Yup.string().required('BlockNumber is required'),
        PoolAddr: Yup.string()
          .required('PoolAddr is required')
          .test('address', 'PoolAddr format is not valid', (value) => {
            // TODO self valid function
            return true
          }),
        RegistryAddr: Yup.string().required('RegistryAddr is required'),
      })
    ),
  })

  const formik = useFormik<{
    tableData: InsertItem[]
  }>({
    enableReinitialize: true,
    initialValues: initialValues ?? {
      tableData: [{ BlockNumber: '', PoolAddr: '', RegistryAddr: '' }],
    },
    validationSchema: schema,
    onSubmit: onSubmit,
  })

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue, isValid, values } = formik

  return (
    <Box>
      <Card>
        <FormikProvider value={formik}>
          <Form>
            <Table
              name="tableData"
              rowKey={(row, index) => '' + index}
              style={{ width: '100%' }}
              size="small"
              pagination={false}
              columns={[
                {
                  width: 200,
                  title: '块号',
                  key: 'BlockNumber',
                  render: (text, record, i) => (
                    <FormItem
                      name={`tableData.${i}.BlockNumber`}
                      help={getHelpBool(touched, errors, 'BlockNumber', i)}
                      validateStatus={getStatusBool(touched, errors, 'BlockNumber', i)}
                    >
                      <Input
                        style={{ border: 'none' }}
                        name={`tableData.${i}.BlockNumber`}
                        placeholder="第一次添加流动性块号"
                      />
                    </FormItem>
                  ),
                },
                {
                  title: '池子地址',
                  key: 'PoolAddr',
                  render: (text, record, i) => (
                    <FormItem
                      name={`tableData.${i}.PoolAddr`}
                      help={getHelpBool(touched, errors, 'PoolAddr', i)}
                      validateStatus={getStatusBool(touched, errors, 'PoolAddr', i)}
                    >
                      <Input style={{ border: 'none' }} name={`tableData.${i}.PoolAddr`} />
                    </FormItem>
                  ),
                },
                {
                  title: '注册表类型',
                  key: 'RegistryAddr',
                  render: (text, record, i) => (
                    <FormItem
                      name={`tableData.${i}.RegistryAddr`}
                      help={getHelpBool(touched, errors, 'RegistryAddr', i)}
                      validateStatus={getStatusBool(touched, errors, 'RegistryAddr', i)}
                    >
                      <Radio.Group name={`tableData.${i}.RegistryAddr`} size="middle">
                        <Radio.Button value={1}>加密</Radio.Button>
                        <Radio.Button value={2}>非加密</Radio.Button>
                      </Radio.Group>
                    </FormItem>
                  ),
                },
                {
                  width: 32,
                  key: 'actions',
                  align: 'right',
                  render: (record, index) => (
                    <RemoveRowButton
                      style={{ border: 'none' }}
                      icon={<Icon icon="bx:trash-alt" />}
                      name="tableData"
                      index={index}
                    />
                  ),
                },
              ]}
            />

            <Box mt={['8px']}>
              <AddRowButton
                name="tableData"
                style={{ border: 'none', boxShadow: 'none' }}
                createNewRow={() => ({
                  name: '',
                  description: '',
                })}
              >
                <Icon icon="ant-design:plus-circle-outlined" />
              </AddRowButton>
            </Box>

            <Flex style={{ justifyContent: 'center' }}>
              <Box>
                <Flex>
                  <ResetButton>重置</ResetButton>
                  <SubmitButton>提交</SubmitButton>
                </Flex>
              </Box>
            </Flex>
          </Form>
        </FormikProvider>
      </Card>
    </Box>
  )
}
