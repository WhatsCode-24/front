import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import TableComponent from '../../../components/tableComponent'

const PageUsersManagement = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-start">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <span className="clearfix d-flex flex-row align-items-center justify-content-between">
              <h6 className="float-start display-5 me-6">Usuários</h6>
              <CButton color="primary" className="float-end">
                Adicionar
              </CButton>
            </span>
            <TableComponent />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default PageUsersManagement
